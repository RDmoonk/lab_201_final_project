
const AnimatedAesopRock = () => {
  const imageUrl = '/img/filled-animation-logo/logo-remade.png';

  return (
    <div className="relative h-screen bg-[url(/src/img/bg-logo-filled-anim.jpg)] bg-cover bg-center flex items-center justify-center">
      {/* Image en noir et blanc */}
      <img 
        src={imageUrl}
        alt="AESOP ROCK grayscale"
        className="w-96 h-auto filter grayscale z-0"
      />

      {/* Image couleur animée au-dessus */}
      <div className="absolute w-96 h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden">
        <img 
          src={imageUrl}
          alt="AESOP ROCK color overlay"
          className="w-full h-auto color-reveal"
        />
      </div>

      {/* Texte "Walk with me" fixe et visible */}
      <div className="absolute bottom-16 text-center z-20">
        <p className="text-white text-7xl font-karantina-bold drop-shadow-2xl font-stylin">
          Walk with me
        </p>
      </div>

      {/* Animation CSS pour l'image */}
      <style>{`
        .color-reveal {
          mask-image: linear-gradient(to right, black 0%, black 40%, transparent 60%);
          -webkit-mask-image: linear-gradient(to right, black 0%, black 40%, transparent 60%);
          mask-size: 200% 100%;
          -webkit-mask-size: 200% 100%;
          mask-position: -100% 0;
          -webkit-mask-position: -100% 0;
          animation: colorWipe 4s ease-in-out forwards;
        }

        @keyframes colorWipe {
          to {
            mask-position: 100% 0;
            -webkit-mask-position: 100% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedAesopRock;
