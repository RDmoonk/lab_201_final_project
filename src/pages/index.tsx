import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CarouselStyled from "@/components/carousel/carousel-aesop";

const IndexPage: React.FC = () => {
  return (
    <>
    <header className="bg-[url(https://www.xplaylist.cz/files/23626375093c129bacf52d29a11c658c.jpg)] bg-cover bg-center ">
    <nav className="flex flex-nowrap justify-center">
      <a href="" className=" text-shadow-2xs text-shadow-amber-400 font-bold p-5 text-3xl">Histoire</a>
      <a href="" className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 text-3xl">Tour</a>
      <a href="" className=""> <img className="size-40" src="https://thumbs.dreamstime.com/b/vector-logo-colorful-design-41236752.jpg" alt="" /></a>
      <a href="" className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 text-3xl">Shop</a>
      <a href="" className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 text-3xl">Contact</a>
      
    </nav>
        <div className="text-center m-30">
          <p className="font-bold text-8xl">Blackhole</p>
          <p className="font-bold text-8xl text-amber-400"> Superette</p>
          </div>
    </header>



    <section className="artistStory p-10">
      <h3 className="text-bold text-5xl font-bold">Aesop Rock</h3>
      <div className="md:flex p-10">  
        <p className="pr-5 m-5 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatem iste iusto assumenda esse quasi cupiditate tempore nesciunt cumque odio totam sapiente quam cum laboriosam illo expedita animi aut ex!
        Reprehenderit commodi, culpa nobis consequatur odio facilis praesentium porro rerum quos atque deleniti illum non laudantium doloribus vel nulla recusandae quas repellat autem temporibus esse nisi? Ut officia libero eaque?
        Enim, ullam iste doloribus provident deserunt doloremque facilis praesentium quos quibusdam, similique totam voluptates eaque veniam sed accusamus adipisci eius cumque, sint commodi saepe molestias. Soluta odit ducimus corporis in?
        Dicta sint quisquam beatae aspernatur odit officiis vero magni illo? Eos iusto amet itaque modi expedita placeat asperiores ducimus debitis iste corporis, voluptatibus accusamus, repellendus nam aut ad quam impedit!</p>
           <img src="https://i.scdn.co/image/d190e645f63fb0430299aa85600afeeb432130e0" alt="" />
      </div >
    </section>

    <section className="sountractSection">
    <h2 className="text-5xl font-bold text-center">Soundtrack</h2>

    </section>

  

    <section className="artistVinyle m-10 pb-10">
      {/* flex justify-center */}

      <h2 className="text-5xl font-bold m-5 p-5">Vinyle</h2>
      <CarouselStyled/>
      <Button>Voir les rayons</Button>
      <div>

      </div>
    </section>

    <section className="tournee m-10">
      <div className="tourneeTable">
        <h2 className="text-5xl font-bold rotate-3 p-5">Tournée </h2>
      <div></div>
      </div>
      <Button>Passer à la caisse</Button>
    </section>

    <section>
      <h2>Shop</h2>
      <div className="carousel-shop md: p-20">
 <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
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
    </section>

    <footer className="border-4">
      <span className="sm:flex sm:flex-nowrap sm:m-20">
      <div className="pr-2">
        <h3>Tournée</h3>
      </div>

      <div className="pr-2">
        <h3>Shop</h3>
      </div>

      <div className="pr">
        <h3>Contact</h3>
      </div>

     
      </span>
      <div className="logo-footer size-40 flex ml-20">
        <img src="https://thumbs.dreamstime.com/b/vector-logo-colorful-design-41236752.jpg" alt="" />
      </div>
    </footer>
    
      </>
  
  );
};

export default IndexPage;
