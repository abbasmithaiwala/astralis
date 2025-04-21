import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StickyNote, Pin, Archive, Trash2, Tag, Menu, X, LogOut, Settings, User, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  tags: string[];
}

const NoteSidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, tags }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.user_metadata?.name || '',
    dob: user?.user_metadata?.dob || '',
    gender: user?.user_metadata?.gender || 'prefer not to say',
    phoneNumber: user?.user_metadata?.phone_number || '',
  });

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

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to log out');
    }
  };

  const handleProfileUpdate = async () => {
    try {
      const { data, error: metadataError } = await supabase.auth.updateUser({
        data: {
          name: profileData.name,
          dob: profileData.dob,
          gender: profileData.gender,
          phone_number: profileData.phoneNumber,
        }
      });

      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          name: profileData.name,
          dob: profileData.dob,
          gender: profileData.gender,
          phone_number: profileData.phoneNumber,
        })
        .eq('id', user?.id);

      if (metadataError || profileError) {
        toast.error(metadataError?.message || profileError?.message);
        return;
      }

      toast.success('Profile updated successfully');
      setIsProfileOpen(false);
    } catch (error) {
      console.error('Profile update error:', error);
      toast.error('Failed to update profile');
    }
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden text-[#054A40]"
        onClick={onToggle}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-[#054A40]/10 transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="p-4 flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-serif font-semibold text-[#054A40]">
                Astralis
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
                      "flex items-center px-4 py-2 rounded-md text-[#054A40]/70 hover:bg-[#054A40]/5 transition-colors duration-200",
                      isActive(link.path) && "bg-[#054A40]/10 text-[#054A40] font-medium"
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
                          isActive(`/notes/tags/${tag}`) && "bg-pastel-pink bg-opacity-30 text-[#054A40] font-medium"
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
            <Button
              variant="ghost"
              className="flex items-center w-full px-4 py-2 rounded-md text-gray-700 hover:bg-pastel-pink hover:bg-opacity-20 transition-colors duration-200"
              onClick={() => setIsSettingsOpen(true)}
            >
              <Settings size={16} className="mr-3" />
              <span>Settings</span>
            </Button>
            
            <Button
              variant="ghost"
              className="flex items-center w-full px-4 py-2 rounded-md text-gray-700 hover:bg-pastel-pink hover:bg-opacity-20 transition-colors duration-200"
              onClick={handleLogout}
            >
              <LogOut size={16} className="mr-3" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>

      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DialogContent className="bg-[#FEFBF6] border-[#E5DCC3]/30">
          <DialogHeader>
            <DialogTitle className="text-[#054A40] heading-serif text-xl">Settings</DialogTitle>
            <DialogDescription className="text-[#054A40]/70">
              Configure your Astralis experience
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Button 
                className="w-full bg-[#054A40] text-white hover:bg-[#054A40]/90 rounded-full" 
                onClick={() => {
                  setIsSettingsOpen(false);
                  setIsProfileOpen(true);
                }}
              >
                Edit Profile
              </Button>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="theme" className="text-[#054A40]">Theme</Label>
              <select 
                id="theme" 
                className="w-full p-2 border border-[#E5DCC3]/30 rounded-full bg-white text-[#054A40] focus:outline-none focus:ring-2 focus:ring-[#054A40]/20"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System Default</option>
              </select>
            </div>
          </div>
          
          <DialogFooter>
            <Button className="bg-[#054A40] text-white hover:bg-[#054A40]/90 rounded-full" onClick={() => setIsSettingsOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="bg-[#FEFBF6] border-[#E5DCC3]/30">
          <DialogHeader>
            <DialogTitle className="text-[#054A40] heading-serif text-xl">Edit Profile</DialogTitle>
            <DialogDescription className="text-[#054A40]/70">
              Update your personal information
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#054A40]">Name</Label>
              <Input
                id="name"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                className="border-[#E5DCC3]/30 focus-visible:ring-1 focus-visible:ring-[#054A40] focus-visible:ring-offset-0 focus-visible:border-[#054A40] rounded-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dob" className="text-[#054A40]">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
                value={profileData.dob}
                onChange={(e) => setProfileData({ ...profileData, dob: e.target.value })}
                className="border-[#E5DCC3]/30 focus-visible:ring-1 focus-visible:ring-[#054A40] focus-visible:ring-offset-0 focus-visible:border-[#054A40] rounded-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gender" className="text-[#054A40]">Gender</Label>
              <select
                id="gender"
                value={profileData.gender}
                onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
                className="w-full p-2 border border-[#E5DCC3]/30 rounded-full bg-white text-[#054A40] focus-visible:ring-1 focus-visible:ring-[#054A40] focus-visible:ring-offset-0 focus-visible:border-[#054A40] focus:outline-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer not to say">Prefer not to say</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#054A40]">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={profileData.phoneNumber}
                onChange={(e) => setProfileData({ ...profileData, phoneNumber: e.target.value })}
                className="border-[#E5DCC3]/30 focus-visible:ring-1 focus-visible:ring-[#054A40] focus-visible:ring-offset-0 focus-visible:border-[#054A40] rounded-full"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsProfileOpen(false)}
              className="rounded-full border-[#054A40] text-[#054A40] hover:bg-[#054A40]/5"
            >
              Cancel
            </Button>
            <Button
              onClick={handleProfileUpdate}
              className="bg-[#054A40] text-white hover:bg-[#054A40]/90 rounded-full"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NoteSidebar;
