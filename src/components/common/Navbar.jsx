import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const countries = [
  { name: 'United States', code: 'US' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'Canada', code: 'CA' },
  { name: 'India', code: 'IN' },
  { name: 'Australia', code: 'AU' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle clicking outside of dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
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
            <a
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all cursor-pointer"
            >
              Services
            </a>
            
            {/* Countries Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-all"
              >
                <Globe className="w-4 h-4 mr-1" />
                Countries
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {countries.map((country) => (
                      <a
                        key={country.code}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        href={`#${country.code.toLowerCase()}`}
                      >
                        <img
                          src={`https://flagcdn.com/24x18/${country.code.toLowerCase()}.png`}
                          alt={`${country.name} flag`}
                          className="w-6 mr-2"
                        />
                        {country.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all cursor-pointer"
            >
              Contact Us
            </a>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              Services
            </a>
            
            {/* Mobile Countries Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center w-full px-3 py-2 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md"
              >
                <Globe className="w-4 h-4 mr-1" />
                Countries
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="mt-2 space-y-1">
                  {countries.map((country) => (
                    <a
                      key={country.code}
                      className="flex items-center px-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      href={`#${country.code.toLowerCase()}`}
                    >
                      <img
                        src={`https://flagcdn.com/24x18/${country.code.toLowerCase()}.png`}
                        alt={`${country.name} flag`}
                        className="w-6 mr-2"
                      />
                      {country.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;