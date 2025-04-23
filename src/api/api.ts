import axios from "axios";

const API_BASE = "http://localhost:8000"; // <-- update if deployed

// Replace with however you manage auth/user state
const USER_ID = "48704f6b-786e-484b-ab73-afd984e1cae5";

export interface NoteCreateDTO {
  user_id: string;
  title?: string;
  content: string;
  color?: string;
  isPinned?: boolean;
  isArchived?: boolean;
  isTrashed?: boolean;
}

export interface NoteWithAIResponse {
  note: {
    id: string;
    user_id: string;
    title?: string;
    content: string;
    color?: string;
    isPinned?: boolean;
    isArchived?: boolean;
    isTrashed?: boolean;
    created_at: string;
    updated_at: string;
  };
  ai_response?: {
    id: string;
    message: string;
    created_at: string;
  };
}

export const createNote = async (note: NoteCreateDTO): Promise<NoteWithAIResponse> => {
  const res = await axios.post(`${API_BASE}/notes/`, note);
  return res.data;
};

export const fetchNotes = async (userId: string) => {
  const res = await axios.get(`${API_BASE}/notes/${userId}`);
  return res.data;
};

export const fetchChatMessages = async (userId: string) => {
  const res = await axios.get(`${API_BASE}/chat_messages/${userId}`);
  return res.data;
};

export const sendChatMessage = async (userId: string, {
  message,
  msg_type = "user_msg", // can be "user_msg" | "ai_response" | "user_note"
  user_id
}: { message: string, msg_type?: string, user_id: string }) => {
  const res = await axios.post(`${API_BASE}/chat/${userId}`, {
    message,
    msg_type,
    user_id
  });
  return res.data;
};

export const markMessageProcessed = async (messageId: string) => {
  const res = await axios.post(`${API_BASE}/chat_messages/mark_processed/${messageId}`);
  return res.data;
};