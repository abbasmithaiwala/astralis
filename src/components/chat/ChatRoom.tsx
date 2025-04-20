
import React, { useEffect, useRef } from 'react';
import { useChat } from '@/hooks/useChat';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';

const ChatRoom = () => {
  const { messages, isLoading, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, reset } = useForm();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onSubmit = async (data: { message: string }) => {
    if (!data.message.trim()) return;
    await sendMessage(data.message);
    reset();
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-4xl mx-auto">
      <div className="bg-white p-4 rounded-t-xl border-b">
        <h1 className="text-2xl font-semibold text-purple-800">Chat with AI Assistant</h1>
        <p className="text-gray-600">Share your thoughts and feelings, I'm here to listen and support you.</p>
      </div>

      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-purple-50 to-white p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="space-y-3">
            {msg.message && (
              <div className="flex justify-end">
                <div className="bg-purple-600 text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
                  <p className="text-sm">{msg.message}</p>
                  <p className="text-xs text-purple-200 mt-1">
                    {format(new Date(msg.created_at), 'HH:mm')}
                  </p>
                </div>
              </div>
            )}
            
            {msg.response && (
              <div className="flex justify-start">
                <div className="bg-white border border-purple-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">{msg.response}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {format(new Date(msg.updated_at), 'HH:mm')}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white border-t p-4 rounded-b-xl"
      >
        <div className="flex gap-2">
          <input
            {...register('message')}
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-full border border-purple-200 focus:outline-none focus:border-purple-500 transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-purple-600 text-white rounded-full p-3 hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatRoom;
