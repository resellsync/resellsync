
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
    <div className="w-full bg-[#F1F0FB] py-4 md:py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-xl md:text-2xl text-center mb-4 text-foreground font-semibold px-4">
          Resellsync Integrates With Trusted Marketplaces
        </h2>
        
        <div className="absolute left-0 top-[3rem] bottom-2 w-32 bg-gradient-to-r from-[#F1F0FB] to-transparent z-10"></div>
        <div className="absolute right-0 top-[3rem] bottom-2 w-32 bg-gradient-to-l from-[#F1F0FB] to-transparent z-10"></div>
        
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
          <CarouselContent className="py-2 animate-[slide_40s_linear_infinite] group-hover:pause-animation">
            {[...marketplaces, ...marketplaces].map((marketplace, index) => (
              <CarouselItem key={index} className={isMobile ? "basis-1/2" : "basis-1/5"}>
                <div className="h-16 flex items-center justify-start gap-3 p-3 mx-2 rounded-xl bg-white/80 border border-border/50 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-border group">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-brand-blue to-brand-teal text-white font-bold text-xs flex items-center justify-center group-hover:shadow-md transition-shadow">
                    {marketplace.logo}
                  </div>
                  <span className="text-muted-foreground font-medium text-xs">
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
