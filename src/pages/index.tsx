import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import CarouselStyled from "@/components/carousel/vinyle-carousel-aesop";
import LogoFill from "@/components/logo-animation/logo-fill";
import FrontEndTournee from "@/components/front-end-tournee";
import Header from "@/components/pages-elements/header";
import Footer from "@/components/pages-elements/footer";
import { useNavigate } from "react-router-dom";
import ShopCarousel from "@/components/carousel/shopCarousel";

const IndexPage: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {!showMainContent ? (
        <LogoFill />
      ) : (
        <>
          <Header />

          <section className="artistStory px-5 sm:px-10 py-10" id="histoire">
            <h3 className="text-4xl sm:text-6xl md:text-8xl font-bold font-karantina-bold text-center sm:text-left">
              Aesop Rock
            </h3>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 p-5 sm:p-10">
              <p className="text-lg sm:text-xl leading-relaxed text-justify">
                Un album où Aesop Rock prouve qu’on peut encore surprendre <b>après 25 ans de carrière.</b>
                C’est à la fois <b>chill</b> et <b>profond</b>, ça donne envie 
                d’observer les <b>détails</b> les plus nuls de ta journée d’un autre œil.
                Pour accompagner l’album, il a sorti Aesop Rock <b>Black Hole Superette Experience.</b>
                Un jeu première personne immersif dans lequel on écoute l’album.
                <div className="mt-10">
                  <p><strong>Pourquoi une supérette mentale ?</strong><br />
                  Il aurait pu choisir un bar, une chambre d’ado ou un vaisseau spatial. Mais non. Aesop Rock a ouvert une supérette...
                  </p>
                  <p><strong>Le cerveau comme supermarché</strong><br />
                  Chaque rayon, chaque produit, chaque étiquette est un souvenir empaqueté...
                  </p>
                  <p><strong>Tu fais tes courses dans ta tête</strong><br />
                  Ce que tu remplis dans ton panier, c’est toi : ta fatigue du monde...
                  </p>
                  <p><strong>Une idée absurde… sauf qu’elle fonctionne</strong><br />
                  Dans un monde où les albums se battent pour faire du bruit...
                  </p>
                  <p><strong>Et toi, tu rentres quand dans la supérette ?</strong><br />
                  Elle est ouverte. Les néons clignotent...
                  </p>
                </div>
              </p>
              <img className="w-full max-w-sm object-cover rounded-lg mx-auto" src="/src/img/aesop-rock-pic.jpg" alt="" />
            </div>
          </section>

          <section className="sountractSection px-5 sm:px-10" id="soundtrack">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-center font-karantina-bold">
              Soundtrack
            </h2>
            <iframe src="/src/img/aesop-rock-video.mp4" className="aspect-video w-full rounded-xl my-5"></iframe>
            <div className="flex flex-col items-center gap-5 my-10">
              <img src="/src/img/logo-album-removebg-preview.png" alt="album logo" className="max-w-xs sm:max-w-md" />
              <img src="/src/img/POCHETTE_TRANCHE (1).png" alt="songs" className="max-w-full rounded-xl" />
            </div>
          </section>

          <section className="artistVinyle px-5 sm:px-10 m-10 pb-10">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold m-5 p-5 font-karantina-bold text-center">
              Vinyle
            </h2>
            <CarouselStyled />
            <div className="flex justify-center my-10">
              <Button className="text-xl sm:text-2xl px-6 sm:px-10 py-4 sm:py-6" onClick={() => navigate('/shop')}>
                Voir le rayon
              </Button>
            </div>
          </section>

          <section className="tournee m-5 sm:m-10 bg-[url(/src/img/backgroundTicket.jpeg)] bg-cover bg-center" id="tournee">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold rotate-0 sm:rotate-3 p-5 font-karantina-bold text-center">
              Tournée
            </h2>
            <FrontEndTournee />
            <div className="flex justify-center my-10">
              <Button className="rotate-0 sm:rotate-3 text-xl sm:text-2xl px-6 sm:px-10 py-4 sm:py-6" onClick={() => navigate('/shop')}>
                Passer à la caisse
              </Button>
            </div>
          </section>

          <section className="px-5 sm:px-10" id="shop">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold m-5 p-5 font-karantina-bold text-center">
              Shop
            </h2>
            <ShopCarousel />
            <div className="flex justify-center my-10">
              <Button className="text-xl sm:text-2xl px-6 sm:px-10 py-4 sm:py-6" onClick={() => navigate('/shop')}>
                Passer à la caisse
              </Button>
            </div>
          </section>

          <Footer />
        </>
      )}
    </main>
  );
};

export default IndexPage;
