import React from 'react';

const FeaturedIn = () => {
  const logos = [
    {
      name: 'ABP News',
      placeholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/ABP_News_logo.svg/330px-ABP_News_logo.svg.png'
    },
    {
      name: 'Aaj Tak',
      placeholder: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Aaj_Tak_Logo.png'
    },
    {
      name: 'Times of India',
      placeholder: 'https://imgs.search.brave.com/L8p7e5QEvoak-G0Yw0ji5lYWI7s8cIyWDBsaRf5dRwU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vd2xw/cm9qZWN0Lm9yZy9v/dXItd29yay90aW1l/cy1vZi1pbmRpYS1s/b2dvLnBuZy9AQGlt/YWdlcy9pbWFnZS5w/bmc'
    },
    {
      name: 'Josh Talks',
      placeholder: 'https://imgs.search.brave.com/fiEleA7bRPZMelD3bkpiPwlOSGGfJoa-AXOIfGRhtXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Vla3BuZy5jb20v/cG5nL2RldGFpbC8z/NzAtMzcwNjA1OF9q/b3NoLXRhbGtzLWxv/Z28ucG5n'
    }
  ];

  const getSizeClasses = (size) => {
    switch(size) {
      case 'large':
        return 'w-64 h-32';
      case 'medium':
        return 'w-48 h-24';
      case 'small':
        return 'w-40 h-20';
      default:
        return 'w-48 h-24';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-16 mt-6 md:mt-14">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Featured In
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo) => (
          <div 
            key={logo.name} 
            className={`
              flex items-center justify-center 
              ${getSizeClasses(logo.size)}
              bg-white border border-blue-100 rounded-xl
              transition-all duration-300 
              hover:shadow-md hover:border-blue-200
            `}
          >
            <img 
              src={logo.placeholder} 
              alt={`${logo.name} Logo`} 
              className="max-h-full max-w-full object-contain p-4 opacity-70 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedIn;