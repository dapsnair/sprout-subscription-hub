
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CartButton = () => {
  const { cartCount } = useCart();
  
  return (
    <Link to="/cart">
      <Button variant="ghost" className="relative">
        <ShoppingCart className="h-5 w-5" />
        {cartCount > 0 && (
          <span className={cn(
            "absolute -top-1 -right-1 bg-sprout-500 text-white text-xs",
            "rounded-full h-4 w-4 flex items-center justify-center"
          )}>
            {cartCount}
          </span>
        )}
      </Button>
    </Link>
  );
};

export default CartButton;
