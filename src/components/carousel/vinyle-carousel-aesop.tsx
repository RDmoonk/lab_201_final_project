import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"


export default function CarouselStyled() {

  const imagePaths= [
    "/img/album-cover-ar-1.jpg",
    "/img/album-cover-ar-2.jpg",
    "/img/album-cover-ar-3.jpg",
    "/img/album-cover-ar-4.jpg",
    "/img/album-cover-ar-5.jpg",
    "/img/album-cover-ar-6.jpg",
    "/img/new-cover.jpg"

  ]

    const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  
    return(
        <>
   <section className="m-10 md:m-20 flex flex-col items-center">
  {/* Carousel avec largeur max responsive */}
  <div className="w-full max-w-md sm:max-w-6xl md:max-w-8xl">
    <Carousel plugins={[plugin.current]}>
      <CarouselContent className="-ml-1">
        {imagePaths.map((src, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 px-1 sm:px-2">
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
  <div className="w-full max-w-md sm:max-w-4xl md:max-w-4xl mt-6 md:mt-10">
    <img
      src="/img/skate-for-carousel-removebg-preview.png"
      alt="skateboard"
      className="w-full h-auto"
    />
  </div>
</section>




        </>
    )
}