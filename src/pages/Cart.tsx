
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/components/ui/use-toast';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-medium mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Button onClick={() => navigate('/')} className="btn-hover">
              Continue Shopping
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-6 mx-auto">
          <h1 className="text-3xl font-display font-medium mb-8">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="border rounded-lg overflow-hidden">
                <div className="p-6 border-b bg-muted/20">
                  <h2 className="font-medium">Cart Items ({cartItems.length})</h2>
                </div>
                
                <div>
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 border-b flex flex-col sm:flex-row gap-4">
                      <div className="w-24 h-24 rounded overflow-hidden shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.isSubscription ? 'Subscription' : 'One-time purchase'}
                        </p>
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between">
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="mx-3 min-w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-muted-foreground hover:text-destructive"
                          onClick={() => {
                            removeFromCart(item.id);
                            toast({
                              title: "Item removed",
                              description: `${item.title} has been removed from your cart.`,
                            });
                          }}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 flex justify-between">
                  <Button 
                    variant="ghost" 
                    onClick={() => navigate('/')}
                  >
                    Continue Shopping
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="text-muted-foreground"
                    onClick={() => {
                      clearCart();
                      toast({
                        title: "Cart cleared",
                        description: "All items have been removed from your cart.",
                      });
                    }}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="border rounded-lg overflow-hidden sticky top-24">
                <div className="p-6 border-b bg-muted/20">
                  <h2 className="font-medium">Order Summary</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full btn-hover group bg-sprout-500 hover:bg-sprout-600"
                    onClick={() => navigate('/checkout')}
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
