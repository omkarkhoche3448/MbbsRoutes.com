import React from 'react';
import Siya from '../../assets/Siya.jpg';
import Swasti from '../../assets/Swasti.jpg';
import Jagrati from '../../assets/Jagrati.jpg';
import Vandana from '../../assets/Vandana.jpg';

function CountryrepresentativeSection() {
  const representatives = [
    {
      id: 1,
      name: "Swasti Gaur",
      country: "Russia",
      instaHandle: "@ru_swasti",
      image: Swasti
    },
    {
      id: 2,
      name: "Siya Rajput",
      country: "Mauritius",
      instaHandle: "@drdoodle__",
      image: Siya
    },
    {
      id: 3,
      name: "Jagrati Pamnani ",
      country: "Kazakhstan",
      instaHandle: "@jagratiiiipamnani",
      image: Jagrati
    },
    {
      id: 4,
      name: "Vandana",
      country: "Uzbekistan",
      instaHandle: "@vandscreates",
      image: Vandana
    },
  ];

  return (
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Country Representatives</h2>
          <div className="w-20 h-1 bg-blue-600 rounded"></div>
          <p className="max-w-2xl text-gray-600 mt-4">
            Meet our dedicated representatives from around the world who are passionate about connecting medical students globally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {representatives.map((rep) => (
            <div
              key={rep.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300  hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={rep.image}
                  alt={rep.name}
                  loading='lazy'
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x400?text=Representative";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800">{rep.name}</h3>
                  <p className="text-blue-600 font-medium">{rep.country}</p>
                </div>
                <a
                  href={`https://instagram.com/${rep.instaHandle.substring(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"                >
                  <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountryrepresentativeSection;