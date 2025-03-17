
import React from 'react';
import FadeInSection from './FadeInSection';

const testimonials = [
  {
    quote: "The subscription model is perfect for my family. We get fresh microgreens every week without having to remember to order. The quality is exceptional!",
    author: "Sarah Johnson",
    role: "Health Coach",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    quote: "As a chef, I appreciate the consistency and flavor of Sprout's microgreens. They've elevated my dishes and my customers can taste the difference.",
    author: "Michael Chen",
    role: "Restaurant Owner",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    quote: "I started with a one-time purchase to try them out and was so impressed I immediately signed up for a subscription. Worth every penny for the health benefits.",
    author: "Emily Rodriguez",
    role: "Fitness Instructor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container px-6 mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle mx-auto">
              Don't just take our word for it — hear from the people who have made microgreens a part of their healthy lifestyle.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInSection key={index} delay={index * 150}>
              <div className="glass-card p-8 rounded-xl relative h-full flex flex-col">
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="flex-1">
                  <p className="italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                </blockquote>
                
                <div className="flex items-center mt-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 opacity-20">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3333 13.3333H15C15 11.4924 16.4924 10 18.3333 10V13.3333ZM18.3333 13.3333H25C25 16.0948 22.7614 18.3333 20 18.3333V15C19.0795 15 18.3333 14.2538 18.3333 13.3333ZM18.3333 13.3333H20V10C18.1591 10 16.6667 11.4924 16.6667 13.3333H18.3333Z" fill="currentColor" fillOpacity="0.2"/>
                    <path d="M10 25H13.3333C13.3333 26.8409 11.8409 28.3333 10 28.3333V25ZM10 25H3.33334C3.33334 22.2386 5.57191 20 8.33334 20V23.3333C9.25381 23.3333 10 24.0795 10 25ZM10 25H8.33334V28.3333C10.1743 28.3333 11.6667 26.8409 11.6667 25H10Z" fill="currentColor" fillOpacity="0.2"/>
                    <path d="M30 25H26.6667C26.6667 26.8409 28.1591 28.3333 30 28.3333V25ZM30 25H36.6667C36.6667 22.2386 34.4281 20 31.6667 20V23.3333C30.7462 23.3333 30 24.0795 30 25ZM30 25H31.6667V28.3333C29.8257 28.3333 28.3333 26.8409 28.3333 25H30Z" fill="currentColor" fillOpacity="0.2"/>
                  </svg>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
