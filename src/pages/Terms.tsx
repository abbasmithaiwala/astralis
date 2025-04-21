import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Scale, Clock, AlertTriangle } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/dots-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Terms of <span className="heading-serif">Service</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#54595F]">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-[#54595F]">
              Last Updated: June 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#E3F8FF] rounded-full flex items-center justify-center mr-4">
                    <FileText className="h-5 w-5 text-[#5EAFFF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#054A40] m-0">Introduction</h2>
                </div>
                <p className="text-[#54595F]">
                  Welcome to Astralis. These Terms of Service ("Terms") govern your access to and use of our website, mobile applications, and services (collectively, the "Services"), so please read them carefully.
                </p>
                <p className="text-[#54595F]">
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#FFE2E2] rounded-full flex items-center justify-center mr-4">
                    <Scale className="h-5 w-5 text-[#FF6B6B]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#054A40] m-0">Using Our Services</h2>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-[#054A40]">Account Registration</h3>
                <p className="text-[#54595F]">
                  To use some features of our Services, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating your account and to update your information to keep it accurate and complete.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-[#054A40]">Acceptable Use</h3>
                <p className="text-[#54595F]">
                  You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="space-y-3 text-[#54595F] list-disc pl-5">
                  <li>Use the Services in any way that violates any applicable law or regulation</li>
                  <li>Use the Services to transmit any content that is unlawful, offensive, or otherwise objectionable</li>
                  <li>Engage in any activity that interferes with or disrupts the Services</li>
                  <li>Attempt to access any part of the Services, or any server, account, system, or network connected to the Services, by hacking, password mining, or any other means</li>
                  <li>Use any robot, spider, or other automatic device to access the Services for any purpose</li>
                </ul>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#FFF4DE] rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-[#F7B731]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#054A40] m-0">Subscriptions and Payment</h2>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-[#054A40]">Free and Paid Services</h3>
                <p className="text-[#54595F]">
                  We offer both free and paid subscription plans. By selecting a paid subscription, you agree to pay the subscription fees as described at the time of purchase.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-[#054A40]">Billing and Renewal</h3>
                <p className="text-[#54595F]">
                  For paid subscriptions, we will bill you in advance on a recurring basis (either monthly or annually, depending on the billing cycle you select). Your subscription will automatically renew at the end of each billing period unless you cancel it before the renewal date.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-[#054A40]">Cancellation and Refunds</h3>
                <p className="text-[#54595F]">
                  You may cancel your subscription at any time through your account settings. If you cancel, you will continue to have access to your paid features until the end of your current billing period, but you will not receive a refund for any fees you have already paid.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#E5F8EB] rounded-full flex items-center justify-center mr-4">
                    <AlertTriangle className="h-5 w-5 text-[#6BD5A8]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#054A40] m-0">Content and Intellectual Property</h2>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-[#054A40]">Your Content</h3>
                <p className="text-[#54595F]">
                  You retain all rights to the content you create, upload, or store using our Services ("Your Content"). By using our Services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, transmit, and display Your Content solely for the purpose of providing and improving the Services.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-[#054A40]">Our Intellectual Property</h3>
                <p className="text-[#54595F]">
                  The Services and all content and materials included on the Services, such as text, graphics, logos, images, and software, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-[#54595F]">
                  We grant you a limited, non-exclusive, non-transferable, and revocable license to use the Services for their intended purposes in accordance with these Terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#054A40]">Disclaimer of Warranties</h2>
                <p className="text-[#54595F]">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-[#54595F]">
                  WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#054A40]">Limitation of Liability</h2>
                <p className="text-[#54595F]">
                  IN NO EVENT WILL WE, OUR AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#054A40]">Changes to These Terms</h2>
                <p className="text-[#54595F]">
                  We may update these Terms from time to time. If we make material changes, we will notify you through the Services or by email. Your continued use of the Services after any changes indicates your acceptance of the new Terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#054A40]">Governing Law</h2>
                <p className="text-[#54595F]">
                  These Terms and your use of the Services will be governed by and construed in accordance with the laws of the state of California, without giving effect to any principles of conflicts of law.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#054A40]">Contact Us</h2>
                <p className="text-[#54595F]">
                  If you have any questions or concerns about these Terms or our Services, please contact us at:
                </p>
                <p className="text-[#54595F]">
                  <a href="mailto:legal@Astralis.com" className="text-[#054A40] hover:underline">legal@Astralis.com</a>
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-[#FEFBF6] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-[#054A40]">Questions About Our Terms?</h3>
              <p className="text-[#54595F] mb-6">
                If you have any questions about our Terms of Service, we're here to help clarify anything you need.
              </p>
              <Button asChild className="rounded-full bg-[#054A40] hover:bg-[#054A40]/90">
                <Link to="/contact">Contact Our Legal Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsPage; 