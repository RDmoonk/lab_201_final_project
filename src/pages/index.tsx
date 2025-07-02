import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const IndexPage: React.FC = () => {
  return (
    <>
    <header className="bg-[url(https://play-lh.googleusercontent.com/8H1BGQSVM3v3nt97GpfxrVCSTjLIXzPn6TV87hNmceKRATCsj3riipWutdKxzIeePEXk)] bg-cover bg-center ">
    <nav className="flex flex-nowrap justify-center">
      <a href="">Histoire</a>
      <a href="">Tour</a>
      <a href="" className=""> <img className="size-40" src="https://thumbs.dreamstime.com/b/vector-logo-colorful-design-41236752.jpg" alt="" /></a>
      <a href="">Shop</a>
      <a href="">Contact</a>
      
    </nav>
        <div className="text-center m-10">
          <p className="font-bold text-8xl">Blackhole Superette</p>
          </div>
    </header>

  

    <section className="artistStory">

      <h3 className="text-bold text-5xl">Titre</h3>
      <div className="md:flex">  
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatem iste iusto assumenda esse quasi cupiditate tempore nesciunt cumque odio totam sapiente quam cum laboriosam illo expedita animi aut ex!
        Reprehenderit commodi, culpa nobis consequatur odio facilis praesentium porro rerum quos atque deleniti illum non laudantium doloribus vel nulla recusandae quas repellat autem temporibus esse nisi? Ut officia libero eaque?
        Enim, ullam iste doloribus provident deserunt doloremque facilis praesentium quos quibusdam, similique totam voluptates eaque veniam sed accusamus adipisci eius cumque, sint commodi saepe molestias. Soluta odit ducimus corporis in?
        Dicta sint quisquam beatae aspernatur odit officiis vero magni illo? Eos iusto amet itaque modi expedita placeat asperiores ducimus debitis iste corporis, voluptatibus accusamus, repellendus nam aut ad quam impedit!</p>
           <img src="https://i.scdn.co/image/d190e645f63fb0430299aa85600afeeb432130e0" alt="" />
     
   
      </div >

      <div className="carousel-art md: p-20">
      <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
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

    <section className="tournee">
      <div className="tourneeTable">
        <h2>Tournée </h2>
      <div></div>
      </div>
      <Button>Achat du billet</Button>
    </section>

    <section>
      <h2>Shop</h2>
      <div className="carousel-shop md: p-20">
      <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
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
