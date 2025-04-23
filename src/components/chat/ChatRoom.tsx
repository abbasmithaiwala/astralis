import React from 'react';
import { format } from 'date-fns';

interface ChatMessage {
  id: string;
  message: string;
  created_at: string;
  type: 'user_note' | 'ai_response';
}

interface ChatRoomProps {
  messages: ChatMessage[];
}

const ChatRoom: React.FC<ChatRoomProps> = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.type === 'ai_response' ? 'justify-start' : 'justify-end'
          }`}
        >
          <div
            className={`max-w-[70%] rounded-lg p-3 ${
              message.type === 'ai_response'
                ? 'bg-gray-100 text-gray-900'
                : 'bg-[#054A40] text-white'
            }`}
          >
            <p className="text-sm">{message.message}</p>
            <p className="text-xs mt-1 opacity-70">
              {format(new Date(message.created_at), 'MMM d, h:mm a')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatRoom;