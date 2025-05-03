import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Check, Mail, Clock, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Show toast notification
    toast.success("Welcome to ResellSync! 🎉", {
      description: "You're now part of the future of phone reselling.",
      duration: 5000,
    });

    // Trigger confetti animation
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <div className="container-section py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Logo */}
          <div className="mb-12">
            <img 
              src="/logos/logo-resellsync_black.svg" 
              alt="ResellSync Logo" 
              className="h-12 mx-auto"
            />
          </div>

          {/* Early Access Badge with Checkmark */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="inline-flex items-center rounded-full px-5 py-2 text-base font-medium bg-gradient-to-r from-[#FFF3D1] to-[#F5C16C] text-[#111] shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-[#FFD700] mr-2"></span>
              Early Access Member
            </span>
            <Check className="h-8 w-8 text-[#111]" strokeWidth={2.5} />
          </div>

          <h1 className="font-bold text-5xl md:text-6xl text-[#0A090C] font-sans mb-6">
            Welcome to ResellSync!
          </h1>
          
          <p className="text-lg text-[#0A090C] opacity-80 max-w-2xl mx-auto mb-8">
            You're now part of the future of phone reselling. Get ready to take your business to the next level with our powerful platform.
          </p>

          <Button 
            onClick={() => navigate('/')}
            className="group"
            size="lg"
          >
            Return to Home
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFF3D1]">
                <Mail className="h-6 w-6 text-[#0A090C]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#0A090C]">Email Confirmation</h3>
            <p className="text-[#0A090C] opacity-80">
              We've sent you a confirmation email to verify your waitlist registration. Please check your inbox and spam folder.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFF3D1]">
                <Clock className="h-6 w-6 text-[#0A090C]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#0A090C]">Early Access Timeline</h3>
            <p className="text-[#0A090C] opacity-80">
              We're carefully rolling out access to ensure the best experience. You'll be among the first to know when it's your turn!
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFF3D1]">
                <Users className="h-6 w-6 text-[#0A090C]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#0A090C]">Join the Community</h3>
            <p className="text-[#0A090C] opacity-80">
              Connect with fellow resellers in our exclusive community. Share insights, tips, and grow together.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-[#0A090C]">Need Help?</h2>
          <p className="text-[#0A090C] opacity-80 mb-6">
            Our team is here to support you every step of the way. Don't hesitate to reach out!
          </p>
          <Button variant="outline" asChild className="group">
            <a href="mailto:support@resellsync.com" className="group">
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage; 