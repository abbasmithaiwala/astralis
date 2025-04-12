import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject is required.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  reason: z.string({
    required_error: "Please select a reason for contacting us.",
  }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      reason: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This would typically be connected to your backend
    console.log(values);
    alert("Thank you for your message! We'll get back to you soon.");
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/dots-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Get in <span className="heading-serif">Touch</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#54595F]">
              Have questions, feedback, or just want to say hello? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Contact Form */}
              <div className="w-full lg:w-2/3">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-6 text-[#054A40]">Send Us a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#54595F]">Your Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="John Doe" 
                                  className="rounded-lg border-[#E2E8F0] focus:border-[#054A40] focus:ring-[#054A40]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#54595F]">Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="you@example.com" 
                                  className="rounded-lg border-[#E2E8F0] focus:border-[#054A40] focus:ring-[#054A40]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="reason"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#54595F]">Reason for Contact</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="rounded-lg border-[#E2E8F0] focus:border-[#054A40] focus:ring-[#054A40]">
                                    <SelectValue placeholder="Select a reason" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="general">General Inquiry</SelectItem>
                                  <SelectItem value="support">Technical Support</SelectItem>
                                  <SelectItem value="feedback">Product Feedback</SelectItem>
                                  <SelectItem value="billing">Billing Question</SelectItem>
                                  <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#54595F]">Subject</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="What's this about?" 
                                  className="rounded-lg border-[#E2E8F0] focus:border-[#054A40] focus:ring-[#054A40]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#54595F]">Your Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please share any details that might help us assist you better..." 
                                className="rounded-lg border-[#E2E8F0] focus:border-[#054A40] focus:ring-[#054A40] min-h-32" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full rounded-full bg-[#054A40] hover:bg-[#054A40]/90">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="w-full lg:w-1/3">
                <div className="space-y-6">
                  <div className="bg-[#FEFBF6] p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-[#054A40]">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-[#E3F8FF] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <Mail className="h-5 w-5 text-[#5EAFFF]" />
                        </div>
                        <div>
                          <p className="font-medium text-[#054A40]">Email Us</p>
                          <a href="mailto:hello@pastelnotes.com" className="text-[#54595F] hover:text-[#054A40]">
                            hello@pastelnotes.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-[#FFE2E2] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <PhoneCall className="h-5 w-5 text-[#FF6B6B]" />
                        </div>
                        <div>
                          <p className="font-medium text-[#054A40]">Call Us</p>
                          <a href="tel:+1-555-123-4567" className="text-[#54595F] hover:text-[#054A40]">
                            +1-555-123-4567
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-[#FFF4DE] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin className="h-5 w-5 text-[#F7B731]" />
                        </div>
                        <div>
                          <p className="font-medium text-[#054A40]">Our Office</p>
                          <p className="text-[#54595F]">
                            123 Creative Way<br />
                            San Francisco, CA 94103
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-[#E5F8EB] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <Clock className="h-5 w-5 text-[#6BD5A8]" />
                        </div>
                        <div>
                          <p className="font-medium text-[#054A40]">Business Hours</p>
                          <p className="text-[#54595F]">
                            Monday - Friday: 9am - 6pm<br />
                            Saturday - Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#054A40] p-8 rounded-xl text-white shadow-sm">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Need Help?
                    </h3>
                    <p className="mb-6">
                      Check out our comprehensive help center for frequently asked questions and detailed guides.
                    </p>
                    <Button asChild variant="secondary" className="w-full rounded-full">
                      <Link to="/support">Visit Support Center</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-[#F7F9FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
              {/* Replace with actual Google Maps embed or any map component */}
              <div className="w-full h-full bg-[#E2E8F0] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-[#054A40] mx-auto mb-2" />
                  <p className="text-[#54595F]">Map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#054A40]">Frequently Asked Questions</h2>
              <p className="text-[#54595F]">
                Find quick answers to common questions about contacting us and getting support.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#FEFBF6] rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#054A40]">What's the fastest way to get help?</h3>
                <p className="text-[#54595F]">
                  For immediate assistance, we recommend checking our support center first. For technical issues, email support is typically the fastest route. For urgent matters, please call our support line.
                </p>
              </div>
              
              <div className="bg-[#FEFBF6] rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#054A40]">How long does it take to get a response?</h3>
                <p className="text-[#54595F]">
                  We typically respond to emails within 24 hours during business days. Phone support is available during our business hours, and chat support typically has wait times under 5 minutes.
                </p>
              </div>
              
              <div className="bg-[#FEFBF6] rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#054A40]">Do you offer support on weekends?</h3>
                <p className="text-[#54595F]">
                  While our office is closed on weekends, Premium and Business plan customers have access to emergency support for critical issues via our priority email channel.
                </p>
              </div>
              
              <div className="bg-[#FEFBF6] rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#054A40]">How can I report a bug or suggest a feature?</h3>
                <p className="text-[#54595F]">
                  You can use the contact form above with the reason set to "Product Feedback" or email us directly at feedback@pastelnotes.com. We value your input and review all suggestions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage; 