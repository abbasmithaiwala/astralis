import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Tag,
  CheckCircle,
  Shield,
  Smartphone,
  ArrowRight,
  PenLine,
  Sparkles,
  RefreshCw,
  ArrowLeft,
  BookText,
  Heart,
  Music,
  Coffee,
  CloudLightning,
  Laugh,
  Frown,
  Smile,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient py-8 md:py-16 relative overflow-hidden create-hub-section">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 heading-serif text-center">
              Create <br className="hidden md:block" />
              with Astralis
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

            {/* Card 2 - Anxiety */}
            <div className="relative sm:mt-0 lg:mt-4 group">
            <div className="create-card group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-1">
                <div className="create-card-content overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1682608388937-26eadd2ddfe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29uZnVzZWR8ZW58MHx8MHx8fDA%3D"
                    alt="Confused"
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="create-card-label mx-auto group-hover:bg-[#F0E6FF] transition-colors duration-300">
                    <Music size={14} className="text-[#8440FF]" />
                    <span>Confused</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Confused */}
            <div className="relative sm:mt-10 group">
            <div className="create-card group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-1">
                <div className="create-card-content overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1608389168343-ba8aa0cb3a63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Grateful"
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="create-card-label mx-auto group-hover:bg-[#FFF0E5] transition-colors duration-300">
                    <Laugh size={14} className="text-[#FF8F5C]" />
                    <span>Grateful</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Sad Days */}
            <div className="relative sm:mt-4 lg:mt-0 group">
              <div className="create-card group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-1">
                <div className="create-card-content overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
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

            {/* Card 5 - Mixed Feelings */}
            <div className="relative sm:mt-12 lg:mt-6 group">
              <div className="create-card group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-1">
                <div className="create-card-content overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCTM1oxIpfN5hwpdIKLgsxnWHZKpJTdyMC2M02gcohr0E4wGRAh960DCDzQFZuuGLGQCk&usqp=CAU"
                    alt="Excitement Overload"
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="create-card-label mx-auto group-hover:bg-[#FFE6ED] transition-colors duration-300">
                    <Heart size={14} className="text-[#FC5C8D]" />
                    <span>Excitement Overload</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 - Angry */}
            <div className="relative sm:mt-2 group">
              <div className="create-card group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-1">
                <div className="create-card-content overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1689177356594-b988a1cc45ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW54aWV0eXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Angry"
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="create-card-label mx-auto group-hover:bg-[#E6F7FF] transition-colors duration-300">
                    <Coffee size={14} className="text-[#5EAFFF]" />
                    <span>Angry</span>
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
              Designed with simplicity and productivity in mind. All the tools
              you need, none of the clutter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-pastel-pink-light">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <Tag className="h-6 w-6 text-[#054A40]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pastel-neutral-800">
                Smart Organization
              </h3>
              <p className="text-pastel-neutral-600">
                Tag, pin, and organize your notes for quick and easy access
                whenever you need them.
              </p>
            </div>

            <div className="feature-card bg-pastel-blue-light">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <CheckCircle className="h-6 w-6 text-pastel-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pastel-neutral-800">
                Task Lists
              </h3>
              <p className="text-pastel-neutral-600">
                Create interactive checklists for shopping, to-dos, and more
                with easy-to-use checkboxes.
              </p>
            </div>

            <div className="feature-card bg-pastel-purple-light">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <PenLine className="h-6 w-6 text-pastel-purple-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pastel-neutral-800">
                Rich Formatting
              </h3>
              <p className="text-pastel-neutral-600">
                Bold, italic, lists, and more—format your notes exactly how you
                want them to look.
              </p>
            </div>

            <div className="feature-card bg-pastel-green-light">
              <div className="bg-white rounded-full p-4 inline-flex mb-6 shadow-sm">
                <Shield className="h-6 w-6 text-pastel-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pastel-neutral-800">
                Your Mood fixer
              </h3>
              <p className="text-pastel-neutral-600">
                Your notes sync and reflect your emotions, with AI that feels
                truly human.
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
                Not Just Notes—It's a Mood Fixer
              </h2>
              <p className="text-lg text-pastel-neutral-600 mb-4">
                Each color you pick reflects more than a mood—it mirrors what
                you feel inside.
              </p>
              <p className="text-lg text-pastel-neutral-600 mb-8">
                Your words + our AI = understanding. Our human-like AI
                interprets your notes and emotions, helping you navigate your
                thoughts through friendly, empathetic conversation.
              </p>
              <div className="flex flex-wrap gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-pastel-pink shadow-sm"
                  title="Love / Calm"
                ></div>
                <div
                  className="w-12 h-12 rounded-full bg-pastel-blue shadow-sm"
                  title="Sadness / Peace"
                ></div>
                <div
                  className="w-12 h-12 rounded-full bg-pastel-green shadow-sm"
                  title="Growth / Hope"
                ></div>
                <div
                  className="w-12 h-12 rounded-full bg-pastel-purple shadow-sm"
                  title="Creativity / Confusion"
                ></div>
                <div
                  className="w-12 h-12 rounded-full bg-pastel-yellow shadow-sm"
                  title="Joy / Energy"
                ></div>
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  className="rounded-full px-6 bg-white border border-pastel-neutral-200 text-pastel-neutral-700 hover:bg-pastel-neutral-100 shadow-sm"
                >
                  <Link to="/features" className="flex items-center gap-2">
                    Discover How <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="glass-card bg-pastel-pink/50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2 text-pastel-neutral-800">
                  Project Ideas
                </h3>
                <p className="text-sm text-pastel-neutral-600">
                  Building a website, learning React, mobile app concepts...
                </p>
              </div>

              <div className="glass-card bg-pastel-blue/50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2 text-pastel-neutral-800">
                  Feeling Low
                </h3>
                <p className="text-sm text-pastel-neutral-600">
                  It's been a long day... need a break and a chat.
                </p>
              </div>

              <div className="glass-card bg-pastel-yellow/50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2 text-pastel-neutral-800">
                  Grateful Moments
                </h3>
                <p className="text-sm text-pastel-neutral-600">
                  Sunshine, good coffee, and quiet mornings. Just perfect.
                </p>
              </div>

              <div className="glass-card bg-pastel-green/50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2 text-pastel-neutral-800">
                  Meeting Notes
                </h3>
                <p className="text-sm text-pastel-neutral-600">
                  New project ideas, clear roadmap. Feeling hopeful!
                </p>
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
                Astralis works seamlessly offline, so you can access and edit
                your notes anywhere, anytime—even without an internet
                connection.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-pastel-pink-light p-2 rounded-lg mr-4 mt-1">
                    <Smartphone className="h-5 w-5 text-[#054A40]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pastel-neutral-800">
                      Install on Any Device
                    </h3>
                    <p className="text-pastel-neutral-600">
                      Works like a native app on your phone, tablet, or desktop.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-pastel-blue-light p-2 rounded-lg mr-4 mt-1">
                    <RefreshCw className="h-5 w-5 text-pastel-blue-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pastel-neutral-800">
                      Automatic Sync
                    </h3>
                    <p className="text-pastel-neutral-600">
                      Changes sync across all devices when you're back online.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-pastel-green-light p-2 rounded-lg mr-4 mt-1">
                    <Sparkles className="h-5 w-5 text-pastel-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pastel-neutral-800">
                      Fast & Responsive
                    </h3>
                    <p className="text-pastel-neutral-600">
                      Loads instantly and responds quickly to your inputs.
                    </p>
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
                        <h4 className="text-xs font-medium text-pastel-neutral-800">
                          Shopping List
                        </h4>
                        <p className="text-[10px] mt-1 text-pastel-neutral-600">
                          Milk, Eggs, Bread...
                        </p>
                      </div>
                      <div className="bg-pastel-blue rounded-lg p-3">
                        <h4 className="text-xs font-medium text-pastel-neutral-800">
                          Meeting Notes
                        </h4>
                        <p className="text-[10px] mt-1 text-pastel-neutral-600">
                          Project timeline...
                        </p>
                      </div>
                      <div className="bg-pastel-yellow rounded-lg p-3">
                        <h4 className="text-xs font-medium text-pastel-neutral-800">
                          Ideas
                        </h4>
                        <p className="text-[10px] mt-1 text-pastel-neutral-600">
                          App concept...
                        </p>
                      </div>
                      <div className="bg-pastel-purple rounded-lg p-3">
                        <h4 className="text-xs font-medium text-pastel-neutral-800">
                          Books to Read
                        </h4>
                        <p className="text-[10px] mt-1 text-pastel-neutral-600">
                          Science fiction...
                        </p>
                      </div>
                      <div className="bg-pastel-green rounded-lg p-3">
                        <h4 className="text-xs font-medium text-pastel-neutral-800">
                          Workout Plan
                        </h4>
                        <p className="text-[10px] mt-1 text-pastel-neutral-600">
                          Monday: Cardio...
                        </p>
                      </div>
                      <div className="bg-pastel-pink rounded-lg p-3">
                        <h4 className="text-xs font-medium text-pastel-neutral-800">
                          Recipes
                        </h4>
                        <p className="text-[10px] mt-1 text-pastel-neutral-600">
                          Pasta carbonara...
                        </p>
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
            Join thousands of users who've transformed how they take notes. Try
            Astralis today—it's free to get started.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#054A40] hover:bg-[#054A40]/90 text-white shadow-md hover:shadow-lg transition-all px-8"
          >
            <Link to="/signup">Create Your Free Account</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
