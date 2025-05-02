
import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; 
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

interface Testimonial {
  company: string;
  avatar: string;
  name: string;
  role: string;
  review: string;
}

interface TestimonialCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[];
  companyLogoPath?: string;
  avatarPath?: string;
}

export const TestimonialCarousel = React.forwardRef<HTMLDivElement, TestimonialCarouselProps>(
  ({ className, testimonials, companyLogoPath = "", avatarPath = "", ...props }, ref) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
      if (!api) return;
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);

    return (
      <div ref={ref} className={cn("py-16", className)} {...props}>
        <Carousel
          setApi={setApi}
          className="max-w-screen-xl mx-auto px-4 lg:px-8"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <ScrollReveal key={testimonial.company + testimonial.name}>
                <CarouselItem
                  className="flex flex-col items-center cursor-grab basis-full md:basis-1/3 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    className="mb-7 relative h-16 w-44 flex items-center justify-center bg-white rounded-lg p-4 shadow-md border border-gray-100 transition-all duration-300 overflow-hidden group-hover:shadow-lg"
                  >
                    <img
                      src={`${companyLogoPath}${testimonial.company}.svg`}
                      alt={`${testimonial.company} logo`}
                      className="object-contain h-10 max-w-full"
                      onError={(e) => {
                        // Fallback to a generic company icon if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "/logos/placeholder.svg";
                      }}
                      draggable={false}
                    />
                  </motion.div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-md transition-all duration-300 group-hover:shadow-md hover:border-gray-200">
                    <p className="text-balance text-center text-lg sm:text-xl text-foreground">
                      "{testimonial.review}"
                    </p>
                  </div>
                  <div className="mt-8 flex flex-col items-center">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <Avatar className="size-16 border-2 border-white shadow-md transition-transform duration-300">
                        <AvatarImage 
                          src={testimonial.avatar.startsWith('http') ? testimonial.avatar : `${avatarPath}${testimonial.avatar}`}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <h5 className="mt-3 font-medium text-lg text-[#0A090C]">
                      {testimonial.name}
                    </h5>
                    <h5 className="mt-1 text-sm font-medium text-[#0A090C]/60">
                      {testimonial.role}
                    </h5>
                  </div>
                </CarouselItem>
              </ScrollReveal>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-10 text-center">
          <div className="flex items-center justify-center gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "size-3 rounded-full transition-all",
                  index === current 
                    ? "bg-[#009A53] scale-125" 
                    : "bg-[#009A53]/35 hover:bg-[#009A53]/50"
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

TestimonialCarousel.displayName = "TestimonialCarousel"; 
