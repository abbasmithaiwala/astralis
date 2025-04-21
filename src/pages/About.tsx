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
              Astralis is more than just a notes app - it's your emotional companion. Every color you choose and emotion you express helps create a personalized AI support system that understands and connects with you on a human level.
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
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaborating" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-[#054A40]">How It All Began</h2>
                <p className="text-[#54595F] mb-4">
                  Astralis began in 2020 when our founder, a psychology researcher, noticed that traditional note-taking apps didn't address the emotional needs of users. They saw an opportunity to create something that could not only capture thoughts but also provide emotional support.
                </p>
                <p className="text-[#54595F] mb-4">
                  After years of research in emotional intelligence and AI, our team developed a unique system where the colors and emotions you express in your notes help create a personalized AI companion that understands your state of mind.
                </p>
                <p className="text-[#54595F]">
                  Today, Astralis helps thousands of people around the world not just organize their thoughts, but also receive personalized emotional support through AI that feels like talking to a caring friend.
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
              Our <span className="heading-serif">Journey</span>
            </h2>
            <p className="text-lg text-[#54595F]">
              From idea to reality, the story of Astralis continues to evolve.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="relative border-l-2 border-[#054A40]/20 pl-8 ml-4 space-y-12">
              {/* 2020 */}
              <div className="relative">
                <div className="absolute -left-[2.65rem] top-0 w-8 h-8 bg-[#FFE2E2] rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-xs font-bold text-[#FF6B6B]">1</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-semibold text-[#FF6B6B] mb-2">2020</div>
                  <h3 className="text-xl font-semibold text-[#054A40] mb-3">The Beginning</h3>
                  <p className="text-[#54595F]">
                    Emma Chen started Astralis after noticing a gap in emotionally-intelligent note-taking tools. First prototype developed.
                  </p>
                </div>
              </div>
              
              {/* 2021 */}
              <div className="relative">
                <div className="absolute -left-[2.65rem] top-0 w-8 h-8 bg-[#E3F8FF] rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-xs font-bold text-[#5EAFFF]">2</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-semibold text-[#5EAFFF] mb-2">2021</div>
                  <h3 className="text-xl font-semibold text-[#054A40] mb-3">Beta Launch</h3>
                  <p className="text-[#54595F]">
                    First beta released to 500 users. Early feedback shaped our emotional tagging system and color psychology approach.
                  </p>
                </div>
              </div>
              
              {/* 2022 */}
              <div className="relative">
                <div className="absolute -left-[2.65rem] top-0 w-8 h-8 bg-[#FFF4DE] rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-xs font-bold text-[#F7B731]">3</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-semibold text-[#F7B731] mb-2">2022</div>
                  <h3 className="text-xl font-semibold text-[#054A40] mb-3">Public Launch</h3>
                  <p className="text-[#54595F]">
                    Official release of Astralis 1.0. Featured in several tech publications for our innovative approach to emotional organization.
                  </p>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="relative">
                <div className="absolute -left-[2.65rem] top-0 w-8 h-8 bg-[#E5F8EB] rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-xs font-bold text-[#6BD5A8]">4</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-semibold text-[#6BD5A8] mb-2">2023</div>
                  <h3 className="text-xl font-semibold text-[#054A40] mb-3">Growing Community</h3>
                  <p className="text-[#54595F]">
                    Reached 50,000 active users. Launched Business tier with team collaboration features. Extended platform to iOS and Android.
                  </p>
                </div>
              </div>
              
              {/* 2024 */}
              <div className="relative">
                <div className="absolute -left-[2.65rem] top-0 w-8 h-8 bg-[#F0E6FF] rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-xs font-bold text-[#8440FF]">5</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-semibold text-[#8440FF] mb-2">2024</div>
                  <h3 className="text-xl font-semibold text-[#054A40] mb-3">Today & Beyond</h3>
                  <p className="text-[#54595F]">
                    Continuing to innovate with AI-enhanced emotional analysis, expanded templates, and deeper integration options. The journey continues!
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
                  Join Our <span className="heading-serif">Team</span>
                </h2>
                <p className="text-[#54595F] mb-6">
                  We're always looking for passionate individuals who believe in the power of emotional organization and thoughtful design. Check out our open positions and become part of our journey.
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
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
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