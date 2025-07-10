import ShopCarousel from "@/components/carousel/shopCarousel";
import CarouselStyled from "@/components/carousel/vinyle-carousel-aesop";
import Footer from "@/components/pages-elements/footer";
import { Button } from "@/components/ui/button";
import TourneeList from "@/components/tournee-list/tourneeListShop";

export default function Shop() {
    return(
        <>
        {/* Header */}
<header className="h-150">
  <nav className="flex flex-wrap justify-center items-center font-spooky px-4 py-5 gap-2 md:gap-5 text-center">
    <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-2 md:p-5 pr-4 md:pr-20 text-xl md:text-5xl" href="#histoire">Histoire</a>
    <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-2 md:p-5 pr-4 md:pr-20 text-xl md:text-5xl" href="#tournee">Tournées</a>
    <a className="p-2 md:p-5" href="/">
      <img className="w-20 md:size-40 mx-auto" src="/src/img/logo-aesop-rock-1.png" alt="" />
    </a>
    <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-2 md:p-5 pr-4 md:pr-20 text-xl md:text-5xl" href="#shop">Shop</a>
    <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-2 md:p-5 pr-4 md:pr-20 text-xl md:text-5xl" href="#footer">Contact</a>
  </nav>
</header>


{/* section tournée */}
            <section className="tournee m-5 md:m-10 bg-[url(/src/img/backgroundTicket.jpeg)] bg-cover" id="tournee">
                <h2 className="text-4xl md:text-8xl font-bold rotate-3 p-3 md:p-5 font-karantina-bold text-center">Tournée </h2>
                <TourneeList/>
            </section>

            <div className="flex justify-center my-6 md:my-10">
                <Button className="rotate-3 text-lg md:text-2xl px-6 md:px-10 py-4 md:py-6"> Passer à la caisse </Button>
            </div>

{/* section carousel pour les t-shirt */}
            <section className="" id="tshirt">
                <h2 className="text-4xl md:text-8xl font-bold m-3 md:m-5 p-3 md:p-5 font-karantina-bold text-center">T-shirt</h2>
                <ShopCarousel/>
            </section>

{/* section carousel pour les sweats */}
            <section id="sweats">
                <h2 className="text-4xl md:text-8xl font-bold m-3 md:m-5 p-3 md:p-5 font-karantina-bold text-center">Sweat</h2>
                <ShopCarousel/>
            </section>

{/* section carousel pour les vinyle */}
            <section className="artistVinyle m-5 md:m-10 pb-5 md:pb-10" id="vinyle">
                <h2 className="text-4xl md:text-8xl font-bold m-3 md:m-5 p-3 md:p-5 font-karantina-bold text-center">Vinyle</h2>
                <CarouselStyled />
            </section>
{/* composant footer */}
            <Footer/>
        </>
    )
}
