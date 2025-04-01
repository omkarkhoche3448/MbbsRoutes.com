export const VisaProcessingSection = ({ title, description, steps }) => {
  if (!steps || !steps.length) return null;

  return (
    <section className="py-10 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-2">
              Visa Process
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="mb-12 relative">
                <div className="flex">
                  {/* Step number */}
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-bold shadow-lg relative z-10">
                      {index + 1}
                    </div>
                    {/* Vertical line connector */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-12 left-6 w-0.5 h-full bg-blue-200 -ml-px"></div>
                    )}
                  </div>
                  
                  {/* Step content */}
                  <div className="flex-grow">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <span>{step.title}</span>
                        {index === steps.length - 1 && (
                          <span className="ml-3 text-sm text-white bg-green-500 px-2 py-0.5 rounded-md">Final Step</span>
                        )}
                      </h3>
                      <p className="text-gray-700">{step.content}</p>
                      
                      {step.additionalInfo && (
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                          <p className="text-sm text-blue-800">{step.additionalInfo}</p>
                        </div>
                      )}
                      
                      {step.estimatedTime && (
                        <div className="mt-4 flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          Estimated time: {step.estimatedTime}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};