
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  StickyNote, Calendar, Tag, CheckCircle, Shield, Smartphone, 
  Clock, RefreshCcw, CheckSquare 
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Minimal Hero Section */}
      <section className="relative pt-28 pb-28 md:pt-36 md:pb-36">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCA591]/30 via-[#f9e8b3]/30 to-[#cdeff1]/30 -z-10"></div>
        
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
                Simple & Beautiful <span className="text-[#FCA591]">Note Taking</span>
              </h1>
              <p className="text-lg max-w-lg mx-auto md:mx-0 mb-8 text-gray-600 dark:text-gray-300">
                Capture your thoughts and stay organized with an intuitive, beautiful notes app that works anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-[#FCA591] hover:bg-[#FCA591]/90 text-white dark:text-gray-900 rounded-full px-8">
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800/30 rounded-full px-8">
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <div className="relative z-10 rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="PastelNotes App" 
                    className="w-full object-cover rounded-xl"
                  />
                </div>
                
                {/* Floating Sample Notes */}
                <div className="absolute -top-4 -right-4 w-32 h-24 bg-[#FFFF9F] p-3 rounded-lg shadow-lg transform rotate-3 hidden md:block">
                  <h3 className="text-xs font-medium">Ideas</h3>
                  <p className="text-xs mt-1">New project ideas...</p>
                </div>
                <div className="absolute -bottom-4 -left-4 w-36 h-24 bg-[#cdeff1] p-3 rounded-lg shadow-lg transform -rotate-2 hidden md:block">
                  <h3 className="text-xs font-medium">Shopping</h3>
                  <p className="text-xs mt-1">Eggs, Milk, Bread...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Simple & Intuitive Features
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Everything you need to capture and organize your thoughts
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
              <div className="bg-[#FCA591]/20 rounded-full p-4 mb-4">
                <Tag className="h-6 w-6 text-[#FCA591]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Smart Tags</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Organize your notes with tags for easy filtering and searching.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
              <div className="bg-[#cdeff1]/20 rounded-full p-4 mb-4">
                <CheckSquare className="h-6 w-6 text-[#cdeff1]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Task Lists</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create interactive checklists for your to-dos and shopping lists.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
              <div className="bg-[#f9e8b3]/20 rounded-full p-4 mb-4">
                <Shield className="h-6 w-6 text-[#f9e8b3]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Secure Sync</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your notes safely sync across all your devices, always up to date.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Color Palette Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">
                Beautiful & Customizable
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Express yourself with our soothing color palette. Customize your notes to make them uniquely yours.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FCA591]"></div>
                <div className="w-12 h-12 rounded-full bg-[#FFFF9F]"></div>
                <div className="w-12 h-12 rounded-full bg-[#cdeff1]"></div>
                <div className="w-12 h-12 rounded-full bg-[#f9e8b3]"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0">
              <div className="bg-[#FCA591] p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 text-gray-800">Project Ideas</h3>
                <p className="text-sm text-gray-700">Building a website, learning React...</p>
              </div>
              
              <div className="bg-[#FFFF9F] p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 text-gray-800">Shopping List</h3>
                <p className="text-sm text-gray-700">Milk, eggs, bread, apples...</p>
              </div>
              
              <div className="bg-[#f9e8b3] p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 text-gray-800">Important!</h3>
                <p className="text-sm text-gray-700">Mom's birthday next week</p>
              </div>
              
              <div className="bg-[#cdeff1] p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 text-gray-800">Meeting Notes</h3>
                <p className="text-sm text-gray-700">Project timeline, budget...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Get Organized?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-400">
            Try PastelNotes today—it's free to get started.
          </p>
          <Button asChild size="lg" className="bg-[#FCA591] hover:bg-[#FCA591]/90 text-white dark:text-gray-900 rounded-full px-8">
            <Link to="/signup">Create Your Free Account</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
