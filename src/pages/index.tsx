import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import CarouselStyled from "@/components/carousel/vinyle-carousel-aesop";
import LogoFill from "@/components/logo-animation/logo-fill";
import FrontEndTournee from "@/components/front-end-tournee";
// import ShopCarousel from "@/components/carousel/shopCarousel";
import Header from "@/components/pages-elements/header";
import Footer from "@/components/pages-elements/footer";
import { useNavigate } from "react-router-dom";

const IndexPage: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const navigate = useNavigate();

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
       <Header/>

          <section className="artistStory p-10" id="histoire">
            <h3 className="text-bold text-8xl font-bold font-karantina-bold">Aesop Rock</h3>
            <div className="md:flex p-10">
              <p className="pr-5 m-5 text-xl">
                Un album où Aesop Rock prouve qu’on peut encore surprendre <b>après 25 ans de carrière.</b> 
                C’est à la fois <b>chill</b> et <b>profond</b>, ça donne envie 
                d’observer les <b>détails</b> les plus nuls de ta journée d’un autre œil.
                Pour accompagner l’album, il a sorti Aesop Rock <b>Black Hole Superette Experience.</b>
                Un jeu première personne immersif dans lequel on écoute l’album.
        <div className="mt-20">
          <p>🛒 <strong>Pourquoi une supérette mentale ?</strong><br />
          Il aurait pu choisir un bar, une chambre d’ado ou un vaisseau spatial. Mais non. Aesop Rock a ouvert une supérette. Pas une vraie, pas une qui vend des conserves ou des cordons bleus. Une supérette mentale, coincée quelque part entre son subconscient et le nôtre. Pourquoi ? Parce qu’il n’y a pas de lieu plus ordinaire – et donc plus propice à l’extraordinaire.</p>
          <p>🧠 <strong>Le cerveau comme supermarché</strong><br />
          Chaque rayon, chaque produit, chaque étiquette est un souvenir empaqueté, une idée floue mise sous vide, une paranoïa douce vendue en spray. Ce n’est pas une boutique. C’est un catalogue émotionnel. <br />
          <i>Costco</i> évoque les routines absurdes. <br />
          <i>Black Plums</i> flirte avec le rêve éveillé. <br />
          <i>Snail Zero</i> te vend un escargot qui a vu trop de choses.<br />
          Aesop Rock transforme le quotidien en mythologie. Le banal en matière noire.</p>
          <p>🧾 <strong>Tu fais tes courses dans ta tête</strong><br /> 
            Ce que tu remplis dans ton panier, c’est toi : ta fatigue du monde, tes tics de langage, les souvenirs d’objets perdus, les moments où t’étais ailleurs, sans savoir où. <br />
            Mais le rayon que tu prends, ce n’est pas le même qu’un autre. C’est ce qui rend cette supérette intime et universelle à la fois.</p>
            <p>🛍️ <strong>Une idée absurde… sauf qu’elle fonctionne</strong><br />
            Dans un monde où les albums se battent pour faire du bruit, Aesop Rock choisit le silence graphique, les références tordues, les images qui flottent. <br />
            Il ne t’explique pas : il te laisse errer. Comme dans une vraie supérette : tu viens chercher du lait, tu repars avec un encensoir et des chips au wasabi.</p>
            <p>🎙️ <strong>Et toi, tu rentres quand dans la supérette ?</strong><br />
            Elle est ouverte. Les néons clignotent. Pas de musique d’ambiance. Juste des beats psychédéliques et des souvenirs mal rangés. Tu entres. Tu regardes. Et peut-être qu’en tombant sur un “nettoyant pour pensées trop longues”, tu te rends compte que ce n’est pas la supérette d’Aesop Rock. <br />
            C’est peut-être la tienne.</p></div>
              </p>
    
              <img className="size-200" src="/src/img/aesop-rock-pic.jpg" alt="" />
            </div>
          </section>

          <section className="sountractSection">
            <h2 className="text-8xl font-bold text-center font-karantina-bold">Soundtrack</h2>
            <iframe src="/src/img/aesop-rock-video.mp4" className="aspect-video w-full"></iframe>
          </section>

          <section className="artistVinyle m-10 pb-10">
            <h2 className="text-8xl font-bold m-5 p-5 font-karantina-bold text-center">Vinyle</h2>
            <CarouselStyled />
          <div className="flex justify-center my-10"><Button className="text-2xl px-10 py-6" onClick={() => navigate('/shop')}> Voir le rayon </Button></div>
          </section>

          <section className="tournee m-10 bg-[url(/src/img/backgroundTicket.jpeg)] bg-cover " id="tournee">
            <h2 className="text-8xl font-bold rotate-3 p-5 font-karantina-bold text-center">Tournée </h2>
            {/* <TourneeList /> */}
            <FrontEndTournee/>
             <div className="flex justify-center my-10"><Button className="rotate-3 text-2xl px-10 py-6"> Passer à la caisse </Button></div>
          </section>

          <section>
            <h2 className="text-8xl font-bold m-5 p-5 font-karantina-bold text-center" id="shop">Shop</h2>
          <div className="flex justify-center my-10"><Button className="text-2xl px-10 py-6" onClick={() => navigate('/shop')}> Passer à la caisse </Button></div>
          </section>

        <Footer/>
        
        </>
      )}
    </>
  );
};

export default IndexPage;
