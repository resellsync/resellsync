
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-teal rounded-md"></div>
              <span className="text-xl font-bold text-foreground">ResellSync</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Streamlining phone reselling businesses with powerful inventory and marketplace management tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#marketplaces" className="text-muted-foreground hover:text-foreground transition-colors">Marketplaces</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Release Notes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community Forum</a></li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                  <Mail size={16} className="mr-2" />
                  support@resellsync.com
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                  <Phone size={16} className="mr-2" />
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} ResellSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
