
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message_id, user_id, message } = await req.json();

    // Call the AI endpoint with proper error handling
    let aiResponse;
    try {
      const response = await fetch('https://abbasmithaiwala--astralis-web-app.modal.run/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message,
          conversation_history: []
        })
      });
      
      if (!response.ok) {
        throw new Error(`AI service responded with status: ${response.status}`);
      }
      
      aiResponse = await response.json();
    } catch (error) {
      console.error('Error calling AI service:', error);
      throw new Error('Failed to get response from AI service. Please try again later.');
    }
    
    // Create Supabase client with error handling for environment variables
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables');
    }
    
    const supabaseClient = createClient(supabaseUrl, supabaseKey);

    // Update the message with AI response
    const { error } = await supabaseClient
      .from('chat_messages')
      .update({ 
        response: aiResponse.response,
        is_processed: true 
      })
      .eq('id', message_id);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, response: aiResponse.response }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
