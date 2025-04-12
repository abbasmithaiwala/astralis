
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About PastelNotes</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              PastelNotes was created with a simple mission: to help people capture and organize their thoughts in a beautiful, 
              intuitive way. We believe that note-taking should be a pleasure, not a chore.
            </p>
            
            <p>
              Our team of designers and developers have worked tirelessly to create an application that is both powerful and easy to use. 
              We've taken inspiration from the best note-taking apps out there and added our own unique touches.
            </p>
            
            <h2>Our Story</h2>
            <p>
              PastelNotes began as a personal project in 2023, born out of frustration with existing note-taking applications that were 
              either too complex or too simple. We wanted something that struck the perfect balance between functionality and ease of use, 
              with a design that was pleasing to the eye.
            </p>
            
            <p>
              After months of development and testing, we launched PastelNotes to the public, and the response has been overwhelming. 
              We're constantly working on improving the app based on user feedback and adding new features that make note-taking even more enjoyable.
            </p>
            
            <h2>Our Team</h2>
            <p>
              We're a small team of passionate individuals who love creating beautiful, functional software. Our backgrounds span design, 
              development, and user experience, giving us a well-rounded approach to building products that people love.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              Our mission is to create the most intuitive, beautiful, and powerful note-taking application on the market. 
              We want to help people organize their thoughts, capture their ideas, and stay productive in a way that feels natural and enjoyable.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
