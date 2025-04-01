import { useState } from "react";
import { HeroBanner } from "./hero-banner";
import { Breadcrumb } from "./breadcrumb";
import { TabNavigation } from "./tab-navigation";
import { CountryInfoSection } from "./country-info-section";
import { AboutCountrySection } from "./about-country-section";
import { CTABanner } from "./cta-banner";
import { EligibilitySection } from "./eligibility-section";
import { VisaProcessingSection } from "./visa-processing-section";
import AnnualExpensesSection from "./AnnualExpensesSection";
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
import { CalendarClock, Award, BookOpen } from "lucide-react";
import MBBSConsultancyFormModal from "../landingpage/MBBSConsultancyFormModal";
import Aeroplane  from "../../assets/aeroplane.svg" 
import FAQSection from "../common/FAQSection";
// Reusable DetailsSection component
const DetailsSection = ({ title, details }) => {
  if (!details || !Array.isArray(details)) {
    return null;
  }

  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
          <ul className="space-y-4 text-gray-700">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Recognition Section component
const RecognitionSection = ({ recognition }) => {
  if (!recognition || !recognition.details) return null;

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
              Accreditation
            </span>
            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              {recognition.title}
            </h2>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <ul className="space-y-4 text-gray-700">
              {recognition.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 flex-shrink-0 mr-3">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Country(props) {
  const {
    country,
    heroImage,
    featureImage,
    countryData,
    aboutCountry,
    highlights,
    eligibility,
    visaProcessingSteps,
    courseDuration,
    mediumOfInstruction,
    recognition,
    annualExpenses,
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
    // {
    //   label: "Universities",
    //   href: `/country/${country.toLowerCase()}/universities`,
    // },
    // {
    //   label: "FAQ",
    //   href: `/country/${country.toLowerCase()}/faq`,
    // },
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
      },
      {
        title: "Universities",
        value: countryData.universities,
        icon: <UniversityIcon className="w-8 h-8 text-purple-600" />,
        bgColor: "bg-purple-50",
      },
      {
        title: "Calling Code",
        value: countryData.callingCode,
        icon: <PhoneIcon className="w-8 h-8 text-indigo-600" />,
        bgColor: "bg-indigo-50",
      },
      {
        title: "Exchange Rate",
        value: countryData.exchangeRate,
        icon: <ExchangeIcon className="w-8 h-8 text-rose-600" />,
        bgColor: "bg-rose-50",
      },
    ];

    return cards;
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Banner */}
        <HeroBanner
          title={`Study MBBS in ${country}`}
          backgroundImage={heroImage}
          setIsModalOpen={setIsModalOpen}
        />

        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Tab Navigation */}
        <TabNavigation tabs={tabItems} />

        {/* Main Content Container */}
        <main>
          {/* Country Info Section */}
          <CountryInfoSection
            title={`Life in ${country}`}
            subtitle={`Everything you need to know about your study destination`}
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
            title={`Begin your journey to study MBBS in ${country} with expert guidance`}
            buttonText="Get Free Consultation"
            image={Aeroplane}
            setIsModalOpen={setIsModalOpen}
          />

          {/* Eligibility Section */}
          <EligibilitySection {...eligibility} country={country} />

          {/* Annual Expenses Section */}
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
        {/* Visa Processing Section */}
        {visaProcessingSteps?.length > 0 && (
            <VisaProcessingSection
              title={`${country} Student Visa Processing`}
              description={`Follow these steps to obtain your student visa for studying in ${country}. The typical processing time varies depending on application volume and time of year.`}
              steps={visaProcessingSteps}
            />
          )}

          {/* Final CTA Section - More engaging with testimonials */}
          <div className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Medical Journey?</h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Take the first step towards your global medical career. Our expert counselors are ready to guide you through every step.
                </p>
              </div>
              
              {/* Testimonials Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Testimonial 1 */}
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold text-xl">
                      R
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Rahul Sharma</h4>
                      <p className="text-sm text-blue-200">Medical Student, Delhi</p>
                    </div>
                  </div>
                  <p className="text-blue-100 italic">
                    "The guidance I received made my application process smooth. Now I'm studying MBBS at my dream university!"
                  </p>
                </div>
                
                {/* Testimonial 2 */}
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold text-xl">
                      A
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Anisha Patel</h4>
                      <p className="text-sm text-blue-200">Medical Student, Mumbai</p>
                    </div>
                  </div>
                  <p className="text-blue-100 italic">
                    "From documentation to visa application, the team supported me through every challenge. Highly recommended!"
                  </p>
                </div>
                
                {/* Testimonial 3 */}
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold text-xl">
                      K
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Karthik Reddy</h4>
                      <p className="text-sm text-blue-200">Medical Student, Hyderabad</p>
                    </div>
                  </div>
                  <p className="text-blue-100 italic">
                    "Their admission counseling and NEET guidance helped me secure my spot in a top medical university abroad."
                  </p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto"
                >
                  Schedule Free Consultation
                </button>
                <button
                  onClick={() => window.open("https://pages.razorpay.com/pl_QC8n1HsnBKPWmH/view", "_blank")}
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg text-lg border-2 border-white/30 w-full sm:w-auto"
                >
                  Book Your Seat Now
                </button>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium">
                  Common Questions
                </span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions about studying MBBS in {country}.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                {/* FAQ Item 1 */}
                <div className="mb-6">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-gray-50 p-4 rounded-lg">
                      <span className="text-lg font-semibold">Is MBBS in {country} recognized in India?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-700 mt-3 group-open:animate-fadeIn p-4">
                      Yes, medical degrees from recognized universities in {country} are accepted by the National Medical Commission (NMC) in India. Graduates need to qualify for the Foreign Medical Graduate Examination (FMGE) to practice medicine in India.
                    </p>
                  </details>
                </div>
                
                {/* FAQ Item 2 */}
                <div className="mb-6">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-gray-50 p-4 rounded-lg">
                      <span className="text-lg font-semibold">How much does it cost to study MBBS in {country}?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-700 mt-3 group-open:animate-fadeIn p-4">
                      The total cost varies by university but is generally affordable compared to private medical colleges in India. Annual tuition fees range from $3,000 to $7,000, with living expenses of $2,000 to $4,000 per year depending on lifestyle and location.
                    </p>
                  </details>
                </div>
                
                {/* FAQ Item 3 */}
                <div className="mb-6">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-gray-50 p-4 rounded-lg">
                      <span className="text-lg font-semibold">Is NEET qualification required for admission?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-700 mt-3 group-open:animate-fadeIn p-4">
                      Yes, as per the guidelines of the National Medical Commission (NMC), Indian students must qualify in the NEET exam to study MBBS abroad. This requirement ensures eligibility for the FMGE exam upon returning to India.
                    </p>
                  </details>
                </div>
                
                {/* FAQ Item 4 */}
                <div className="mb-6">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-gray-50 p-4 rounded-lg">
                      <span className="text-lg font-semibold">What is the medium of instruction in {country} medical universities?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-700 mt-3 group-open:animate-fadeIn p-4">
                      Most international medical programs in {country} are taught entirely in English. Students don't need to learn the local language for academic purposes, though basic knowledge can help with daily life.
                    </p>
                  </details>
                </div>
                
                {/* FAQ Item 5 */}
                <div className="mb-6">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-gray-50 p-4 rounded-lg">
                      <span className="text-lg font-semibold">How long is the MBBS program in {country}?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-700 mt-3 group-open:animate-fadeIn p-4">
                      The MBBS program in {country} typically lasts 6 years, including 5 years of academic study and 1 year of clinical internship. The curriculum is designed to meet international medical education standards.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </main>
        
      </div>
      
      {/* Consultation Modal */}
      <MBBSConsultancyFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      {/* Quick Action Float Button */}
      <div className="fixed bottom-20 md:bottom-24 right-4 md:right-8 z-50">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          aria-label="Get assistance"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </>
  );
}

// Add this CSS to your global stylesheet for animations
/* 
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

details > summary {
  list-style: none;
}

details > summary::-webkit-details-marker {
  display: none;
}
*/