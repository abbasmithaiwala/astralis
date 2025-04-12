
import React, { useState, useEffect } from 'react';
import { X, PaletteIcon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { NoteProps } from './NoteCard';

interface NoteEditorProps {
  isOpen: boolean;
  initialNote?: Partial<NoteProps>;
  onClose: () => void;
  onSave: (note: Partial<NoteProps>) => void;
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

  const handleSave = () => {
    if (!content.trim() && !title.trim()) return;
    
    onSave({
      ...initialNote,
      title: title.trim(),
      content: content.trim(),
      isPinned,
      tags,
      color,
    });
    
    if (!initialNote?.id) {
      resetForm();
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
      <DialogContent className={`${getBackgroundColor()} p-0 max-w-lg overflow-hidden`}>
        <div className="p-4">
          <input
            type="text"
            className="w-full text-lg font-medium mb-2 bg-transparent border-0 focus:outline-none placeholder-gray-500"
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
              className="flex-grow bg-white bg-opacity-60 rounded px-2 py-1 text-sm focus:outline-none"
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
              className="bg-white bg-opacity-60"
            >
              Add
            </Button>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <PaletteIcon size={18} />
                </Button>
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 z-10 flex gap-2 flex-wrap w-[180px]">
                  {colorOptions.map((option) => (
                    <button
                      key={option.name}
                      className={`w-6 h-6 rounded-full ${option.class} border border-gray-200 flex items-center justify-center`}
                      onClick={() => setColor(option.value)}
                      aria-label={`Set note color to ${option.name}`}
                    >
                      {color === option.value && <Check size={14} />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  handleSave();
                  onClose();
                }}
                disabled={!content.trim() && !title.trim()}
                className="bg-pastel-pink-dark hover:bg-opacity-90 text-white"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NoteEditor;
