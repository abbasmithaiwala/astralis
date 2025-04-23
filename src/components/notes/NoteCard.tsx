// import React from 'react';
// import { Pin, Archive, Trash2, Tag } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';

// export interface NoteProps {
//   id: string;
//   title: string;
//   content: string;
//   isPinned: boolean;
//   tags?: string[];
//   color?: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

// interface NoteCardProps {
//   note: NoteProps;
//   onPin: (id: string) => void;
//   onArchive: (id: string) => void;
//   onDelete: (id: string) => void;
//   onClick: (id: string) => void;
//   className?: string;
// }

// const NoteCard: React.FC<NoteCardProps> = ({ note, onPin, onArchive, onDelete, onClick, className = '' }) => {
//   const getCardBgColor = () => {
//     switch (note.color) {
//       case 'pink': return 'bg-pastel-pink';
//       case 'blue': return 'bg-pastel-blue';
//       case 'green': return 'bg-pastel-green';
//       case 'purple': return 'bg-pastel-purple';
//       case 'yellow': return 'bg-pastel-yellow';
//       default: return 'bg-white';
//     }
//   };

//   const truncateContent = (content: string, maxLength: number = 180) => {
//     return content.length > maxLength ? `${content.substring(0, maxLength)}...` : content;
//   };

//   const handleCardClick = () => {
//     onClick(note.id);
//   };

//   const handleAction = (e: React.MouseEvent, action: () => void) => {
//     e.stopPropagation();
//     action();
//   };

//   return (
//     <Card 
//       className={`note-card animate-fade-in ${getCardBgColor()} hover:shadow-lg transition-all duration-300 cursor-pointer w-full h-full min-h-[200px] flex flex-col ${className}`} 
//       onClick={handleCardClick}
//     >
//       <div className="relative flex flex-col flex-1 p-4">
//         {note.isPinned && (
//           <div 
//             className="absolute top-2 right-2 p-2 cursor-pointer hover:bg-black hover:bg-opacity-5 rounded-full"
//             onClick={(e) => handleAction(e, () => onPin(note.id))}
//             aria-label="Unpin note"
//           >
//             <Pin size={16} className="text-[#054A40]" fill="currentColor" />
//           </div>
//         )}
        
//         <div className="flex-1">
//           {note.title && (
//             <h3 className="font-medium text-lg mb-2 break-words pr-8">{note.title}</h3>
//           )}
//           <p className="text-gray-600 whitespace-pre-line break-words">
//             {truncateContent(note.content)}
//           </p>
//         </div>
        
//         {note.tags && note.tags.length > 0 && (
//           <div className="mt-3 flex flex-wrap gap-1">
//             {note.tags.map((tag) => (
//               <div 
//                 key={tag}
//                 className="inline-flex items-center text-xs bg-white bg-opacity-60 rounded-full px-2 py-1"
//               >
//                 <Tag size={12} className="mr-1 text-[#054A40]" />
//                 {tag}
//               </div>
//             ))}
//           </div>
//         )}
        
//         <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
//           <div className="text-xs text-gray-500">
//             {new Date(note.updatedAt).toLocaleDateString()}
//           </div>
//           <div className="flex space-x-1">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-8 w-8 rounded-full hover:bg-black hover:bg-opacity-5"
//               onClick={(e) => handleAction(e, () => onPin(note.id))}
//               aria-label={note.isPinned ? "Unpin note" : "Pin note"}
//             >
//               <Pin size={16} className={note.isPinned ? "text-[#054A40]" : "text-gray-500"} />
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-8 w-8 rounded-full hover:bg-black hover:bg-opacity-5"
//               onClick={(e) => handleAction(e, () => onArchive(note.id))}
//               aria-label="Archive note"
//             >
//               <Archive size={16} className="text-gray-500" />
//             </Button>
//             <Button
//               variant="ghost" 
//               size="icon"
//               className="h-8 w-8 rounded-full hover:bg-black hover:bg-opacity-5"
//               onClick={(e) => handleAction(e, () => onDelete(note.id))}
//               aria-label="Delete note"
//             >
//               <Trash2 size={16} className="text-gray-500" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default NoteCard;


import React from 'react';

export interface NoteProps {
  id?: string;
  title?: string;
  content: string;
  color?: string;
  isPinned?: boolean;
  isArchived?: boolean;
  isTrashed?: boolean;
  createdAt?: string;
  updatedAt?: string;
  tags?: string[];
  user_id?: string;
  ai?: any; // For AI response associated with this note
}

const NoteCard: React.FC<{ note: NoteProps }> = ({ note }) => {
  return (
    <div className={`rounded-lg shadow p-4 ${note.color ? `bg-pastel-${note.color}` : 'bg-white'}`}>
      {note.title && <h3 className="font-medium text-lg mb-2">{note.title}</h3>}
      <p className="text-gray-700">{note.content}</p>
      
      {note.tags && note.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {note.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-0.5 bg-white bg-opacity-60 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteCard;