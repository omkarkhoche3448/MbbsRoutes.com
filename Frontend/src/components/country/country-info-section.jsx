import { InfoCard } from "./info-card"

export const CountryInfoSection = ({ title, subtitle, featureImage, infoCards }) => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className=" text-2xl md:text-3xl font-bold text-center mb-2">{title}</h2>
      <p className="text-gray-600 text-center mb-8 md:text-base text-sm">{subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="md:col-span-1 lg:col-span-1">
          <img src={featureImage} alt={title} className="w-full h-full object-cover rounded-xl" />
        </div>
                                              
        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              value={card.value}
              icon={card.icon}
              bgColor={card.bgColor}
              size={card.size}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
