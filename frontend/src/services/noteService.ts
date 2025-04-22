
import { v4 as uuidv4 } from 'uuid';
import type { NoteProps } from '@/components/notes/NoteCard';
import { supabase } from '@/integrations/supabase/client';

// Get all notes
export const getNotes = async (): Promise<NoteProps[]> => {
  try {
    const { data: notes, error } = await supabase
      .from('notes')
      .select('*')
      .eq('is_archived', false)
      .eq('is_trashed', false)
      .order('updated_at', { ascending: false });
    
    if (error) throw error;
    
    return notes.map(note => ({
      id: note.id,
      title: note.title || '',
      content: note.content || '',
      isPinned: note.is_pinned,
      tags: [], // We'll fetch tags separately
      color: note.color,
      createdAt: new Date(note.created_at),
      updatedAt: new Date(note.updated_at),
    }));
  } catch (error) {
    console.error('Error fetching notes:', error);
    return [];
  }
};

// Get archived notes
export const getArchivedNotes = async (): Promise<NoteProps[]> => {
  try {
    const { data: notes, error } = await supabase
      .from('notes')
      .select('*')
      .eq('is_archived', true)
      .eq('is_trashed', false)
      .order('updated_at', { ascending: false });
    
    if (error) throw error;
    
    return notes.map(note => ({
      id: note.id,
      title: note.title || '',
      content: note.content || '',
      isPinned: note.is_pinned,
      tags: [], // We'll fetch tags separately
      color: note.color,
      createdAt: new Date(note.created_at),
      updatedAt: new Date(note.updated_at),
    }));
  } catch (error) {
    console.error('Error fetching archived notes:', error);
    return [];
  }
};

// Get deleted notes
export const getDeletedNotes = async (): Promise<NoteProps[]> => {
  try {
    const { data: notes, error } = await supabase
      .from('notes')
      .select('*')
      .eq('is_trashed', true)
      .order('updated_at', { ascending: false });
    
    if (error) throw error;
    
    return notes.map(note => ({
      id: note.id,
      title: note.title || '',
      content: note.content || '',
      isPinned: note.is_pinned,
      tags: [], // We'll fetch tags separately
      color: note.color,
      createdAt: new Date(note.created_at),
      updatedAt: new Date(note.updated_at),
    }));
  } catch (error) {
    console.error('Error fetching deleted notes:', error);
    return [];
  }
};

