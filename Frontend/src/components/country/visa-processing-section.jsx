export const VisaProcessingSection = ({ title, description, steps }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-8">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>

      {/* Section Description */}
      <p className="text-gray-700 text-sm mb-4">{description}</p>

      {/* Steps List */}
      <div className="space-y-3">
        {steps?.map((step, index) => (
          <div key={index} className="flex items-start">
            {/* Step Number */}
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-3">
              {index + 1}
            </div>

            {/* Step Content */}
            <div>
              <h3 className="font-medium text-gray-900 text-base mb-1">
                {step?.title}
              </h3>
              <p className="text-gray-700 text-sm">{step?.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};