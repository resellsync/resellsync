import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from './Logo';
import { toast } from 'sonner';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Listen for Tally form submission
    const handleTallySubmit = (event: MessageEvent) => {
      if (event.data.tally && event.data.tally.type === 'tally:form:submitted') {
        toast.success('Thank you for joining the waitlist! We will send you an email shortly.');
      }
    };

    window.addEventListener('message', handleTallySubmit);
    return () => window.removeEventListener('message', handleTallySubmit);
  }, []);

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container-section py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo variant="full" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#marketplaces" className="text-muted-foreground hover:text-foreground transition-colors">Marketplaces</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </div>
          
          <div className="hidden md:flex items-center">
            <Button asChild>
              <a href="https://tally.so/embed/wggEKJ" target="_blank" rel="noopener noreferrer">Join the Waitlist</a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-muted-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-foreground p-2 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#marketplaces" 
                className="text-foreground p-2 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplaces
              </a>
              <a 
                href="#pricing" 
                className="text-foreground p-2 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#faq" 
                className="text-foreground p-2 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="mt-2">
                <Button className="w-full" asChild>
                  <a href="https://tally.so/embed/wggEKJ" target="_blank" rel="noopener noreferrer">Join the Waitlist</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
