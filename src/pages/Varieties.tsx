
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, CheckCircle, Info } from 'lucide-react';
import FadeInSection from '@/components/FadeInSection';

// Microgreens data
const microgreensData = [
  {
    id: 'broccoli',
    name: 'Broccoli Microgreens',
    category: 'brassica',
    growthTime: '7-10 days',
    flavorProfile: 'Mild, slightly spicy with hints of broccoli',
    nutritionalHighlights: ['High in vitamin C and K', 'Contains sulforaphane', 'Rich in antioxidants'],
    culinaryUses: ['Salads', 'Sandwiches', 'Garnish for soups'],
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1',
    description: 'Broccoli microgreens are one of the most nutritionally dense varieties available. Their mild, slightly spicy flavor makes them versatile for many dishes. They're particularly prized for their high concentration of sulforaphane, a powerful cancer-fighting compound.'
  },
  {
    id: 'sunflower',
    name: 'Sunflower Microgreens',
    category: 'seed',
    growthTime: '8-12 days',
    flavorProfile: 'Nutty, slightly sweet with a satisfying crunch',
    nutritionalHighlights: ['High in protein and fiber', 'Rich in zinc and B vitamins', 'Good source of vitamin E'],
    culinaryUses: ['Salads', 'Sandwiches', 'Wraps and rolls'],
    image: 'https://images.unsplash.com/photo-1570367655924-2aa1e2d97b5a',
    description: 'Sunflower microgreens are beloved for their hearty texture and nutty flavor profile. They have a satisfying crunch that adds dimension to sandwiches and salads. Their mild taste makes them appealing even to those who typically don't enjoy greens.'
  },
  {
    id: 'pea',
    name: 'Pea Shoots',
    category: 'legume',
    growthTime: '10-14 days',
    flavorProfile: 'Sweet, fresh with a taste similar to young peas',
    nutritionalHighlights: ['High in folate and fiber', 'Good source of vitamins A and C', 'Contains lutein and zeaxanthin'],
    culinaryUses: ['Stir-fries', 'Salads', 'Garnish for spring dishes'],
    image: 'https://images.unsplash.com/photo-1576060974974-933acee13b58',
    description: 'Pea shoots offer a delightful sweetness reminiscent of fresh garden peas. Their delicate tendrils and leaves add visual appeal to any dish. They're particularly popular in Asian cuisine and pair wonderfully with lighter flavors.'
  },
  {
    id: 'radish',
    name: 'Radish Microgreens',
    category: 'brassica',
    growthTime: '5-7 days',
    flavorProfile: 'Spicy, peppery kick similar to mature radishes',
    nutritionalHighlights: ['Rich in antioxidants', 'Good source of vitamin C and B6', 'Contains anthocyanins'],
    culinaryUses: ['Spicy addition to sandwiches', 'Salad accent', 'Garnish for rich dishes'],
    image: 'https://images.unsplash.com/photo-1606631157358-259487c187c3',
    description: 'Radish microgreens pack a powerful peppery punch that adds personality to milder dishes. They're one of the quickest varieties to grow, making them ideal for impatient gardeners. Their vibrant stems can range from pink to purple, adding visual appeal.'
  },
  {
    id: 'amaranth',
    name: 'Amaranth Microgreens',
    category: 'amaranth',
    growthTime: '8-12 days',
    flavorProfile: 'Earthy with a mild beet-like flavor',
    nutritionalHighlights: ['High in protein', 'Rich in iron and calcium', 'Contains lysine, an essential amino acid'],
    culinaryUses: ['Color accent in salads', 'Garnish for plating', 'Smoothie addition'],
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e',
    description: 'Amaranth microgreens stand out with their vibrant magenta stems and green leaves, making them as beautiful as they are nutritious. They add striking visual contrast to plates while delivering an earthy flavor profile similar to young beets.'
  },
  {
    id: 'kale',
    name: 'Kale Microgreens',
    category: 'brassica',
    growthTime: '8-12 days',
    flavorProfile: 'Mild compared to mature kale, slightly sweet',
    nutritionalHighlights: ['Exceptional vitamin K content', 'Good source of vitamin A and C', 'Contains cancer-fighting compounds'],
    culinaryUses: ['Smoothies', 'Salads', 'Grain bowls'],
    image: 'https://images.unsplash.com/photo-1505692795793-20f543407193',
    description: 'Kale microgreens offer all the nutritional benefits of mature kale in a more delicate package. Their flavor is considerably milder than full-grown kale, making them accessible to those who find mature kale too bitter or intense.'
  },
  {
    id: 'basil',
    name: 'Basil Microgreens',
    category: 'herb',
    growthTime: '10-15 days',
    flavorProfile: 'Aromatic with classic basil notes, more intense than mature leaves',
    nutritionalHighlights: ['Rich in vitamin K', 'Contains essential oils with antimicrobial properties', 'Good source of antioxidants'],
    culinaryUses: ['Italian dishes', 'Caprese salads', 'Infused oils'],
    image: 'https://images.unsplash.com/photo-1629191659123-35259a373d6c',
    description: 'Basil microgreens deliver all the aromatic pleasure of mature basil with an even more concentrated flavor profile. They bring the classic basil taste to dishes without overwhelming them with large leaves, perfect for delicate presentations.'
  },
  {
    id: 'cilantro',
    name: 'Cilantro Microgreens',
    category: 'herb',
    growthTime: '14-21 days',
    flavorProfile: 'Distinctive cilantro flavor, slightly more mild than mature herb',
    nutritionalHighlights: ['Contains vitamin A and K', 'Rich in antioxidants', 'Good source of dietary fiber'],
    culinaryUses: ['Mexican cuisine', 'Thai dishes', 'Fresh salsas'],
    image: 'https://images.unsplash.com/photo-1616923205258-c20c4a66a271',
    description: 'Cilantro microgreens offer the distinctive flavor that people either love or avoid, but in a slightly more approachable form. They're particularly well-suited to cuisines that traditionally use cilantro, adding a fresh, citrusy note to dishes.'
  }
];

// Categories
const categories = [
  { id: 'all', name: 'All Varieties' },
  { id: 'brassica', name: 'Brassicas' },
  { id: 'herb', name: 'Herbs' },
  { id: 'seed', name: 'Seeds' },
  { id: 'legume', name: 'Legumes' },
  { id: 'amaranth', name: 'Amaranth' }
];

const VarietyCard = ({ variety }: { variety: typeof microgreensData[0] }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={variety.image} 
          alt={variety.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{variety.name}</CardTitle>
        <CardDescription>Growth time: {variety.growthTime}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{variety.description}</p>
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium mb-1">Flavor Profile:</h4>
            <p className="text-sm">{variety.flavorProfile}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Nutritional Highlights:</h4>
            <ul className="space-y-1">
              {variety.nutritionalHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle size={14} className="text-sprout-500 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" size="sm" className="w-full">
          <Info className="mr-2 h-4 w-4" />
          Culinary Uses
        </Button>
      </CardFooter>
    </Card>
  );
};

const Varieties = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  
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
