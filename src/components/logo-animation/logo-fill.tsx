import React from 'react';

const AnimatedAesopRock = () => {
  // Use direct path to your image
  const imageUrl = '/src/img/filled-animation-logo/logo-aesop-rock-removebg-preview.png';

  return (
    <div className="relative h-screen bg-[#C5E0DC] flex items-center justify-center">
      {/* Background version - showing the blue shadow effect */}
      <div className="absolute">
        {imageUrl && (
          <img 
            src={imageUrl}
            alt=""
            className="w-96 h-auto opacity-50"
          />
        )}
      </div>

      {/* Animated clipped version - black text that gets revealed */}
      <div className="relative z-10">
        <svg className="w-96 h-48" viewBox="0 0 400 200">
          <defs>
            <clipPath id="clip-logo">
              <path className="animate-slide">
                <animate 
                  id="morph-one" 
                  dur="3s" 
                  begin="0s" 
                  repeatCount="indefinite" 
                  attributeName="d" 
                  values="M400 0H0v120c15.5.6 16.2 7.7 33.2 7.7 17.8 0 17.8-7 35.5-7 17.8 0 17.8 8.1 35.5 8.1 17.8 0 17.8-10.1 35.5-10.1 17.8 0 17.8 9.5 35.5 9.5 17.8 0 17.8-8.9 35.5-8.9 17.8 0 17.8 7.9 35.5 7.9 17.8 0 17.8-6.5 35.5-6.5 17.8 0 17.8 8.2 35.5 8.2 17.8 0 17.8-9.1 35.5-9.1 17.1 0 17.7 7.9 33.5 8.5L400 0z;M400 0H0v140c15.5-.9 16.2-10.6 33.2-10.6 17.8 0 17.8 10.9 35.5 10.9 17.8 0 17.8-9.1 35.5-9.1 17.8 0 17.8 6.7 35.5 6.7 17.8 0 17.8-6.8 35.5-6.8 17.8 0 17.8 7.6 35.5 7.6 17.8 0 17.8-8.5 35.5-8.5 17.8 0 17.8 9.2 35.5 9.2 17.8 0 17.8-7.8 35.5-7.8 17.8 0 17.8 8.9 35.5 8.9 17.1 0 17.7-8.5 33.5-9.1L400 0z;M400 0H0v120c15.5.6 16.2 7.7 33.2 7.7 17.8 0 17.8-7 35.5-7 17.8 0 17.8 8.1 35.5 8.1 17.8 0 17.8-10.1 35.5-10.1 17.8 0 17.8 9.5 35.5 9.5 17.8 0 17.8-8.9 35.5-8.9 17.8 0 17.8 7.9 35.5 7.9 17.8 0 17.8-6.5 35.5-6.5 17.8 0 17.8 8.2 35.5 8.2 17.8 0 17.8-9.1 35.5-9.1 17.1 0 17.7 7.9 33.5 8.5L400 0z"
                />
              </path>
            </clipPath>
          </defs>
          <g clipPath="url(#clip-logo)">
            <foreignObject x="0" y="0" width="400" height="200">
              <div className="w-full h-full flex items-center justify-center">
                {imageUrl && (
                  <img 
                    src={imageUrl}
                    alt="AESOP ROCK black text"
                    className="w-96 h-auto"
                    style={{
                      filter: 'brightness(0) saturate(100%)'
                    }}
                  />
                )}
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>

      <style>{`
        @keyframes slide {
          from {
            transform: translateY(-100px);
          }
          45% {
            transform: translateY(0px);
          }
          55% {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-100px);
          }
        }
        
        .animate-slide {
          animation: slide 9s infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedAesopRock;