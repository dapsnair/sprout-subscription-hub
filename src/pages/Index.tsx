
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'starter-sub',
    title: 'Starter Pack',
    description: 'Perfect for individuals or small households just starting with microgreens.',
    image: 'https://images.unsplash.com/photo-1592394533824-9440e5d2aa7a?q=80&w=2070&auto=format&fit=crop',
    price: 24.99,
    perMonth: 24.99,
    isSubscription: true,
    features: [
      '2 varieties of microgreens',
      'Weekly delivery',
      'Recipe cards included',
      'Easy pause or cancel anytime',
    ],
    popular: false,
  },
  {
    id: 'premium-sub',
    title: 'Premium Pack',
    description: 'Our most popular subscription option with the perfect balance of variety and value.',
    image: 'https://images.unsplash.com/photo-1583764225393-5a76eb6754ef?q=80&w=2070&auto=format&fit=crop',
    price: 39.99,
    perMonth: 39.99,
    isSubscription: true,
    features: [
      '4 varieties of microgreens',
      'Weekly delivery',
      'Recipe cards included',
      'Nutritional guide',
      'Priority harvesting',
      'Easy pause or cancel anytime',
    ],
    popular: true,
  },
  {
    id: 'family-sub',
    title: 'Family Pack',
    description: 'Abundant supply of microgreens perfect for larger households or avid health enthusiasts.',
    image: 'https://images.unsplash.com/photo-1584270992527-3d9d7fc54d82?q=80&w=2070&auto=format&fit=crop',
    price: 59.99,
    perMonth: 59.99,
    isSubscription: true,
    features: [
      '6 varieties of microgreens',
      'Weekly delivery',
      'Double portions of each variety',
      'Recipe cards & nutritional guide',
      'Priority harvesting',
      'VIP customer support',
      'Easy pause or cancel anytime',
    ],
    popular: false,
  },
  {
    id: 'trial-pack',
    title: 'Trial Pack',
    description: 'Try our microgreens with this one-time purchase before committing to a subscription.',
    image: 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?q=80&w=2070&auto=format&fit=crop',
    price: 29.99,
    isSubscription: false,
    features: [
      'One-time delivery',
      '3 varieties of microgreens',
      'Recipe cards included',
      'Satisfaction guaranteed',
    ],
    popular: false,
  },
];

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <Hero />
        
        <section id="products" className="section-padding bg-secondary">
          <div className="container px-6 mx-auto">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="section-title">Choose Your Perfect Box</h2>
                <p className="section-subtitle mx-auto">
                  Whether you're looking for a regular microgreen supply or want to try it once, we have options for everyone.
                </p>
              </div>
            </FadeInSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <FadeInSection key={product.id} delay={index * 100}>
                  <ProductCard {...product} />
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
        
        <Features />
        
        <section className="section-padding bg-white">
          <div className="container px-6 mx-auto">
            <div className="rounded-2xl bg-sprout-50 p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-sprout-100/50 opacity-50" style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                <div>
                  <FadeInSection direction="left">
                    <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white border border-sprout-200 text-sm font-medium text-sprout-700">
                      Quick Start
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">
                      Ready to Experience the Microgreen Difference?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      Join thousands of health-conscious customers who've made our microgreens a part of their weekly meal routine.
                    </p>
                    <Button size="lg" className="btn-hover group">
                      Get Started Today
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </FadeInSection>
                </div>
                
                <div className="relative">
                  <FadeInSection direction="right">
                    <img 
                      src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
                      alt="Fresh microgreens" 
                      className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                  </FadeInSection>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        <section id="faq" className="section-padding bg-white">
          <div className="container px-6 mx-auto">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="section-subtitle mx-auto">
                  Find answers to common questions about our microgreens and subscription services.
                </p>
              </div>
            </FadeInSection>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "How long do microgreens stay fresh?",
                  answer: "Our microgreens typically stay fresh for 7-10 days when stored properly in the refrigerator. We recommend keeping them in their original packaging and storing them in the crisper drawer."
                },
                {
                  question: "Can I change my subscription plan?",
                  answer: "Absolutely! You can easily modify your subscription at any time. Simply log into your account and adjust your preferences, including changing varieties, delivery frequency, or subscription size."
                },
                {
                  question: "What if I'm going on vacation?",
                  answer: "You can pause your subscription anytime through your account dashboard. Just let us know before your next scheduled delivery date, and we'll hold your subscription until you're ready to resume."
                },
                {
                  question: "How are microgreens delivered?",
                  answer: "We ship your microgreens in eco-friendly, insulated packaging that keeps them at the optimal temperature during transit. All packaging materials are either recyclable or compostable."
                },
                {
                  question: "Are your microgreens organic?",
                  answer: "Yes, all our microgreens are grown using organic methods. We use organic seeds and growing media, and we never use pesticides, herbicides, or synthetic fertilizers."
                }
              ].map((faq, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <div className="mb-6 border-b border-border pb-6">
                    <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
