
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white/95 dark:bg-[#1A1F2C]/95 backdrop-blur-sm shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-semibold text-[#333333] dark:text-white">
            Pastel<span className="text-[#9b87f5]">Notes</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#555555] dark:text-[#C8C8C9] hover:text-[#333333] dark:hover:text-white hover:bg-transparent dark:hover:bg-transparent focus:bg-transparent dark:focus:bg-transparent data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white dark:bg-[#222222] p-4 rounded-md shadow-lg border border-[#F1F1F1] dark:border-[#333333]">
                  <div className="grid grid-cols-2 gap-4 w-[600px]">
                    <Link to="/features" className="block p-4 rounded-md hover:bg-[#F6F6F7] dark:hover:bg-[#333333] group">
                      <div className="p-2 rounded-full bg-[#E5DEFF] dark:bg-[#403E43] inline-flex mb-2">
                        <svg className="h-5 w-5 text-[#8B5CF6] dark:text-[#D6BCFA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <line x1="9" y1="3" x2="9" y2="21" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-[#333333] dark:text-white mb-1 group-hover:text-[#9b87f5]">Documents</h3>
                      <p className="text-sm text-[#8A898C] dark:text-[#9F9EA1]">Create beautiful documentation.</p>
                    </Link>
                    <Link to="/features" className="block p-4 rounded-md hover:bg-[#F6F6F7] dark:hover:bg-[#333333] group">
                      <div className="p-2 rounded-full bg-[#FFDEE2] dark:bg-[#403E43] inline-flex mb-2">
                        <svg className="h-5 w-5 text-[#D946EF] dark:text-[#D6BCFA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-[#333333] dark:text-white mb-1 group-hover:text-[#9b87f5]">Diagrams</h3>
                      <p className="text-sm text-[#8A898C] dark:text-[#9F9EA1]">Visualize systems and ideas.</p>
                    </Link>
                    <Link to="/features" className="block p-4 rounded-md hover:bg-[#F6F6F7] dark:hover:bg-[#333333] group">
                      <div className="p-2 rounded-full bg-[#D3E4FD] dark:bg-[#403E43] inline-flex mb-2">
                        <svg className="h-5 w-5 text-[#0EA5E9] dark:text-[#0EA5E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="8" y1="6" x2="21" y2="6" />
                          <line x1="8" y1="12" x2="21" y2="12" />
                          <line x1="8" y1="18" x2="21" y2="18" />
                          <line x1="3" y1="6" x2="3.01" y2="6" />
                          <line x1="3" y1="12" x2="3.01" y2="12" />
                          <line x1="3" y1="18" x2="3.01" y2="18" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-[#333333] dark:text-white mb-1 group-hover:text-[#9b87f5]">Notes</h3>
                      <p className="text-sm text-[#8A898C] dark:text-[#9F9EA1]">Organize thoughts and ideas.</p>
                    </Link>
                    <Link to="/features" className="block p-4 rounded-md hover:bg-[#F6F6F7] dark:hover:bg-[#333333] group">
                      <div className="p-2 rounded-full bg-[#FDE1D3] dark:bg-[#403E43] inline-flex mb-2">
                        <svg className="h-5 w-5 text-[#F97316] dark:text-[#FEC6A1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-[#333333] dark:text-white mb-1 group-hover:text-[#9b87f5]">Calendar</h3>
                      <p className="text-sm text-[#8A898C] dark:text-[#9F9EA1]">Plan and schedule events.</p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/pricing" className="block px-4 py-2 text-[#555555] dark:text-[#C8C8C9] hover:text-[#333333] dark:hover:text-white transition-colors">
                  Pricing
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="block px-4 py-2 text-[#555555] dark:text-[#C8C8C9] hover:text-[#333333] dark:hover:text-white transition-colors">
                  About
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="px-2 border-l border-[#F1F1F1] dark:border-[#333333]">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-[#555555] dark:text-[#C8C8C9] hover:bg-[#F6F6F7] dark:hover:bg-[#333333]"
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
          <div className="space-x-2">
            <Button asChild variant="outline" className="rounded-md border-[#C8C8C9] text-[#555555] hover:bg-[#F1F1F1] dark:border-[#403E43] dark:text-[#C8C8C9] dark:hover:bg-[#333333]">
              <Link to="/login">Log In</Link>
            </Button>
            <Button asChild className="rounded-md bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="rounded-full text-[#555555] dark:text-[#C8C8C9] hover:bg-[#F6F6F7] dark:hover:bg-[#333333]"
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="text-[#555555] dark:text-[#C8C8C9] hover:bg-[#F6F6F7] dark:hover:bg-[#333333]"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-[#1A1F2C] border-t border-[#F1F1F1] dark:border-[#333333] shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in z-50">
          <Link to="/features" className="py-2 text-[#555555] dark:text-[#C8C8C9] hover:text-[#333333] dark:hover:text-white" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link to="/pricing" className="py-2 text-[#555555] dark:text-[#C8C8C9] hover:text-[#333333] dark:hover:text-white" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link to="/about" className="py-2 text-[#555555] dark:text-[#C8C8C9] hover:text-[#333333] dark:hover:text-white" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <div className="flex flex-col space-y-2 pt-3 border-t border-[#F1F1F1] dark:border-[#333333]">
            <Button asChild variant="outline" className="w-full rounded-md border-[#C8C8C9] text-[#555555] hover:bg-[#F1F1F1] dark:border-[#403E43] dark:text-[#C8C8C9] dark:hover:bg-[#333333]">
              <Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
            </Button>
            <Button asChild className="w-full rounded-md bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
