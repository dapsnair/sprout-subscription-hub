
import React from 'react';
import FadeInSection from './FadeInSection';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface MicrogreensVarietyProps {
  name: string;
  benefits: string[];
  image: string;
  description: string;
}

const MicrogreensVariety: React.FC<MicrogreensVarietyProps> = ({ 
  name, 
  benefits, 
  image, 
  description 
}) => {
  return (
    <div className="glass-card p-6 rounded-xl h-full flex flex-col">
      <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <h3 className="text-xl font-medium mb-2 text-sprout-700">{name}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      <ul className="space-y-1 mb-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle size={16} className="text-sprout-500 mt-1 flex-shrink-0" />
            <span className="text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const varieties = [
  {
    name: "Broccoli Microgreens",
    description: "Rich in sulforaphane, these microgreens have a mild, peppery flavor perfect for salads and sandwiches.",
    benefits: [
      "High in vitamin C and K",
      "Contains cancer-fighting compounds",
      "Supports immune function"
    ],
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1"
  },
  {
    name: "Sunflower Microgreens",
    description: "Crunchy and nutty with a subtle sweet flavor that makes them appealing even to picky eaters.",
    benefits: [
      "Excellent source of protein",
      "Rich in healthy fats",
      "High in zinc and B vitamins"
    ],
    image: "https://images.unsplash.com/photo-1570367655924-2aa1e2d97b5a"
  },
  {
    name: "Pea Shoots",
    description: "With their delicate tendrils and sweet flavor reminiscent of fresh peas, these are a perfect garnish.",
    benefits: [
      "High in folate and fiber",
      "Good source of vitamins A and C",
      "Contains antioxidants"
    ],
    image: "https://images.unsplash.com/photo-1576060974974-933acee13b58"
  },
  {
    name: "Radish Microgreens",
    description: "Spicy and vibrant, adding a perfect punch of flavor to any dish that needs a little kick.",
    benefits: [
      "Rich in antioxidants",
      "Supports digestive health",
      "Contains essential minerals"
    ],
    image: "https://images.unsplash.com/photo-1606631157358-259487c187c3"
  }
];

const benefits = [
  {
    title: "Nutrient Powerhouses",
    description: "Microgreens can contain up to 40 times more nutrients than their mature counterparts. They're packed with vitamins, minerals, and antioxidants essential for optimal health."
  },
  {
    title: "Easy to Incorporate",
    description: "Their delicate flavors blend beautifully into smoothies, top off salads, elevate sandwiches, and garnish main dishes, making healthy eating effortless."
  },
  {
    title: "Grown Sustainably",
    description: "Our microgreens require minimal resources to grow compared to conventional agriculture, making them an environmentally friendly choice for conscious consumers."
  },
  {
    title: "Year-Round Freshness",
    description: "Unlike seasonal produce, our microgreens are available all year long, ensuring you always have access to fresh, nutritious greens regardless of season."
  }
];

const MicrogreensInfo = () => {
  return (
    <section id="microgreens-info" className="section-padding bg-gradient-to-b from-white to-sprout-50">
      <div className="container px-6 mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Microgreens?</h2>
            <p className="section-subtitle mx-auto">
              Discover the incredible benefits of these tiny nutritional powerhouses and the varieties we offer.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <div className="p-6 rounded-xl border border-sprout-100 bg-white shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-sprout-700">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-medium mb-4">Popular Varieties We Grow</h3>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Each of our microgreen varieties offers unique flavors and nutritional benefits. 
              Here are some customer favorites you'll find in your subscription box.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {varieties.map((variety, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <MicrogreensVariety {...variety} />
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="text-center">
            <Link to="/product/premium-sub">
              <Button size="lg" className="btn-hover group">
                Start Your Microgreen Journey
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default MicrogreensInfo;
