import { useEffect, useState } from "react";
import { countries } from "../../data/abroadCountries";
import StudyAbroadJourney from "./StudyAbroadJourney";
import Button from "../common/Button";
import City from "../../assets/City.svg";
import { ArrowRight } from "lucide-react";
import MBBSConsultancyFormModal from "./MBBSConsultancyFormModal";

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="w-3.5 h-3.5 ml-1 stroke-white stroke-2"
  >
    <path
      fillRule="evenodd"
      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
      clipRule="evenodd"
    />
  </svg>
);

const FeaturedCountryCard = ({ country }) => {
  return (
    <div
      className="max-w-[780px] mx-auto flex flex-col justify-center items-center p-4 backdrop-blur-[13.12px] rounded-[20px] border-[0.656px] border-solid border-[rgba(255,255,255,0.10)]"
      style={{
        background:
          "radial-gradient(233.44% 138.3% at 1.32% 3.1%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
      }}
    >
      <div
        className="relative aspect-[2/1] bg-no-repeat bg-cover flex justify-center w-full rounded-[12px] animate-fadeIn"
        style={{ backgroundImage: `url(${country.image})` }}
      >
        <div className="absolute bg-gradient-to-b from-black h-[30%] md:h-[23%] z-[1] w-full rounded-t-[12px]">
          <h5 className="text-sm md:text-xl font-bold mb-1 line-clamp-1 mt-2 md:mt-4 text-gray-100">
            {country.name}
          </h5>
        </div>
        <a
          className="absolute bottom-2 md:bottom-3 bg-primary transition-all duration-300 hover:bg-blue-700 inline-flex items-center justify-center rounded-[32px] cursor-pointer text-sm font-semibold text-white py-1.5 md:py-2.5 pr-1 md:pr-2.5 pl-3 md:pl-5"
          href={`/country/${country.name.toLowerCase()}`}
          rel="noopener noreferrer"
        >
          Explore
          <ChevronRightIcon />
        </a>
      </div>
    </div>
  );
};

const CountryThumbnail = ({ country, onClick }) => {
  return (
    <div
      className="text-center w-[100px] cursor-pointer group shrink-0"
      onClick={onClick}
    >
      <div
        className={`box-border h-[100px] rounded-xl overflow-hidden border-2 transition ease-in-out duration-150 ${
          country.active ? "border-white" : "border-transparent"
        }`}
      >
        <div
          className="relative aspect-square bg-no-repeat bg-cover transition ease-in-out duration-500 group-hover:scale-120 delay-75"
          style={{ backgroundImage: `url(${country.image})` }}
        >
          {!country.active && (
            <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-50 transition ease-in-out duration-500 group-hover:scale-120 delay-75"></div>
          )}
        </div>
      </div>
      <p
        className={`mt-2 text-sm md:text-base font-bold ${
          country.active ? "text-blue-600" : "text-gray-600"
        }`}
      >
        {country.name}
      </p>
    </div>
  );
};

export default function StudyAbroadSection() {
  const [countryList, setCountryList] = useState(
    countries.map((c, index) => ({ ...c, active: index === 0 }))
  );
  const [activeCountry, setActiveCountry] = useState(countryList[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCountryClick = (country) => {
    const updatedCountries = countryList.map((c) => ({
      ...c,
      active: c.id === country.id,
    }));
    setCountryList(updatedCountries);
    setActiveCountry(country);
  };

  useEffect(() => {
    setActiveCountry(countryList.find((c) => c.active) || countries[0]);
  }, [countryList]);

  return (
    <div className="py-6 md:py-[60px] relative overflow-x-hidden mb-10 md:mb-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-4 ">
        <div className="text-center mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get started on your journey to{" "}
            <span className="text-blue-600"> Study Abroad!</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            Your experience with us goes beyond academics—it’s a journey of
            personal growth, empowerment, and endless opportunities!
          </p>
          <StudyAbroadJourney />
          <Button
            size="lg"
            className="mx-auto"
            onClick={() => setIsModalOpen(true)}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <img
            src={City}
            alt="City Illustration"
            className="mx-auto mb-12 sm:mb-16"
          />
        </div>
      </div>
      <div className="px-4 max-w-[800px] mb-4 text-center mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Top Countries to <span className="text-blue-600">Study Abroad</span>
        </h1>
        <h3 className="text-gray-600 mb-4 sm:mb-6 md:text-lg font-medium">
          Pack your bags to get top-notch education beyond borders in Russia,
          Nepal, Serbia, Georgia, Kazakhstan, Kyrgyzstan, Uzbekistan,
          Tajikistan, Bangladesh, India, and more!
        </h3>
      </div>

      {/* Featured Country Card */}
      <div className="text-center mb-4 md:mb-6 mx-4">
        <FeaturedCountryCard country={activeCountry} />
      </div>
      <div className="relative flex gap-2 md:gap-6 overflow-x-auto scrollbar-hide justify-start md:justify-center">
        {countryList.map((country) => (
          <CountryThumbnail
            key={country.id}
            country={country}
            onClick={() => handleCountryClick(country)}
          />
        ))}
      </div>
      <MBBSConsultancyFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
