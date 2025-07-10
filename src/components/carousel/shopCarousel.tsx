import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export default function ShopCarousel() {
  // Plugin autoplay sans useRef (plus simple ici)
  
  // Liste des images (doivent être dans /public/img/)
  const imagePaths = [
    "/img/tshirt-logo-blue.jpeg",
    "/img/tshirt-logo-cover.jpeg",
    "/img/tshirt-logo-gray.jpeg",
    "/img/tshirt-logo-green.jpeg"
  ];
  
    const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section className="m-10 md:m-20 flex flex-col items-center">
      {/* Carousel responsive avec largeur maximale */}
      <div className="w-full max-w-md sm:max-w-4xl md:max-w-6xl lg:max-w-7xl">
        <Carousel plugins={[plugin.current]}>
          <CarouselContent className="-ml-1">
            {imagePaths.map((src, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 px-1 sm:px-2">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                    <img
                      src={src}
                      alt={`carousel-image-${index}`}
                      className="object-cover w-full h-full"
                      onError={(e) => (e.currentTarget.src = "/img/fallback.jpeg")}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

        <Carousel className="w-full max-w-xs" plugins={[plugin.current]}>
      <CarouselContent>
        {imagePaths.map((src,index) => (
               <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
               <img
                      src={src}
                      alt={`carousel-image-${index}`}
                      className="object-cover w-full h-full"
                      onError={(e) => (e.currentTarget.src = "/img/fallback.jpeg")}
                    />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  );
}
