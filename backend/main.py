from fastapi import FastAPI, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any, Optional, Literal
import httpx
import os
from supabase import create_client, Client
import uuid
from datetime import datetime
from dotenv import load_dotenv
import uuid

load_dotenv()

app = FastAPI(title="Notes AI Processing API")

# Add CORS middleware with more specific settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)


# Supabase client initialization
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")
AI_API_URL = "https://abbasmithaiwala--astralis-web-app.modal.run/chat"

def get_supabase() -> Client:
    if not SUPABASE_URL or not SUPABASE_KEY:
        raise HTTPException(status_code=500, detail="Supabase credentials not configured")
    return create_client(SUPABASE_URL, SUPABASE_KEY)

# Models reflecting the database schema
class NoteCreate(BaseModel):
    id: Optional[uuid.UUID] = None
    user_id: str
    title: Optional[str] = None
    content: str
    color: Optional[str] = None
    isPinned: Optional[bool] = False
    isArchived: Optional[bool] = False
    isTrashed: Optional[bool] = False
    createdAt: Optional[str] = None
    updatedAt: Optional[str] = None

class ChatMessage(BaseModel):
    id: uuid.UUID
    user_id: uuid.UUID
    message: str
    msg_type: Literal["user_msg", "ai_response", "user_note"]
    is_processed: bool = False
    created_at: Optional[str] = None
    request_id: Optional[int] = None
    reply_to_msg_id: Optional[uuid.UUID] = None

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    message_id: str
    conversation_history: List[Message] = []

class ChatMessageRequest(BaseModel):
    message: str
    msg_type: Literal["user_msg", "ai_response", "user_note"]
    user_id: uuid.UUID

