import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-[#FEFBF6] py-4 px-6 sticky top-0 z-50 border-b border-[#E5DCC3]/30">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold heading-serif">
            PastelNotes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-[#054A40] hover:text-[#054A40]/70 transition-colors font-medium">
            Home
          </Link>
          <Link to="/features" className="text-[#054A40] hover:text-[#054A40]/70 transition-colors font-medium">
            Features
          </Link>
          <Link to="/pricing" className="text-[#054A40] hover:text-[#054A40]/70 transition-colors font-medium">
            Pricing
          </Link>
          <Link to="/about" className="text-[#054A40] hover:text-[#054A40]/70 transition-colors font-medium">
            About
          </Link>
          <div className="space-x-3">
            <Button asChild variant="ghost" className="text-[#054A40] hover:text-[#054A40]/70 hover:bg-[#FFF8E9]">
              <Link to="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-[#054A40] text-white hover:bg-[#054A40]/90 rounded-full px-6">
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
            className="text-[#054A40]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#FEFBF6]/95 backdrop-blur-md shadow-lg py-6 px-6 flex flex-col space-y-5 animate-fade-in">
          <Link to="/" className="text-[#054A40] hover:text-[#054A40]/70 font-medium transition-colors" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/features" className="text-[#054A40] hover:text-[#054A40]/70 font-medium transition-colors" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link to="/pricing" className="text-[#054A40] hover:text-[#054A40]/70 font-medium transition-colors" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link to="/about" className="text-[#054A40] hover:text-[#054A40]/70 font-medium transition-colors" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <div className="flex flex-col space-y-3 pt-2">
            <Button asChild variant="ghost" className="text-[#054A40] hover:text-[#054A40]/70 hover:bg-[#FFF8E9] w-full justify-start">
              <Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
            </Button>
            <Button asChild className="bg-[#054A40] text-white hover:bg-[#054A40]/90 rounded-full w-full">
              <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
