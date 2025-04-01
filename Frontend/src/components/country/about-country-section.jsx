import { 
  AcademicCapIcon, 
  BeakerIcon, 
  GlobeIcon, 
  BookOpenIcon, 
  MountainIcon 
} from "./icons";
import FlyAbroad from "../../assets/FlyAbroad.svg";

export const AboutCountrySection = ({ country, introduction, sections }) => {
  const getIconForSection = (title) => {
    const iconMapping = {
      "Academic": AcademicCapIcon,
      "Education": AcademicCapIcon,
      "Research": BeakerIcon,
      "Innovation": BeakerIcon,
      "Cultural": GlobeIcon,
      "Diversity": GlobeIcon,
      "Learning": BookOpenIcon,
      "Natural": MountainIcon,
      "Outdoor": MountainIcon,
    };
    
    const foundKey = Object.keys(iconMapping).find(key => title.includes(key));
    // Return the actual component, not a string
    return foundKey ? iconMapping[foundKey] : GlobeIcon;
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About {country}</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-4xl">{introduction}</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content sections */}
          <div className="lg:col-span-2 space-y-10">
            {sections?.map((section, index) => {
              // Get the icon component for this section
              const IconComponent = getIconForSection(section.title);
              
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                  </div>
                  <p className="text-gray-700">{section.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="p-6 rounded-xl shadow-sm">
                <img
                  src={FlyAbroad}
                  alt="Study Abroad"
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Why Study in {country}?</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Quality Medical Education</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Internationally Recognized Degrees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Affordable Tuition Fees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Safe and Welcoming Environment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};