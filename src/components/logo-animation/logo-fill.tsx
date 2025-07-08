import React from 'react';

const AnimatedAesopRock = () => {
  const imageUrl = '/src/img/filled-animation-logo/logo-aesop-rock-removebg-preview.png';

  return (
    <div className="relative h-screen bg-[url(/src/img/bg-logo-filled-anim.jpg)] flex items-center justify-center">
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

      {/* Animation CSS */}
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
