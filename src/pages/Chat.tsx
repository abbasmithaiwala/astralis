
import React from 'react';
import ChatRoom from '@/components/chat/ChatRoom';

const Chat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <div className="container mx-auto px-4 py-8">
        <ChatRoom />
      </div>
    </div>
  );
};

export default Chat;
