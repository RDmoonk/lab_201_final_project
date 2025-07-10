import ShopCarousel from "@/components/carousel/shopCarousel";
import CarouselStyled from "@/components/carousel/vinyle-carousel-aesop";
import Footer from "@/components/pages-elements/footer";
import { Button } from "@/components/ui/button";
import TourneeList from "@/components/tournee-list/tourneeListShop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo1 from "/public/img/logo-aesop-rock-1.png";



export default function Shop() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      const closeMenu = () => {
        setIsMenuOpen(false);
      };
    return(
        <>
        {/* Header */}
     <header className="h-200 min-h-[200px] sm:min-h-[250px]">
      <nav className="relative px-4 py-4">
        {/* Navigation Desktop */}
        <div className="hidden lg:flex justify-center items-center font-spooky gap-5">
          <a className="text-shadow-2xs text-shadow-amber-400 font-bold text-5xl p-4 hover:text-amber-300 transition-colors" href="#histoire">HISTOIRE</a>
          <a className="text-shadow-2xs text-shadow-amber-400 font-bold text-5xl p-4 hover:text-amber-300 transition-colors" href="#tournee">TOURNEES</a>
          <a className="p-4" href="/">
            <img className="w-28" src={logo1} alt="logo" />
          </a>
          <a className="text-shadow-2xs text-shadow-amber-400 font-bold text-5xl p-4 hover:text-amber-300 transition-colors" href="#shop">SHOP</a>
          <a className="text-shadow-2xs text-shadow-amber-400 font-bold text-5xl p-4 hover:text-amber-300 transition-colors" href="#footer">CONTACT</a>
          <a href="/panier" className="text-3xl p-4 text-black hover:text-amber-300 transition-colors">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </div>

        {/* Navigation Mobile */}
        <div className="lg:hidden flex justify-between items-center">
          <a href="/">
            <img className="w-16 sm:w-20" src={logo1} alt="logo" />
          </a>
          
          <div className="flex items-center gap-4">
            <a href="/panier" className="text-2xl text-black transition-colors">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
            <button 
              onClick={toggleMenu}
              className="text-black text-2xl transition-colors focus:outline-none"
              aria-label="Menu"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {/* Menu Burger Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col justify-center items-center">
            <button 
              onClick={closeMenu}
              className="absolute top-6 right-6 text-amber-400 text-3xl hover:text-amber-300 transition-colors"
              aria-label="Fermer le menu"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <div className="flex flex-col items-center gap-8 font-spooky">
              <a 
                className="text-shadow-2xs text-shadow-amber-400 font-bold text-3xl text-black hover:text-amber-300 transition-colors" 
                href="#histoire"
                onClick={closeMenu}
              >
                HISTOIRE
              </a>
              <a 
                className="text-shadow-2xs text-shadow-amber-400 font-bold text-3xl text-black hover:text-amber-300 transition-colors" 
                href="#tournee"
                onClick={closeMenu}
              >
                TOURNEES
              </a>
              <a 
                className="text-shadow-2xs text-shadow-amber-400 font-bold text-3xl text-black hover:text-amber-300 transition-colors" 
                href="#shop"
                onClick={closeMenu}
              >
                SHOP
              </a>
              <a 
                className="text-shadow-2xs text-shadow-amber-400 font-bold text-3xl text-black hover:text-amber-300 transition-colors" 
                href="#footer"
                onClick={closeMenu}
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </nav>
     <div className="flex items-center gap-8 font-spooky border-black border-2 md:p-10 mt-170 md:mt-150 ">
              <a  className="text-shadow-2xs text-shadow-rose-900 font-bold text-3xl md:text-5xl text-black hover:text-rose-800 transition-colors"  href="#tournee"> TOURNEES
              </a>
              <a  className="text-shadow-2xs text-shadow-rose-900 font-bold text-3xl md:text-5xl text-black hover:text-rose-800 transition-colors" href="#tshirt"> T-SHIRT </a>
              <a  className="text-shadow-2xs text-shadow-rose-900 font-bold text-3xl md:text-5xl text-black hover:text-rose-800 transition-colors"  href="#sweats">  SWEAT</a>
              <a  className="text-shadow-2xs text-shadow-rose-900 font-bold text-3xl md:text-5xl text-black hover:text-rose-800 transition-colors"  href="#vinyle">VINYLE</a>
            </div>
    </header>

{/* section tournée */}
            <section className="w-full my-8 sm:my-12 md:my-16 lg:my-20 bg-[url(/src/img/backgroundTicket.jpeg)] bg-cover bg-center bg-no-repeat rounded-none" id="tournee">
                <h2 className="text-7xl md:text-8xl font-bold rotate-3 p-3 md:p-5 font-karantina-bold text-center">TOURNEE </h2>
                <TourneeList/>
            </section>

            <div className="flex justify-center my-6 md:my-10">
                <Button className="rotate-3 text-lg md:text-2xl px-6 md:px-10 py-4 md:py-6"> Passer à la caisse </Button>
            </div>

{/* section carousel pour les t-shirt */}
            <section className="" id="tshirt">
                <h2 className="text-4xl md:text-8xl font-bold m-3 md:m-5 p-3 md:p-5 font-karantina-bold text-center">T-SHIRT</h2>
                <ShopCarousel/>
            </section>

{/* section carousel pour les sweats */}
            <section id="sweats">
                <h2 className="text-4xl md:text-8xl font-bold m-3 md:m-5 p-3 md:p-5 font-karantina-bold text-center">SWEAT</h2>
                <ShopCarousel/>
            </section>

{/* section carousel pour les vinyle */}
            <section className="artistVinyle m-5 md:m-10 pb-5 md:pb-10" id="vinyle">
                <h2 className="text-4xl md:text-8xl font-bold m-3 md:m-5 p-3 md:p-5 font-karantina-bold text-center">VINYLE</h2>
                <CarouselStyled />
            </section>
{/* composant footer */}
            <Footer/>
        </>
    )
}
