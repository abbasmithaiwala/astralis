
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StickyNote, Pin, Archive, Trash2, Tag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  tags: string[];
}

const NoteSidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, tags }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navLinks = [
    {
      name: 'Notes',
      path: '/notes',
      icon: <StickyNote size={20} />,
    },
    {
      name: 'Pinned',
      path: '/notes/pinned',
      icon: <Pin size={20} />,
    },
    {
      name: 'Archive',
      path: '/notes/archived',
      icon: <Archive size={20} />,
    },
    {
      name: 'Trash',
      path: '/notes/trash',
      icon: <Trash2 size={20} />,
    },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      {/* Sidebar toggle button (mobile) */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={onToggle}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="p-4 flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold bg-gradient-to-r from-pastel-pink-dark to-pastel-purple-dark bg-clip-text text-transparent">
                PastelNotes
              </span>
            </Link>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={onToggle}
              aria-label="Close sidebar"
            >
              <X size={20} />
            </Button>
          </div>
          
          <nav className="flex-1 px-3 py-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-pastel-pink hover:bg-opacity-20 transition-colors duration-200",
                      isActive(link.path) && "bg-pastel-pink bg-opacity-30 text-pastel-pink-dark font-medium"
                    )}
                  >
                    <span className="mr-3">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {tags.length > 0 && (
              <div className="mt-8">
                <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Tags
                </h3>
                <ul className="space-y-1">
                  {tags.map((tag) => (
                    <li key={tag}>
                      <Link
                        to={`/notes/tags/${tag}`}
                        className={cn(
                          "flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-pastel-pink hover:bg-opacity-20 transition-colors duration-200",
                          isActive(`/notes/tags/${tag}`) && "bg-pastel-pink bg-opacity-30 text-pastel-pink-dark font-medium"
                        )}
                      >
                        <Tag size={16} className="mr-3" />
                        <span className="truncate">{tag}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>
          
          <div className="p-4 border-t border-gray-200">
            <Link
              to="/settings"
              className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-pastel-pink hover:bg-opacity-20 transition-colors duration-200"
            >
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default NoteSidebar;