// Create a new note
export const createNote = async (note: Partial<NoteProps>): Promise<NoteProps> => {
  try {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('notes')
      .insert({
        title: note.title || '',
        content: note.content || '',
        is_pinned: note.isPinned || false,
        color: note.color || '#ffffff',
        user_id: userData.user.id,
      })
      .select()
      .single();
    
    if (error) throw error;
    
    // Insert tags if provided
    if (note.tags && note.tags.length > 0) {
      await addTagsToNote(data.id, note.tags);
    }
    
    return {
      id: data.id,
      title: data.title || '',
      content: data.content || '',
      isPinned: data.is_pinned,
      tags: note.tags || [],
      color: data.color,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
    };
  } catch (error) {
    console.error('Error creating note:', error);
    // Fallback to local creation for offline support
    const newNote: NoteProps = {
      id: uuidv4(),
      title: note.title || '',
      content: note.content || '',
      isPinned: note.isPinned || false,
      tags: note.tags || [],
      color: note.color,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return newNote;
  }
};

// Update a note
export const updateNote = async (updatedNote: Partial<NoteProps>): Promise<NoteProps | null> => {
  if (!updatedNote.id) return null;
  
  try {
    const { data, error } = await supabase
      .from('notes')
      .update({
        title: updatedNote.title,
        content: updatedNote.content,
        is_pinned: updatedNote.isPinned,
        color: updatedNote.color,
        updated_at: new Date().toISOString(),
      })
      .eq('id', updatedNote.id)
      .select()
      .single();
    
    if (error) throw error;
    
    // Update tags if provided
    if (updatedNote.tags !== undefined) {
      await updateNoteTagsRelation(updatedNote.id, updatedNote.tags);
    }
    
    return {
      id: data.id,
      title: data.title || '',
      content: data.content || '',
      isPinned: data.is_pinned,
      tags: updatedNote.tags || [],
      color: data.color,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
    };
  } catch (error) {
    console.error('Error updating note:', error);
    return null;
  }
};

// Toggle pin status of a note
export const togglePinNote = async (id: string): Promise<NoteProps | null> => {
  try {
    // First get current note to know its pin status
    const { data: note, error: fetchError } = await supabase
      .from('notes')
      .select('*')
      .eq('id', id)
      .single();
    
    if (fetchError) throw fetchError;
    
    const { data, error } = await supabase
      .from('notes')
      .update({
        is_pinned: !note.is_pinned,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    // Fetch tags for this note
    const tags = await getTagsForNote(id);
    
    return {
      id: data.id,
      title: data.title || '',
      content: data.content || '',
      isPinned: data.is_pinned,
      tags: tags,
      color: data.color,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
    };
  } catch (error) {
    console.error('Error toggling pin status:', error);
    return null;
  }
};

// Archive a note
export const archiveNote = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('notes')
      .update({
        is_archived: true,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);
    
    if (error) throw error;
    
    return true;
  } catch (error) {
    console.error('Error archiving note:', error);
    return false;
  }
};

// Unarchive a note
export const unarchiveNote = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('notes')
      .update({
        is_archived: false,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);
    
    if (error) throw error;
    
    return true;
  } catch (error) {
    console.error('Error unarchiving note:', error);
    return false;
  }
};

// Delete a note (move to trash)
export const deleteNote = async (id: string, fromArchive = false): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('notes')
      .update({
        is_trashed: true,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);
    
    if (error) throw error;
    
    return true;
  } catch (error) {
    console.error('Error deleting note:', error);
    return false;
  }
};

// Restore a note from trash
export const restoreNote = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('notes')
      .update({
        is_trashed: false,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);
    
    if (error) throw error;
    
    return true;
  } catch (error) {
    console.error('Error restoring note:', error);
    return false;
  }
};

// Permanently delete a note
export const permanentlyDeleteNote = async (id: string): Promise<boolean> => {
  try {
    // First delete all tag relationships
    const { error: tagError } = await supabase
      .from('note_tags')
      .delete()
      .eq('note_id', id);
    
    if (tagError) throw tagError;
    
    // Then delete the note
    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    return true;
  } catch (error) {
    console.error('Error permanently deleting note:', error);
    return false;
  }
};

// Empty trash
export const emptyTrash = async (): Promise<boolean> => {
  try {
    // Get all trashed note IDs
    const { data: trashedNotes, error: fetchError } = await supabase
      .from('notes')
      .select('id')
      .eq('is_trashed', true);
    
    if (fetchError) throw fetchError;
    
    // Delete tag relationships for all trashed notes
    if (trashedNotes.length > 0) {
      const noteIds = trashedNotes.map(note => note.id);
      
      const { error: tagError } = await supabase
        .from('note_tags')
        .delete()
        .in('note_id', noteIds);
      
      if (tagError) throw tagError;
      
      // Then delete the notes
      const { error } = await supabase
        .from('notes')
        .delete()
        .in('id', noteIds);
      
      if (error) throw error;
    }
    
    return true;
  } catch (error) {
    console.error('Error emptying trash:', error);
    return false;
  }
};

// Helper function to get tags for a note
export const getTagsForNote = async (noteId: string): Promise<string[]> => {
  try {
    const { data, error } = await supabase
      .from('note_tags')
      .select('tags(name)')
      .eq('note_id', noteId);
    
    if (error) throw error;
    
    return data.map(item => item.tags.name);
  } catch (error) {
    console.error('Error fetching tags for note:', error);
    return [];
  }
};

