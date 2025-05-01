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
    <div className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold">
            Seamless integrations with the best in the business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Endless possibilities for reaching more customers and growing your sales.
          </p>
        </div>
        
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-48 bg-gradient-to-r from-white via-white to-transparent z-10"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 md:w-48 bg-gradient-to-l from-white via-white to-transparent z-10"></div>
        
        <div className="mx-auto overflow-hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
              containScroll: false,
              skipSnaps: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="py-4 gap-4 animate-slide-infinite">
              {[...marketplaces, ...marketplaces, ...marketplaces, ...marketplaces].map((marketplace, index) => (
                <CarouselItem 
                  key={index} 
                  className="basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <MarketplaceCard
                    name={marketplace.name}
                    logo={marketplace.logo}
                    fallbackText={marketplace.fallbackText}
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
