import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tag, CheckCircle, Shield, PenLine, ArrowRight, Smartphone, RefreshCw, Sparkles, LightbulbIcon, Briefcase, Clock, Search, FileText, BookOpen, Share2, Zap } from 'lucide-react';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/dots-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Beyond <span className="heading-serif">Notes</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#54595F]">
              Astralis is more than just a notes app - it's your emotional companion. Every color you choose and emotion you express helps create a personalized AI support system that understands and connects with you on a human level.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-pastel-pink-light">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <Tag className="h-6 w-6 text-[#054A40]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#054A40]">Smart Organization</h3>
              <p className="text-[#54595F]">
                Organize your notes with tags, folders, and color-coding. Find what you need instantly with our powerful filtering system.
              </p>
            </div>
            
            <div className="feature-card bg-pastel-blue-light">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <CheckCircle className="h-6 w-6 text-pastel-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#054A40]">Task Lists</h3>
              <p className="text-[#54595F]">
                Create interactive checklists with due dates and reminders. Track your progress and stay on top of your to-dos.
              </p>
            </div>
            
            <div className="feature-card bg-pastel-purple-light">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <PenLine className="h-6 w-6 text-pastel-purple-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#054A40]">Rich Formatting</h3>
              <p className="text-[#54595F]">
                Format your notes with headings, bold, italic, lists, and more. Make your notes beautiful and easy to read.
              </p>
            </div>
            
            <div className="feature-card bg-pastel-green-light">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <Shield className="h-6 w-6 text-pastel-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#054A40]">Secure Sync</h3>
              <p className="text-[#54595F]">
                Your notes are securely synced across all your devices, so they're always up to date and protected.
              </p>
            </div>
            
            <div className="feature-card bg-[#FFF4DE]">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <Search className="h-6 w-6 text-[#F7B731]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#054A40]">Smart Search</h3>
              <p className="text-[#54595F]">
                Find exactly what you're looking for with our powerful full-text search. Filter by tags, colors, or date created.
              </p>
            </div>
            
            <div className="feature-card bg-[#FFE6ED]">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <FileText className="h-6 w-6 text-[#FC5C8D]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#054A40]">Templates</h3>
              <p className="text-[#54595F]">
                Start with pre-designed templates for meeting notes, journals, project plans, and more to save time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emotional Organization */}
      <section className="py-16 bg-[#FEFBF6]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#054A40]">
              Emotional <span className="heading-serif">Connection</span>
            </h2>
            <p className="text-lg text-[#54595F]">
              Your notes become a gateway to emotional support. The colors and emotions you express help our AI understand your state of mind, creating a personalized support system that feels like talking to a caring friend.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="create-card group hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
              <div className="create-card-content overflow-hidden p-6">
                <div className="bg-[#FFF4DE] p-3 rounded-full inline-flex mb-4 shadow-sm">
                  <LightbulbIcon className="h-6 w-6 text-[#F7B731]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#054A40]">Mood Tracking</h3>
                <p className="text-[#54595F] mb-3">Express your emotions through colors and get AI support that understands your current state.</p>
              </div>
            </div>
            
            <div className="create-card group hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
              <div className="create-card-content overflow-hidden p-6">
                <div className="bg-[#E6F7FF] p-3 rounded-full inline-flex mb-4 shadow-sm">
                  <BookOpen className="h-6 w-6 text-[#5EAFFF]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#054A40]">AI Companion</h3>
                <p className="text-[#54595F] mb-3">Get personalized support that adapts to your emotional needs and provides human-like conversation.</p>
              </div>
            </div>
            
            <div className="create-card group hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
              <div className="create-card-content overflow-hidden p-6">
                <div className="bg-[#F0E6FF] p-3 rounded-full inline-flex mb-4 shadow-sm">
                  <Zap className="h-6 w-6 text-[#8440FF]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#054A40]">Emotional Insights</h3>
                <p className="text-[#54595F] mb-3">Track your emotional patterns and receive insights to help you understand and manage your feelings.</p>
              </div>
            </div>
            
            <div className="create-card group hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
              <div className="create-card-content overflow-hidden p-6">
                <div className="bg-[#FFE6ED] p-3 rounded-full inline-flex mb-4 shadow-sm">
                  <Share2 className="h-6 w-6 text-[#FC5C8D]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#054A40]">Personal Growth</h3>
                <p className="text-[#54595F] mb-3">Use your emotional notes as a tool for self-reflection and personal development with AI guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Productivity Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#054A40]">
                Boost Your <span className="heading-serif">Productivity</span>
              </h2>
              <p className="text-lg text-[#54595F] mb-8">
                Astralis is designed to help you work smarter, not harder. Our tools streamline your workflow and help you stay focused.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-pastel-pink-light p-2 rounded-lg mr-4 mt-1">
                    <Clock className="h-5 w-5 text-[#054A40]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#054A40]">Time-Saving Templates</h3>
                    <p className="text-[#54595F]">Start with pre-designed templates for common note types.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-pastel-blue-light p-2 rounded-lg mr-4 mt-1">
                    <Briefcase className="h-5 w-5 text-pastel-blue-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#054A40]">Workspace Organization</h3>
                    <p className="text-[#54595F]">Create separate workspaces for different projects or areas of your life.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-pastel-green-light p-2 rounded-lg mr-4 mt-1">
                    <Sparkles className="h-5 w-5 text-pastel-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#054A40]">Quick Capture</h3>
                    <p className="text-[#54595F]">Quickly jot down ideas with our shortcuts and quick-entry tools.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Productivity Features" 
                className="rounded-xl shadow-lg w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Cross-Platform Section */}
      <section className="py-16 bg-[#FEFBF6]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#054A40]">
                Available <span className="heading-serif">Everywhere</span>
              </h2>
              <p className="text-lg text-[#54595F] mb-8">
                Astralis works on all your devices, so you can access your notes anywhere, anytime.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-pastel-pink-light p-2 rounded-lg mr-4 mt-1">
                    <Smartphone className="h-5 w-5 text-[#054A40]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#054A40]">Mobile Apps</h3>
                    <p className="text-[#54595F]">Native apps for iOS and Android with full functionality.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-pastel-blue-light p-2 rounded-lg mr-4 mt-1">
                    <RefreshCw className="h-5 w-5 text-pastel-blue-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#054A40]">Automatic Sync</h3>
                    <p className="text-[#54595F]">Your notes sync automatically across all your devices.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-pastel-yellow-light p-2 rounded-lg mr-4 mt-1">
                    <Shield className="h-5 w-5 text-pastel-yellow-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#054A40]">Offline Access</h3>
                    <p className="text-[#54595F]">Work offline and your changes will sync when you're back online.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Cross-Platform Support" 
                className="rounded-xl shadow-lg w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="hero-gradient py-16 text-[#054A40] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/dots-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to <span className="heading-serif">Experience</span> Astralis?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-[#54595F]">
            Join thousands of users who've transformed how they take notes. Try Astralis today—it's free to get started.
          </p>
          <Button asChild size="lg" className="rounded-full bg-[#054A40] hover:bg-[#054A40]/90 text-white shadow-md hover:shadow-lg transition-all px-8">
            <Link to="/signup">Start Free Trial</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Features; 