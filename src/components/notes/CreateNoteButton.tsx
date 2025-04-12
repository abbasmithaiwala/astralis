
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NoteEditor from './NoteEditor';

interface CreateNoteButtonProps {
  onCreateNote: (note: any) => void;
}

const CreateNoteButton: React.FC<CreateNoteButtonProps> = ({ onCreateNote }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleSaveNote = (note: any) => {
    onCreateNote(note);
    setIsEditorOpen(false);
  };

  return (
    <>
      <Button 
        onClick={() => setIsEditorOpen(true)} 
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-[#FCA591] text-white hover:bg-opacity-90 z-10 dark:bg-[#FCA591]/90 dark:hover:bg-opacity-100"
        aria-label="Create new note"
      >
        <Plus size={24} />
      </Button>
      
      <NoteEditor
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        onSave={handleSaveNote}
      />
    </>
  );
};

export default CreateNoteButton;
