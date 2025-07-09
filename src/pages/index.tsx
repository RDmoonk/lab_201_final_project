import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CarouselStyled from "@/components/carousel/vinyle-carousel-aesop";
import TourneeList from "@/components/tournee-list/tournee-list";
import LogoFill from "@/components/logo-animation/logo-fill";

const IndexPage: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Délai pour laisser le temps à l’animation de LogoFill (ex: 4.5s)
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 4500); // Change cette durée si ton animation est plus longue/courte

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showMainContent ? (
        <LogoFill />
      ) : (
        <>
          {/* === CONTENU PRINCIPAL === */}
          <header className="bg-[url(/src/img/new-cover.jpg)] bg-cover bg-center h-150">
            <nav className="flex flex-nowrap justify-center font-spooky">
              <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 text-3xl">Histoire</a>
              <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 text-3xl">Tour</a>
              <a className=""> <img className="size-40" src="/src/img/logo-aesop-rock-1.png" alt="" /></a>
              <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 text-3xl">Shop</a>
              <a className="text-shadow-2xs text-shadow-amber-400 font-bold p-5 text-3xl">Contact</a>
            </nav>
            <div className="img-title text-center m-30">
              <p className="font-bold text-8xl font-urban">Blackhole</p>
              <p className="font-bold text-8xl text-amber-400 font-urban text-center"> Superette</p>
            </div>
          </header>

          <section className="artistStory p-10">
            <h3 className="text-bold text-5xl font-bold font-karantina-bold">Aesop Rock</h3>
            <div className="md:flex p-10">
              <p className="pr-5 m-5 text-xl">
                Un album où Aesop Rock prouve qu’on peut encore surprendre après 25 ans de carrière. 
                C’est à la fois chill et profond, ça donne envie 
                d’observer les détails les plus nuls de ta journée d’un autre œil.
                Pour accompagner l’album, il a sorti Aesop Rock Black Hole Superette Experience.
                Un jeu première personne immersif dans lequel on écoute l’album.
              </p>
              <img className="size-200" src="/src/img/aesop-rock-pic.jpg" alt="" />
            </div>
          </section>

          <section className="sountractSection">
            <h2 className="text-5xl font-bold text-center font-karantina-bold">Soundtrack</h2>
            <iframe src="/src/img/aesop-rock-video.mp4" className="aspect-video w-full"></iframe>
          </section>

          <section className="artistVinyle m-10 pb-10">
            <h2 className="text-5xl font-bold m-5 p-5 font-karantina-bold">Vinyle</h2>
            <CarouselStyled />
            <Button>Voir les rayons</Button>
          </section>

          <section className="tournee m-10 bg-[url(/src/img/backgroundTicket.jpeg)]">
            <h2 className="text-5xl font-bold rotate-3 p-5 font-karantina-bold">Tournée </h2>
            <TourneeList />
            <Button className="m-5">Passer à la caisse</Button>
          </section>

          <section>
            <h2 className="text-5xl font-bold m-5 p-5 font-karantina-bold">Shop</h2>
            <div className="carousel-shop md: p-20">
              <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
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

          <footer className="border-black bg-black text-white flex">
              <img src="/src/img/logo-footer-aesop-rock-removebg-preview.png" alt="" />
            <div className="sm:flex sm:flex-nowrap sm:m-20 ">
              <div className="pr-2 mr-20">
                <h3>Tournée</h3>
                <ul>
                <li>Tracklist</li>
                <li>Dates</li>
                <li>Histoire</li>
                </ul>
                </div>
              <div className="pr-2 mr-20">
                <ul>
                <h3>Shop</h3>
                <li>T-shirt</li>
                <li>Sweat</li>
                <li>Vynile</li>
                </ul>
                </div>
              <div className="pr">
                <h3>Contact</h3>
                <ul>
                <li>Instagram</li>
                <li>Youtube</li>
                <li>Spotify</li>
                </ul>
                </div>
            </div>
            <div className="logo-footer size-40 flex ml-20"> 
            </div>

            <div className="pt-50">
            <p>© 2025 – Black Hole Superette. Tous droits réservés.</p>
            <p>Mentions légales – Politique de confidentialité</p>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default IndexPage;
