
import React from 'react';
import { CheckCircle } from 'lucide-react';

const marketplaces = [
  {
    name: "eBay",
    logo: "EB",
    features: ["Bulk listing creation", "Real-time inventory sync", "Order management", "Automated feedback"]
  },
  {
    name: "Backmarket",
    logo: "BM",
    features: ["Quality grade mapping", "Pricing optimization", "Return management", "Performance analytics"]
  },
  {
    name: "Reebelo",
    logo: "RB",
    features: ["Product catalog sync", "Automated fulfillment", "Warranty tracking", "Rating management"]
  },
  {
    name: "Swappie",
    logo: "SW",
    features: ["Condition grading sync", "Real-time inventory", "Order processing", "Returns handling"]
  }
];

const Marketplaces = () => {
  return (
    <div id="marketplaces" className="container-section">
      <div className="text-center mb-16">
        <h2 className="gradient-heading mb-4">Sync With Leading Marketplaces</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Connect your inventory with the most popular platforms for refurbished phones
          and manage everything from a single dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {marketplaces.map((marketplace, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-brand-blue to-brand-teal text-white font-bold text-xl">
              {marketplace.logo}
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">{marketplace.name}</h3>
            <ul className="space-y-2">
              {marketplace.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-teal shrink-0 mr-2 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-4">
          More marketplace integrations coming soon - Vinted, Amazon, and more!
        </p>
      </div>
    </div>
  );
};

export default Marketplaces;
