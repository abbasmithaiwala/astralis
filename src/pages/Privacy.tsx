import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, LockKeyhole, Eye, AlertCircle } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/dots-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Privacy <span className="heading-serif">Policy</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#54595F]">
              We're committed to protecting your privacy and ensuring your data is secure.
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
                    <Shield className="h-5 w-5 text-[#5EAFFF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#054A40] m-0">Overview</h2>
                </div>
                <p className="text-[#54595F]">
                  This Privacy Policy describes how Astralis ("we", "our", or "us") collects, uses, and shares your information when you use our website, mobile applications, and services (collectively, the "Services").
                </p>
                <p className="text-[#54595F]">
                  We take your privacy seriously and are committed to protecting and respecting your personal data. Please read this policy carefully to understand our practices regarding your personal information.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#FFE2E2] rounded-full flex items-center justify-center mr-4">
                    <Eye className="h-5 w-5 text-[#FF6B6B]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#054A40] m-0">Information We Collect</h2>
                </div>
                <p className="text-[#54595F]">
                  We collect several types of information from and about users of our Services, including:
                </p>
                <ul className="space-y-3 text-[#54595F] list-disc pl-5">
                  <li>
                    <strong>Personal Information:</strong> We collect information that you provide directly to us, such as your name, email address, and payment information when you register for an account or subscribe to our Services.
                  </li>
                  <li>
                    <strong>Note Content:</strong> The content of the notes, journals, and other materials you create using our Services.
                  </li>
                  <li>
                    <strong>Usage Information:</strong> Information about how you use our Services, including log data, device information, and interactions with our features.
                  </li>
                  <li>
                    <strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to track activity on our Services and to hold certain information to improve your experience.
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#FFF4DE] rounded-full flex items-center justify-center mr-4">
                    <LockKeyhole className="h-5 w-5 text-[#F7B731]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#054A40] m-0">How We Use Your Information</h2>
                </div>
                <p className="text-[#54595F]">
                  We use the information we collect to:
                </p>
                <ul className="space-y-3 text-[#54595F] list-disc pl-5">
                  <li>Provide, maintain, and improve our Services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Develop new products and services</li>
                  <li>Personalize your experience</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                </ul>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#E5F8EB] rounded-full flex items-center justify-center mr-4">
                    <AlertCircle className="h-5 w-5 text-[#6BD5A8]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#054A40] m-0">Sharing Your Information</h2>
                </div>
                <p className="text-[#54595F]">
                  We do not sell your personal information. We may share your personal information in the following situations:
                </p>
                <ul className="space-y-3 text-[#54595F] list-disc pl-5">
                  <li>
                    <strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and other third parties who perform services on our behalf.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> We may share your information with your consent or as otherwise disclosed at the time of data collection or sharing.
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#054A40]">Data Security</h2>
                <p className="text-[#54595F]">
                  We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.
                </p>
                <p className="text-[#54595F]">
                  Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Services. Any transmission of personal information is at your own risk.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#054A40]">Children's Privacy</h2>
                <p className="text-[#54595F]">
                  Our Services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are under 13, please do not provide any information on our Services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#054A40]">Changes to Our Privacy Policy</h2>
                <p className="text-[#54595F]">
                  We may update our Privacy Policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on our website or by email.
                </p>
                <p className="text-[#54595F]">
                  The date this Privacy Policy was last revised is identified at the top of the page. You are responsible for periodically visiting our Services and this Privacy Policy to check for any changes.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#054A40]">Contact Us</h2>
                <p className="text-[#54595F]">
                  If you have any questions or concerns about our Privacy Policy or our practices with regard to your personal information, please contact us at:
                </p>
                <p className="text-[#54595F]">
                  <a href="mailto:privacy@Astralis.com" className="text-[#054A40] hover:underline">privacy@Astralis.com</a>
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-[#FEFBF6] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-[#054A40]">Have Questions About Our Privacy Practices?</h3>
              <p className="text-[#54595F] mb-6">
                We're here to help answer any questions you may have about how we protect and handle your data.
              </p>
              <Button asChild className="rounded-full bg-[#054A40] hover:bg-[#054A40]/90">
                <Link to="/contact">Contact Our Privacy Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage; 