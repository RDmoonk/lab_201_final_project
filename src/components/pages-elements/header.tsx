import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo1 from "/public/img/logo-aesop-rock-1.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[url(/src/img/new-cover.jpg)] bg-cover bg-center h-200 min-h-[200px] sm:min-h-[250px]">
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

      <div className="text-center mt-8 pt-90 sm:mt-12 px-4">
        <p className="font-bold text-4xl sm:text-7xl font-urban text-black">BLACKHOLE</p>
        <p className="font-bold text-3xl sm:text-5xl text-amber-400 font-urban">SUPERETTE</p>
      </div>
    </header>
  );
}