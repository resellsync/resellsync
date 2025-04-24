
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
    <div className="w-full bg-gradient-to-b from-[#F1F0FB] to-[#E9E8F3] py-4 md:py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative px-4">
        <h2 className="text-lg md:text-xl text-center mb-4 text-foreground/90 font-medium">
          Resellsync Integrates With Trusted Marketplaces
        </h2>
        
        <div className="absolute left-0 top-[3.5rem] bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#F1F0FB] via-[#F1F0FB]/95 to-transparent z-10"></div>
        <div className="absolute right-0 top-[3.5rem] bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#F1F0FB] via-[#F1F0FB]/95 to-transparent z-10"></div>
        
        <div className="mx-auto overflow-hidden">
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
            <CarouselContent className="py-2 animate-[slide_50s_linear_infinite] group-hover:pause-animation">
              {[...marketplaces, ...marketplaces].map((marketplace, index) => (
                <CarouselItem key={index} className={isMobile ? "basis-1/2" : "basis-1/5"}>
                  <div className="h-14 flex items-center justify-center gap-3 p-3 mx-2 rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur transition-all duration-300 hover:scale-102 hover:shadow-lg hover:bg-white/95 group border border-white/50">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-blue via-brand-lightBlue to-brand-teal text-white font-semibold text-xs flex items-center justify-center shadow-sm group-hover:shadow transition-shadow">
                      {marketplace.logo}
                    </div>
                    <span className="text-muted-foreground/90 font-medium text-sm">
                      {marketplace.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

