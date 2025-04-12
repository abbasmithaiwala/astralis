
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  StickyNote, Calendar, Tag, CheckCircle, Shield, Smartphone, 
  Clock, Heart, Star, RefreshCcw, Zap, CheckSquare 
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-36 md:pb-44">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FCA591] via-[#f9e8b3] to-[#cdeff1] dark:from-[#594754] dark:via-[#453E40] dark:to-[#2D3A4A] -z-10"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] -z-10"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
              Capture Your <span className="text-[#FCA591] dark:text-[#FCA591]">Thoughts</span>, 
              <br className="hidden sm:block" /> Organize Your <span className="text-[#cdeff1] dark:text-[#cdeff1]">Ideas</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-700 dark:text-gray-300">
              A beautiful, intuitive notes app that helps you capture ideas, make lists, and stay organized—anytime, anywhere, even offline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-[#FCA591] dark:text-gray-900 dark:hover:bg-opacity-90 rounded-full px-8">
                <Link to="/signup">Get Started — Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-800 text-gray-800 hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-white/10 rounded-full px-8">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
          
          {/* App Preview */}
          <div className="mt-16 relative max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="rounded-2xl shadow-2xl overflow-hidden border border-white/30 bg-white/20 backdrop-blur-sm dark:bg-gray-900/40">
              <img 
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="PastelNotes App" 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.2)] dark:to-[rgba(0,0,0,0.5)]"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute top-1/4 -right-4 w-40 h-32 bg-[#FFFF9F] dark:bg-[#FFFF9F]/80 p-4 rounded-lg shadow-lg rotate-6 hidden md:block">
              <h3 className="font-medium text-sm">Ideas</h3>
              <p className="text-xs mt-1">Build a new website. Learn React...</p>
            </div>
            <div className="absolute bottom-1/3 -left-4 w-44 h-32 bg-[#cdeff1] dark:bg-[#cdeff1]/80 p-4 rounded-lg shadow-lg -rotate-3 hidden md:block">
              <h3 className="font-medium text-sm">Shopping List</h3>
              <p className="text-xs mt-1">Milk, Eggs, Bread, Apples...</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Everything You Need in a Notes App
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Packed with features to help you capture and organize your thoughts with ease
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-shadow bg-gray-50 dark:bg-gray-800">
              <div className="bg-[#FCA591]/20 rounded-full p-4 mb-4">
                <Tag className="h-6 w-6 text-[#FCA591]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Smart Organization</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tag, pin, and organize your notes for quick and easy access whenever you need them.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-shadow bg-gray-50 dark:bg-gray-800">
              <div className="bg-[#FFFF9F]/20 rounded-full p-4 mb-4">
                <CheckSquare className="h-6 w-6 text-[#FFFF9F]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Task Lists</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create interactive checklists for shopping, to-dos, and more with easy-to-use checkboxes.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-shadow bg-gray-50 dark:bg-gray-800">
              <div className="bg-[#cdeff1]/20 rounded-full p-4 mb-4">
                <Calendar className="h-6 w-6 text-[#cdeff1]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Rich Formatting</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bold, italic, lists, and more—format your notes exactly how you want them to look.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-shadow bg-gray-50 dark:bg-gray-800">
              <div className="bg-[#f9e8b3]/20 rounded-full p-4 mb-4">
                <Shield className="h-6 w-6 text-[#f9e8b3]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Secure Sync</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your notes safely sync across all your devices, so they're always up to date.
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
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Beautiful & Customizable
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Express yourself with our soothing color palette. Customize each note with colors that help you categorize, prioritize, or simply make your notes look beautiful.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FCA591]"></div>
                <div className="w-12 h-12 rounded-full bg-[#FFFF9F]"></div>
                <div className="w-12 h-12 rounded-full bg-[#cdeff1]"></div>
                <div className="w-12 h-12 rounded-full bg-[#f9e8b3]"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-[#FCA591] p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 text-gray-800">Project Ideas</h3>
                <p className="text-sm text-gray-700">Building a website, learning React, mobile app concepts...</p>
              </div>
              
              <div className="bg-[#FFFF9F] p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 text-gray-800">Shopping List</h3>
                <p className="text-sm text-gray-700">Milk, eggs, bread, apples, chocolate...</p>
              </div>
              
              <div className="bg-[#f9e8b3] p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 text-gray-800">Important!</h3>
                <p className="text-sm text-gray-700">Don't forget mom's birthday next week!</p>
              </div>
              
              <div className="bg-[#cdeff1] p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 text-gray-800">Meeting Notes</h3>
                <p className="text-sm text-gray-700">Discuss new project timeline, budget review...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* PWA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Works Offline & Feels Native
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                PastelNotes works seamlessly offline, so you can access and edit your notes anywhere, anytime—even without an internet connection.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#FCA591]/20 p-2 rounded-full mr-3 mt-1">
                    <Smartphone className="h-5 w-5 text-[#FCA591]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Install on Any Device</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Works like a native app on your phone, tablet, or desktop.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#cdeff1]/20 p-2 rounded-full mr-3 mt-1">
                    <Clock className="h-5 w-5 text-[#cdeff1]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Fast & Responsive</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Loads instantly and responds quickly to your inputs.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#FFFF9F]/20 p-2 rounded-full mr-3 mt-1">
                    <RefreshCcw className="h-5 w-5 text-[#FFFF9F]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Automatic Sync</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Changes sync across all devices when you're back online.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-[500px] rounded-[2.5rem] border-[14px] border-gray-800 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-white dark:bg-gray-900">
                  <div className="h-8 bg-gray-800"></div>
                  <div className="h-full p-2 overflow-y-scroll">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#FCA591] rounded-lg p-3">
                        <h4 className="text-xs font-medium text-gray-800">Shopping List</h4>
                        <p className="text-[10px] mt-1 text-gray-700">Milk, Eggs, Bread...</p>
                      </div>
                      <div className="bg-[#cdeff1] rounded-lg p-3">
                        <h4 className="text-xs font-medium text-gray-800">Meeting Notes</h4>
                        <p className="text-[10px] mt-1 text-gray-700">Project timeline...</p>
                      </div>
                      <div className="bg-[#FFFF9F] rounded-lg p-3">
                        <h4 className="text-xs font-medium text-gray-800">Ideas</h4>
                        <p className="text-[10px] mt-1 text-gray-700">App concept...</p>
                      </div>
                      <div className="bg-[#f9e8b3] rounded-lg p-3">
                        <h4 className="text-xs font-medium text-gray-800">Books to Read</h4>
                        <p className="text-[10px] mt-1 text-gray-700">Science fiction...</p>
                      </div>
                      <div className="bg-[#FCA591] rounded-lg p-3">
                        <h4 className="text-xs font-medium text-gray-800">Workout Plan</h4>
                        <p className="text-[10px] mt-1 text-gray-700">Monday: Cardio...</p>
                      </div>
                      <div className="bg-[#cdeff1] rounded-lg p-3">
                        <h4 className="text-xs font-medium text-gray-800">Recipes</h4>
                        <p className="text-[10px] mt-1 text-gray-700">Pasta carbonara...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCA591] to-[#cdeff1] dark:from-[#594754] dark:to-[#2D3A4A] -z-10"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] -z-10"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            Ready to Get Organized?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
            Join thousands of users who've transformed how they take notes. Try PastelNotes today—it's free to get started.
          </p>
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8">
            <Link to="/signup">Create Your Free Account</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
