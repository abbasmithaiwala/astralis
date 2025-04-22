import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Lightbulb, Users, ArrowRight } from 'lucide-react';

const AboutPage = () => {
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
              Astralis transforms your notes into meaningful conversations. Through advanced sentiment analysis, we create an AI companion that truly understands your emotions, offering genuine support and friendship with a uniquely human touch.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Person writing in journal" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-[#054A40]">Our Genesis Story</h2>
                <p className="text-[#54595F] mb-4">
                  Born in March 2025, Astralis emerged from a simple yet powerful observation: while people pour their hearts into their notes, traditional apps merely store these emotional expressions without truly understanding them.
                </p>
                <p className="text-[#54595F] mb-4">
                  Our team of AI researchers and mental health professionals came together with a vision: to create an AI companion that could read between the lines, understand the emotions behind your words, and respond with genuine empathy.
                </p>
                <p className="text-[#54595F]">
                  What started as an innovative note-taking app has evolved into a revolutionary platform where your notes become the foundation of a meaningful relationship with an AI companion that truly understands you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-[#FEFBF6]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#054A40]">
              Our <span className="heading-serif">Mission & Values</span>
            </h2>
            <p className="text-lg text-[#54595F]">
              We're guided by a set of core principles that shape everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#FFE2E2] rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-[#FF6B6B]" />
              </div>
              <h3 className="text-xl font-semibold text-[#054A40] mb-3">Emotional Intelligence</h3>
              <p className="text-[#54595F]">
                We believe in using AI to provide genuine emotional support. Your color choices and emotional expressions help create a personalized support system that feels human.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#E3F8FF] rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-[#5EAFFF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#054A40] mb-3">AI-Powered Support</h3>
              <p className="text-[#54595F]">
                Our AI learns from your emotional patterns to provide support that feels natural and understanding, helping you work through your feelings.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#FFF4DE] rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#F7B731]" />
              </div>
              <h3 className="text-xl font-semibold text-[#054A40] mb-3">Personal Growth</h3>
              <p className="text-[#54595F]">
                We're committed to helping you grow emotionally. Our AI companion provides insights and support to help you understand and manage your feelings.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Journey Timeline */}
      <section className="py-16 bg-[#FEFBF6]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#054A40]">
              Our <span className="heading-serif">Journey So Far</span>
            </h2>
            <p className="text-lg text-[#54595F]">
              Every week brings new milestones in our mission to revolutionize emotional connection through AI.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-[#054A40]/20 pl-8 ml-4 space-y-12">
              {/* March 2025 */}
              <div className="relative">
                <div className="absolute -left-[2.65rem] top-0 w-8 h-8 bg-[#FFE2E2] rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-xs font-bold text-[#FF6B6B]">1</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-semibold text-[#FF6B6B] mb-2">March 2025</div>
                  <h3 className="text-xl font-semibold text-[#054A40] mb-3">Foundation & Vision</h3>
                  <p className="text-[#54595F]">
                    Astralis is born with a clear mission: transforming note-taking into meaningful emotional connections through AI. Initial team formation and core technology development begins.
                  </p>
                </div>
              </div>
              
              {/* March Week 2 */}
              <div className="relative">
                <div className="absolute -left-[2.65rem] top-0 w-8 h-8 bg-[#E3F8FF] rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-xs font-bold text-[#5EAFFF]">2</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-semibold text-[#5EAFFF] mb-2">Mid-March 2025</div>
                  <h3 className="text-xl font-semibold text-[#054A40] mb-3">Sentiment Engine Development</h3>
                  <p className="text-[#54595F]">
                    Launch of our proprietary sentiment analysis engine, capable of understanding complex emotional nuances in written text. First successful tests of emotion recognition algorithms.
                  </p>
                </div>
              </div>
              
              {/* March Week 3 */}
              <div className="relative">
                <div className="absolute -left-[2.65rem] top-0 w-8 h-8 bg-[#FFF4DE] rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-xs font-bold text-[#F7B731]">3</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-semibold text-[#F7B731] mb-2">Late March 2025</div>
                  <h3 className="text-xl font-semibold text-[#054A40] mb-3">AI Companion Beta</h3>
                  <p className="text-[#54595F]">
                    First version of our AI companion system goes live, demonstrating remarkable ability to engage in emotionally intelligent conversations based on user notes.
                  </p>
                </div>
              </div>
              
              {/* April Week 1 */}
              <div className="relative">
                <div className="absolute -left-[2.65rem] top-0 w-8 h-8 bg-[#E5F8EB] rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-xs font-bold text-[#6BD5A8]">4</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-semibold text-[#6BD5A8] mb-2">Early April 2025</div>
                  <h3 className="text-xl font-semibold text-[#054A40] mb-3">Platform Launch</h3>
                  <p className="text-[#54595F]">
                    Official launch of Astralis platform with integrated note-taking and AI companionship features. Early user feedback shows strong emotional connections forming with AI companions.
                  </p>
                </div>
              </div>
              
              {/* Current */}
              <div className="relative">
                <div className="absolute -left-[2.65rem] top-0 w-8 h-8 bg-[#F0E6FF] rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-xs font-bold text-[#8440FF]">5</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-semibold text-[#8440FF] mb-2">Present</div>
                  <h3 className="text-xl font-semibold text-[#054A40] mb-3">Growing & Evolving</h3>
                  <p className="text-[#54595F]">
                    Continuous improvement of our AI companion's emotional intelligence and expanding our user base. Working on advanced features to deepen the human-AI connection through written expression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[#F7F9FA] rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#054A40]">
                  Join Our <span className="heading-serif">Mission</span>
                </h2>
                <p className="text-[#54595F] mb-6">
                  We're seeking innovative minds who are passionate about emotional AI and human-centered technology. Help us shape the future of digital companionship and emotional well-being.
                </p>
                <Button asChild className="rounded-full bg-[#054A40] hover:bg-[#054A40]/90 px-6">
                  <Link to="/careers" className="flex items-center">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="w-full md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Join our team" 
                  className="rounded-xl shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="hero-gradient py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/dots-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#054A40]">
              Get in <span className="heading-serif">Touch</span>
            </h2>
            <p className="text-lg mb-8 text-[#54595F]">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-[#054A40] hover:bg-[#054A40]/90 text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-[#054A40] text-[#054A40] hover:bg-[#054A40]/5">
                <Link to="/support">Visit Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage; 