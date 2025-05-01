import React, { useState, useEffect } from 'react';
import { CheckCircle, Package, Truck, Database, Link } from 'lucide-react';
import { marketplaces } from './hero/data/marketplaceData';
import { ScrollReveal } from './ui/ScrollReveal';
import { motion } from 'framer-motion';

// Define our marketplaces for the first section
const marketplaceFeatures = [
  {
    name: "eBay",
    logo: "https://hlpakrakaoyhohjppxkg.supabase.co/storage/v1/object/public/marketplace-logos/Ebay Logo.svg",
    description: "List and manage your inventory on the world's largest online marketplace for used electronics.",
    features: ["Bulk listing creation", "Real-time inventory sync", "Order management", "Automated feedback"]
  },
  {
    name: "Backmarket",
    logo: "https://hlpakrakaoyhohjppxkg.supabase.co/storage/v1/object/public/marketplace-logos/Backmarket-logo.svg",
    description: "Expand your reach on the leading marketplace for refurbished electronics in Europe and the US.",
    features: ["Quality grade mapping", "Pricing optimization", "Return management", "Performance analytics"]
  },
  {
    name: "Reebelo",
    logo: "https://hlpakrakaoyhohjppxkg.supabase.co/storage/v1/object/public/marketplace-logos/Reebelo-Logo.svg",
    description: "Connect to this fast-growing marketplace for sustainable tech across Asia-Pacific region.",
    features: ["Product catalog sync", "Automated fulfillment", "Warranty tracking", "Rating management"]
  },
  {
    name: "Swappa",
    logo: "https://hlpakrakaoyhohjppxkg.supabase.co/storage/v1/object/public/marketplace-logos/Swappa-Logo.svg",
    description: "Sell directly to consumers on this user-to-user marketplace for gently used technology.",
    features: ["Condition grading sync", "Real-time inventory", "Order processing", "Returns handling"]
  },
  {
    name: "Walmart",
    logo: "https://hlpakrakaoyhohjppxkg.supabase.co/storage/v1/object/public/marketplace-logos//Walmart%20Logo.svg",
    description: "Reach millions of customers on one of the largest retail marketplaces in the US. Sync your inventory and manage orders seamlessly.",
    features: ["Walmart-specific listing tools", "Real-time inventory sync", "Order management", "Performance analytics"]
  }
];

// Define our tools and integrations for the second section
const toolIntegrations = [
  {
    name: "ShipStation",
    logo: "https://hlpakrakaoyhohjppxkg.supabase.co/storage/v1/object/public/marketplace-logos/Shipstation Logo.svg",
    description: "Automate your shipping process with label creation, tracking updates, and carrier integrations.",
    features: ["Automated label printing", "Shipment tracking", "Multi-carrier support"]
  },
  {
    name: "Google Sheets",
    logo: "https://hlpakrakaoyhohjppxkg.supabase.co/storage/v1/object/public/marketplace-logos/Google Sheet Logo.svg",
    description: "Import and export inventory data easily to Google Sheets for offline management and analysis.",
    features: ["Bulk import/export", "Automated backups", "Custom report templates"]
  },
  {
    name: "Access ResellSync API",
    logo: "https://hlpakrakaoyhohjppxkg.supabase.co/storage/v1/object/public/marketplace-logos/resellsync logo.svg",
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
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium bg-[#D6F5E6] text-[#009A53]">
            Powerful Integrations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A090C]">
            Connect Your Entire Sales Ecosystem
          </h2>
          <p className="max-w-2xl mx-auto text-[#0A090C] opacity-80 text-lg">
            ResellSync integrates with leading marketplaces and tools to create a seamless workflow
            for your phone reselling business.
          </p>
        </motion.div>
      </div>

      {/* Two column layout with decorative elements */}
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#CACFD61A] blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-[#CACFD61A] blur-3xl -z-10" />
        
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
              <h3 className="text-2xl font-semibold mb-2 flex items-center text-[#0A090C]">
                <Package className="mr-2 text-[#009A53]" /> 
                Marketplace Integrations
              </h3>
              <p className="text-[#0A090C] opacity-70">
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
                    <div className="bg-white rounded-xl p-4 shadow-md border border-[#CACFD6] hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-3">
                        <div className="h-16 w-16 rounded-lg bg-white flex items-center justify-center mr-4">
                          <img
                            src={marketplace.logo}
                            alt={`${marketplace.name} logo`}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                        <h4 className="text-lg font-semibold text-[#0A090C]">{marketplace.name}</h4>
                      </div>
                      <p className="text-[#0A090C] opacity-70 mb-4">{marketplace.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {marketplace.features.map((feature, fIndex) => (
                          <span key={fIndex} className="text-xs bg-[#F9F9F9] text-[#0A090C] opacity-70 px-2 py-1 rounded-full border border-[#CACFD6]">
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
              <h3 className="text-2xl font-semibold mb-2 flex items-center text-[#0A090C]">
                <Link className="mr-2 text-[#009A53]" />
                Tools & Services
              </h3>
              <p className="text-[#0A090C] opacity-70">
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
                    <div className="bg-white rounded-xl p-6 shadow-md border border-[#CACFD6] hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="h-16 w-16 rounded-lg bg-white flex items-center justify-center mr-4">
                          <img
                            src={tool.logo}
                            alt={`${tool.name} logo`}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                        <h4 className="text-lg font-semibold text-[#0A090C]">{tool.name}</h4>
                      </div>
                      <p className="text-[#0A090C] opacity-70 mb-4">{tool.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, fIndex) => (
                          <span key={fIndex} className="text-xs bg-[#F9F9F9] text-[#0A090C] opacity-70 px-2 py-1 rounded-full border border-[#CACFD6]">
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
            <p className="text-[#0A090C] opacity-60 mb-4">
              More integrations coming soon - Vinted, Amazon, and more!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marketplaces;
