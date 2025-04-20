
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success('Password updated successfully');
      navigate('/login');
    } catch (error) {
      console.error('Reset password error:', error);
      toast.error('An error occurred while resetting password');
    } finally {
      setIsLoading(false);
    }
  };

  // Listen for auth state changes to ensure user has valid recovery token
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        // The user has a valid recovery token
        console.log('Valid recovery token');
      } else if (!session && event !== 'INITIAL_SESSION') {
        // No valid recovery token, redirect to login
        navigate('/login');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#FEFBF6]">
      <Link to="/" className="mb-8 text-3xl font-serif font-bold text-[#054A40]">
        Astralis
      </Link>
      
      <Card className="w-full max-w-md bg-white/90 backdrop-blur border-[#054A40]/10">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-serif font-semibold text-[#054A40]">Set New Password</h1>
          <p className="text-sm text-[#054A40]/70">Enter your new password</p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                New Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm New Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-[#054A40] hover:bg-[#054A40]/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Updating Password...' : 'Update Password'}
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

export default ResetPassword;
