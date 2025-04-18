
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Package, DollarSign } from 'lucide-react';

const Hero = () => {
  return (
    <div className="container-section pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center rounded-full px-4 py-1 text-sm bg-muted text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            The #1 platform for phone resellers
          </div>
          
          <h1 className="gradient-heading">
            Streamline Your Phone <br className="hidden md:block" />
            Reselling Business
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg">
            Manage inventory, sync listings, and scale your business across 
            multiple marketplaces from a single dashboard. Save time and boost sales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button size="lg" className="group">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center gap-2 mt-4 text-muted-foreground">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No credit card required</span>
            
            <span className="mx-2">•</span>
            
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>14-day free trial</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"></div>
          
          <div className="relative bg-white rounded-xl shadow-2xl border p-4 animate-float">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold">Business Overview</div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded-md shadow-sm flex flex-col">
                    <div className="text-sm text-muted-foreground">Total Sales</div>
                    <div className="text-2xl font-bold">$52.4k</div>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm flex flex-col">
                    <div className="text-sm text-muted-foreground">Growth</div>
                    <div className="text-2xl font-bold">+24%</div>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm flex flex-col">
                    <div className="text-sm text-muted-foreground">Orders</div>
                    <div className="text-2xl font-bold">164</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue/20 rounded-md flex items-center justify-center">
                      <BarChart2 className="text-brand-blue w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">Business Analytics</div>
                      <div className="text-sm text-muted-foreground">Real-time insights</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
                
                <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-teal/20 rounded-md flex items-center justify-center">
                      <Package className="text-brand-teal w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">Inventory Management</div>
                      <div className="text-sm text-muted-foreground">238 items in stock</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Manage</Button>
                </div>
                
                <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green/20 rounded-md flex items-center justify-center">
                      <DollarSign className="text-brand-green w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">Sales Overview</div>
                      <div className="text-sm text-muted-foreground">64 sales this month</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Details</Button>
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

