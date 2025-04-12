
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/hooks/use-theme';
import { toast } from 'sonner';
import { 
  CheckCircle, 
  Moon, 
  Sun, 
  User, 
  Mail, 
  Bell, 
  Clock, 
  HelpCircle, 
  ChevronLeft
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const SettingsPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  const handleSaveProfile = () => {
    toast.success('Profile settings saved!');
  };

  const handleSaveNotifications = () => {
    toast.success('Notification settings saved!');
  };

  const handleResetSettings = () => {
    toast.success('Settings have been reset to default');
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7] dark:bg-[#1A1F2C] pb-12">
      {/* Header */}
      <header className="bg-white dark:bg-[#222222] shadow-sm px-6 py-4 flex items-center">
        <Link 
          to="/notes" 
          className="text-[#555555] dark:text-[#9F9EA1] hover:text-[#333333] dark:hover:text-white transition-colors mr-4"
        >
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-xl font-medium text-[#333333] dark:text-white">Settings</h1>
      </header>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-[#8E9196] dark:text-[#9F9EA1]">
            Customize your PastelNotes experience
          </p>
          <Button 
            variant="outline" 
            onClick={handleResetSettings}
            className="text-sm border-[#C8C8C9] text-[#555555] dark:border-[#403E43] dark:text-[#9F9EA1] hover:bg-[#F1F1F1] dark:hover:bg-[#333333]"
          >
            Reset to Default
          </Button>
        </div>

        <div className="space-y-6">
          {/* Appearance Section */}
          <div className="bg-white dark:bg-[#222222] rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#E5DEFF] dark:bg-[#403E43] mr-3">
                <Sun className="h-5 w-5 text-[#8B5CF6] dark:text-[#D6BCFA]" />
              </div>
              <h2 className="text-lg font-medium text-[#333333] dark:text-white">Appearance</h2>
            </div>
            <p className="text-sm text-[#8E9196] dark:text-[#9F9EA1] mb-6">
              Customize how PastelNotes looks
            </p>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <Moon className="h-4 w-4 text-[#8A898C] dark:text-[#9F9EA1]" />
                <Label htmlFor="dark-mode" className="text-[#333333] dark:text-white font-normal">Dark Mode</Label>
              </div>
              <Switch 
                id="dark-mode" 
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-[#8B5CF6] data-[state=checked]:border-[#8B5CF6]"
              />
            </div>
          </div>

          {/* Profile Section */}
          <div className="bg-white dark:bg-[#222222] rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#FFDEE2] dark:bg-[#403E43] mr-3">
                <User className="h-5 w-5 text-[#D946EF] dark:text-[#D6BCFA]" />
              </div>
              <h2 className="text-lg font-medium text-[#333333] dark:text-white">Profile</h2>
            </div>
            <p className="text-sm text-[#8E9196] dark:text-[#9F9EA1] mb-6">
              Manage your account information
            </p>

            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="display-name" className="text-[#555555] dark:text-[#9F9EA1] font-normal">
                  Display Name
                </Label>
                <Input 
                  id="display-name" 
                  defaultValue="User" 
                  className="border-[#C8C8C9] focus:border-[#9b87f5] focus:ring-[#9b87f5] dark:border-[#403E43] dark:bg-[#333333] dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#555555] dark:text-[#9F9EA1] font-normal">
                  Email Address
                </Label>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-[#8A898C] dark:text-[#9F9EA1] mr-2" />
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="user@example.com" 
                    disabled 
                    className="border-[#C8C8C9] bg-[#F6F6F7] text-[#8A898C] dark:border-[#403E43] dark:bg-[#333333] dark:text-[#9F9EA1]"
                  />
                </div>
              </div>
            </div>

            <Button 
              onClick={handleSaveProfile} 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
            >
              Save Changes
            </Button>
          </div>

          {/* Notifications Section */}
          <div className="bg-white dark:bg-[#222222] rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#FDE1D3] dark:bg-[#403E43] mr-3">
                <Bell className="h-5 w-5 text-[#F97316] dark:text-[#FEC6A1]" />
              </div>
              <h2 className="text-lg font-medium text-[#333333] dark:text-white">Notifications</h2>
            </div>
            <p className="text-sm text-[#8E9196] dark:text-[#9F9EA1] mb-6">
              Control how you receive notifications
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <Label htmlFor="email-notifications" className="text-[#333333] dark:text-white font-normal">
                  Email Notifications
                </Label>
                <Switch 
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                  className="data-[state=checked]:bg-[#8B5CF6] data-[state=checked]:border-[#8B5CF6]"
                />
              </div>
              
              <Separator className="bg-[#F1F1F1] dark:bg-[#333333]" />
              
              <div className="flex items-center justify-between py-2">
                <Label htmlFor="push-notifications" className="text-[#333333] dark:text-white font-normal">
                  Push Notifications
                </Label>
                <Switch 
                  id="push-notifications"
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                  className="data-[state=checked]:bg-[#8B5CF6] data-[state=checked]:border-[#8B5CF6]"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                onClick={handleSaveNotifications}
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              >
                Save Preferences
              </Button>
            </div>
          </div>

          {/* Note Preferences */}
          <div className="bg-white dark:bg-[#222222] rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#D3E4FD] dark:bg-[#403E43] mr-3">
                <Clock className="h-5 w-5 text-[#0EA5E9] dark:text-[#0EA5E9]" />
              </div>
              <h2 className="text-lg font-medium text-[#333333] dark:text-white">Note Preferences</h2>
            </div>
            <p className="text-sm text-[#8E9196] dark:text-[#9F9EA1] mb-6">
              Customize how you interact with notes
            </p>

            <div className="flex items-center justify-between py-2">
              <Label htmlFor="auto-save" className="text-[#333333] dark:text-white font-normal">
                Auto-Save Notes
              </Label>
              <Switch 
                id="auto-save" 
                checked={autoSave}
                onCheckedChange={setAutoSave}
                className="data-[state=checked]:bg-[#8B5CF6] data-[state=checked]:border-[#8B5CF6]"
              />
            </div>
          </div>

          {/* Help & Support */}
          <div className="bg-white dark:bg-[#222222] rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#F2FCE2] dark:bg-[#403E43] mr-3">
                <HelpCircle className="h-5 w-5 text-[#0FA0CE] dark:text-[#D3E4FD]" />
              </div>
              <h2 className="text-lg font-medium text-[#333333] dark:text-white">Help & Support</h2>
            </div>
            <p className="text-sm text-[#8E9196] dark:text-[#9F9EA1] mb-6">
              Get help using PastelNotes
            </p>

            <Accordion type="single" collapsible className="border-none">
              <AccordionItem value="faq-1" className="border-b border-[#F1F1F1] dark:border-[#333333]">
                <AccordionTrigger className="text-[#333333] dark:text-white py-3 hover:no-underline">
                  How do I create a note?
                </AccordionTrigger>
                <AccordionContent className="text-[#555555] dark:text-[#9F9EA1] pb-4">
                  To create a new note, click on the "+" button located at the bottom right of the screen. This will open the note editor where you can add your title and content.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="border-b border-[#F1F1F1] dark:border-[#333333]">
                <AccordionTrigger className="text-[#333333] dark:text-white py-3 hover:no-underline">
                  How do I pin a note?
                </AccordionTrigger>
                <AccordionContent className="text-[#555555] dark:text-[#9F9EA1] pb-4">
                  To pin a note, hover over the note card and click on the pin icon. Pinned notes will always appear at the top of your notes list.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="border-b-0">
                <AccordionTrigger className="text-[#333333] dark:text-white py-3 hover:no-underline">
                  How do I add tags to a note?
                </AccordionTrigger>
                <AccordionContent className="text-[#555555] dark:text-[#9F9EA1] pb-4">
                  When editing a note, you can add tags in the tags field at the bottom of the editor. Press Enter after typing a tag to add it.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
