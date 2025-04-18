
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small resellers just getting started",
    features: [
      "Up to 250 active listings",
      "2 marketplace connections",
      "Basic inventory management",
      "Email support",
      "Mobile app access"
    ],
    popular: false,
    buttonText: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing businesses with expanding inventory",
    features: [
      "Up to 1,000 active listings",
      "All marketplace connections",
      "Advanced inventory management",
      "Priority email & chat support",
      "Sales analytics dashboard",
      "Bulk listing tools",
      "API access"
    ],
    popular: true,
    buttonText: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale resellers with high volume",
    features: [
      "Unlimited active listings",
      "All marketplace connections",
      "Advanced inventory with serial tracking",
      "24/7 dedicated support",
      "Advanced analytics & reporting",
      "Custom integrations",
      "Multi-user access",
      "Training & onboarding"
    ],
    popular: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <div id="pricing" className="container-section">
      <div className="text-center mb-16">
        <h2 className="gradient-heading mb-4">Simple, Transparent Pricing</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Choose the plan that works best for your business. All plans include a 14-day free trial.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card ${plan.popular ? 'relative border-brand-teal shadow-xl' : ''}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-teal text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground ml-1">/month</span>}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
            </div>
            
            <div className="mt-auto">
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex">
                    <Check className="h-5 w-5 text-brand-teal shrink-0 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
