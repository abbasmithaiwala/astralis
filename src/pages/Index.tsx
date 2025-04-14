import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tag, CheckCircle, Shield, Smartphone, ArrowRight, PenLine, Sparkles, RefreshCw, ArrowLeft, BookText, Heart, Music, Coffee, CloudLightning, Laugh, Frown, Smile } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-8 md:py-16 relative overflow-hidden create-hub-section">
        <div className="container mx-auto px-6 relative z-10">
          
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 heading-serif text-center">
              Create <br className="hidden md:block" />with Astralis
            </h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Card 1 - Happy Moments */}
            <div className="relative sm:mt-8 group">
              <div className="create-card group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-1">
                <div className="create-card-content overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBtb21lbnR8ZW58MHx8MHx8fDA%3D" 
                    alt="Happy Moments" 
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="create-card-label mx-auto group-hover:bg-[#FFF4DE] transition-colors duration-300">
                    <Smile size={14} className="text-[#F7B731]" />
                    <span>Happy Moments</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 2 - Peaceful Reflections */}
            <div className="relative sm:mt-0 lg:mt-4 group">
              <div className="create-card group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-1">
                <div className="create-card-content overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Joyful Events" 
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="create-card-label mx-auto group-hover:bg-[#E6F7FF] transition-colors duration-300">
                    <Coffee size={14} className="text-[#5EAFFF]" />
                    <span>Joyful Events</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 3 - Lost in loops */}
            <div className="relative sm:mt-10 group">
              <div className="create-card group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-1">
                <div className="create-card-content overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Lost in loops" 
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="create-card-label mx-auto group-hover:bg-[#F0E6FF] transition-colors duration-300">
                    <Music size={14} className="text-[#8440FF]" />
                    <span>Lost in loops(confused)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 4 - Sad Days */}
            <div className="relative sm:mt-4 lg:mt-0 group">
              <div className="create-card group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-1">
                <div className="create-card-content overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80" 
                    alt="Sad Days" 
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="create-card-label mx-auto group-hover:bg-[#E9EDF1] transition-colors duration-300">
                    <Frown size={14} className="text-[#6C757D]" />
                    <span>Sad Days</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 5 - Nostalgic nights */}
            <div className="relative sm:mt-12 lg:mt-6 group">
              <div className="create-card group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-1">
                <div className="create-card-content overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Nostalgic nights" 
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="create-card-label mx-auto group-hover:bg-[#FFE6ED] transition-colors duration-300">
                    <Heart size={14} className="text-[#FC5C8D]" />
                    <span>Nostalgic nights</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 6 - Angry thoughts */}
            <div className="relative sm:mt-2 group">
              <div className="create-card group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-1">
                <div className="create-card-content overflow-hidden">
                  <img 
                    src="data:image/jpeg;base64,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" 
                    alt="Angry thoughts" 
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="create-card-label mx-auto group-hover:bg-[#FFF0E5] transition-colors duration-300">
                    <Laugh size={14} className="text-[#FF8F5C]" />
                    <span>Angry thoughts</span>
                  </div>
                </div>
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
              <h3 className="text-xl font-semibold mb-3 text-pastel-neutral-800">Your Mood fixer</h3>
              <p className="text-pastel-neutral-600">
                Your notes sync and reflect your emotions, with AI that feels truly human.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mood-Aware Notes Section */}
<section className="py-24 bg-pastel-neutral-50">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-pastel-neutral-800">
          Not Just Notes—It’s a Mood Fixer
        </h2>
        <p className="text-lg text-pastel-neutral-600 mb-4">
          Each color you pick reflects more than a mood—it mirrors what you feel inside.
        </p>
        <p className="text-lg text-pastel-neutral-600 mb-8">
          Your words + our AI = understanding. Our human-like AI interprets your notes and emotions, helping you navigate your thoughts through friendly, empathetic conversation.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="w-12 h-12 rounded-full bg-pastel-pink shadow-sm" title="Love / Calm"></div>
          <div className="w-12 h-12 rounded-full bg-pastel-blue shadow-sm" title="Sadness / Peace"></div>
          <div className="w-12 h-12 rounded-full bg-pastel-green shadow-sm" title="Growth / Hope"></div>
          <div className="w-12 h-12 rounded-full bg-pastel-purple shadow-sm" title="Creativity / Confusion"></div>
          <div className="w-12 h-12 rounded-full bg-pastel-yellow shadow-sm" title="Joy / Energy"></div>
        </div>
        <div className="mt-8">
          <Button asChild className="rounded-full px-6 bg-white border border-pastel-neutral-200 text-pastel-neutral-700 hover:bg-pastel-neutral-100 shadow-sm">
            <Link to="/features" className="flex items-center gap-2">
              Discover How <ArrowRight className="h-4 w-4" />
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
          <h3 className="font-semibold mb-2 text-pastel-neutral-800">Feeling Low</h3>
          <p className="text-sm text-pastel-neutral-600">It’s been a long day... need a break and a chat.</p>
        </div>

        <div className="glass-card bg-pastel-yellow/50 p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2 text-pastel-neutral-800">Grateful Moments</h3>
          <p className="text-sm text-pastel-neutral-600">Sunshine, good coffee, and quiet mornings. Just perfect.</p>
        </div>

        <div className="glass-card bg-pastel-green/50 p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2 text-pastel-neutral-800">Meeting Notes</h3>
          <p className="text-sm text-pastel-neutral-600">New project ideas, clear roadmap. Feeling hopeful!</p>
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
            Ready to Get <span className="heading-serif">Organized</span>?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-pastel-neutral-600">
            Join thousands of users who've transformed how they take notes. Try PastelNotes today—it's free to get started.
          </p>
          <Button asChild size="lg" className="rounded-full bg-[#054A40] hover:bg-[#054A40]/90 text-white shadow-md hover:shadow-lg transition-all px-8">
            <Link to="/signup">Create Your Free Account</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
