
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Calendar, Tag, CheckCircle, Settings, Shield, Smartphone, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Organize Your Thoughts, Effortlessly
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            A beautiful, intuitive notes app that helps you capture ideas, make lists, and stay organized—anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-pastel-secondary bg-white text-pastel-pink-dark">
              <Link to="/signup">Get Started — Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
          
          {/* App Preview */}
          <div className="mt-16 relative">
            <div className="max-w-5xl mx-auto rounded-lg shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" 
                alt="PastelNotes App" 
                className="w-full object-cover border border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.3)]"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Everything You Need in a Notes App
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-pastel-pink rounded-full p-4 mb-4">
                <Tag className="h-6 w-6 text-pastel-pink-dark" />
              </div>
              <h3 className="text-xl font-medium mb-2">Smart Organization</h3>
              <p className="text-gray-600">
                Tag, pin, and organize your notes for quick and easy access whenever you need them.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-pastel-blue rounded-full p-4 mb-4">
                <CheckCircle className="h-6 w-6 text-pastel-blue-dark" />
              </div>
              <h3 className="text-xl font-medium mb-2">Task Lists</h3>
              <p className="text-gray-600">
                Create interactive checklists for shopping, to-dos, and more with easy-to-use checkboxes.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-pastel-purple rounded-full p-4 mb-4">
                <Calendar className="h-6 w-6 text-pastel-purple-dark" />
              </div>
              <h3 className="text-xl font-medium mb-2">Rich Formatting</h3>
              <p className="text-gray-600">
                Bold, italic, lists, and more—format your notes exactly how you want them to look.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-pastel-green rounded-full p-4 mb-4">
                <Shield className="h-6 w-6 text-pastel-green-dark" />
              </div>
              <h3 className="text-xl font-medium mb-2">Secure Sync</h3>
              <p className="text-gray-600">
                Your notes safely sync across all your devices, so they're always up to date.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Color Palette Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Beautiful & Customizable
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Express yourself with our soothing pastel color palette. Customize each note with colors that help you categorize, prioritize, or simply make your notes look beautiful.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="w-12 h-12 rounded-full bg-pastel-pink"></div>
                <div className="w-12 h-12 rounded-full bg-pastel-blue"></div>
                <div className="w-12 h-12 rounded-full bg-pastel-green"></div>
                <div className="w-12 h-12 rounded-full bg-pastel-purple"></div>
                <div className="w-12 h-12 rounded-full bg-pastel-yellow"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-pastel-pink p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Project Ideas</h3>
                <p className="text-sm">Building a website, learning React, mobile app concepts...</p>
              </div>
              
              <div className="bg-pastel-blue p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Shopping List</h3>
                <p className="text-sm">Milk, eggs, bread, apples, chocolate...</p>
              </div>
              
              <div className="bg-pastel-yellow p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Important!</h3>
                <p className="text-sm">Don't forget mom's birthday next week!</p>
              </div>
              
              <div className="bg-pastel-green p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Meeting Notes</h3>
                <p className="text-sm">Discuss new project timeline, budget review...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* PWA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Works Offline & Feels Native
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                PastelNotes works seamlessly offline, so you can access and edit your notes anywhere, anytime—even without an internet connection.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-pastel-pink bg-opacity-20 p-1 rounded mr-3 mt-1">
                    <Smartphone className="h-5 w-5 text-pastel-pink-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium">Install on Any Device</h3>
                    <p className="text-sm text-gray-600">Works like a native app on your phone, tablet, or desktop.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-pastel-blue bg-opacity-20 p-1 rounded mr-3 mt-1">
                    <Clock className="h-5 w-5 text-pastel-blue-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium">Fast & Responsive</h3>
                    <p className="text-sm text-gray-600">Loads instantly and responds quickly to your inputs.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-pastel-green bg-opacity-20 p-1 rounded mr-3 mt-1">
                    <Settings className="h-5 w-5 text-pastel-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium">Automatic Sync</h3>
                    <p className="text-sm text-gray-600">Changes sync across all devices when you're back online.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-[500px] rounded-[2.5rem] border-[14px] border-gray-800 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-white">
                  <div className="h-8 bg-gray-800"></div>
                  <div className="h-full p-2 overflow-y-scroll">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-pastel-pink rounded-lg p-3">
                        <h4 className="text-xs font-medium">Shopping List</h4>
                        <p className="text-[10px] mt-1">Milk, Eggs, Bread...</p>
                      </div>
                      <div className="bg-pastel-blue rounded-lg p-3">
                        <h4 className="text-xs font-medium">Meeting Notes</h4>
                        <p className="text-[10px] mt-1">Project timeline...</p>
                      </div>
                      <div className="bg-pastel-yellow rounded-lg p-3">
                        <h4 className="text-xs font-medium">Ideas</h4>
                        <p className="text-[10px] mt-1">App concept...</p>
                      </div>
                      <div className="bg-pastel-purple rounded-lg p-3">
                        <h4 className="text-xs font-medium">Books to Read</h4>
                        <p className="text-[10px] mt-1">Science fiction...</p>
                      </div>
                      <div className="bg-pastel-green rounded-lg p-3">
                        <h4 className="text-xs font-medium">Workout Plan</h4>
                        <p className="text-[10px] mt-1">Monday: Cardio...</p>
                      </div>
                      <div className="bg-pastel-pink rounded-lg p-3">
                        <h4 className="text-xs font-medium">Recipes</h4>
                        <p className="text-[10px] mt-1">Pasta carbonara...</p>
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
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Get Organized?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
            Join thousands of users who've transformed how they take notes. Try PastelNotes today—it's free to get started.
          </p>
          <Button asChild size="lg" className="btn-pastel-secondary bg-white text-pastel-pink-dark">
            <Link to="/signup">Create Your Free Account</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
