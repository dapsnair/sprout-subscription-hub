
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import CartButton from './CartButton';
import { useMobile } from '@/hooks/use-mobile';

const Header = () => {
  const location = useLocation();
  const isMobile = useMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/product/premium-sub' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent py-6'
          : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'
      }`}
    >
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-bold text-2xl text-primary">
            Sprout
          </Link>

          {isMobile ? (
            <div className="flex items-center gap-2">
              <CartButton />
              
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-6">
                      <Link 
                        to="/" 
                        className="font-bold text-2xl text-primary"
                        onClick={() => setOpen(false)}
                      >
                        Sprout
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                        <X size={24} />
                      </Button>
                    </div>
                    
                    <nav className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className={`text-lg py-2 border-b border-border ${
                            location.pathname === link.path ? 'text-primary font-medium' : ''
                          }`}
                          onClick={() => setOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>
                    
                    <div className="mt-auto mb-6">
                      <Link to="/product/premium-sub" onClick={() => setOpen(false)}>
                        <Button className="w-full">Subscribe Now</Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <nav className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`transition-colors hover:text-primary ${
                      location.pathname === link.path ? 'text-primary font-medium' : isTransparent ? 'text-foreground/90' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="flex items-center gap-4">
                <CartButton />
                <Link to="/product/premium-sub">
                  <Button>Subscribe Now</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
