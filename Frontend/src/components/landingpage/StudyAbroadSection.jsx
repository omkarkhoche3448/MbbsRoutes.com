import { useState } from "react";
import {countries} from "../../data/abroadCountries"
// SVG for the chevron right icon
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


// Featured Country Card Component
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

// Country Thumbnail Component
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

// Main Component
export default function StudyAbroadSection() {
  const [activeCountry, setActiveCountry] = useState(countries[0]);
  const [countryList, setCountryList] = useState(countries);

  const handleCountryClick = (country) => {
    const updatedCountries = countryList.map((c) => ({
      ...c,
      active: c.id === country.id,
    }));

    setCountryList(updatedCountries);
    setActiveCountry(country);
  };

  return (
    <div className="py-6 md:py-[60px] relative overflow-x-hidden mb-10 md:mb-4">
      {/* Header Section */}
      <div className="px-4 max-w-[800px] mb-4 text-center mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Top Countries to{" "}
          <span className="text-blue-600"> Study&nbsp;Abroad</span>
        </h1>

        <h3 className="text-gray-600 mb-4 sm:mb-6 md:text-lg font-medium">
          Pack your bags to get top-notch education beyond borders in the USA,
          UK, Canada, Australia, Ireland, New Zealand, and more!
        </h3>
      </div>

      {/* Featured Country Card */}
      <div className="text-center mb-4 md:mb-6 mx-4">
        <FeaturedCountryCard country={activeCountry} />
      </div>

      {/* Country List */}
      <div className="relative flex gap-2 md:gap-6 min-[1080px]:justify-center ml-4 min-[1080px]:ml-0 overflow-x-auto scrollbar-hide justify-start md:justify-center">
        {countryList.map((country, index) => (
          <CountryThumbnail
            key={country.id}
            country={country}
            onClick={() => handleCountryClick(country)}
            className={index === countryList.length - 1 ? "mr-4" : ""}
          />
        ))}
      </div>
    </div>
  );
}
