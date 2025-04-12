
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-semibold text-gray-900 dark:text-white">
            <span className="text-[#FCA591]">Pastel</span>Notes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-[#FCA591] dark:hover:text-[#FCA591] transition-colors">
            Home
          </Link>
          <Link to="/features" className="text-gray-700 dark:text-gray-300 hover:text-[#FCA591] dark:hover:text-[#FCA591] transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-[#FCA591] dark:hover:text-[#FCA591] transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-[#FCA591] dark:hover:text-[#FCA591] transition-colors">
            About
          </Link>
          <div className="pl-2 border-l border-gray-200 dark:border-gray-700">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
          <div className="space-x-2">
            <Button asChild variant="outline" className="rounded-full border-[#FCA591] text-[#FCA591] hover:bg-[#FCA591]/10">
              <Link to="/login">Log In</Link>
            </Button>
            <Button asChild className="rounded-full bg-[#FCA591] hover:bg-[#FCA591]/90 text-white">
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
            className="rounded-full"
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex flex-col space-y-4 animate-fade-in z-50">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-[#FCA591] dark:hover:text-[#FCA591] transition-colors" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/features" className="text-gray-700 dark:text-gray-300 hover:text-[#FCA591] dark:hover:text-[#FCA591] transition-colors" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link to="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-[#FCA591] dark:hover:text-[#FCA591] transition-colors" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-[#FCA591] dark:hover:text-[#FCA591] transition-colors" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <div className="flex flex-col space-y-2">
            <Button asChild variant="outline" className="rounded-full border-[#FCA591] text-[#FCA591] hover:bg-[#FCA591]/10">
              <Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
            </Button>
            <Button asChild className="rounded-full bg-[#FCA591] hover:bg-[#FCA591]/90 text-white">
              <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
