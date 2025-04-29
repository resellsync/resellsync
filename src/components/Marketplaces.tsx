import React, { useState, useEffect } from 'react';
import { CheckCircle, Package, FileSpreadsheet, Truck, Database, Link, ShoppingCart, Store } from 'lucide-react';
import { marketplaces } from './hero/data/marketplaceData';
import { ScrollReveal } from './ui/ScrollReveal';
import { motion } from 'framer-motion';

// Define our marketplaces for the first section
const marketplaceFeatures = [
  {
    name: "eBay",
    icon: <ShoppingCart className="h-5 w-5 text-brand-blue" />,
    description: "List and manage your inventory on the world's largest online marketplace for used electronics.",
    features: ["Bulk listing creation", "Real-time inventory sync", "Order management", "Automated feedback"]
  },
  {
    name: "Backmarket",
    logo: "/logos/Backmarket logo.svg",
    description: "Expand your reach on the leading marketplace for refurbished electronics in Europe and the US.",
    features: ["Quality grade mapping", "Pricing optimization", "Return management", "Performance analytics"]
  },
  {
    name: "Reebelo",
    logo: "/logos/Reebelo Logo.svg",
    description: "Connect to this fast-growing marketplace for sustainable tech across Asia-Pacific region.",
    features: ["Product catalog sync", "Automated fulfillment", "Warranty tracking", "Rating management"]
  },
  {
    name: "Swappa",
    logo: "/logos/Swappa Logo.svg",
    description: "Sell directly to consumers on this user-to-user marketplace for gently used technology.",
    features: ["Condition grading sync", "Real-time inventory", "Order processing", "Returns handling"]
  }
];

// Define our tools and integrations for the second section
const toolIntegrations = [
  {
    name: "ShipStation",
    icon: <Truck className="h-5 w-5 text-brand-blue" />,
    description: "Automate your shipping process with label creation, tracking updates, and carrier integrations.",
    features: ["Automated label printing", "Shipment tracking", "Multi-carrier support"]
  },
  {
    name: "Google Sheets",
    icon: <FileSpreadsheet className="h-5 w-5 text-green-600" />,
    description: "Import and export inventory data easily to Google Sheets for offline management and analysis.",
    features: ["Bulk import/export", "Automated backups", "Custom report templates"]
  },
  {
    name: "Zapier",
    icon: <Link className="h-5 w-5 text-orange-500" />,
    description: "Connect ResellSync to thousands of apps without any code using Zapier's powerful automation.",
    features: ["Custom workflows", "Trigger-based automation", "3000+ app connections"]
  },
  {
    name: "Database API",
    icon: <Database className="h-5 w-5 text-purple-600" />,
    description: "Access your inventory data programmatically via our secure API for custom integrations.",
    features: ["RESTful endpoints", "Secure access", "Real-time updates"]
  }
];

// Helper component for marketplace logos
const MarketplaceLogo = ({ name, logo, fallbackText }: { name: string; logo: string; fallbackText: string }) => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(logo);

  useEffect(() => {
    setImageError(false);
    setImageSrc(logo);
  }, [logo]);

  const handleImageError = () => {
    console.error(`Failed to load marketplace logo for ${name}:`, logo);
    setImageError(true);
  };

  return (
    <>
      {!imageError && logo ? (
        <img
          src={imageSrc}
          alt={`${name} logo`}
          className="max-h-12 max-w-[180px] object-contain"
          onError={handleImageError}
        />
      ) : (
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-teal text-white font-bold text-xl">
          {fallbackText.substring(0, 2)}
        </div>
      )}
    </>
  );
};

const Marketplaces = () => {
  return (
    <div id="marketplaces" className="container-section">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 text-brand-blue">
            Powerful Integrations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">
            Connect Your Entire Sales Ecosystem
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            ResellSync integrates with leading marketplaces and tools to create a seamless workflow
            for your phone reselling business.
          </p>
        </motion.div>
      </div>

      {/* Two column layout with decorative elements */}
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-teal-100/30 blur-3xl -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Marketplaces Column */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-2 flex items-center">
                <Package className="mr-2 text-brand-blue" /> 
                Marketplace Integrations
              </h3>
              <p className="text-muted-foreground">
                List and sell your refurbished phones across multiple platforms with real-time inventory sync.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {marketplaceFeatures.map((marketplace, index) => (
                <ScrollReveal key={index}>
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        {marketplace.logo ? (
                          <div className="h-16 w-16 rounded-lg bg-gray-100 flex items-center justify-center mr-4">
                            <img
                              src={marketplace.logo}
                              alt={`${marketplace.name} logo`}
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </div>
                        ) : (
                          <div className="h-16 w-16 rounded-lg bg-gray-100 flex items-center justify-center mr-4">
                            {React.cloneElement(marketplace.icon, { className: 'h-10 w-10 text-inherit' })}
                          </div>
                        )}
                        <h4 className="text-lg font-semibold">{marketplace.name}</h4>
                      </div>
                      <p className="text-muted-foreground mb-4">{marketplace.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {marketplace.features.map((feature, fIndex) => (
                          <span key={fIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          {/* Tools Column */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-2 flex items-center">
                <Link className="mr-2 text-brand-teal" />
                Tools & Services
              </h3>
              <p className="text-muted-foreground">
                Enhance your workflow with powerful tools that connect seamlessly with ResellSync.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {toolIntegrations.map((tool, index) => (
                <ScrollReveal key={index}>
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="h-16 w-16 rounded-lg bg-gray-100 flex items-center justify-center mr-4">
                          {React.cloneElement(tool.icon, { className: 'h-10 w-10 text-inherit' })}
                        </div>
                        <h4 className="text-lg font-semibold">{tool.name}</h4>
                      </div>
                      <p className="text-muted-foreground mb-4">{tool.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, fIndex) => (
                          <span key={fIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-muted-foreground mb-4">
              More integrations coming soon - Vinted, Amazon, and more!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marketplaces;
