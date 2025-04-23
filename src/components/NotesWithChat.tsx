import React, { useState, useEffect } from 'react';
import NoteEditor from './notes/NoteEditor';
import ChatRoom from './chat/ChatRoom';
import { fetchNotes, fetchChatMessages } from '@/api/api';
import type { NoteProps } from './notes/NoteEditor';

// Replace with however you manage auth/user state
const USER_ID = "user_123";

interface ChatMessage {
  id: string;
  message: string;
  created_at: string;
  type: 'user_note' | 'ai_response';
}

const NotesWithChat: React.FC = () => {
  const [isNoteEditorOpen, setIsNoteEditorOpen] = useState(false);
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  // Fetch initial notes and chat messages
  useEffect(() => {
    const loadData = async () => {
      try {
        const [notesData, messagesData] = await Promise.all([
          fetchNotes(USER_ID),
          fetchChatMessages(USER_ID)
        ]);
        
        setNotes(notesData);
        setChatMessages(messagesData);
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };

    loadData();
  }, []);

  const handleNoteSave = async (note: NoteProps, aiResponse?: { id: string; message: string; created_at: string }) => {
    // Add the new note to the notes list
    setNotes(prevNotes => [...prevNotes, note]);

    // If there's an AI response, add both the note and response to chat
    if (aiResponse) {
      const noteMessage: ChatMessage = {
        id: note.id!,
        message: note.content,
        created_at: note.created_at!,
        type: 'user_note'
      };

      const aiMessage: ChatMessage = {
        id: aiResponse.id,
        message: aiResponse.message,
        created_at: aiResponse.created_at,
        type: 'ai_response'
      };

      setChatMessages(prevMessages => [...prevMessages, noteMessage, aiMessage]);
    }

    setIsNoteEditorOpen(false);
  };

  return (
    <div className="flex h-screen">
      {/* Notes Section */}
      <div className="w-1/2 p-4 border-r">
        <button
          onClick={() => setIsNoteEditorOpen(true)}
          className="mb-4 px-4 py-2 bg-[#054A40] text-white rounded-lg hover:bg-[#054A40]/90"
        >
          New Note
        </button>

        <div className="space-y-4">
          {notes.map(note => (
            <div
              key={note.id}
              className={`p-4 rounded-lg ${
                note.color ? `bg-pastel-${note.color}` : 'bg-white'
              } shadow-sm`}
            >
              {note.title && <h3 className="font-medium mb-2">{note.title}</h3>}
              <p className="text-sm">{note.content}</p>
            </div>
          ))}
        </div>

        <NoteEditor
          isOpen={isNoteEditorOpen}
          onClose={() => setIsNoteEditorOpen(false)}
          onSave={handleNoteSave}
        />
      </div>

      {/* Chat Section */}
      <div className="w-1/2 border-l">
        <ChatRoom messages={chatMessages} />
      </div>
    </div>
  );
};

export default NotesWithChat; 