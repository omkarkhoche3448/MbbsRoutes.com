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
    <div className="flex gap-12 animate-scroll">
      {doubledCountries.map((country, index) => (
        <div
          key={`${country.code}-${index}`}
          className="flex flex-col items-center min-w-[140px]  rounded-xl backdrop-blur-sm 
                     opacity-70 hover:opacity-100 transition-all duration-300 ease-out
                      hover:shadow-lg group"
        >
          <div className="relative">
            <img
              src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
              alt={`${country.name} flag`}
              className="w-24 h-auto rounded-lg shadow-sm transition-transform duration-300
                       group-hover:scale-105"
            />
          </div>
          <span className="mt-3 text-sm font-medium text-gray-800 tracking-wide">
            {country.name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex py-8">
        <FlagGroup />
        <FlagGroup />
      </div>

      {/* Refined gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-32 
                    bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-32 
                    bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 120s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PremiumFlagBanner;