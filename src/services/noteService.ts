
// This is a mock service that will be replaced with Supabase integration
import { v4 as uuidv4 } from 'uuid';
import type { NoteProps } from '@/components/notes/NoteCard';

// Local storage keys
const NOTES_STORAGE_KEY = 'pastel-notes-data';
const ARCHIVED_NOTES_KEY = 'pastel-notes-archived';
const TRASH_NOTES_KEY = 'pastel-notes-trash';

// Sample notes data
const sampleNotes: NoteProps[] = [
  {
    id: uuidv4(),
    title: 'Welcome to PastelNotes',
    content: 'This is your first note. You can edit, pin, archive, or delete it. Try adding some tags too!',
    isPinned: true,
    tags: ['welcome', 'getting-started'],
    color: 'pink',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Shopping List',
    content: '- Milk\n- Eggs\n- Bread\n- Apples\n- Chocolate',
    isPinned: false,
    tags: ['shopping'],
    color: 'blue',
    createdAt: new Date(Date.now() - 86400000), // 1 day ago
    updatedAt: new Date(Date.now() - 86400000),
  },
  {
    id: uuidv4(),
    title: 'Project Ideas',
    content: '1. Build a portfolio website\n2. Create a recipe app\n3. Learn a new framework',
    isPinned: false,
    tags: ['ideas', 'projects'],
    color: 'green',
    createdAt: new Date(Date.now() - 172800000), // 2 days ago
    updatedAt: new Date(Date.now() - 172800000),
  },
  {
    id: uuidv4(),
    title: 'Upcoming Meetings',
    content: '- Team standup: Monday 9am\n- Client presentation: Tuesday 2pm\n- Project review: Friday 11am',
    isPinned: false,
    color: 'purple',
    createdAt: new Date(Date.now() - 259200000), // 3 days ago
    updatedAt: new Date(Date.now() - 259200000),
  },
  {
    id: uuidv4(),
    title: '',
    content: 'Remember to call mom on her birthday next week!',
    isPinned: false,
    color: 'yellow',
    createdAt: new Date(Date.now() - 345600000), // 4 days ago
    updatedAt: new Date(Date.now() - 345600000),
  },
];

// Initialize local storage with sample data if empty
const initializeLocalStorage = () => {
  if (!localStorage.getItem(NOTES_STORAGE_KEY)) {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(sampleNotes));
  }
  
  if (!localStorage.getItem(ARCHIVED_NOTES_KEY)) {
    localStorage.setItem(ARCHIVED_NOTES_KEY, JSON.stringify([]));
  }
  
  if (!localStorage.getItem(TRASH_NOTES_KEY)) {
    localStorage.setItem(TRASH_NOTES_KEY, JSON.stringify([]));
  }
};

// Get all notes
export const getNotes = (): NoteProps[] => {
  initializeLocalStorage();
  try {
    const notes = localStorage.getItem(NOTES_STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Error fetching notes:', error);
    return [];
  }
};

// Get archived notes
export const getArchivedNotes = (): NoteProps[] => {
  initializeLocalStorage();
  try {
    const notes = localStorage.getItem(ARCHIVED_NOTES_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Error fetching archived notes:', error);
    return [];
  }
};

// Get deleted notes
export const getDeletedNotes = (): NoteProps[] => {
  initializeLocalStorage();
  try {
    const notes = localStorage.getItem(TRASH_NOTES_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Error fetching deleted notes:', error);
    return [];
  }
};

// Create a new note
export const createNote = (note: Partial<NoteProps>): NoteProps => {
  const notes = getNotes();
  
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
  
  const updatedNotes = [newNote, ...notes];
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(updatedNotes));
  
  return newNote;
};

// Update a note
export const updateNote = (updatedNote: Partial<NoteProps>): NoteProps | null => {
  if (!updatedNote.id) return null;
  
  const notes = getNotes();
  const noteIndex = notes.findIndex(note => note.id === updatedNote.id);
  
  if (noteIndex === -1) return null;
  
  const note = notes[noteIndex];
  const newNote = {
    ...note,
    ...updatedNote,
    updatedAt: new Date(),
  };
  
  notes[noteIndex] = newNote;
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  
  return newNote;
};

// Toggle pin status of a note
export const togglePinNote = (id: string): NoteProps | null => {
  const notes = getNotes();
  const noteIndex = notes.findIndex(note => note.id === id);
  
  if (noteIndex === -1) return null;
  
  const note = notes[noteIndex];
  note.isPinned = !note.isPinned;
  note.updatedAt = new Date();
  
  notes[noteIndex] = note;
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  
  return note;
};

// Archive a note
export const archiveNote = (id: string): boolean => {
  const notes = getNotes();
  const noteIndex = notes.findIndex(note => note.id === id);
  
  if (noteIndex === -1) return false;
  
  const note = notes[noteIndex];
  notes.splice(noteIndex, 1);
  
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  
  const archivedNotes = getArchivedNotes();
  archivedNotes.unshift({
    ...note,
    updatedAt: new Date()
  });
  
  localStorage.setItem(ARCHIVED_NOTES_KEY, JSON.stringify(archivedNotes));
  
  return true;
};

// Unarchive a note
export const unarchiveNote = (id: string): boolean => {
  const archivedNotes = getArchivedNotes();
  const noteIndex = archivedNotes.findIndex(note => note.id === id);
  
  if (noteIndex === -1) return false;
  
  const note = archivedNotes[noteIndex];
  archivedNotes.splice(noteIndex, 1);
  
  localStorage.setItem(ARCHIVED_NOTES_KEY, JSON.stringify(archivedNotes));
  
  const notes = getNotes();
  notes.unshift({
    ...note,
    updatedAt: new Date()
  });
  
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  
  return true;
};

// Delete a note (move to trash)
export const deleteNote = (id: string, fromArchive = false): boolean => {
  let sourceArray;
  let sourceKey;
  
  if (fromArchive) {
    sourceArray = getArchivedNotes();
    sourceKey = ARCHIVED_NOTES_KEY;
  } else {
    sourceArray = getNotes();
    sourceKey = NOTES_STORAGE_KEY;
  }
  
  const noteIndex = sourceArray.findIndex(note => note.id === id);
  
  if (noteIndex === -1) return false;
  
  const note = sourceArray[noteIndex];
  sourceArray.splice(noteIndex, 1);
  
  localStorage.setItem(sourceKey, JSON.stringify(sourceArray));
  
  const trashNotes = getDeletedNotes();
  trashNotes.unshift({
    ...note,
    updatedAt: new Date()
  });
  
  localStorage.setItem(TRASH_NOTES_KEY, JSON.stringify(trashNotes));
  
  return true;
};

// Restore a note from trash
export const restoreNote = (id: string): boolean => {
  const trashNotes = getDeletedNotes();
  const noteIndex = trashNotes.findIndex(note => note.id === id);
  
  if (noteIndex === -1) return false;
  
  const note = trashNotes[noteIndex];
  trashNotes.splice(noteIndex, 1);
  
  localStorage.setItem(TRASH_NOTES_KEY, JSON.stringify(trashNotes));
  
  const notes = getNotes();
  notes.unshift({
    ...note,
    updatedAt: new Date()
  });
  
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  
  return true;
};

// Permanently delete a note
export const permanentlyDeleteNote = (id: string): boolean => {
  const trashNotes = getDeletedNotes();
  const noteIndex = trashNotes.findIndex(note => note.id === id);
  
  if (noteIndex === -1) return false;
  
  trashNotes.splice(noteIndex, 1);
  localStorage.setItem(TRASH_NOTES_KEY, JSON.stringify(trashNotes));
  
  return true;
};

// Empty trash
export const emptyTrash = (): boolean => {
  localStorage.setItem(TRASH_NOTES_KEY, JSON.stringify([]));
  return true;
};

// Get all unique tags from notes
export const getAllTags = (): string[] => {
  const notes = getNotes();
  const archivedNotes = getArchivedNotes();
  const allNotes = [...notes, ...archivedNotes];
  
  const tagSet = new Set<string>();
  
  allNotes.forEach(note => {
    if (note.tags) {
      note.tags.forEach(tag => tagSet.add(tag));
    }
  });
  
  return Array.from(tagSet);
};

// Get notes by tag
export const getNotesByTag = (tag: string): NoteProps[] => {
  const notes = getNotes();
  return notes.filter(note => note.tags && note.tags.includes(tag));
};

// Search notes
export const searchNotes = (query: string): NoteProps[] => {
  if (!query.trim()) return [];
  
  const notes = getNotes();
  const lowerQuery = query.toLowerCase();
  
  return notes.filter(note => 
    note.title.toLowerCase().includes(lowerQuery) || 
    note.content.toLowerCase().includes(lowerQuery) ||
    (note.tags && note.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
  );
};
