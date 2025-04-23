
import React from 'react';
import { Package, BarChart, RefreshCw, Globe, ShieldCheck, Clock } from 'lucide-react';
import DashboardInsights from './DashboardInsights';

const features = [
  {
    icon: <Package className="h-8 w-8 text-brand-blue" />,
    title: "Inventory Management",
    description: "Track phone inventory, conditions, and pricing all in one place with detailed reporting and analytics."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-brand-teal" />,
    title: "Multi-Channel Sync",
    description: "Automatically sync listings across eBay, Backmarket, Reebelo and more with real-time inventory updates."
  },
  {
    icon: <BarChart className="h-8 w-8 text-brand-green" />,
    title: "Sales Analytics",
    description: "Gain insights into your best-performing products, profit margins, and market trends to make data-driven decisions."
  },
  {
    icon: <Globe className="h-8 w-8 text-brand-blue" />,
    title: "Global Marketplace Support",
    description: "Expand your reach with support for international marketplaces and shipping integrations."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-brand-teal" />,
    title: "Fraud Protection",
    description: "Minimize risks with built-in buyer verification and transaction security features."
  },
  {
    icon: <Clock className="h-8 w-8 text-brand-green" />,
    title: "Time-Saving Automations",
    description: "Automate pricing, listing creation, and order processing to save hours of manual work every day."
  }
];

const Features = () => {
  return (
    <div id="features" className="container-section bg-muted">
      <div className="text-center mb-16">
        <h2 className="gradient-heading mb-4">Powerful Features for Phone Resellers</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Everything you need to manage your inventory, streamline listings, and grow your business.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`feature-card ${feature.title === "Grow Smarter With a Powerful Dashboard" ? "lg:col-span-3" : ""}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
            {feature.title === "Grow Smarter With a Powerful Dashboard" && (
              <div className="mt-8">
                <DashboardInsights />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
