
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import NoteCard, { NoteProps } from '@/components/notes/NoteCard';
import CreateNoteButton from '@/components/notes/CreateNoteButton';
import NoteSidebar from '@/components/notes/NoteSidebar';
import NoteEditor from '@/components/notes/NoteEditor';
import { Search, Grid3X3, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import * as NoteService from '@/services/noteService';
import { supabase } from '@/integrations/supabase/client';

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
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { view, tag } = useParams<{ view?: string; tag?: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Check for authentication
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate('/login');
        return;
      }
      setUser(data.session.user);
      setIsLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          navigate('/login');
        } else if (session) {
          setUser(session.user);
          setIsLoading(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  // Load data when route or user changes
  useEffect(() => {
    if (!user) return;
    
    const loadData = async () => {
      setIsLoading(true);
      await loadNotes();
      const allTags = await NoteService.getAllTags();
      setTags(allTags);
      setIsLoading(false);
    };
    
    loadData();
  }, [location.pathname, user]);

  const loadNotes = async () => {
    if (view === 'archived') {
      const archived = await NoteService.getArchivedNotes();
      setArchivedNotes(archived);
    } else if (view === 'trash') {
      const trashed = await NoteService.getDeletedNotes();
      setDeletedNotes(trashed);
    } else if (tag) {
      const taggedNotes = await NoteService.getNotesByTag(tag);
      setNotes(taggedNotes);
    } else {
      const allNotes = await NoteService.getNotes();
      
      // Fetch tags for each note
      for (let i = 0; i < allNotes.length; i++) {
        const noteTags = await NoteService.getTagsForNote(allNotes[i].id);
        allNotes[i].tags = noteTags;
      }
      
      setNotes(allNotes);
    }
  };

  const handleCreateNote = async (note: Partial<NoteProps>) => {
    try {
      const newNote = await NoteService.createNote(note);
      setNotes(prev => [newNote, ...prev]);
      
      // Refresh tags list
      const allTags = await NoteService.getAllTags();
      setTags(allTags);
      
      toast.success('Note created successfully');
    } catch (error) {
      console.error('Error creating note:', error);
      toast.error('Failed to create note');
    }
  };

  const handleUpdateNote = async (note: Partial<NoteProps>) => {
    try {
      const updatedNote = await NoteService.updateNote(note);
      if (updatedNote) {
        setNotes(prev => 
          prev.map(n => n.id === updatedNote.id ? updatedNote : n)
        );
        setSelectedNote(null);
        
        // Refresh tags list as tags might have changed
        const allTags = await NoteService.getAllTags();
        setTags(allTags);
        
        toast.success('Note updated successfully');
      }
    } catch (error) {
      console.error('Error updating note:', error);
      toast.error('Failed to update note');
    }
  };

  const handlePinNote = async (id: string) => {
    try {
      const updatedNote = await NoteService.togglePinNote(id);
      if (updatedNote) {
        setNotes(prev => [...prev.filter(n => n.id !== id), updatedNote]);
        toast.success(updatedNote.isPinned ? 'Note pinned' : 'Note unpinned');
      }
    } catch (error) {
      console.error('Error pinning note:', error);
      toast.error('Failed to pin/unpin note');
    }
  };

  const handleArchiveNote = async (id: string) => {
    try {
      if (await NoteService.archiveNote(id)) {
        setNotes(prev => prev.filter(n => n.id !== id));
        await loadNotes();
        toast.success('Note archived');
      }
    } catch (error) {
      console.error('Error archiving note:', error);
      toast.error('Failed to archive note');
    }
  };

  const handleUnarchiveNote = async (id: string) => {
    try {
      if (await NoteService.unarchiveNote(id)) {
        setArchivedNotes(prev => prev.filter(n => n.id !== id));
        await loadNotes();
        toast.success('Note restored from archive');
      }
    } catch (error) {
      console.error('Error unarchiving note:', error);
      toast.error('Failed to restore note from archive');
    }
  };

  const handleDeleteNote = async (id: string) => {
    try {
      const fromArchive = view === 'archived';
      if (await NoteService.deleteNote(id, fromArchive)) {
        if (fromArchive) {
          setArchivedNotes(prev => prev.filter(n => n.id !== id));
        } else {
          setNotes(prev => prev.filter(n => n.id !== id));
        }
        await loadNotes();
        toast.success('Note moved to trash');
      }
    } catch (error) {
      console.error('Error deleting note:', error);
      toast.error('Failed to move note to trash');
    }
  };

  const handleRestoreNote = async (id: string) => {
    try {
      if (await NoteService.restoreNote(id)) {
        setDeletedNotes(prev => prev.filter(n => n.id !== id));
        await loadNotes();
        toast.success('Note restored');
      }
    } catch (error) {
      console.error('Error restoring note:', error);
      toast.error('Failed to restore note');
    }
  };

  const handlePermanentDelete = async (id: string) => {
    try {
      if (await NoteService.permanentlyDeleteNote(id)) {
        setDeletedNotes(prev => prev.filter(n => n.id !== id));
        toast.success('Note permanently deleted');
      }
    } catch (error) {
      console.error('Error permanently deleting note:', error);
      toast.error('Failed to permanently delete note');
    }
  };

  const handleEmptyTrash = async () => {
    try {
      if (await NoteService.emptyTrash()) {
        setDeletedNotes([]);
        toast.success('Trash emptied');
      }
    } catch (error) {
      console.error('Error emptying trash:', error);
      toast.error('Failed to empty trash');
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        const results = await NoteService.searchNotes(searchQuery);
        setSearchResults(results);
        setIsSearching(true);
      } catch (error) {
        console.error('Error searching notes:', error);
        toast.error('Failed to search notes');
      }
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
    if (tag) return notes;

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

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
