import React, { useState, useEffect } from 'react';
import { Globe, GraduationCap, Users, BookOpen, ChevronRight, MapPin, X } from 'lucide-react';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const sections = ['overview', 'countries', 'process', 'testimonials'];

  const countries = [
    { name: 'USA', universities: ['Harvard Medical School', 'Johns Hopkins School of Medicine'] },
    { name: 'UK', universities: ['University of Oxford Medical Sciences Division', 'Imperial College London Faculty of Medicine'] },
    { name: 'Germany', universities: ['Heidelberg University Faculty of Medicine', 'Charité - Universitätsmedizin Berlin'] },
    { name: 'Australia', universities: ['University of Melbourne Medical School', 'University of Sydney Medical School'] },
  ];

  const processes = [
    { title: 'Consultation', description: 'Initial assessment and guidance' },
    { title: 'University Selection', description: 'Find your perfect match' },
    { title: 'Application', description: 'Streamlined application process' },
    { title: 'Visa Support', description: 'Navigate visa requirements' },
    { title: 'Pre-departure', description: 'Prepare for your journey' },
  ];

  const testimonials = [
    { name: 'Sarah J.', quote: 'The support I received was invaluable. Now Im studying at my dream university!', university: 'Harvard Medical School' },
    { name: 'Rahul P.', quote: 'From application to arrival, the guidance was exceptional. Highly recommended!', university: 'University of Oxford' },
    { name: 'Li Wei', quote: 'They made my international MBBS journey smooth and exciting. Thank you!', university: 'Heidelberg University' },
  ];

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) => {
        const currentIndex = sections.indexOf(prev);
        return sections[(currentIndex + 1) % sections.length];
      });
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 py-12 sm:py-16 md:py-24 ">
      <header className="py-4 sm:py-6 px-4 ">
        <nav className="container mx-auto lg:mt-2 mt-16">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-colors ${
                    activeSection === section
                      ? 'bg-blue-600 text-white'
                      : 'text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto py-8 sm:py-12 px-4">
        <div key={activeSection} className="bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 transition-all duration-300">
          {activeSection === 'overview' && (
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Your Gateway to MBBS Abroad
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8">
                Embark on a journey to become a global medical professional. We're here to guide you every step of the way.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {[
                  { icon: GraduationCap, title: 'Expert Guidance', description: 'Personalized counseling from experienced advisors' },
                  { icon: Globe, title: 'Global Network', description: 'Access to top medical universities worldwide' },
                  { icon: Users, title: 'Comprehensive Support', description: 'From application to arrival, weve got you covered' },
                ].map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-lg transition-transform hover:scale-105 duration-300">
                    <feature.icon className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'countries' && (
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Explore MBBS Destinations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {countries.map((country) => (
                  <div
                    key={country.name}
                    className="bg-gray-50 p-4 sm:p-6 rounded-lg cursor-pointer transition-transform hover:scale-105 duration-300"
                    onClick={() => openModal(country.name, country.universities.join(', '))}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{country.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{country.universities.length} Universities</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'process' && (
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Your MBBS Journey
              </h2>
              <div className="relative">
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
                {processes.map((step, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8">
                    <div className="w-full sm:w-1/2 text-center sm:text-right sm:pr-8 mb-2 sm:mb-0">
                      <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 my-2 sm:my-0">
                      {index + 1}
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-left sm:pl-8">
                      <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'testimonials' && (
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Success Stories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 sm:p-6 rounded-lg transition-transform hover:scale-105 duration-300"
                  >
                    <BookOpen className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4" />
                    <p className="text-sm sm:text-base text-gray-600 italic mb-3 sm:mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm sm:text-base text-blue-600">{testimonial.university}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {showModal && (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-4 sm:p-6 max-w-md w-full transform transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl sm:text-2xl font-bold">{modalContent.title}</h3>
              <button 
                onClick={() => setShowModal(false)} 
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <p className="text-sm sm:text-base text-gray-600">{modalContent.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;