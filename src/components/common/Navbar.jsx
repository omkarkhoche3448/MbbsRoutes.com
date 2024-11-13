import React, { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import MBBSModal from "./MBBSModal";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";

const countries = [
  {
    name: "United States",
    code: "US",
    nativeName: "English (US)",
    speakersCount: "400M+ speakers",
    region: "americas",
    popular: true,
  },
  {
    name: "United Kingdom",
    code: "GB",
    nativeName: "English (UK)",
    speakersCount: "300M+ speakers",
    region: "europe",
    popular: true,
  },
  {
    name: "India",
    code: "IN",
    nativeName: "Hindi/English",
    speakersCount: "1B+ speakers",
    region: "asia",
    popular: true,
  },
  {
    name: "Canada",
    code: "CA",
    nativeName: "English/French",
    speakersCount: "40M+ speakers",
    region: "americas",
    popular: false,
  },
  {
    name: "Australia",
    code: "AU",
    nativeName: "English (AU)",
    speakersCount: "25M+ speakers",
    region: "asia",
    popular: false,
  },
];

const CategoryTabs = ({ selected, onSelect }) => {
  const categories = [
    { id: "all", label: "All Countries" },
    { id: "popular", label: "Popular" },
    { id: "europe", label: "Europe" },
    { id: "asia", label: "Asia" },
    { id: "americas", label: "Americas" },
  ];

  return (
    <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
            selected === id
              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105"
              : "bg-white/50 text-gray-600 hover:bg-white/80"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);
  const [isMBBSModalOpen, setIsMBBSModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (isCountrySelectorOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCountrySelectorOpen]);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.nativeName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "popular" && country.popular) ||
      country.region === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountrySelectorOpen(false);
    navigate(`/consultancy/${country.name.toLowerCase()}/mbbs`);
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <NavLink to="/" className="flex-shrink-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ConsultGlobal
              </div>
            </NavLink>

            <div className="hidden md:flex md:items-center md:space-x-8">
              <NavLink
                to="/"
                className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all"
              >
                Home
              </NavLink>
              <NavLink
                to="/mbbs-in-abroad"
                className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all"
              >
                MBBS In Abroad
              </NavLink>
              <NavLink
                to="/about-us"
                className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all"
              >
                About
              </NavLink>
              <button
                onClick={() => setIsCountrySelectorOpen(true)}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-all group"
              >
                <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span>{selectedCountry ? selectedCountry.name : "Select Country"}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <button
                onClick={() => setIsMBBSModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </button>
            </div>

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

        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg rounded-b-2xl overflow-hidden transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className="block w-full px-4 py-3 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                Home
              </NavLink>
              <NavLink
                to="/mbbs-in-abroad"
                className="block w-full px-4 py-3 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                MBBS In Abroad
              </NavLink>
              <NavLink
                to="/about-us"
                className="block w-full px-4 py-3 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                About
              </NavLink>
              <button
                onClick={() => {
                  setIsCountrySelectorOpen(true);
                  setIsOpen(false);
                }}
                className="flex items-center w-full px-4 py-3 text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Globe className="w-5 h-5 mr-2" />
                <span>{selectedCountry ? selectedCountry.name : "Select Country"}</span>
              </button>
              <button
                onClick={() => {
                  setIsMBBSModalOpen(true);
                  setIsOpen(false);
                }}
                className="block w-full px-4 py-3 text-base text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {isCountrySelectorOpen && (
        <div className="fixed inset-0 z-50 transition-all duration-500 opacity-100 pointer-events-auto">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            onClick={() => setIsCountrySelectorOpen(false)}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white transform transition-all duration-500 translate-y-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full overflow-y-auto">
              <div className="sticky top-0 pt-6 pb-4 bg-gradient-to-b from-blue-50 to-blue-50/95 z-10">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Choose Your Location
                  </h2>
                  <button
                    onClick={() => setIsCountrySelectorOpen(false)}
                    className="p-2 rounded-full hover:bg-white/50 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                <CategoryTabs
                  selected={selectedCategory}
                  onSelect={setSelectedCategory}
                />
              </div>

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
      )}

      <MBBSModal
        isOpen={isMBBSModalOpen}
        onClose={() => setIsMBBSModalOpen(false)}
      />
    </>
  );
};

export default Navbar;