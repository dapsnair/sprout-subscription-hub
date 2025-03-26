
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FadeInSection from '@/components/FadeInSection';
import VarietyCard from './VarietyCard';
import { categories } from '@/data/microgreens';
import type { MicrogreenVariety } from './VarietyCard';

interface CategoryTabsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredVarieties: MicrogreenVariety[];
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ 
  selectedCategory, 
  setSelectedCategory, 
  filteredVarieties 
}) => {
  return (
    <Tabs defaultValue="all" className="mb-12">
      <div className="flex justify-center mb-8">
        <TabsList className="bg-background border">
          {categories.map(category => (
            <TabsTrigger 
              key={category.id}
              value={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="text-sm px-4"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      
      {categories.map(category => (
        <TabsContent key={category.id} value={category.id} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVarieties.map(variety => (
              <FadeInSection key={variety.id} delay={100}>
                <VarietyCard variety={variety} />
              </FadeInSection>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CategoryTabs;
