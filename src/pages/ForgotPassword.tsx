
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/reset-password',
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success('Password reset instructions sent to your email');
      setEmail('');
    } catch (error) {
      console.error('Reset password error:', error);
      toast.error('An error occurred while sending reset instructions');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#FEFBF6]">
      <Link to="/" className="mb-8 text-3xl font-serif font-bold text-[#054A40]">
        Astralis
      </Link>
      
      <Card className="w-full max-w-md bg-white/90 backdrop-blur border-[#054A40]/10">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-serif font-semibold text-[#054A40]">Reset Password</h1>
          <p className="text-sm text-[#054A40]/70">Enter your email to reset your password</p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-[#054A40] hover:bg-[#054A40]/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Sending Instructions...' : 'Send Reset Instructions'}
            </Button>
          </form>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-4 border-t border-[#054A40]/10 p-6">
          <div className="text-sm text-[#054A40]/70 text-center">
            Remember your password?{' '}
            <Link to="/login" className="text-[#054A40] hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPassword;
