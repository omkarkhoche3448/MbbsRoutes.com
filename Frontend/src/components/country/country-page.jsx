import { HeroBanner } from "./hero-banner";
import { Breadcrumb } from "./breadcrumb";
import { TabNavigation } from "./tab-navigation";
import { CountryInfoSection } from "./country-info-section";
import { AboutCountrySection } from "./about-country-section";
import { CTABanner } from "./cta-banner";
import { EligibilitySection } from "./eligibility-section";
import { VisaProcessingSection } from "./visa-processing-section";
import {
  CityIcon,
  LanguageIcon,
  PopulationIcon,
  WeatherIcon,
  CurrencyIcon,
  UniversityIcon,
  PhoneIcon,
  ExchangeIcon,
} from "./icons";
import Button from "../common/Button";
import MBBSConsultancyFormModal from "../landingpage/MBBSConsultancyFormModal";
import { useState } from "react";
import Aeroplane from "../../assets/aeroplane.svg";
import AnnualExpensesSection from "./AnnualExpensesSection"

// Reusable DetailsSection component
const DetailsSection = ({ title, details }) => {
  if (!details || !Array.isArray(details)) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 md:px-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

// Recognition Section component
const RecognitionSection = ({ recognition }) => {
  if (!recognition || !recognition.details) return null;

  return (
    <div className="container mx-auto px-4 md:px-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {recognition.title}
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
        {recognition.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default function Country(props) {
  const {
    country, // Country name (e.g., "Georgia")
    heroImage, // Hero banner image URL
    featureImage, // Feature image URL
    countryData, // Object containing country details (capital, languages, etc.)
    aboutCountry, // Object containing about country details
    highlights, // Array of highlights
    eligibility, // Eligibility criteria object
    visaProcessingSteps, // Array of visa processing steps
    courseDuration, // Object containing course duration details
    mediumOfInstruction, // Object containing medium of instruction details
    recognition, // Recognition details
    universityTypes, // Types of universities
    universitiesByType, // Universities categorized by type
    annualExpenses, // Annual expenses information
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Breadcrumb items
  const breadcrumbItems = [
    { label: country, href: `/country/${country.toLowerCase()}`, isLast: true },
  ];

  // Tab items
  const tabItems = [
    {
      label: "About",
      href: `/country/${country.toLowerCase()}/`,
      isActive: true,
    },
    {
      label: "Universities",
      href: `/country/${country.toLowerCase()}/universities`,
    },
  ];

  // Generate info cards based on available data
  const getInfoCards = () => {
    const cards = [
      {
        title: "Capital",
        value: countryData.capital,
        icon: <CityIcon className="w-8 h-8 text-teal-600" />,
        bgColor: "bg-teal-50",
      },
      {
        title: "Languages",
        value: countryData.languages,
        icon: <LanguageIcon className="w-8 h-8 text-amber-600" />,
        bgColor: "bg-amber-50",
      },
      {
        title: "Population",
        value: countryData.population,
        icon: <PopulationIcon className="w-8 h-8 text-pink-600" />,
        bgColor: "bg-pink-50",
      },
      {
        title: "Weather",
        value: countryData.weather,
        icon: <WeatherIcon className="w-8 h-8 text-blue-600" />,
        bgColor: "bg-blue-50",
      },
      {
        title: "Currency",
        value: countryData.currency,
        icon: <CurrencyIcon className="w-8 h-8 text-green-600" />,
        bgColor: "bg-green-50",
        size: "large",
      },
      {
        title: "Universities",
        value: countryData.universities,
        icon: <UniversityIcon className="w-8 h-8 text-purple-600" />,
        bgColor: "bg-purple-50",
        size: "large",
      },
      {
        title: "Calling Code",
        value: countryData.callingCode,
        icon: <PhoneIcon className="w-8 h-8 text-indigo-600" />,
        bgColor: "bg-indigo-50",
        size: "large",
      },
      {
        title: "Exchange Rate",
        value: countryData.exchangeRate,
        icon: <ExchangeIcon className="w-8 h-8 text-rose-600" />,
        bgColor: "bg-rose-50",
        size: "large",
      },
    ];

    return cards;
  };

  console.log("visaProcessingSteps",visaProcessingSteps)

  return (
    <>
      <div className="min-h-screen bg-white w-full">
        {/* Hero Banner */}
        <HeroBanner
          title={`Study in ${country}`}
          backgroundImage={heroImage}
          buttonText="Get Started"
          setIsModalOpen={setIsModalOpen}
        />

        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Tab Navigation */}
          <TabNavigation tabs={tabItems} />

          {/* Country Info Section */}
          <CountryInfoSection
            title={`Life in ${country}`}
            subtitle={`Know all about your favourite study destination`}
            featureImage={featureImage}
            infoCards={getInfoCards()}
          />

          {/* About Country Section */}
          <AboutCountrySection
            country={country}
            introduction={aboutCountry.description}
            sections={highlights}
          />

          {/* CTA Banner */}
          <CTABanner
            title={`Begin your journey to Study Abroad with MBBSRoutes`}
            buttonText="Get Started"
            buttonLink="/"
            image={Aeroplane}
            setIsModalOpen={setIsModalOpen}
          />

          {/* Eligibility Section */}
          <EligibilitySection {...eligibility} />

          {/* Annual Expenses Section - Conditionally Rendered */}
          {annualExpenses && (
            <AnnualExpensesSection annualExpenses={annualExpenses} />
          )}

          {/* Course Duration Section */}
          {courseDuration && (
            <DetailsSection
              title={courseDuration.title}
              details={courseDuration.details}
            />
          )}

          {/* Medium of Instruction Section */}
          {mediumOfInstruction && (
            <DetailsSection
              title={mediumOfInstruction.title}
              details={mediumOfInstruction.details}
            />
          )}

          {/* Recognition Section */}
          {recognition && <RecognitionSection recognition={recognition} />}

          {/* Visa Processing Section */}
          {visaProcessingSteps?.length > 0 && (
            <VisaProcessingSection
              title={`${country} Student Visa Processing Time`}
              description={`The processing time for a ${country} student visa can vary depending on several factors, including the time of year and the volume of applications.`}
              steps={visaProcessingSteps}
            />
          )}

          <div className="container mx-auto px-4 md:px-6 mb-8">
            <div className="bg-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Ready to Begin Your Medical Journey?
              </h2>
              <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Take the first step towards your medical career. Our expert
                counselors are here to guide you through every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-center w-full">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Schedule Free Consultation
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open("https://pages.razorpay.com/pl_QC8n1HsnBKPWmH/view", "_blank")}
                >
                  Book Your Seat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MBBSConsultancyFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
