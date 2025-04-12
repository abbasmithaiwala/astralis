import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Calendar, Tag, CheckCircle, Shield, Smartphone, Clock, ArrowRight, PenLine, Sparkles, RefreshCw } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-pastel-neutral-800 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/dots-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Organize Your Thoughts, <span className="gradient-text">Effortlessly</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-pastel-neutral-600">
              A beautiful, intuitive notes app that helps you capture ideas, make lists, and stay organized—anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-pastel-pink-dark hover:bg-pastel-pink-dark/90 text-white shadow-md hover:shadow-lg transition-all px-8">
                <Link to="/signup">Get Started — Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-pastel-pink-dark/30 text-pastel-neutral-700 hover:bg-pastel-pink-light/20">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
          
          {/* App Preview */}
          <div className="mt-16 relative">
            <div className="max-w-5xl mx-auto rounded-2xl shadow-xl overflow-hidden glass-card border-white">
              <img 
                src="https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" 
                alt="PastelNotes App" 
                className="w-full object-cover border border-white/20"
              />
            </div>
            <div className="absolute -bottom-5 left-0 right-0 flex justify-center">
              <div className="flex items-center bg-white py-2 px-4 rounded-full shadow-lg">
                <span className="flex h-3 w-3 me-2">
                  <span className="animate-ping absolute h-3 w-3 rounded-full bg-pastel-green-dark opacity-75"></span>
                  <span className="relative rounded-full h-3 w-3 bg-pastel-green-dark"></span>
                </span>
                <p className="text-sm font-medium text-pastel-neutral-700">2,500+ active users</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-pastel-neutral-800">
              Everything You Need in a Notes App
            </h2>
            <p className="text-lg text-pastel-neutral-600 max-w-3xl mx-auto">
              Designed with simplicity and productivity in mind. All the tools you need, none of the clutter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-pastel-pink-light">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <Tag className="h-6 w-6 text-pastel-pink-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pastel-neutral-800">Smart Organization</h3>
              <p className="text-pastel-neutral-600">
                Tag, pin, and organize your notes for quick and easy access whenever you need them.
              </p>
            </div>
            
            <div className="feature-card bg-pastel-blue-light">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <CheckCircle className="h-6 w-6 text-pastel-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pastel-neutral-800">Task Lists</h3>
              <p className="text-pastel-neutral-600">
                Create interactive checklists for shopping, to-dos, and more with easy-to-use checkboxes.
              </p>
            </div>
            
            <div className="feature-card bg-pastel-purple-light">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <PenLine className="h-6 w-6 text-pastel-purple-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pastel-neutral-800">Rich Formatting</h3>
              <p className="text-pastel-neutral-600">
                Bold, italic, lists, and more—format your notes exactly how you want them to look.
              </p>
            </div>
            
            <div className="feature-card bg-pastel-green-light">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <Shield className="h-6 w-6 text-pastel-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pastel-neutral-800">Secure Sync</h3>
              <p className="text-pastel-neutral-600">
                Your notes safely sync across all your devices, so they're always up to date.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Color Palette Section */}
      <section className="py-24 bg-pastel-neutral-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-pastel-neutral-800">
                Beautiful & Customizable
              </h2>
              <p className="text-lg text-pastel-neutral-600 mb-8">
                Express yourself with our soothing pastel color palette. Customize each note with colors that help you categorize, prioritize, or simply make your notes look beautiful.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="w-12 h-12 rounded-full bg-pastel-pink shadow-sm"></div>
                <div className="w-12 h-12 rounded-full bg-pastel-blue shadow-sm"></div>
                <div className="w-12 h-12 rounded-full bg-pastel-green shadow-sm"></div>
                <div className="w-12 h-12 rounded-full bg-pastel-purple shadow-sm"></div>
                <div className="w-12 h-12 rounded-full bg-pastel-yellow shadow-sm"></div>
              </div>
              <div className="mt-8">
                <Button asChild className="rounded-full px-6 bg-white border border-pastel-neutral-200 text-pastel-neutral-700 hover:bg-pastel-neutral-100 shadow-sm">
                  <Link to="/features" className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="glass-card bg-pastel-pink/50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2 text-pastel-neutral-800">Project Ideas</h3>
                <p className="text-sm text-pastel-neutral-600">Building a website, learning React, mobile app concepts...</p>
              </div>
              
              <div className="glass-card bg-pastel-blue/50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2 text-pastel-neutral-800">Shopping List</h3>
                <p className="text-sm text-pastel-neutral-600">Milk, eggs, bread, apples, chocolate...</p>
              </div>
              
              <div className="glass-card bg-pastel-yellow/50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2 text-pastel-neutral-800">Important!</h3>
                <p className="text-sm text-pastel-neutral-600">Don't forget mom's birthday next week!</p>
              </div>
              
              <div className="glass-card bg-pastel-green/50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2 text-pastel-neutral-800">Meeting Notes</h3>
                <p className="text-sm text-pastel-neutral-600">Discuss new project timeline, budget review...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* PWA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-pastel-neutral-800">
                Works Offline & Feels Native
              </h2>
              <p className="text-lg text-pastel-neutral-600 mb-8">
                PastelNotes works seamlessly offline, so you can access and edit your notes anywhere, anytime—even without an internet connection.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-pastel-pink-light p-2 rounded-lg mr-4 mt-1">
                    <Smartphone className="h-5 w-5 text-pastel-pink-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pastel-neutral-800">Install on Any Device</h3>
                    <p className="text-pastel-neutral-600">Works like a native app on your phone, tablet, or desktop.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-pastel-blue-light p-2 rounded-lg mr-4 mt-1">
                    <RefreshCw className="h-5 w-5 text-pastel-blue-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pastel-neutral-800">Automatic Sync</h3>
                    <p className="text-pastel-neutral-600">Changes sync across all devices when you're back online.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-pastel-green-light p-2 rounded-lg mr-4 mt-1">
                    <Sparkles className="h-5 w-5 text-pastel-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pastel-neutral-800">Fast & Responsive</h3>
                    <p className="text-pastel-neutral-600">Loads instantly and responds quickly to your inputs.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-[500px] rounded-[2.5rem] border-[14px] border-pastel-neutral-800 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-white">
                  <div className="h-8 bg-pastel-neutral-800"></div>
                  <div className="h-full p-2 overflow-y-scroll">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-pastel-pink rounded-lg p-3">
                        <h4 className="text-xs font-medium text-pastel-neutral-800">Shopping List</h4>
                        <p className="text-[10px] mt-1 text-pastel-neutral-600">Milk, Eggs, Bread...</p>
                      </div>
                      <div className="bg-pastel-blue rounded-lg p-3">
                        <h4 className="text-xs font-medium text-pastel-neutral-800">Meeting Notes</h4>
                        <p className="text-[10px] mt-1 text-pastel-neutral-600">Project timeline...</p>
                      </div>
                      <div className="bg-pastel-yellow rounded-lg p-3">
                        <h4 className="text-xs font-medium text-pastel-neutral-800">Ideas</h4>
                        <p className="text-[10px] mt-1 text-pastel-neutral-600">App concept...</p>
                      </div>
                      <div className="bg-pastel-purple rounded-lg p-3">
                        <h4 className="text-xs font-medium text-pastel-neutral-800">Books to Read</h4>
                        <p className="text-[10px] mt-1 text-pastel-neutral-600">Science fiction...</p>
                      </div>
                      <div className="bg-pastel-green rounded-lg p-3">
                        <h4 className="text-xs font-medium text-pastel-neutral-800">Workout Plan</h4>
                        <p className="text-[10px] mt-1 text-pastel-neutral-600">Monday: Cardio...</p>
                      </div>
                      <div className="bg-pastel-pink rounded-lg p-3">
                        <h4 className="text-xs font-medium text-pastel-neutral-800">Recipes</h4>
                        <p className="text-[10px] mt-1 text-pastel-neutral-600">Pasta carbonara...</p>
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
      <section className="hero-gradient py-24 text-pastel-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/dots-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to Get <span className="gradient-text">Organized</span>?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-pastel-neutral-600">
            Join thousands of users who've transformed how they take notes. Try PastelNotes today—it's free to get started.
          </p>
          <Button asChild size="lg" className="rounded-full bg-pastel-pink-dark hover:bg-pastel-pink-dark/90 text-white shadow-md hover:shadow-lg transition-all px-8">
            <Link to="/signup">Create Your Free Account</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
