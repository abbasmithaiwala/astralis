
import React, { useEffect, useRef, useState } from 'react';
import { useChat } from '@/hooks/useChat';
import { Send, ArrowLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ChatRoom = () => {
  const { messages, isLoading, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, reset, watch } = useForm();
  const [typing, setTyping] = useState(false);
  const messageValue = watch('message', '');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setTyping(messageValue.trim().length > 0);
  }, [messageValue]);

  const onSubmit = async (data: { message: string }) => {
    if (!data.message.trim()) return;
    await sendMessage(data.message);
    reset();
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-3xl mx-auto border rounded-xl overflow-hidden shadow-lg bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-[#054A40] text-white">
        <Link to="/notes" className="p-1 rounded-full hover:bg-[#054A40]/80 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-[#E5DCC3] rounded-full flex items-center justify-center text-[#054A40] font-semibold text-lg">
            AI
          </div>
          <div>
            <h2 className="font-medium">AI Assistant</h2>
            <p className="text-xs opacity-75">{typing ? 'typing...' : 'online'}</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#ECE5DD] bg-opacity-30"
        style={{ backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=")'}}
      >
        {messages.map((msg) => (
          <div key={msg.id}>
            {msg.message && (
              <div className="flex justify-end mb-2">
                <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 max-w-[80%] shadow-sm ml-auto">
                  <p className="text-sm text-gray-800">{msg.message}</p>
                  <p className="text-[10px] text-gray-500 text-right mt-1">
                    {format(new Date(msg.created_at), 'HH:mm')}
                  </p>
                </div>
              </div>
            )}
            
            {msg.response && (
              <div className="flex justify-start mb-2">
                <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">{msg.response}</p>
                  <p className="text-[10px] text-gray-500 text-right mt-1">
                    {format(new Date(msg.updated_at), 'HH:mm')}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-2">
            <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 max-w-[80%] shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-[#F0F2F5] p-3 flex items-center gap-2"
      >
        <input
          {...register('message')}
          type="text"
          placeholder="Type a message"
          className="flex-1 px-4 py-2 rounded-full border-none focus:outline-none focus:ring-1 focus:ring-[#054A40]"
        />
        <Button
          type="submit"
          disabled={isLoading || !typing}
          className="bg-[#054A40] text-white rounded-full p-2 h-10 w-10 flex items-center justify-center hover:bg-[#054A40]/90 transition-colors disabled:opacity-50 disabled:pointer-events-none"
        >
          <Send size={18} />
        </Button>
      </form>
    </div>
  );
};

export default ChatRoom;
