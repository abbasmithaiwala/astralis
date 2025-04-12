
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import NoteCard, { NoteProps } from '@/components/notes/NoteCard';
import CreateNoteButton from '@/components/notes/CreateNoteButton';
import NoteSidebar from '@/components/notes/NoteSidebar';
import NoteEditor from '@/components/notes/NoteEditor';
import { Search, Grid3X3, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import * as NoteService from '@/services/noteService';

const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [archivedNotes, setArchivedNotes] = useState<NoteProps[]>([]);
  const [deletedNotes, setDeletedNotes] = useState<NoteProps[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<NoteProps[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGridView, setIsGridView] = useState(true);
  const [selectedNote, setSelectedNote] = useState<NoteProps | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const { view, tag } = useParams<{ view?: string; tag?: string }>();
  const location = useLocation();

  useEffect(() => {
    loadNotes();
    setTags(NoteService.getAllTags());
  }, [location.pathname]);

  const loadNotes = () => {
    if (view === 'archived') {
      setArchivedNotes(NoteService.getArchivedNotes());
    } else if (view === 'trash') {
      setDeletedNotes(NoteService.getDeletedNotes());
    } else {
      const allNotes = NoteService.getNotes();
      setNotes(allNotes);
    }
  };

  const handleCreateNote = (note: Partial<NoteProps>) => {
    const newNote = NoteService.createNote(note);
    setNotes(prev => [newNote, ...prev]);
    setTags(NoteService.getAllTags());
    toast.success('Note created successfully');
  };

  const handleUpdateNote = (note: Partial<NoteProps>) => {
    const updatedNote = NoteService.updateNote(note);
    if (updatedNote) {
      setNotes(prev => 
        prev.map(n => n.id === updatedNote.id ? updatedNote : n)
      );
      setSelectedNote(null);
      toast.success('Note updated successfully');
    }
  };

  const handlePinNote = (id: string) => {
    const updatedNote = NoteService.togglePinNote(id);
    if (updatedNote) {
      setNotes(prev => [...prev.filter(n => n.id !== id), updatedNote]);
      toast.success(updatedNote.isPinned ? 'Note pinned' : 'Note unpinned');
    }
  };

  const handleArchiveNote = (id: string) => {
    if (NoteService.archiveNote(id)) {
      setNotes(prev => prev.filter(n => n.id !== id));
      loadNotes();
      toast.success('Note archived');
    }
  };

  const handleUnarchiveNote = (id: string) => {
    if (NoteService.unarchiveNote(id)) {
      setArchivedNotes(prev => prev.filter(n => n.id !== id));
      loadNotes();
      toast.success('Note restored from archive');
    }
  };

  const handleDeleteNote = (id: string) => {
    const fromArchive = view === 'archived';
    if (NoteService.deleteNote(id, fromArchive)) {
      if (fromArchive) {
        setArchivedNotes(prev => prev.filter(n => n.id !== id));
      } else {
        setNotes(prev => prev.filter(n => n.id !== id));
      }
      loadNotes();
      toast.success('Note moved to trash');
    }
  };

  const handleRestoreNote = (id: string) => {
    if (NoteService.restoreNote(id)) {
      setDeletedNotes(prev => prev.filter(n => n.id !== id));
      loadNotes();
      toast.success('Note restored');
    }
  };

  const handlePermanentDelete = (id: string) => {
    if (NoteService.permanentlyDeleteNote(id)) {
      setDeletedNotes(prev => prev.filter(n => n.id !== id));
      toast.success('Note permanently deleted');
    }
  };

  const handleEmptyTrash = () => {
    if (NoteService.emptyTrash()) {
      setDeletedNotes([]);
      toast.success('Trash emptied');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = NoteService.searchNotes(searchQuery);
      setSearchResults(results);
      setIsSearching(true);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  const handleNoteClick = (id: string) => {
    let noteToEdit: NoteProps | undefined;

    if (view === 'archived') {
      noteToEdit = archivedNotes.find(note => note.id === id);
    } else if (view === 'trash') {
      noteToEdit = deletedNotes.find(note => note.id === id);
    } else {
      noteToEdit = notes.find(note => note.id === id);
    }

    if (noteToEdit) {
      setSelectedNote(noteToEdit);
      setIsEditorOpen(true);
    }
  };

  // Filter and sort notes based on current view
  const getDisplayNotes = () => {
    if (isSearching) return searchResults;

    if (view === 'archived') return archivedNotes;
    if (view === 'trash') return deletedNotes;
    if (view === 'pinned') return notes.filter(note => note.isPinned);
    if (tag) return NoteService.getNotesByTag(tag);

    return notes;
  };

  const sortNotes = (notesToSort: NoteProps[]) => {
    if (view === 'pinned') return notesToSort;
    
    // For the main view, pinned notes go first
    if (!view && !tag) {
      return [
        ...notesToSort.filter(note => note.isPinned).sort((a, b) => 
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        ),
        ...notesToSort.filter(note => !note.isPinned).sort((a, b) => 
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        )
      ];
    }
    
    // For all other views, sort by updated date
    return notesToSort.sort((a, b) => 
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  };

  const displayNotes = sortNotes(getDisplayNotes());
  const pageTitle = view === 'archived' ? 'Archived Notes' : 
                   view === 'trash' ? 'Trash' :
                   view === 'pinned' ? 'Pinned Notes' :
                   tag ? `Tag: ${tag}` :
                   isSearching ? 'Search Results' : 'All Notes';

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <NoteSidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        tags={tags}
      />
      
      <div className="flex-1 ml-0 md:ml-64 transition-all duration-300">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="text-2xl font-semibold mb-4 sm:mb-0">{pageTitle}</h1>
            
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Search notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-auto min-w-0 sm:min-w-[200px]"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  variant="outline" 
                  aria-label="Search"
                >
                  <Search size={18} />
                </Button>
              </form>
              
              <div className="flex items-center gap-2">
                {isSearching && (
                  <Button 
                    variant="ghost" 
                    onClick={clearSearch}
                    className="text-xs"
                  >
                    Clear Search
                  </Button>
                )}
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsGridView(!isGridView)}
                  aria-label={isGridView ? "Switch to list view" : "Switch to grid view"}
                  className="ml-2"
                >
                  {isGridView ? <List size={18} /> : <Grid3X3 size={18} />}
                </Button>
              </div>
            </div>
          </div>
          
          {displayNotes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">
                {isSearching ? "No notes match your search." :
                  view === 'archived' ? "No archived notes." :
                  view === 'trash' ? "Trash is empty." :
                  view === 'pinned' ? "No pinned notes." :
                  tag ? `No notes with the tag '${tag}'.` :
                  "No notes yet. Create your first note!"}
              </p>
            </div>
          ) : (
            <div className={`${isGridView ? 'masonry-grid' : 'flex flex-col gap-4'}`}>
              {displayNotes.map((note) => (
                <NoteCard 
                  key={note.id}
                  note={note}
                  onPin={view === 'trash' ? handleRestoreNote : handlePinNote}
                  onArchive={
                    view === 'archived' ? handleUnarchiveNote : 
                    view === 'trash' ? handlePermanentDelete :
                    handleArchiveNote
                  }
                  onDelete={
                    view === 'archived' ? handleDeleteNote :
                    view === 'trash' ? handlePermanentDelete :
                    handleDeleteNote
                  }
                  onClick={view !== 'trash' ? handleNoteClick : () => {}}
                />
              ))}
            </div>
          )}
          
          {view === 'trash' && deletedNotes.length > 0 && (
            <div className="mt-6">
              <Button 
                variant="destructive" 
                onClick={handleEmptyTrash}
                className="w-full sm:w-auto"
              >
                Empty Trash
              </Button>
            </div>
          )}
        </div>
      </div>

      {(view !== 'archived' && view !== 'trash') && (
        <CreateNoteButton onCreateNote={handleCreateNote} />
      )}
      
      <NoteEditor
        isOpen={isEditorOpen}
        initialNote={selectedNote || undefined}
        onClose={() => {
          setIsEditorOpen(false);
          setSelectedNote(null);
        }}
        onSave={handleUpdateNote}
      />
    </div>
  );
};

export default NotesPage;
