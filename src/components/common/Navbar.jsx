// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, ChevronDown, Globe } from 'lucide-react';

// const countries = [
//   { name: 'United States', code: 'US' },
//   { name: 'United Kingdom', code: 'GB' },
//   { name: 'Canada', code: 'CA' },
//   { name: 'India', code: 'IN' },
//   { name: 'Australia', code: 'AU' }
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Handle clicking outside of dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <div className="text-xl font-bold text-blue-600">
//               ConsultGlobal
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex md:items-center md:space-x-8">
//             <a
//               onClick={() => scrollToSection('home')}
//               className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all cursor-pointer"
//             >
//               Home
//             </a>
//             <a
//               onClick={() => scrollToSection('services')}
//               className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all cursor-pointer"
//             >
//               Services
//             </a>
            
//             {/* Countries Dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center text-gray-600 hover:text-blue-600 transition-all"
//               >
//                 <Globe className="w-4 h-4 mr-1" />
//                 Countries
//                 <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
//               </button>

//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                   <div className="py-1">
//                     {countries.map((country) => (
//                       <a
//                         key={country.code}
//                         className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         href={`#${country.code.toLowerCase()}`}
//                       >
//                         <img
//                           src={`https://flagcdn.com/24x18/${country.code.toLowerCase()}.png`}
//                           alt={`${country.name} flag`}
//                           className="w-6 mr-2"
//                         />
//                         {country.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <a
//               onClick={() => scrollToSection('contact')}
//               className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all cursor-pointer"
//             >
//               Contact Us
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
//             >
//               {isOpen ? (
//                 <X className="block h-6 w-6" />
//               ) : (
//                 <Menu className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
//             <a
//               onClick={() => scrollToSection('home')}
//               className="block px-3 py-2 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md cursor-pointer"
//             >
//               Home
//             </a>
//             <a
//               onClick={() => scrollToSection('services')}
//               className="block px-3 py-2 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md cursor-pointer"
//             >
//               Services
//             </a>
            
//             {/* Mobile Countries Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center w-full px-3 py-2 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md"
//               >
//                 <Globe className="w-4 h-4 mr-1" />
//                 Countries
//                 <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
//               </button>
              
//               {isDropdownOpen && (
//                 <div className="mt-2 space-y-1">
//                   {countries.map((country) => (
//                     <a
//                       key={country.code}
//                       className="flex items-center px-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
//                       href={`#${country.code.toLowerCase()}`}
//                     >
//                       <img
//                         src={`https://flagcdn.com/24x18/${country.code.toLowerCase()}.png`}
//                         alt={`${country.name} flag`}
//                         className="w-6 mr-2"
//                       />
//                       {country.name}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <a
//               onClick={() => scrollToSection('contact')}
//               className="block px-3 py-2 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md cursor-pointer"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Search, ChevronRight } from 'lucide-react';

const countries = [
  { 
    name: 'United States', 
    code: 'US',
    nativeName: 'English (US)',
    speakersCount: '400M+ speakers',
    region: 'americas',
    popular: true
  },
  { 
    name: 'United Kingdom', 
    code: 'GB',
    nativeName: 'English (UK)',
    speakersCount: '300M+ speakers',
    region: 'europe',
    popular: true
  },
  { 
    name: 'Canada', 
    code: 'CA',
    nativeName: 'English/French',
    speakersCount: '40M+ speakers',
    region: 'americas',
    popular: false
  },
  { 
    name: 'India', 
    code: 'IN',
    nativeName: 'Hindi/English',
    speakersCount: '1B+ speakers',
    region: 'asia',
    popular: true
  },
  { 
    name: 'Australia', 
    code: 'AU',
    nativeName: 'English (AU)',
    speakersCount: '25M+ speakers',
    region: 'asia',
    popular: false
  }
];

const CountryCard = ({ country, onSelect }) => (
  <button
    onClick={() => onSelect(country)}
    className="group relative bg-white rounded-3xl p-6 hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-gray-100"
  >
    <div className="flex items-center space-x-4">
      <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
        <img
          src={`/api/placeholder/64/64`}
          alt={`${country.name} flag`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 text-left">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {country.name}
        </h3>
        <p className="text-sm text-gray-500">{country.nativeName}</p>
        <p className="text-xs text-gray-400 mt-1">{country.speakersCount}</p>
      </div>

      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
    </div>

    <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
  </button>
);

const SearchBar = ({ value, onChange }) => (
  <div className="relative mb-6">
    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    <input
      type="text"
      placeholder="Search countries and languages..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/50 border-2 border-transparent focus:border-blue-400 focus:bg-white transition-all duration-300 outline-none text-lg"
    />
  </div>
);

const CategoryTabs = ({ selected, onSelect }) => {
  const categories = [
    { id: 'all', label: 'All Countries' },
    { id: 'popular', label: 'Popular' },
    { id: 'europe', label: 'Europe' },
    { id: 'asia', label: 'Asia' },
    { id: 'americas', label: 'Americas' }
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto pb-2 -mx-4 px-4">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
            selected === id
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105'
              : 'bg-white/50 text-gray-600 hover:bg-white/80'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (isCountrySelectorOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCountrySelectorOpen]);

  const filteredCountries = countries.filter(country => {
    const matchesSearch = 
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.nativeName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'all' ||
      (selectedCategory === 'popular' && country.popular) ||
      country.region === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountrySelectorOpen(false);
    // Additional logic for country selection
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-xl font-bold text-blue-600">
                ConsultGlobal
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <button className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all">
                Home
              </button>
              <button className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all">
                Services
              </button>
              
              {/* Countries Trigger */}
              <button
                onClick={() => setIsCountrySelectorOpen(true)}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-all group"
              >
                <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span>
                  {selectedCountry ? selectedCountry.name : 'Select Country'}
                </span>
              </button>

              <button className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all">
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <button className="block w-full px-3 py-2 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md">
                Home
              </button>
              <button className="block w-full px-3 py-2 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md">
                Services
              </button>
              <button
                onClick={() => setIsCountrySelectorOpen(true)}
                className="flex items-center w-full px-3 py-2 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md"
              >
                <Globe className="w-5 h-5 mr-2" />
                <span>
                  {selectedCountry ? selectedCountry.name : 'Select Country'}
                </span>
              </button>
              <button className="block w-full px-3 py-2 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Country Selector Modal */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isCountrySelectorOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-md"
          onClick={() => setIsCountrySelectorOpen(false)}
        />

        {/* Content container */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-blue-50 to-white transform transition-all duration-500 ${
            isCountrySelectorOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 pt-6 pb-4 bg-gradient-to-b from-blue-50 to-blue-50/95 z-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Choose Your Location</h2>
                <button
                  onClick={() => setIsCountrySelectorOpen(false)}
                  className="p-2 rounded-full hover:bg-white/50 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <CategoryTabs selected={selectedCategory} onSelect={setSelectedCategory} />
            </div>

            {/* Countries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
              {filteredCountries.map((country) => (
                <CountryCard
                  key={country.code}
                  country={country}
                  onSelect={handleCountrySelect}
                />
              ))}
              
              {filteredCountries.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No countries found matching your search criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;