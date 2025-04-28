import React from 'react';
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

const testimonials = [
  {
    company: "clerk",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256",
    name: "Nick Parsons",
    role: "Director of Marketing, Clerk",
    review: "Our team saved countless hours after switching to webtics.",
  },
  {
    company: "raycast",
    avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256",
    name: "Thomas Paul Mann",
    role: "CEO, Raycast",
    review: "From data chaos to clarity - webtics delivers immediate results.",
  },
  {
    company: "vercel",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256",
    name: "Guillermo Rauch",
    role: "CEO, Vercel",
    review: "Webtics delivers powerful insights that turn complex data into actionable decisions.",
  },
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
        <TestimonialCarousel
          testimonials={testimonials}
          companyLogoPath="https://assets.rapidui.dev/testimonials/companies/"
          avatarPath=""
        />
      </div>
    </div>
  );
};

export default Testimonials;