@app.post("/notes/", status_code=201)
async def create_note(note: NoteCreate, supabase: Client = Depends(get_supabase)):
    """
    Create a new note, store it in Supabase, process with AI, and store the AI response
    """
    try:
        # 1. Store the note in the notes table
        note_data = {
            "id": str(uuid.uuid4()),
            "user_id": note.user_id,
            "title": note.title or "",
            "content": note.content,
            "color": note.color or "",
            "is_pinned": False,
            "is_archived": False,
            "is_trashed": False,
            "created_at": datetime.now().isoformat(),
            "updated_at": datetime.now().isoformat()
        }
        
        note_result = supabase.table("notes").insert(note_data).execute()
        if not note_result.data:
            raise HTTPException(status_code=500, detail="Failed to create note")
        
        created_note = note_result.data[0]
        
        # 2. Generate a message ID for the AI request
        ai_request_id = str(uuid.uuid4())
        
        # 3. Call the AI API with the note content
        chat_request = {
            "message": note.content,
            "message_id": ai_request_id,
            "conversation_history": [{"role": "user", "content": note.content}]
        }
        
        async with httpx.AsyncClient(timeout=30.0) as client:  # Increased timeout
            try:
                ai_response = await client.post(
                    AI_API_URL,
                    json=chat_request,
                    headers={"Content-Type": "application/json"}
                )
                ai_response.raise_for_status()  # Raise exception for non-200 responses
                ai_data = ai_response.json()
            except httpx.HTTPError as e:
                raise HTTPException(status_code=500, detail=f"AI service communication error: {str(e)}")
        
        # 4. Store the AI response in chat_messages table
        chat_message_data = {
            "id": str(uuid.uuid4()),
            "user_id": note.user_id,
            "message": ai_data.get("response", "No response from AI"),
            "msg_type": "ai_response",
            "is_processed": True,
            "created_at": datetime.now().isoformat(),
            "reply_to_msg_id": ai_request_id,
            "request_id": ai_request_id,  # Store the request ID for reference
        }
        
        chat_result = supabase.table("chat_messages").insert(chat_message_data).execute()
        if not chat_result.data:
            raise HTTPException(status_code=500, detail="Failed to store AI response")
        
        ai_message = chat_result.data[0]
        
        return {
            "success": True,
            "note": created_note,
            "ai_response": ai_message
        }
    except httpx.RequestError as e:
        raise HTTPException(status_code=503, detail=f"Error communicating with AI service: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

@app.get("/notes/{user_id}", response_model=List[Dict[str, Any]])
async def get_notes(user_id: str, supabase: Client = Depends(get_supabase)):
    """Get all notes for a user."""
    try:
        result = supabase.table("notes").select("*").eq("user_id", user_id).order("created_at", desc=True).execute()
        return result.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch notes: {str(e)}")

@app.get("/chat_messages/{user_id}", response_model=List[Dict[str, Any]])
async def get_chat_messages(
    user_id: str, 
    limit: int = 50,
    supabase: Client = Depends(get_supabase)
):
    """Get chat messages for a user with pagination."""
    try:
        result = supabase.table("chat_messages")\
            .select("*")\
            .eq("user_id", user_id)\
            .order("created_at")\
            .limit(limit)\
            .execute()
        
        return result.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch messages: {str(e)}")

@app.post("/chat_messages/mark_processed/{message_id}")
async def mark_message_processed(
    message_id: str, 
    supabase: Client = Depends(get_supabase)
):
    """Mark a chat message as processed."""
    try:
        result = supabase.table("chat_messages")\
            .update({"is_processed": True})\
            .eq("id", message_id)\
            .execute()
            
        if not result.data:
            raise HTTPException(status_code=404, detail=f"Message with ID {message_id} not found")
        
        return {"status": "success", "message": "Message marked as processed"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update message: {str(e)}")

@app.post("/chat/{user_id}")
async def send_chat_message(
    user_id: str,
    chat_request: ChatMessageRequest,
    supabase: Client = Depends(get_supabase)
):
    """Send a chat message to the AI and store both the message and response."""
    if not chat_request.message:
        raise HTTPException(status_code=400, detail="Message content is required")
    
    try:
        # 1. Generate a unique ID for this message
        message_id = str(uuid.uuid4())
        
        # 2. Store the user's message in chat_messages
        user_message_data = {
            "user_id": user_id,
            "message": chat_request.message,
            "msg_type": chat_request.msg_type,
            "is_processed": False,
            "created_at": datetime.now().isoformat(),
            "request_id": message_id
        }
        
        user_msg_result = supabase.table("chat_messages").insert(user_message_data).execute()
        if not user_msg_result.data:
            raise HTTPException(status_code=500, detail="Failed to store user message")
        
        stored_user_message = user_msg_result.data[0]
        
        # 3. Get conversation history (last 10 messages)
        history_result = supabase.table("chat_messages")\
            .select("*")\
            .eq("user_id", user_id)\
            .order("created_at", desc=True)\
            .limit(10)\
            .execute()
            
        conversation_history = []
        for msg in reversed(history_result.data):
            role = "assistant" if msg["msg_type"] == "ai_response" else "user"
            conversation_history.append({"role": role, "content": msg["message"]})
        
        # 4. Call AI API
        chat_request_data = {
            "message": chat_request.message,
            "message_id": message_id,
            "conversation_history": conversation_history
        }
        
        async with httpx.AsyncClient(timeout=30.0) as client:
            ai_response = await client.post(
                AI_API_URL,
                json=chat_request_data,
                headers={"Content-Type": "application/json"}
            )
            ai_response.raise_for_status()
            ai_data = ai_response.json()
        
        # 5. Store the AI response
        ai_message_data = {
            "user_id": user_id,
            "message": ai_data.get("response", "No response from AI"),
            "msg_type": "ai_response",
            "is_processed": True,
            "created_at": datetime.now().isoformat(),
            "reply_to_msg_id": message_id,
            "request_id": message_id
        }
        
        ai_msg_result = supabase.table("chat_messages").insert(ai_message_data).execute()
        if not ai_msg_result.data:
            raise HTTPException(status_code=500, detail="Failed to store AI response")
        
        stored_ai_message = ai_msg_result.data[0]
        
        return {
            "success": True,
            "user_message": stored_user_message,
            "ai_response": stored_ai_message
        }
        
    except httpx.HTTPError as e:
        raise HTTPException(status_code=503, detail=f"AI service communication error: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

@app.get("/health")
async def health_check():
    """Health check endpoint to verify the API is running."""
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)