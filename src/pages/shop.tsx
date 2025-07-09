import ShopCarousel from "@/components/carousel/shopCarousel";
import CarouselStyled from "@/components/carousel/vinyle-carousel-aesop";
import Footer from "@/components/pages-elements/footer";
import { Button } from "@/components/ui/button";
import TourneeList from "@/components/tournee-list/tournee-list";

export default function Shop() {
    return(
        <>
        <header className="bg-white">
      <nav className="flex justify-around items-center p-5 font-bold text-md uppercase">
        <ul className="flex justify-around items-center gap-6 w-full text-center">
          <li>Histoire</li>
          <li>Tour</li>
          <li className="text-2xl font-mono tracking-widest"><img className="size-40" src="/src/img/logo-aesop-rock-1.png" alt="" /></li>
          <li>Shop</li>
          <li>Contact</li>
          <li>

          </li>
        </ul>
      </nav>
    </header>

       <section className="tournee m-10 bg-[url(/src/img/backgroundTicket.jpeg)] bg-cover " id="tournee">
            <h2 className="text-8xl font-bold rotate-3 p-5 font-karantina-bold text-center">Tournée </h2>
            <TourneeList/>
            {/* <img src="src/img/aesop-rock-removebg-preview.png" alt="" /> */}
          </section>
          <Button className="m-5 rotate-3">Passer à la caisse</Button>

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