
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Archive, 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Settings, 
  Tag, 
  Trash2 
} from 'lucide-react';

interface NoteSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  tags: string[];
}

const NoteSidebar: React.FC<NoteSidebarProps> = ({ isOpen, onToggle, tags }) => {
  const location = useLocation();
  
  const activeClass = 'bg-sidebar-accent text-sidebar-accent-foreground font-medium';
  const inactiveClass = 'text-sidebar-foreground hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground';
  
  return (
    <>
      <div 
        className={`fixed inset-y-0 left-0 z-20 w-64 transform bg-sidebar dark:bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
          <h2 className="text-xl font-semibold text-sidebar-primary">PastelNotes</h2>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onToggle}
            className="md:hidden"
            aria-label="Close sidebar"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="px-3 py-4">
          <nav className="space-y-1">
            <NavLink
              to="/notes"
              end
              className={({ isActive }) => 
                `flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              <Home className="mr-3 h-5 w-5" />
              All Notes
            </NavLink>
            
            <NavLink
              to="/notes/pinned"
              className={({ isActive }) => 
                `flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-3 h-5 w-5"
              >
                <line x1="12" y1="17" x2="12" y2="22" />
                <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
              </svg>
              Pinned
            </NavLink>
            
            <NavLink
              to="/notes/archived"
              className={({ isActive }) => 
                `flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              <Archive className="mr-3 h-5 w-5" />
              Archive
            </NavLink>
            
            <NavLink
              to="/notes/trash"
              className={({ isActive }) => 
                `flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              <Trash2 className="mr-3 h-5 w-5" />
              Trash
            </NavLink>
            
            <Separator className="my-4 bg-sidebar-border" />
            
            <h3 className="px-3 text-xs font-semibold text-sidebar-foreground uppercase tracking-wider">
              Tags
            </h3>
            
            <div className="mt-2 space-y-1 max-h-48 overflow-y-auto">
              {tags.length > 0 ? (
                tags.map((tag) => (
                  <NavLink
                    key={tag}
                    to={`/notes/tags/${tag}`}
                    className={({ isActive }) => 
                      `flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                        isActive ? activeClass : inactiveClass
                      }`
                    }
                  >
                    <Tag className="mr-3 h-4 w-4" />
                    {tag}
                  </NavLink>
                ))
              ) : (
                <div className="px-3 py-2 text-sm text-sidebar-foreground/70 italic">
                  No tags yet
                </div>
              )}
            </div>

            <Separator className="my-4 bg-sidebar-border" />
            
            <NavLink
              to="/settings"
              className={({ isActive }) => 
                `flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </NavLink>
          </nav>
        </div>
      </div>
      
      {/* Mobile sidebar toggle button */}
      {!isOpen && (
        <Button 
          variant="outline" 
          size="icon"
          onClick={onToggle}
          className="fixed top-4 left-4 z-10 md:hidden"
          aria-label="Open sidebar"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default NoteSidebar;
