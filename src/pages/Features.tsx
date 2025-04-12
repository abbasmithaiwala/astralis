
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Features</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Discover all the powerful features available in PastelNotes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border border-gray-100 dark:border-gray-800 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Rich Text Editing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Format your notes with bold, italic, lists, and more using our intuitive rich text editor.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 dark:border-gray-800 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Custom Tags</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Organize your notes with custom tags for quick filtering and organization.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 dark:border-gray-800 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Pinned Notes</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Keep your most important notes at the top of your dashboard for quick access.
              </p>
            </div>
            
            {/* More features would be added here */}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
