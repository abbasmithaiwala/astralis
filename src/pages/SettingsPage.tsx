
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/hooks/use-theme';
import { toast } from 'sonner';
import { Moon, Sun, User, Clock, Bell, Shield, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <Button 
            variant="outline" 
            onClick={handleResetSettings}
            className="text-sm"
          >
            Reset to Default
          </Button>
        </div>

        <div className="space-y-6">
          {/* Appearance Settings */}
          <Card className="border-border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader>
              <div className="flex items-center">
                <Sun className="mr-3 h-5 w-5 text-pastel-pink" />
                <CardTitle>Appearance</CardTitle>
              </div>
              <CardDescription>Customize how PastelNotes looks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Moon className="h-5 w-5 text-pastel-pink-dark dark:text-pastel-pink" />
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                </div>
                <Switch 
                  id="dark-mode" 
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                />
              </div>
            </CardContent>
          </Card>

          {/* Profile Settings */}
          <Card className="border-border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader>
              <div className="flex items-center">
                <User className="mr-3 h-5 w-5 text-pastel-blue-dark" />
                <CardTitle>Profile</CardTitle>
              </div>
              <CardDescription>Manage your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="display-name">Display Name</Label>
                  <Input id="display-name" defaultValue="User" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="user@example.com" disabled />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleSaveProfile} 
                className="bg-pastel-pink hover:bg-opacity-90 dark:bg-pastel-pink dark:hover:bg-opacity-85"
              >
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          {/* Notifications Settings */}
          <Card className="border-border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader>
              <div className="flex items-center">
                <Bell className="mr-3 h-5 w-5 text-pastel-blue" />
                <CardTitle>Notifications</CardTitle>
              </div>
              <CardDescription>Control how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <Switch 
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications">Push Notifications</Label>
                <Switch 
                  id="push-notifications"
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleSaveNotifications}
                className="bg-pastel-blue hover:bg-opacity-90 dark:bg-pastel-blue dark:hover:bg-opacity-85"
              >
                Save Preferences
              </Button>
            </CardFooter>
          </Card>

          {/* Note Preferences */}
          <Card className="border-border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader>
              <div className="flex items-center">
                <Clock className="mr-3 h-5 w-5 text-pastel-green-dark" />
                <CardTitle>Note Preferences</CardTitle>
              </div>
              <CardDescription>Customize how you interact with notes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-save">Auto-Save Notes</Label>
                <Switch 
                  id="auto-save" 
                  checked={autoSave}
                  onCheckedChange={setAutoSave}
                />
              </div>
            </CardContent>
          </Card>

          {/* Help & Support */}
          <Card className="border-border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader>
              <div className="flex items-center">
                <HelpCircle className="mr-3 h-5 w-5 text-pastel-yellow-dark" />
                <CardTitle>Help & Support</CardTitle>
              </div>
              <CardDescription>Get help using PastelNotes</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="faq-1">
                  <AccordionTrigger>How do I create a note?</AccordionTrigger>
                  <AccordionContent>
                    To create a new note, click on the "+" button located at the bottom right of the screen. This will open the note editor where you can add your title and content.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger>How do I pin a note?</AccordionTrigger>
                  <AccordionContent>
                    To pin a note, hover over the note card and click on the pin icon. Pinned notes will always appear at the top of your notes list.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger>How do I add tags to a note?</AccordionTrigger>
                  <AccordionContent>
                    When editing a note, you can add tags in the tags field at the bottom of the editor. Press Enter after typing a tag to add it.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
