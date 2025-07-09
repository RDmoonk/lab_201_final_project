import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "../ui/button";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

export default function ShopCarousel() {

    const plugin = React.useRef(
        Autoplay({delay: 2000, stopOnInteraction: true})
    )

    return(
        <>
    <div className="carousel-shop md: p-20">
               <Carousel opts={{ align: "start" }} className="w-full max-w-sm"
               plugins={[plugin.current]}
               >
                 <CarouselContent>
                   {Array.from({ length: 5 }).map((_, index) => (
                     <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                       <div className="p-1">
                         <Card>
                           <CardContent className="flex aspect-square items-center justify-center p-6">
                             <span className="text-3xl font-semibold">{index + 1}</span>
                           </CardContent>
                         </Card>
                       </div>
                     </CarouselItem>
                   ))}
                 </CarouselContent>
                 <CarouselPrevious />
                 <CarouselNext />
               </Carousel>
             </div>

        </>
    )
}