// Helper function to add tags to a note
export const addTagsToNote = async (noteId: string, tagNames: string[]): Promise<boolean> => {
  try {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) throw new Error('User not authenticated');
    
    // First, ensure all tags exist
    for (const tagName of tagNames) {
      // Check if tag exists
      let { data: existingTag, error: fetchError } = await supabase
        .from('tags')
        .select('id')
        .eq('name', tagName)
        .eq('user_id', userData.user.id)
        .maybeSingle();
      
      if (fetchError) throw fetchError;
      
      // Create tag if it doesn't exist
      if (!existingTag) {
        const { data: newTag, error: insertError } = await supabase
          .from('tags')
          .insert({ name: tagName, user_id: userData.user.id })
          .select()
          .single();
        
        if (insertError) throw insertError;
        
        existingTag = newTag;
      }
      
      // Create relationship between note and tag
      const { error: relationError } = await supabase
        .from('note_tags')
        .insert({ note_id: noteId, tag_id: existingTag.id });
      
      if (relationError) throw relationError;
    }
    
    return true;
  } catch (error) {
    console.error('Error adding tags to note:', error);
    return false;
  }
};

// Helper function to update note-tag relations
export const updateNoteTagsRelation = async (noteId: string, tagNames: string[]): Promise<boolean> => {
  try {
    // First, delete all existing relationships
    const { error: deleteError } = await supabase
      .from('note_tags')
      .delete()
      .eq('note_id', noteId);
    
    if (deleteError) throw deleteError;
    
    // Then add the new relationships
    if (tagNames.length > 0) {
      await addTagsToNote(noteId, tagNames);
    }
    
    return true;
  } catch (error) {
    console.error('Error updating note-tag relations:', error);
    return false;
  }
};

// Get all unique tags from notes
export const getAllTags = async (): Promise<string[]> => {
  try {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('tags')
      .select('name')
      .eq('user_id', userData.user.id)
      .order('name');
    
    if (error) throw error;
    
    return data.map(tag => tag.name);
  } catch (error) {
    console.error('Error fetching all tags:', error);
    return [];
  }
};

// Get notes by tag
export const getNotesByTag = async (tag: string): Promise<NoteProps[]> => {
  try {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) throw new Error('User not authenticated');

    // Get tag ID
    const { data: tagData, error: tagError } = await supabase
      .from('tags')
      .select('id')
      .eq('name', tag)
      .eq('user_id', userData.user.id)
      .single();
    
    if (tagError) throw tagError;
    
    // Get note IDs with this tag
    const { data: noteTagData, error: noteTagError } = await supabase
      .from('note_tags')
      .select('note_id')
      .eq('tag_id', tagData.id);
    
    if (noteTagError) throw noteTagError;
    
    if (noteTagData.length === 0) return [];
    
    const noteIds = noteTagData.map(item => item.note_id);
    
    // Get notes with these IDs
    const { data: notesData, error: notesError } = await supabase
      .from('notes')
      .select('*')
      .in('id', noteIds)
      .eq('is_archived', false)
      .eq('is_trashed', false)
      .order('updated_at', { ascending: false });
    
    if (notesError) throw notesError;
    
    // Transform data to match NoteProps
    const notes: NoteProps[] = [];
    
    for (const note of notesData) {
      const tags = await getTagsForNote(note.id);
      
      notes.push({
        id: note.id,
        title: note.title || '',
        content: note.content || '',
        isPinned: note.is_pinned,
        tags: tags,
        color: note.color,
        createdAt: new Date(note.created_at),
        updatedAt: new Date(note.updated_at),
      });
    }
    
    return notes;
  } catch (error) {
    console.error('Error fetching notes by tag:', error);
    return [];
  }
};

// Search notes
export const searchNotes = async (query: string): Promise<NoteProps[]> => {
  if (!query.trim()) return [];
  
  try {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
      .eq('is_archived', false)
      .eq('is_trashed', false)
      .order('updated_at', { ascending: false });
    
    if (error) throw error;
    
    // Transform data to match NoteProps
    const notes: NoteProps[] = [];
    
    for (const note of data) {
      const tags = await getTagsForNote(note.id);
      
      notes.push({
        id: note.id,
        title: note.title || '',
        content: note.content || '',
        isPinned: note.is_pinned,
        tags: tags,
        color: note.color,
        createdAt: new Date(note.created_at),
        updatedAt: new Date(note.updated_at),
      });
    }
    
    return notes;
  } catch (error) {
    console.error('Error searching notes:', error);
    return [];
  }
};
