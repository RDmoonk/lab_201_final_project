import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "../ui/button";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

export default function ShopCarousel() {

    const plugin = React.useRef(
        Autoplay({delay: 2000, stopOnInteraction: true})
    )

    // variable qui contient un tableau d'images pour le carousel

  const imagePaths= [
    "/src/img/tshirt-logo-blue.jpeg",
    "/src/img/tshirt-logo-cover.jpeg",
    "/src/img/tshirt-logo-gray.jpeg",
    "/src/img/tshirt-logo-green.jpeg"

  ]

  
    return(
        <>
   <section className="m-10 md:m-20 flex flex-col items-center">
  {/* Carousel avec largeur max responsive */}
  <div className="w-full max-w-md sm:max-w-2xl md:max-w-4xl">
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

  {/* Skateboard image avec même largeur que le carousel */}
  <div className="w-full max-w-md sm:max-w-2xl md:max-w-4xl mt-6 md:mt-10">
    {/* Si tu rajoutes une image ici, elle sera responsive */}
  </div>
</section>


        </>
    )
}