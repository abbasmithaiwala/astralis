
// import React, { useEffect, useRef, useState } from 'react';
// import { useChat } from '@/hooks/useChat';
// import { Send, ArrowLeft } from 'lucide-react';
// import { useForm } from 'react-hook-form';
// import { format } from 'date-fns';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';

// const ChatRoom = () => {
//   const { messages, isLoading, sendMessage } = useChat();
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const { register, handleSubmit, reset, watch } = useForm();
//   const [typing, setTyping] = useState(false);
//   const messageValue = watch('message', '');

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   useEffect(() => {
//     setTyping(messageValue.trim().length > 0);
//   }, [messageValue]);

//   const onSubmit = async (data: { message: string }) => {
//     if (!data.message.trim()) return;
//     await sendMessage(data.message);
//     reset();
//   };

//   return (
//     <div className="flex flex-col h-[calc(100vh-4rem)] max-w-3xl mx-auto border rounded-xl overflow-hidden shadow-lg bg-white">
//       {/* Header */}
//       <div className="flex items-center gap-3 p-4 bg-[#054A40] text-white">
//         <Link to="/notes" className="p-1 rounded-full hover:bg-[#054A40]/80 transition-colors">
//           <ArrowLeft size={20} />
//         </Link>
//         <div className="flex items-center gap-3">
//           <div className="h-10 w-10 bg-[#E5DCC3] rounded-full flex items-center justify-center text-[#054A40] font-semibold text-lg">
//             AI
//           </div>
//           <div>
//             <h2 className="font-medium">Astralis</h2>
//             <p className="text-xs opacity-75">{typing ? 'typing...' : 'online'}</p>
//           </div>
//         </div>
//       </div>

//       {/* Messages */}
//       <div 
//         className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#ECE5DD] bg-opacity-30"
//         style={{ backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhL5ZZBbsIwEEUZrl1uQc/QJbsCyRVYskC9AYgT9C5IvQFHgEUlWJpiccolsWbLkBvxJxnZCUhNIUYWE9KWpPZ735CQ2cZhB0zSrpmm8tm0vlbXruvaxrut1+JoNw3AL+QHyO+QL8k3IQr5dr9cHyKfwdz6qqtpD4BlyB8F9+EwSJlEPARu+zxURBCuIHiC5C8kjRBQRBHW4GeT7cDNICPpw8wT2XAc2BfQ9ZQNM4mQRA5KkQNjEydY+zRCw5WQR0yBKgbCJk0V8EINgwMkiRlOUAmETJ4sYkCSFESeLmAZRCgM2cbKIaRClMLCJk0VMgyiFAZs4WcQ0iFIYsImT7ZBDwFZOFjEKhM2TaBEngbB5Ei3iJBA2T6JFnATC5km0iJNA2DyJFjENohQGbOJkEdMgSmHAJk4WMQ2iFAZs4mQR0yBKYcDmSbSIaRClMGDzJFrESWCKJ1F7SJhAgtfGH/I1OoHwN8h9MIOLorhq2/aYO/BZURQf2AFyI2rSGcxtOAv4PvD9wvczfBYRBHyv8X2Az7sQvMDPE/5bEPAqKr40TV+Y5EL4mg1F8QmqKHZsNM0HtQAAAABJRU5ErkJggg==")'}}
//       >
//         {messages.map((msg) => (
//           <div key={msg.id}>
//             {msg.message && (
//               <div className="flex justify-end mb-2">
//                 <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 max-w-[80%] shadow-sm ml-auto">
//                   <p className="text-sm text-gray-800">{msg.message}</p>
//                   <p className="text-[10px] text-gray-500 text-right mt-1">
//                     {format(new Date(msg.created_at), 'HH:mm')}
//                   </p>
//                 </div>
//               </div>
//             )}
            
//             {msg.response && (
//               <div className="flex justify-start mb-2">
//                 <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 max-w-[80%] shadow-sm">
//                   <p className="text-sm text-gray-800">{msg.response}</p>
//                   <p className="text-[10px] text-gray-500 text-right mt-1">
//                     {format(new Date(msg.updated_at), 'HH:mm')}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//         {isLoading && (
//           <div className="flex justify-start mb-2">
//             <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 max-w-[80%] shadow-sm">
//               <div className="flex space-x-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
//               </div>
//             </div>
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input */}
//       <form 
//         onSubmit={handleSubmit(onSubmit)} 
//         className="bg-[#F0F2F5] p-3 flex items-center gap-2"
//       >
//         <input
//           {...register('message')}
//           type="text"
//           placeholder="Type a message"
//           className="flex-1 px-4 py-2 rounded-full border-none focus:outline-none focus:ring-1 focus:ring-[#054A40]"
//         />
//         <Button
//           type="submit"
//           disabled={isLoading || !typing}
//           className="bg-[#054A40] text-white rounded-full p-2 h-10 w-10 flex items-center justify-center hover:bg-[#054A40]/90 transition-colors disabled:opacity-50 disabled:pointer-events-none"
//         >
//           <Send size={18} />
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default ChatRoom;

import React, { useEffect, useRef, useState } from 'react';
import { useChat, ChatMessage } from '@/hooks/useChat';
import { Send, ArrowLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ChatRoom = () => {
  const { messages, isLoading, sendMessage, reload } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, reset, watch } = useForm();
  const [typing, setTyping] = useState(false);
  const messageValue = watch('message', '');

  // Automatically reload messages when the component is mounted
  useEffect(() => {
    reload();
  }, [reload]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Update typing state based on message input
  useEffect(() => {
    setTyping(messageValue.trim().length > 0);
  }, [messageValue]);

  const onSubmit = async (data: { message: string }) => {
    if (!data.message.trim()) return;
    await sendMessage(data.message);
    reset();
  };

  // Group messages by conversation (user message followed by AI response)
  const renderMessage = (msg: ChatMessage) => {
    if (msg.msg_type === "user_msg" || msg.msg_type === "user_note") {
      return (
        <div key={msg.id} className="flex justify-end mb-2">
          <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-2 max-w-[80%] shadow-sm ml-auto">
            <p className="text-sm text-gray-800">{msg.message}</p>
            <p className="text-[10px] text-gray-500 text-right mt-1">
              {format(new Date(msg.created_at), 'HH:mm')}
            </p>
          </div>
        </div>
      );
    } else if (msg.msg_type === "ai_response") {
      return (
        <div key={msg.id} className="flex justify-start mb-2">
          <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 max-w-[80%] shadow-sm">
            <p className="text-sm text-gray-800">{msg.message}</p>
            <p className="text-[10px] text-gray-500 text-right mt-1">
              {format(new Date(msg.created_at), 'HH:mm')}
            </p>
          </div>
        </div>
      );
    }
    return null;
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
            <h2 className="font-medium">Astralis</h2>
            <p className="text-xs opacity-75">{typing ? 'typing...' : 'online'}</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#ECE5DD] bg-opacity-30"
        style={{ backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhL5ZZBbsIwEEUZrl1uQc/QJbsCyRVYskC9AYgT9C5IvQFHgEUlWJpiccolsWbLkBvxJxnZCUhNIUYWE9KWpPZ735CQ2cZhB0zSrpmm8tm0vlbXruvaxrut1+JoNw3AL+QHyO+QL8k3IQr5dr9cHyKfwdz6qqtpD4BlyB8F9+EwSJlEPARu+zxURBCuIHiC5C8kjRBQRBHW4GeT7cDNICPpw8wT2XAc2BfQ9ZQNM4mQRA5KkQNjEydY+zRCw5WQR0yBKgbCJk0V8EINgwMkiRlOUAmETJ4sYkCSFESeLmAZRCgM2cbKIaRClMLCJk0VMgyiFAZs4WcQ0iFIYsImT7ZBDwFZOFjEKhM2TaBEngbB5Ei3iJBA2T6JFnATC5km0iJNA2DyJFjENohQGbOJkEdMgSmHAJk4WMQ2iFAZs4mQR0yBKYcDmSbSIaRClMGDzJFrESWCKJ1F7SJhAgtfGH/I1OoHwN8h9MIOLorhq2/aYO/BZURQf2AFyI2rSGcxtOAv4PvD9wvczfBYRBHyv8X2Az7sQvMDPE/5bEPAqKr40TV+Y5EL4mg1F8QmqKHZsNM0HtQAAAABJRU5ErkJggg==")'}}
      >
        {messages.map(msg => renderMessage(msg))}

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