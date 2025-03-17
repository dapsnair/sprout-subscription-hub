
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Hero = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center hero-gradient overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <FadeInSection direction="left">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary border border-sprout-200/60 text-sm font-medium text-sprout-700">
                Nature's superfood, delivered weekly
              </div>
            </FadeInSection>
            
            <FadeInSection direction="left" delay={100}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
                Fresh <span className="text-primary">Microgreens</span> Grown for Your Table
              </h1>
            </FadeInSection>
            
            <FadeInSection direction="left" delay={200}>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Nutrient-dense microgreens delivered to your door, harvested at peak freshness. 
                Subscribe for regular deliveries or try a one-time purchase.
              </p>
            </FadeInSection>
            
            <FadeInSection direction="left" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-hover group">
                  Subscribe Now
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="btn-hover">
                  Try Once
                </Button>
              </div>
            </FadeInSection>
            
            <FadeInSection direction="left" delay={400}>
              <div className="mt-10 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(num => (
                    <div key={num} className="w-8 h-8 rounded-full ring-2 ring-white bg-sprout-100">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-sprout-200 to-sprout-300 flex items-center justify-center text-xs font-medium text-sprout-700">
                        {num}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium">500+ happy customers</p>
                  <div className="flex mt-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <FadeInSection direction="right">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-full bg-sprout-100/50 animate-pulse" style={{ animationDuration: '4s' }}></div>
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Vibrant microgreens" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                  style={{ 
                    clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
                  }}
                />
                <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-lg max-w-xs animate-float shadow-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-sprout-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sprout-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Harvested today</p>
                      <p className="text-xs text-muted-foreground">Delivered tomorrow</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 glass-card p-4 rounded-lg rotate-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-sprout-100 rounded-full flex items-center justify-center">
                      <p className="text-sprout-700 font-medium">40x</p>
                    </div>
                    <p className="text-sm font-medium">More nutrients than mature vegetables</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
