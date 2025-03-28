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

  return (
    <div className="container mx-auto px-4 py-14 mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Featured In
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
        {logos.map((logo) => (
          <div 
            key={logo.name} 
            className="flex items-center justify-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300"
          >
            <img 
              src={logo.placeholder} 
              alt={`${logo.name} logo`} 
              className="max-h-16 max-w-full object-contain transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedIn;