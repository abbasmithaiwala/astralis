
// import { useCallback, useEffect, useState } from 'react';
// import { useAuth } from '@/contexts/AuthContext';
// import { supabase } from '@/integrations/supabase/client';
// import { toast } from 'sonner';

// interface ChatMessage {
//   id: string;
//   user_id: string;
//   message: string;
//   response: string | null;
//   created_at: string;
//   updated_at: string;
//   is_processed: boolean;
// }

// export const useChat = () => {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const { user } = useAuth();

//   const fetchMessages = useCallback(async () => {
//     if (!user) return;

//     try {
//       const { data, error } = await supabase
//         .from('chat_messages')
//         .select('*')
//         .eq('user_id', user.id)
//         .order('created_at', { ascending: true });

//       if (error) {
//         console.error('Error fetching messages:', error);
//         toast.error('Failed to load chat messages');
//         return;
//       }

//       setMessages(data || []);
//     } catch (err) {
//       console.error('Unexpected error fetching messages:', err);
//       toast.error('Something went wrong while loading messages');
//     }
//   }, [user]);

//   const sendMessage = async (message: string) => {
//     if (!user) return;

//     setIsLoading(true);
//     try {
//       const { data, error } = await supabase
//         .from('chat_messages')
//         .insert([
//           { user_id: user.id, message }
//         ])
//         .select()
//         .single();

//       if (error) throw error;

//       // Optimistically update messages array
//       setMessages(prev => [...prev, data]);
      
//       // The trigger will handle sending to AI and updating the response
//     } catch (error) {
//       console.error('Error sending message:', error);
//       toast.error('Failed to send message');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Subscribe to realtime updates
//   useEffect(() => {
//     if (!user) return;

//     const channel = supabase
//       .channel('chat_updates')
//       .on(
//         'postgres_changes',
//         {
//           event: '*',
//           schema: 'public',
//           table: 'chat_messages',
//           filter: `user_id=eq.${user.id}`
//         },
//         () => {
//           fetchMessages();
//         }
//       )
//       .subscribe();

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, [user, fetchMessages]);

//   // Initial fetch
//   useEffect(() => {
//     fetchMessages();
//   }, [fetchMessages]);

//   return {
//     messages,
//     isLoading,
//     sendMessage
//   };
// };

import { useState, useEffect } from "react";
import { fetchChatMessages, sendChatMessage } from "@/api/api";

// Replace with however you manage auth/user state
const USER_ID = "48704f6b-786e-484b-ab73-afd984e1cae5";

export interface ChatMessage {
  id: string;
  user_id: string;
  message: string;
  msg_type: "user_msg" | "ai_response" | "user_note";
  is_processed: boolean;
  created_at: string;
  request_id?: string;
  reply_to_msg_id?: string;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMessages = async () => {
    try {
      const data = await fetchChatMessages(USER_ID);
      setMessages(data || []);
    } catch (err) {
      console.error("Error loading messages:", err);
      setMessages([]); // Reset on error
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const sendMessage = async (message: string) => {
    setIsLoading(true);
    try {
      // "user_msg" type for chat entries
      const data = await sendChatMessage(USER_ID, {
        message,
        msg_type: "user_msg",
        user_id: USER_ID,
      });
      // After sending, reload messages
      await loadMessages();
      setIsLoading(false);
      return data;
    } catch (err) {
      console.error("Error sending message:", err);
      setIsLoading(false);
      throw err;
    }
  };

  return {
    messages,
    isLoading,
    sendMessage,
    reload: loadMessages,
  };
}
