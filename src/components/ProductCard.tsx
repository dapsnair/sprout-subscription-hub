
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  perMonth?: number;
  isSubscription?: boolean;
  features?: string[];
  popular?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  image,
  price,
  perMonth,
  isSubscription = false,
  features = [],
  popular = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col",
        "border border-border hover:border-sprout-300/50",
        isHovered ? "shadow-lg translate-y-[-4px]" : "shadow-sm",
        popular ? "ring-2 ring-sprout-500 ring-offset-2" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <div className="bg-sprout-500 text-white text-xs font-medium py-1 px-3 text-center">
          Most Popular
        </div>
      )}
      
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
      </div>
      
      <div className="flex-1 p-5 flex flex-col">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-display text-xl font-medium">{title}</h3>
            {isSubscription && (
              <span className="bg-secondary text-xs font-medium px-2 py-1 rounded-full">
                Subscription
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        
        {features.length > 0 && (
          <ul className="space-y-2 mb-5 mt-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check size={16} className="text-sprout-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto pt-4">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-2xl font-display font-medium">${price}</p>
              {isSubscription && perMonth && (
                <p className="text-sm text-muted-foreground">
                  ${perMonth}/week
                </p>
              )}
            </div>
            {!isSubscription && (
              <span className="text-sm text-muted-foreground">One-time purchase</span>
            )}
          </div>
          
          <Button
            variant={popular ? "default" : "outline"}
            className={cn(
              "w-full group btn-hover",
              popular ? "bg-sprout-500 hover:bg-sprout-600" : ""
            )}
          >
            <ShoppingCart size={16} className="mr-2 group-hover:scale-110 transition-transform" />
            {isSubscription ? "Subscribe Now" : "Buy Now"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
