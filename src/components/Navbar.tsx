
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-semibold bg-gradient-to-r from-pastel-pink-dark to-pastel-purple-dark bg-clip-text text-transparent">
            PastelNotes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-pastel-pink-dark transition-colors">
            Home
          </Link>
          <Link to="/features" className="text-gray-700 hover:text-pastel-pink-dark transition-colors">
            Features
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-pastel-pink-dark transition-colors">
            About
          </Link>
          <div className="space-x-2">
            <Button asChild variant="outline" className="btn-pastel-secondary">
              <Link to="/login">Log In</Link>
            </Button>
            <Button asChild className="btn-pastel-primary">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <Link to="/" className="text-gray-700 hover:text-pastel-pink-dark transition-colors" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/features" className="text-gray-700 hover:text-pastel-pink-dark transition-colors" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-pastel-pink-dark transition-colors" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <div className="flex flex-col space-y-2">
            <Button asChild variant="outline" className="btn-pastel-secondary">
              <Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
            </Button>
            <Button asChild className="btn-pastel-primary w-full">
              <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
