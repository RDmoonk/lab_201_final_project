import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export default function ShopCarousel() {
  const imagePaths = [
    "/img/tshirt-logo-blue.jpeg",
    "/img/tshirt-logo-cover.jpeg",
    "/img/tshirt-logo-gray.jpeg",
    "/img/tshirt-logo-green.jpeg",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="m-10 md:m-20 flex flex-col items-center">
      <div className="w-full h-full">
        <Carousel className="w-full h-full" plugins={[plugin.current]}>
          <CarouselContent className="h-full">
            {imagePaths.map((src, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <Card className="w-full h-full">
                  <CardContent className="p-0 w-full h-full overflow-hidden">
                    <img
                      src={src}
                      alt={`carousel-image-${index}`}
                      className="object-cover w-full h-full"
                      onError={(e) =>
                        (e.currentTarget.src = "/img/fallback.jpeg")
                      }
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
    </section>
  );
}
