import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="section-spacing">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-[#0A090C]">Ready to Transform Your Phone Reselling Business?</h2>
          <p className="text-lg opacity-80 mb-8 text-[#0A090C]">
            Join thousands of resellers who are saving time, reducing errors, and growing their business with ResellSync.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="group bg-[#0A090C] text-white border-0 hover:bg-[#222]">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#009A53] text-[#009A53] bg-white hover:bg-[#D6F5E6]">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm opacity-70 text-[#0A090C]">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
