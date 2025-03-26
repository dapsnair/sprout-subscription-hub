
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import FadeInSection from '@/components/FadeInSection';
import CategoryTabs from '@/components/microgreens/CategoryTabs';
import { microgreensData } from '@/data/microgreens';

const Varieties = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredVarieties = selectedCategory === 'all' 
    ? microgreensData 
    : microgreensData.filter(variety => variety.category === selectedCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-6 mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-display font-medium mb-4">Microgreen Varieties</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse selection of nutrient-dense microgreens, each offering unique flavors and health benefits for your culinary adventures.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={100}>
            <CategoryTabs 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              filteredVarieties={filteredVarieties}
            />
          </FadeInSection>
          
          <FadeInSection>
            <div className="text-center bg-sprout-50 p-8 rounded-xl">
              <h2 className="text-2xl font-medium mb-4">Ready to experience these flavors?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our weekly microgreens delivery and enjoy the freshest, most nutritious greens available, harvested just hours before they arrive at your door.
              </p>
              <Link to="/product/premium-sub">
                <Button size="lg" className="btn-hover group">
                  Start Your Subscription
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Varieties;
