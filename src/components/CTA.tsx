
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-brand-blue to-brand-teal">
      <div className="container-section py-20">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Phone Reselling Business?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of resellers who are saving time, reducing errors, and growing their business with ResellSync.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
              Schedule a Demo
            </Button>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
