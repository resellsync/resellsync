import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import { marketplaces } from './data/marketplaceData';
import { MarketplaceCard } from './MarketplaceCard';

export const MarketplaceCarousel = () => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full bg-[#F1F0FB] py-6 md:py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative px-4">
        <h2 className="text-xl md:text-2xl text-center mb-6 text-foreground font-semibold">
          Resellsync Integrates With Trusted Marketplaces
        </h2>
        
        <div className="absolute left-0 top-[4rem] bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#F1F0FB] via-[#F1F0FB]/90 to-transparent z-10"></div>
        <div className="absolute right-0 top-[4rem] bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#F1F0FB] via-[#F1F0FB]/90 to-transparent z-10"></div>
        
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
            <CarouselContent className="py-2 animate-[slide_40s_linear_infinite] group-hover:pause-animation">
              {[...marketplaces, ...marketplaces].map((marketplace, index) => (
                <CarouselItem key={index} className={isMobile ? "basis-1/4" : "basis-1/8"}>
                  <MarketplaceCard
                    name={marketplace.name}
                    logo={marketplace.logo}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
