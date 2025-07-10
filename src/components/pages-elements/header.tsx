import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import logo1 from "/public/img/logo-aesop-rock-1.png"

export default function Header() {

    return(
        <header className="bg-[url(/src/img/new-cover.jpg)] bg-cover bg-center h-150">
            <nav className="flex flex-wrap justify-center items-center font-spooky px-4 py-5 gap-3 md:gap-5">
                <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-2 md:p-5 text-2xl md:text-5xl" href="#histoire">HISTOIRE</a>
                <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-2 md:p-5 text-2xl md:text-5xl" href="#tournee">TOURNEES</a>
                <a className="p-2 md:p-5" href="/">
                    <img className="w-24 md:size-40" src={logo1} alt="" />
                </a>
                <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-2 md:p-5 text-2xl md:text-5xl" href="#shop">SHOP</a>
                <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-2 md:p-5 text-2xl md:text-5xl" href="#footer">CONTACT</a>
                <a href="panier" className="drop-shadow-amber-400 p-2 md:p-5 text-2xl md:text-5xl">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </a>
            </nav>
            <div className="img-title text-center m-10 md:m-30">
                <p className="font-bold text-5xl md:text-9xl font-urban">BLACKHOLE</p>
                <span>
                    <p className="font-bold text-4xl md:text-7xl text-amber-400 font-urban text-center"> SUPERETTE</p>
                </span>
                
            </div>
        </header>
    )
}
