import ShopCarousel from "@/components/carousel/shopCarousel";
import CarouselStyled from "@/components/carousel/vinyle-carousel-aesop";
import Footer from "@/components/pages-elements/footer";
import { Button } from "@/components/ui/button";
import TourneeList from "@/components/tournee-list/tournee-list";

export default function Shop() {
    return(
        <>
                 <header className="h-150">
            <nav className="flex flex-nowrap justify-center font-spooky ">
              <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 pr-20 text-5xl " href="#histoire">Histoire</a>
              <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 pr-20 text-5xl" href="#tournee">Tournées</a>
              <a className="pr-10"> <img className="size-40" src="/src/img/logo-aesop-rock-1.png" alt="" /></a>
              <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 pr-20 text-5xl" href="#shop">Shop</a>
              <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 pr-20 text-5xl" href="#footer">Contact</a>
            </nav>
          </header>

       <section className="tournee m-10 bg-[url(/src/img/backgroundTicket.jpeg)] bg-cover " id="tournee">
            <h2 className="text-8xl font-bold rotate-3 p-5 font-karantina-bold text-center">Tournée </h2>
            <TourneeList/>
            {/* <img src="src/img/aesop-rock-removebg-preview.png" alt="" /> */}
          </section>
         <div className="flex justify-center my-10"><Button className="rotate-3 text-2xl px-10 py-6"> Passer à la caisse </Button></div>

        <section className="">
           <h2 className="text-8xl font-bold m-5 p-5 font-karantina-bold text-center">T-shirt</h2>
         <ShopCarousel/>
        </section>

        <section>
            <h2 className="text-8xl font-bold m-5 p-5 font-karantina-bold text-center">Sweat</h2>
            <ShopCarousel/>
        </section>
      

            <section className="artistVinyle m-10 pb-10">
            <h2 className="text-8xl font-bold m-5 p-5 font-karantina-bold text-center">Vinyle</h2>
            <CarouselStyled />
          </section>

        <Footer/>
        </>
    )
}