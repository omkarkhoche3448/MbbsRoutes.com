import React from 'react';

const PremiumFlagBanner = () => {
  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'FR', name: 'France' },
    { code: 'DE', name: 'Germany' },
    { code: 'IT', name: 'Italy' },
    { code: 'ES', name: 'Spain' },
    { code: 'JP', name: 'Japan' },
    { code: 'KR', name: 'South Korea' },
    { code: 'BR', name: 'Brazil' },
    { code: 'CA', name: 'Canada' }
  ];

  const doubledCountries = [...countries, ...countries];

  const FlagGroup = () => (
    <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 animate-marquee pointer-events-none">
      {doubledCountries.map((country, index) => (
        <div
          key={`${country.code}-${index}`}
          className="flex flex-col items-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[140px] 
                    p-2 sm:p-3 rounded-xl backdrop-blur-sm 
                    opacity-70 hover:opacity-100 transition-all duration-300 ease-out
                    hover:shadow-lg group"
        >
          <div className="relative w-12 sm:w-16 md:w-20 lg:w-24">
            <img
              src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
              alt={`${country.name} flag`}
              className="w-full h-auto rounded-lg shadow-sm transition-transform duration-300
                       group-hover:scale-105"
            />
          </div>
          <span className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-gray-800 tracking-wide
                         truncate max-w-full">
            {country.name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex py-4 sm:py-6 md:py-8">
        <FlagGroup />
        <FlagGroup />
      </div>

      {/* Responsive gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-16 sm:w-24 md:w-32 
                    bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-16 sm:w-24 md:w-32 
                    bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

      <style jsx>{`
        .animate-marquee {
          animation: scroll 120s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 60s;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-marquee {
            animation-duration: 90s;
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumFlagBanner;