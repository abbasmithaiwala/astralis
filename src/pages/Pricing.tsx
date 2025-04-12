
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose the plan that's right for you. All plans come with a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">For casual note takers</p>
                <div className="text-3xl font-bold mb-6">$0<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/month</span></div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Up to 50 notes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Basic text formatting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Mobile & desktop access</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6">
                <Button variant="outline" className="w-full">Sign Up Free</Button>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="border-2 border-[#FCA591] rounded-lg overflow-hidden shadow-lg relative">
              <div className="bg-[#FCA591] text-white text-xs font-bold px-3 py-1 uppercase tracking-wide absolute top-0 right-0 rounded-bl-lg">
                Most Popular
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">For regular note takers</p>
                <div className="text-3xl font-bold mb-6">$4.99<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/month</span></div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited notes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Rich text formatting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Custom tags & categories</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>File attachments (up to 1GB)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6">
                <Button className="w-full bg-[#FCA591] hover:bg-[#FCA591]/90">Start Free Trial</Button>
              </div>
            </div>
            
            {/* Business Plan */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Business</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">For teams & professionals</p>
                <div className="text-3xl font-bold mb-6">$9.99<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/month</span></div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced permissions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>File attachments (up to 5GB)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>24/7 premium support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6">
                <Button variant="outline" className="w-full">Start Free Trial</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
