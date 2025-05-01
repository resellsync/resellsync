import React from 'react';
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

const testimonials = [
  {
    company: "TechResell",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256",
    name: "Michael Johnson",
    role: "CEO, TechResell",
    review: "The automated inventory system has transformed our operations. We've reduced manual data entry by 80% and eliminated listing errors completely.",
  },
  {
    company: "MobilePro",
    avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256",
    name: "Sarah Williams",
    role: "Operations Director, MobilePro",
    review: "The platform's automation features have revolutionized our workflow. We now save 15+ hours weekly and our inventory is always perfectly synchronized.",
  },
  {
    company: "DeviceHub",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256",
    name: "David Chen",
    role: "Founder, DeviceHub",
    review: "The analytics dashboard has been a game-changer. We've optimized our pricing strategy and seen a 25% increase in profit margins.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#F9F9F9] py-24">
      <div className="container-section py-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A090C]">Trusted by Phone Resellers</h2>
          <p className="max-w-2xl mx-auto text-[#0A090C] opacity-80 text-lg">
            Hear what our customers have to say about how ResellSync has helped them grow their businesses.
          </p>
        </div>
        <TestimonialCarousel
          testimonials={testimonials}
          companyLogoPath="/logos/"
          avatarPath=""
        />
      </div>
    </div>
  );
};

export default Testimonials;
