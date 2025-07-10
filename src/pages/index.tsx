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
    <main className="overflow-x-hidden min-h-screen">
      {!showMainContent ? (
        <LogoFill />
      ) : (
        <>
          <Header />

          {/* Artist Story Section */}
          <section className="artistStory px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16" id="histoire">
            <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-karantina-bold text-center sm:text-left mb-6 sm:mb-8 md:mb-10">
              AESOP ROCK
            </h3>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              <div className="flex-1 order-2 lg:order-1">
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed text-justify">
                    Un album où Aesop Rock prouve qu'on peut encore <strong className="font-semibold">surprendre après 25 ans de carrière</strong>.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed text-justify">
                    C'est à la fois <strong className="font-semibold">chill</strong> et <strong className="font-semibold">profond</strong>, ça donne envie d'observer les
                    <strong className="font-semibold"> détails </strong>
                    les plus nuls de ta journée d'un autre œil.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed text-justify">
                    Pour accompagner l'album, il a sorti Aesop Rock <strong className="font-semibold">Black Hole Superette Experience.</strong>
                  </p>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed text-justify">
                    Un jeu première personne immersif dans lequel on écoute l'album.
                  </p>
                </div>
              </div>

              <div className="flex-1 order-1 lg:order-2 w-full lg:w-auto">
                <img 
                  className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl h-auto object-cover rounded-lg mx-auto" 
                  src="/img/aesop-rock-pic.jpg" 
                  alt="Aesop Rock" 
                />
              </div>
            </div>
          </section>

          {/* Soundtrack Section */}
          <section className="sountractSection px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20" id="soundtrack">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-center font-karantina-bold mb-6 sm:mb-8 md:mb-10">
              SOUNDTRACK
            </h2>
            <div className="w-full max-w-4xl mx-auto">
              <iframe 
                src="/img/aesop-rock-video.mp4" 
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] rounded-lg"
                title="Aesop Rock Soundtrack"
              ></iframe>
            </div>
          </section>

          {/* Vinyl Section */}
          <section className="artistVinyle px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
            <h2 className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-karantina-bold text-center mb-6 sm:mb-8 md:mb-10">
              VINYLE
            </h2>
            <CarouselStyled />
            <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <Button 
                className="text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 transition-all duration-300 hover:scale-105" 
                onClick={() => navigate('/shop')}
              >
                Voir le rayon
              </Button>
            </div>
          </section>

          {/* Tour Section */}
          <section className="tournee mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 my-8 sm:my-12 md:my-16 lg:my-20 bg-[url(/src/img/backgroundTicket.jpeg)] bg-cover bg-center bg-no-repeat rounded-lg" id="tournee">
            <div className="bg-(url[img/backgroundTicket.png]) bg-opacity-20 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold rotate-0 sm:rotate-1 md:rotate-2 lg:rotate-3 font-karantina-bold text-center mb-6 sm:mb-8 md:mb-10 text-black">
                TOURNEE
              </h2>
              <FrontEndTournee />
              <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <Button 
                  className="rotate-0 sm:rotate-1 md:rotate-2 lg:rotate-3 text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 transition-all duration-300 hover:scale-105" 
                  onClick={() => navigate('/shop')}
                >
                  Passer à la caisse
                </Button>
              </div>
            </div>
          </section>

          {/* Shop Section */}
          <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20" id="shop">
            <h2 className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-karantina-bold text-center mb-6 sm:mb-8 md:mb-10">
              SHOP
            </h2>
            <ShopCarousel />
            <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <Button 
                className="text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 transition-all duration-300 hover:scale-105" 
                onClick={() => navigate('/shop')}
              >
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