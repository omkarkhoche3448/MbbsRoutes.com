import { AcademicCapIcon, BeakerIcon, GlobeIcon, BookOpenIcon, MountainIcon } from "./icons";
import FlyAbroad from "../../assets/FlyAbroad.svg";

export const AboutCountrySection = ({ country, introduction, sections }) => {

  const getIconForSection = (title) => {
    const iconClass = "w-6 h-6";

    if (title.includes("Academic") || title.includes("Education")) {
      return <AcademicCapIcon className={iconClass} />;
    } else if (title.includes("Research") || title.includes("Innovation")) {
      return <BeakerIcon className={iconClass} />;
    } else if (title.includes("Cultural") || title.includes("Diversity")) {
      return <GlobeIcon className={iconClass} />;
    } else if (title.includes("Learning")) {
      return <BookOpenIcon className={iconClass} />;
    } else if (title.includes("Natural") || title.includes("Outdoor")) {
      return <MountainIcon className={iconClass} />;
    } else {
      return <GlobeIcon className={iconClass} />;
    }
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About {country}</h2>
        <p className="text-gray-700 mb-8  text-sm">{introduction}</p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 md:gap-8">
          {/* Left Column (80% width on large screens) */}
          <div className="lg:col-span-3">
            {sections?.map((section, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-center mb-3">
                  <div className="mr-3 text-blue-600">{getIconForSection(section.title)}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                </div>
                <p className="text-gray-700  text-sm">{section.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column (20% width on large screens) */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <img
              src={FlyAbroad}
              alt="FlyAbroad"
              className="w-full max-w-[300px] h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};