
export default function Header() {

    return(
           <header className="bg-[url(/src/img/new-cover.jpg)] bg-cover bg-center h-150">
            <nav className="flex flex-nowrap justify-center font-spooky">
              <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 text-5xl" href="#histoire">Histoire</a>
              <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 text-5xl" href="#tournee">Tournées</a>
              <a className="" href="/"><img className="size-40" src="/src/img/logo-aesop-rock-1.png" alt="" /></a>
               <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 text-5xl" href="#shop">Shop</a>
              <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 text-5xl" href="#footer">Contact</a>
            </nav>
            <div className="img-title text-center m-30">
              <p className="font-bold text-9xl font-urban">Blackhole</p>
              <p className="font-bold text-7xl text-amber-400 font-urban text-center"> Superette</p>
            </div>
          </header>
    )
}