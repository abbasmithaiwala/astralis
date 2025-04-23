import React, { useState, useEffect } from 'react';
import { X, PaletteIcon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { createNote, NoteWithAIResponse } from "@/api/api";

// Replace with however you manage auth/user state
const USER_ID = "user_123";

export interface NoteProps {
  id?: string;
  title?: string;
  content: string;
  color?: string;
  isPinned?: boolean;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
  ai_response?: {
    id: string;
    message: string;
    created_at: string;
  };
}

interface NoteEditorProps {
  isOpen: boolean;
  initialNote?: Partial<NoteProps>;
  onClose: () => void;
  onSave: (note: NoteProps, aiResponse?: { id: string; message: string; created_at: string }) => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({
  isOpen,
  initialNote,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState<string | undefined>(undefined);
  const [isPinned, setIsPinned] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (initialNote) {
      setTitle(initialNote.title || '');
      setContent(initialNote.content || '');
      setColor(initialNote.color);
      setIsPinned(initialNote.isPinned || false);
      setTags(initialNote.tags || []);
    } else {
      resetForm();
    }
  }, [initialNote, isOpen]);

  const resetForm = () => {
    setTitle('');
    setContent('');
    setColor(undefined);
    setIsPinned(false);
    setTagInput('');
    setTags([]);
  };

  const handleSave = async () => {
    if (!content.trim() && !title.trim()) return;

    setIsSaving(true);
    
    try {
      // Call backend to save note and get AI response
      const result = await createNote({
        user_id: USER_ID,
        title: title.trim(),
        content: content.trim(),
        color,
        isPinned,
        isArchived: false,
        isTrashed: false
      });
      
      // Notify the user that the note was created
      toast.success("Note created successfully!");
      
      // Forward the note and AI response to parent component
      if (result && onSave) {
        const noteWithAI: NoteProps = {
          ...result.note,
          tags,
          ai_response: result.ai_response
        };
        
        onSave(noteWithAI, result.ai_response);
      }
      
      // Reset form if creating a new note
      if (!initialNote?.id) {
        resetForm();
      }
    } catch (err) {
      console.error("Failed to save note:", err);
      toast.error("Failed to save note!");
    } finally {
      setIsSaving(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSave();
      onClose();
      e.preventDefault();
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const colorOptions = [
    { name: 'None', value: undefined, class: 'bg-white' },
    { name: 'Pink', value: 'pink', class: 'bg-pastel-pink' },
    { name: 'Blue', value: 'blue', class: 'bg-pastel-blue' },
    { name: 'Green', value: 'green', class: 'bg-pastel-green' },
    { name: 'Purple', value: 'purple', class: 'bg-pastel-purple' },
    { name: 'Yellow', value: 'yellow', class: 'bg-pastel-yellow' },
  ];

  const getBackgroundColor = () => {
    switch (color) {
      case 'pink': return 'bg-pastel-pink';
      case 'blue': return 'bg-pastel-blue';
      case 'green': return 'bg-pastel-green';
      case 'purple': return 'bg-pastel-purple';
      case 'yellow': return 'bg-pastel-yellow';
      default: return 'bg-white';
    }
  };


  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={`${getBackgroundColor()} p-0 sm:max-w-lg w-[calc(100%-32px)] mx-auto overflow-hidden border rounded-md border-gray-200`}>
        <div className="p-4 sm:p-6">
          <input
            type="text"
            className="w-full text-lg font-medium mb-3 bg-transparent border-0 focus:outline-none placeholder-gray-500"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          
          <textarea
            className="w-full min-h-[150px] bg-transparent border-0 resize-none focus:outline-none placeholder-gray-500"
            placeholder="Take a note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map(tag => (
                <div key={tag} className="inline-flex items-center rounded-full px-2.5 py-0.5 bg-white bg-opacity-60 text-sm">
                  {tag}
                  <button 
                    type="button"
                    onClick={() => removeTag(tag)} 
                    className="ml-1 text-gray-500 hover:text-gray-800"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              className="flex-grow bg-white bg-opacity-60 rounded px-2 py-2 text-sm focus:outline-none"
              placeholder="Add tag"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagInputKeyDown}
            />
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleAddTag}
              disabled={!tagInput.trim()}
              className="bg-white bg-opacity-60 h-9"
            >
              Add
            </Button>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 flex-wrap gap-y-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}>
                  <PaletteIcon size={18} />
                </Button>
                {isColorPickerOpen && (
                  <div className="absolute left-0 sm:top-full sm:mt-1 top-auto bottom-full mb-1 bg-white shadow-lg rounded-md p-2 z-10 flex flex-wrap items-center gap-2 min-w-[180px]">
                    {colorOptions.map((option) => (
                      <button
                        key={option.name}
                        className={`w-7 h-7 rounded-full ${option.class} border border-gray-200 flex items-center justify-center`}
                        onClick={() => {
                          setColor(option.value);
                          setIsColorPickerOpen(false);
                        }}
                        aria-label={`Set note color to ${option.name}`}
                      >
                        {color === option.value && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-2 ml-auto">
              <Button variant="ghost" className="h-9" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  handleSave().then(() => onClose());
                }}
                disabled={isSaving || (!content.trim() && !title.trim())}
                className="bg-[#054A40] hover:bg-[#054A40]/90 text-white h-9"
              >
                {isSaving ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NoteEditor;

