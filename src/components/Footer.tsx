
import React from 'react';
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <a href="/" className="flex items-center space-x-2 mb-4">
                <span className="h-8 w-8 rounded-full bg-sprout-500 flex items-center justify-center">
                  <span className="h-3 w-3 bg-white rounded-full"></span>
                </span>
                <span className="font-display text-xl font-medium">Sprout</span>
              </a>
              <p className="text-muted-foreground text-sm mb-4">
                Fresh microgreens delivered to your door, grown with care and harvested at peak freshness.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Subscription Boxes</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">One-time Purchases</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Gift Cards</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Microgreen Seeds</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Our Farm</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Sustainability</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">FAQs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Shipping Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Returns & Refunds</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Sprout Microgreens. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
