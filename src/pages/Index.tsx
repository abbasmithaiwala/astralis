
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Check, 
  Sparkles,
  FileText,
  Users,
  Layout,
  Calendar
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-[#F6F6F7] dark:from-[#1A1F2C] dark:to-[#222222]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] dark:text-white mb-6 leading-tight">
              Visual collaboration made easy
            </h1>
            <p className="text-lg md:text-xl text-[#555555] dark:text-[#9F9EA1] mb-8 max-w-3xl mx-auto">
              Create beautiful documentation, draw diagrams, and collaborate with your team visually all in one place.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white rounded-md px-8 py-6 h-auto">
                <Link to="/signup">Get started for free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#C8C8C9] text-[#555555] hover:bg-[#F1F1F1] dark:border-[#403E43] dark:text-white dark:hover:bg-[#333333] rounded-md px-8 py-6 h-auto">
                <Link to="/features">See how it works</Link>
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1600" 
                alt="PastelNotes Interface" 
                className="w-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
            
            {/* Floating UI elements for visual appeal */}
            <div className="absolute -top-6 -left-10 w-44 h-32 bg-white dark:bg-[#222222] p-4 rounded-lg shadow-lg transform -rotate-6 hidden md:block">
              <h3 className="text-sm font-medium text-[#333333] dark:text-white">Project Notes</h3>
              <p className="text-xs text-[#555555] dark:text-[#9F9EA1] mt-2">Our team's latest brainstorming session ideas...</p>
            </div>
            <div className="absolute -bottom-4 -right-6 w-48 h-28 bg-white dark:bg-[#222222] p-4 rounded-lg shadow-lg transform rotate-3 hidden md:block">
              <h3 className="text-sm font-medium text-[#333333] dark:text-white">Meeting Agenda</h3>
              <p className="text-xs text-[#555555] dark:text-[#9F9EA1] mt-2">1. Review designs<br/>2. Discuss timeline<br/>3. Assign tasks</p>
            </div>
          </div>

          {/* Trusted by section */}
          <div className="mt-20 text-center">
            <p className="text-sm text-[#8A898C] dark:text-[#9F9EA1] mb-6">TRUSTED BY TEAMS AT</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              <div className="h-6 text-[#8A898C] dark:text-[#9F9EA1] font-medium">Microsoft</div>
              <div className="h-6 text-[#8A898C] dark:text-[#9F9EA1] font-medium">Spotify</div>
              <div className="h-6 text-[#8A898C] dark:text-[#9F9EA1] font-medium">Amazon</div>
              <div className="h-6 text-[#8A898C] dark:text-[#9F9EA1] font-medium">Shopify</div>
              <div className="h-6 text-[#8A898C] dark:text-[#9F9EA1] font-medium">Slack</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-[#1A1F2C]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] dark:text-white mb-6">
              Tools for every kind of work
            </h2>
            <p className="text-lg text-[#555555] dark:text-[#9F9EA1] max-w-2xl mx-auto">
              PastelNotes gives your team powerful tools to organize and collaborate on any project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#F6F6F7] dark:bg-[#222222] rounded-lg p-8">
              <div className="p-3 rounded-full bg-[#E5DEFF] dark:bg-[#403E43] inline-flex mb-6">
                <FileText className="h-6 w-6 text-[#8B5CF6] dark:text-[#D6BCFA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] dark:text-white mb-3">
                Smart Documents
              </h3>
              <p className="text-[#555555] dark:text-[#9F9EA1]">
                Create beautiful, smart documents with rich content that's easy to read and edit.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#F6F6F7] dark:bg-[#222222] rounded-lg p-8">
              <div className="p-3 rounded-full bg-[#FFDEE2] dark:bg-[#403E43] inline-flex mb-6">
                <Layout className="h-6 w-6 text-[#D946EF] dark:text-[#D6BCFA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] dark:text-white mb-3">
                Organized Workspaces
              </h3>
              <p className="text-[#555555] dark:text-[#9F9EA1]">
                Keep everything organized in custom workspaces designed to fit your workflow.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#F6F6F7] dark:bg-[#222222] rounded-lg p-8">
              <div className="p-3 rounded-full bg-[#FDE1D3] dark:bg-[#403E43] inline-flex mb-6">
                <Calendar className="h-6 w-6 text-[#F97316] dark:text-[#FEC6A1]" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] dark:text-white mb-3">
                Project Planning
              </h3>
              <p className="text-[#555555] dark:text-[#9F9EA1]">
                Plan projects with interactive timelines and task management built in.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-[#F6F6F7] dark:bg-[#222222] rounded-lg p-8">
              <div className="p-3 rounded-full bg-[#D3E4FD] dark:bg-[#403E43] inline-flex mb-6">
                <Users className="h-6 w-6 text-[#0EA5E9] dark:text-[#0EA5E9]" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] dark:text-white mb-3">
                Team Collaboration
              </h3>
              <p className="text-[#555555] dark:text-[#9F9EA1]">
                Work together in real-time with your team from anywhere in the world.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-[#F6F6F7] dark:bg-[#222222] rounded-lg p-8">
              <div className="p-3 rounded-full bg-[#F2FCE2] dark:bg-[#403E43] inline-flex mb-6">
                <Sparkles className="h-6 w-6 text-[#0FA0CE] dark:text-[#D3E4FD]" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] dark:text-white mb-3">
                Smart Design Tools
              </h3>
              <p className="text-[#555555] dark:text-[#9F9EA1]">
                Create beautiful diagrams with intuitive design tools that anyone can use.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Proof Section */}
      <section className="py-24 bg-[#F6F6F7] dark:bg-[#222222]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] dark:text-white mb-6">
              Loved by teams everywhere
            </h2>
            <p className="text-lg text-[#555555] dark:text-[#9F9EA1]">
              See why teams choose PastelNotes for their visual collaboration needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-[#1A1F2C] rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#E5DEFF] dark:bg-[#403E43] flex items-center justify-center mr-4">
                  <span className="font-medium text-[#8B5CF6] dark:text-[#D6BCFA]">AT</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#333333] dark:text-white">Alex Thompson</h4>
                  <p className="text-sm text-[#8A898C] dark:text-[#9F9EA1]">Product Manager at Airbnb</p>
                </div>
              </div>
              <p className="text-[#555555] dark:text-[#9F9EA1]">
                "PastelNotes has transformed how our team collaborates. We can now easily organize our thoughts and keep everyone on the same page."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-[#1A1F2C] rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FFDEE2] dark:bg-[#403E43] flex items-center justify-center mr-4">
                  <span className="font-medium text-[#D946EF] dark:text-[#D6BCFA]">SJ</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#333333] dark:text-white">Sarah Johnson</h4>
                  <p className="text-sm text-[#8A898C] dark:text-[#9F9EA1]">Design Lead at Spotify</p>
                </div>
              </div>
              <p className="text-[#555555] dark:text-[#9F9EA1]">
                "The visual tools in PastelNotes make it so much easier to communicate design ideas and get feedback from stakeholders."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-[#1A1F2C] rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#D3E4FD] dark:bg-[#403E43] flex items-center justify-center mr-4">
                  <span className="font-medium text-[#0EA5E9] dark:text-[#0EA5E9]">MR</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#333333] dark:text-white">Michael Rodriguez</h4>
                  <p className="text-sm text-[#8A898C] dark:text-[#9F9EA1]">Engineering Manager at Shopify</p>
                </div>
              </div>
              <p className="text-[#555555] dark:text-[#9F9EA1]">
                "Our engineering team uses PastelNotes daily to plan sprints and document technical decisions. It's become an essential tool for us."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-[#1A1F2C]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#E5DEFF] to-[#F1F0FB] dark:from-[#2D3A4A] dark:to-[#453E40] rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] dark:text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-[#555555] dark:text-[#C8C8C9] mb-8 max-w-lg mx-auto">
              Join thousands of teams that use PastelNotes to collaborate visually and get more done.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white rounded-md px-8 py-6 h-auto">
                <Link to="/signup">
                  Sign up for free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#C8C8C9] text-[#555555] hover:bg-[#F1F1F1] dark:border-[#403E43] dark:text-white dark:hover:bg-[#333333] rounded-md px-8 py-6 h-auto">
                <Link to="/pricing">See pricing</Link>
              </Button>
            </div>
            <p className="text-sm text-[#8A898C] dark:text-[#9F9EA1] mt-6">
              No credit card required · Free plan available
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
