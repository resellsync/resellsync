
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ResellSync has completely transformed how we manage our phone inventory. We've seen a 40% increase in sales since we started using the platform.",
    author: "Michael Johnson",
    role: "Owner, PhoneFlip",
    rating: 5
  },
  {
    quote: "The multi-marketplace sync feature saves us hours every day. Now we can focus on sourcing great phones instead of updating listings.",
    author: "Sarah Williams",
    role: "Operations Manager, RePhone",
    rating: 5
  },
  {
    quote: "Their customer support is exceptional. Any time we've had questions, the team has been quick to respond and solve our issues.",
    author: "David Chen",
    role: "Founder, MobileTrade",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-white to-muted py-24">
      <div className="container-section py-0">
        <div className="text-center mb-16">
          <h2 className="gradient-heading mb-4">Trusted by Phone Resellers</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Hear what our customers have to say about how ResellSync has helped them grow their businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md border border-border relative"
            >
              <div className="absolute -top-4 left-8 bg-brand-lightBlue text-white w-8 h-8 rounded-full flex items-center justify-center">
                "
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
