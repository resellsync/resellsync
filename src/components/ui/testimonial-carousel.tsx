
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
    const [logoErrors, setLogoErrors] = React.useState<Record<string, boolean>>({});

    React.useEffect(() => {
      if (!api) return;
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);

    const handleLogoError = (company: string) => {
      setLogoErrors(prev => ({
        ...prev,
        [company]: true
      }));
    };

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
                  <div className="mb-7 relative h-16 w-40 flex items-center justify-center bg-white rounded-lg p-4 shadow-md border border-gray-200 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-300">
                    {!logoErrors[testimonial.company] ? (
                      <img
                        src={`${companyLogoPath}${testimonial.company}.svg`}
                        alt={`${testimonial.company} logo`}
                        className="object-contain h-10 max-w-full"
                        draggable={false}
                        onError={() => handleLogoError(testimonial.company)}
                      />
                    ) : (
                      <div className="flex items-center justify-center text-base font-medium text-gray-800">
                        {testimonial.company}
                      </div>
                    )}
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:border-gray-200">
                    <p className="text-balance text-center text-lg sm:text-xl text-foreground mb-5 italic">
                      "{testimonial.review}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <Avatar className="size-14 border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
                        <AvatarImage 
                          src={testimonial.avatar.startsWith('http') ? testimonial.avatar : `${avatarPath}${testimonial.avatar}`}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <h5 className="font-medium text-foreground">
                          {testimonial.name}
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </ScrollReveal>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "size-2.5 rounded-full transition-all",
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
