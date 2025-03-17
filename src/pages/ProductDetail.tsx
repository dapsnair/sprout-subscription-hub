
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ChevronLeft, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/components/ui/use-toast';
import { products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
            <Button onClick={() => navigate('/')}>Return to Home</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity,
      isSubscription: product.isSubscription || false,
      image: product.image
    });
    
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-6 mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-transparent hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div>
              <div className="mb-2">
                {product.isSubscription && (
                  <span className="inline-block bg-secondary text-sm font-medium px-3 py-1 rounded-full mb-3">
                    Subscription
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-display font-medium mb-4">{product.title}</h1>
                <p className="text-xl font-medium mb-1">${product.price}</p>
                {product.isSubscription && product.perMonth && (
                  <p className="text-sm text-muted-foreground mb-4">
                    ${product.perMonth}/week
                  </p>
                )}
              </div>
              
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-3">What's Included:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-sprout-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Quantity:</h3>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-4 min-w-8 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-hover group bg-sprout-500 hover:bg-sprout-600"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 group-hover:scale-110 transition-transform" />
                  {product.isSubscription ? "Subscribe Now" : "Add to Cart"}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    handleAddToCart();
                    navigate('/cart');
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
