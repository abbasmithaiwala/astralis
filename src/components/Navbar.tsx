import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/80 py-4 px-6 sticky top-0 z-50 border-b border-pastel-neutral-200/50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-semibold gradient-text">
            PastelNotes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-pastel-neutral-700 hover:text-pastel-pink-dark transition-colors font-medium">
            Home
          </Link>
          <Link to="/features" className="text-pastel-neutral-700 hover:text-pastel-pink-dark transition-colors font-medium">
            Features
          </Link>
          <Link to="/about" className="text-pastel-neutral-700 hover:text-pastel-pink-dark transition-colors font-medium">
            About
          </Link>
          <div className="space-x-3">
            <Button asChild variant="ghost" className="text-pastel-neutral-700 hover:text-pastel-pink-dark hover:bg-pastel-pink-light/30">
              <Link to="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-pastel-pink-dark text-white hover:bg-pastel-pink-dark/90 rounded-full px-6">
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
            className="text-pastel-neutral-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-6 px-6 flex flex-col space-y-5 animate-fade-in">
          <Link to="/" className="text-pastel-neutral-700 hover:text-pastel-pink-dark font-medium transition-colors" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/features" className="text-pastel-neutral-700 hover:text-pastel-pink-dark font-medium transition-colors" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link to="/about" className="text-pastel-neutral-700 hover:text-pastel-pink-dark font-medium transition-colors" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <div className="flex flex-col space-y-3 pt-2">
            <Button asChild variant="ghost" className="text-pastel-neutral-700 hover:text-pastel-pink-dark hover:bg-pastel-pink-light/30 w-full justify-start">
              <Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
            </Button>
            <Button asChild className="bg-pastel-pink-dark text-white hover:bg-pastel-pink-dark/90 rounded-full w-full">
              <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
