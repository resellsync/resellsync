
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const trustPoints = [
  "No credit card required",
  "14-day free trial", 
  "Minimal learning curve"
];

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div className="container-section pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-teal/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content - Person Image + Content */}
        <div className="relative">
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full px-4 py-1 text-sm bg-muted text-muted-foreground mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              The #1 platform for phone resellers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-heading mb-6">
              Streamline Your Phone Business
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Join thousands of phone resellers who use our platform to manage inventory, 
              track sales, and grow their business across multiple marketplaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Person Image with Background */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 bottom-0 w-72 h-72 bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 rounded-full blur-xl -z-10" />
          <img
            src="/lovable-uploads/35553380-ef49-418f-96ea-98dd39547420.png"
            alt="Happy phone reseller using ResellSync"
            className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 -bottom-24 w-64 hidden lg:block object-cover"
          />
        </div>

        {/* Right Content - Dashboard Preview */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-[600px] rounded-2xl overflow-hidden shadow-2xl border bg-white">
            {/* Dashboard Navigation */}
            <div className="flex items-center gap-2 border-b bg-gray-50/80 px-4 py-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 text-center text-sm font-medium text-gray-600">ResellSync Dashboard</div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
                    <span className="text-brand-teal font-semibold">RS</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Welcome back!</h3>
                    <p className="text-sm text-gray-500">Your business overview</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="text-sm text-gray-500">Active Listings</div>
                  <div className="text-2xl font-bold">247</div>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="text-sm text-gray-500">Monthly Sales</div>
                  <div className="text-2xl font-bold">$32.5k</div>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="text-sm text-gray-500">Profit Margin</div>
                  <div className="text-2xl font-bold">24.8%</div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">Recent Activity</h4>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-brand-blue/10" />
                        <div className="text-sm">
                          <p className="font-medium">iPhone 13 Pro Listed</p>
                          <p className="text-gray-500">2 min ago</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-brand-teal">$899</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
