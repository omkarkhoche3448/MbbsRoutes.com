import { InfoCard } from "./info-card"

export const CountryInfoSection = ({ title, subtitle, featureImage, infoCards }) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Featured Image */}
          <div className="lg:col-span-1">
            <div className="h-full rounded-xl overflow-hidden shadow-md">
              <img 
                src={featureImage} 
                alt={title} 
                className="w-full h-full object-cover transition-transform hover:scale-105" 
              />
            </div>
          </div>
          
          {/* Info Cards Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infoCards.map((card, index) => (
              <InfoCard
                key={index}
                title={card.title}
                value={card.value}
                icon={card.icon}
                bgColor={card.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};