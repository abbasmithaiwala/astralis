import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, HelpCircle } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/dots-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Simple, <span className="heading-serif">Transparent</span> Pricing
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#54595F]">
              Choose the plan that works best for you. All plans include core features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Free Plan */}
            <div className="w-full md:w-80 border border-[#E5DCC3] rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-all relative flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#054A40] mb-2">Free</h3>
                <p className="text-[#54595F] mb-4">Perfect for getting started</p>
                <div className="text-3xl font-bold text-[#054A40] mb-2">$0</div>
                <p className="text-[#54595F] text-sm">Free forever</p>
              </div>
              
              <Button asChild className="rounded-full bg-[#054A40] hover:bg-[#054A40]/90 w-full text-white mb-6">
                <Link to="/signup">Get Started</Link>
              </Button>
              
              <div className="space-y-3 flex-grow">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Up to 50 notes</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Basic formatting</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Mobile and desktop access</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">3 tags</span>
                </div>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div className="w-full md:w-80 border-2 border-[#054A40] rounded-xl p-8 bg-white shadow-md hover:shadow-lg transition-all relative flex flex-col">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <div className="bg-[#054A40] text-white text-xs font-semibold py-1 px-3 rounded-full">
                  Popular
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#054A40] mb-2">Premium</h3>
                <p className="text-[#54595F] mb-4">For serious note-takers</p>
                <div className="text-3xl font-bold text-[#054A40] mb-2">$4.99</div>
                <p className="text-[#54595F] text-sm">per month, billed monthly</p>
              </div>
              
              <Button asChild className="rounded-full bg-[#054A40] hover:bg-[#054A40]/90 w-full text-white mb-6">
                <Link to="/signup?plan=premium">Start Free Trial</Link>
              </Button>
              
              <div className="space-y-3 flex-grow">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Unlimited notes</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Advanced formatting</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">All device sync</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Unlimited tags</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Priority support</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Offline access</span>
                </div>
              </div>
            </div>
            
            {/* Business Plan */}
            <div className="w-full md:w-80 border border-[#E5DCC3] rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-all relative flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#054A40] mb-2">Business</h3>
                <p className="text-[#54595F] mb-4">For teams and businesses</p>
                <div className="text-3xl font-bold text-[#054A40] mb-2">$12.99</div>
                <p className="text-[#54595F] text-sm">per user/month, billed annually</p>
              </div>
              
              <Button asChild className="rounded-full bg-[#054A40] hover:bg-[#054A40]/90 w-full text-white mb-6">
                <Link to="/signup?plan=business">Contact Sales</Link>
              </Button>
              
              <div className="space-y-3 flex-grow">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Everything in Premium</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Team workspaces</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Admin controls</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Advanced permissions</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">SAML SSO</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#6BD5A8] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#54595F]">Dedicated support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-[#FEFBF6]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-center text-[#054A40]">
              Frequently Asked <span className="heading-serif">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#054A40] mb-3">Can I try Astralis before I buy?</h3>
                <p className="text-[#54595F]">Yes! You can start with our free plan, which includes core features. We also offer a 14-day free trial of Premium with no credit card required.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#054A40] mb-3">Can I cancel my subscription anytime?</h3>
                <p className="text-[#54595F]">Absolutely. You can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to Premium features until the end of your billing period.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#054A40] mb-3">Is my data secure?</h3>
                <p className="text-[#54595F]">Yes. We use industry-standard encryption to keep your notes secure. Your data is stored in secure data centers, and we never share your information with third parties.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#054A40] mb-3">Do you offer student discounts?</h3>
                <p className="text-[#54595F]">Yes! Students and educators can get 50% off our Premium plan. Contact our support team with your school email for verification.</p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-[#54595F] mb-4">Have more questions? We're here to help.</p>
              <Button asChild variant="outline" className="rounded-full border-[#054A40] text-[#054A40] hover:bg-[#054A40]/5">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-center text-[#054A40]">
            What Our Users <span className="heading-serif">Say</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FEFBF6] p-6 rounded-xl shadow-sm border border-[#E5DCC3]/30">
              <p className="text-[#54595F] mb-6 italic">"Astralis has completely changed how I organize my thoughts. The emotional tagging feature is a game-changer for my journaling practice."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#F0E6FF] flex items-center justify-center mr-3">
                  <span className="font-semibold text-[#8440FF]">SR</span>
                </div>
                <div>
                  <p className="font-medium text-[#054A40]">Sarah R.</p>
                  <p className="text-sm text-[#54595F]">Writer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#FEFBF6] p-6 rounded-xl shadow-sm border border-[#E5DCC3]/30">
              <p className="text-[#54595F] mb-6 italic">"The Premium plan is well worth the investment. I use Astralis for both personal journaling and work projects, and the unlimited tags help me keep everything organized."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#E6F7FF] flex items-center justify-center mr-3">
                  <span className="font-semibold text-[#5EAFFF]">MT</span>
                </div>
                <div>
                  <p className="font-medium text-[#054A40]">Michael T.</p>
                  <p className="text-sm text-[#54595F]">Product Manager</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#FEFBF6] p-6 rounded-xl shadow-sm border border-[#E5DCC3]/30">
              <p className="text-[#54595F] mb-6 italic">"Our team switched to Astralis Business last year, and it's been a productivity boost for everyone. The collaborative features and admin controls are exactly what we needed."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#FFF4DE] flex items-center justify-center mr-3">
                  <span className="font-semibold text-[#F7B731]">JL</span>
                </div>
                <div>
                  <p className="font-medium text-[#054A40]">Jennifer L.</p>
                  <p className="text-sm text-[#54595F]">Team Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="hero-gradient py-16 text-[#054A40] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/dots-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to <span className="heading-serif">Get Started</span>?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-[#54595F]">
            Join thousands of users who've transformed how they take notes. Try Astralis today—it's free to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-[#054A40] hover:bg-[#054A40]/90 text-white shadow-md hover:shadow-lg transition-all px-8">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-[#054A40]/30 text-[#054A40] hover:bg-[#054A40]/5">
              <Link to="/features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PricingPage; 