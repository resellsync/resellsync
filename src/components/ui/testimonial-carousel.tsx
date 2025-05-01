
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
                  <div className="mb-7 relative h-10 w-36 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg p-5 shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md">
                    <img
                      src={`${companyLogoPath}${testimonial.company}.svg`}
                      alt={`${testimonial.company} logo`}
                      className="object-contain h-8 max-w-full"
                      draggable={false}
                    />
                  </div>
                  <p className="max-w-xl text-balance text-center text-xl sm:text-2xl text-foreground">
                    {testimonial.review}
                  </p>
                  <h5 className="mt-5 font-medium text-muted-foreground">
                    {testimonial.name}
                  </h5>
                  <h5 className="mt-1.5 font-medium text-foreground/40">
                    {testimonial.role}
                  </h5>
                  <div className="mt-5 relative">
                    <Avatar className="size-14 border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
                      <AvatarImage 
                        src={testimonial.avatar.startsWith('http') ? testimonial.avatar : `${avatarPath}${testimonial.avatar}`}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                </CarouselItem>
              </ScrollReveal>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "size-2 rounded-full transition-all",
                  index === current ? "bg-[#009A53] scale-125" : "bg-[#009A53]/35"
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
