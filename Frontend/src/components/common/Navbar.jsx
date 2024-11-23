import React, { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MBBSModal from "./MBBSModal";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";
import { useAuth } from "../../context/AuthContext";

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
    { id: "all", label: "All Countries", icon: "🌎" },
    { id: "popular", label: "Popular", icon: "⭐" },
    { id: "europe", label: "Europe", icon: "🇪🇺" },
    { id: "asia", label: "Asia", icon: "🌏" },
    { id: "americas", label: "Americas", icon: "🌎" },
  ];

  return (
    <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide py-2">
      {categories.map(({ id, label, icon }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`px-4 py-2  rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
            selected === id
              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105 ring-2 ring-blue-500 ring-offset-2"
              : "bg-white/50 text-gray-600 hover:bg-white/80 hover:scale-102 active:scale-95"
          }`}
        >
          <span className="text-base">{icon}</span>
          {label}
        </button>
      ))}
    </div>
  );
};

const NavItem = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink
      to={to}
      className={`relative px-3 py-2 text-gray-600 transition-all duration-300 hover:text-blue-600 group ${
        isActive ? "text-blue-600" : ""
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0"
        } group-hover:scale-x-100`}
      />
    </NavLink>
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
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isCountrySelectorOpen || isMBBSModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCountrySelectorOpen, isMBBSModalOpen]);

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

  const handleMobileNavClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-white shadow-md"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-8xl mx-auto sm:px-6 px-4">
          <div className="flex items-center justify-between h-20">
            <NavLink
              to="/"
              className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
              aria-label="ConsultGlobal Home"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wider flex items-center">
                MBBSRo
                <span className="inline-flex items-center mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-stethoscope"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#2563EB" />{" "}
                        <stop offset="100%" stopColor="#8B5CF6" />{" "}
                      </linearGradient>
                    </defs>
                    <path d="M11 2v2" />
                    <path d="M5 2v2" />
                    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                    <path d="M8 15a6 6 0 0 0 12 0v-3" />
                    <circle cx="20" cy="10" r="2" />
                  </svg>
                </span>
                tes
              </div>
            </NavLink>

            <div className="hidden md:flex md:items-center md:space-x-8">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/mbbs-in-abroad">MBBS In Abroad</NavItem>
              <NavItem to="/mbbs-in-abroad/college-recomendation">
                College Recommendation
              </NavItem>
              <NavItem to="/about-us">About</NavItem>

              <button
                onClick={() => setIsCountrySelectorOpen(true)}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 group"
                aria-expanded={isCountrySelectorOpen}
                aria-haspopup="true"
              >
                <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span>
                  {selectedCountry ? selectedCountry.name : "Select Country"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    isCountrySelectorOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <button
                onClick={() => setIsMBBSModalOpen(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Us
              </button>
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    Welcome, {user?.fullName}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded-2xl  hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => navigate("/signin")}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full  hover:bg-blue-700 "
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full  hover:bg-blue-700"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl transform transition-all duration-300 ease-in-out ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-2">
            <NavLink
              to="/"
              onClick={handleMobileNavClick}
              className="block w-full px-4 py-3 text-base text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/mbbs-in-abroad"
              onClick={() => setIsOpen(false)}
              className="block w-full px-4 py-3 text-base text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              MBBS In Abroad
            </NavLink>

            <NavLink
              to="/mbbs-in-abroad/college-recomendation"
              onClick={() => setIsOpen(false)}
              className="block w-full px-4 py-3 text-base text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              College Recommendation
            </NavLink>

            <NavLink
              to="/about-us"
              onClick={() => setIsOpen(false)}
              className="block w-full px-4 py-3 text-base text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              About
            </NavLink>

            <button
              onClick={() => {
                setIsCountrySelectorOpen(true);
                setIsOpen(false);
              }}
              className="flex items-center w-full px-4 py-3 text-base text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              <Globe className="w-5 h-5 mr-2" />
              <span>
                {selectedCountry ? selectedCountry.name : "Select Country"}
              </span>
            </button>

            <div className=" flex flex-row space-x-2 items-center">
              <button
                onClick={() => setIsMBBSModalOpen(true)}
                className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Us
              </button>

              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-600">
                    {user?.fullName}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => navigate("/signin")}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-all duration-300"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Country selector modal */}
      {isCountrySelectorOpen && (
        <div className="fixed inset-0 z-50 transition-all duration-500">
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
                    className="p-2 rounded-full hover:bg-white/50 transition-all duration-300 hover:rotate-90"
                    aria-label="Close country selector"
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
