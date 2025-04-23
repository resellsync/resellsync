
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

const marketplaces = [
  { name: "eBay", logo: "EB" },
  { name: "Backmarket", logo: "BM" },
  { name: "Reebelo", logo: "RB" },
  { name: "Swappa", logo: "SW" },
  { name: "Mercari", logo: "MC" }
];

export const MarketplaceCarousel = () => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full bg-[#F1F0FB] py-8 md:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-2xl md:text-3xl text-center mb-6 text-foreground font-semibold px-4">
          Resellsync Integrates With Trusted Marketplaces
        </h2>
        
        <div className="absolute left-0 top-[4rem] bottom-4 w-32 bg-gradient-to-r from-[#F1F0FB] to-transparent z-10"></div>
        <div className="absolute right-0 top-[4rem] bottom-4 w-32 bg-gradient-to-l from-[#F1F0FB] to-transparent z-10"></div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: false,
            skipSnaps: true,
            inViewThreshold: 0.7,
          }}
          className="w-screen -ml-[calc((100vw-100%)/2)] relative group"
        >
          <CarouselContent className="py-4 animate-[slide_40s_linear_infinite] group-hover:pause-animation">
            {[...marketplaces, ...marketplaces].map((marketplace, index) => (
              <CarouselItem key={index} className={isMobile ? "basis-1/2" : "basis-1/5"}>
                <div className="h-20 flex items-center justify-start gap-3 p-4 mx-2 rounded-xl bg-white/80 border border-border/50 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-border group">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-teal text-white font-bold text-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                    {marketplace.logo}
                  </div>
                  <span className="text-muted-foreground font-medium text-sm">
                    {marketplace.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
