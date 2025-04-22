
import httpx
import asyncio
import json
from pydantic import BaseModel
from typing import List, Dict, Any, Optional

# API URL - change this to your actual backend URL when deployed
API_URL = "http://localhost:8000"

async def create_note(content: str, user_id: str) -> Dict[str, Any]:
    """Create a new note and get AI processing result."""
    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"{API_URL}/notes/",
            json={"content": content, "user_id": user_id}
        )
        response.raise_for_status()
        return response.json()

async def get_chat_messages(user_id: str) -> List[Dict[str, Any]]:
    """Get all chat messages for a user."""
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{API_URL}/chat_messages/{user_id}")
        response.raise_for_status()
        return response.json()

async def main():
    # Example user ID - replace with an actual user ID from your system
    user_id = "user_123"
    
    # Example note content
    note_content = "I've been feeling quite stressed about work lately. Any advice?"
    
    print(f"Creating note with content: {note_content}")
    result = await create_note(note_content, user_id)
    print(f"Note created and processed with AI:")
    print(json.dumps(result, indent=2))
    
    print("\nFetching all chat messages for the user:")
    messages = await get_chat_messages(user_id)
    print(json.dumps(messages, indent=2))

if __name__ == "__main__":
    asyncio.run(main())
