
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ChatButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  showText?: boolean;
}

const ChatButton: React.FC<ChatButtonProps> = ({ 
  variant = 'default',
  showText = true
}) => {
  const navigate = useNavigate();

  return (
    <Button
      variant={variant}
      onClick={() => navigate('/chat')}
      className={variant === 'default' ? 'bg-[#054A40] hover:bg-[#054A40]/90 text-white' : ''}
      aria-label="Chat with AI"
    >
      <MessageSquare className="mr-1" size={18} />
      {showText && <span>Chat</span>}
    </Button>
  );
};

export default ChatButton;
