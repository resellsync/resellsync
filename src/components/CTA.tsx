import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="bg-white">
      <div className="container-section py-20">
        <div className="text-center text-foreground max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Phone Reselling Business?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of resellers who are saving time, reducing errors, and growing their business with ResellSync.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="group">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80 text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
