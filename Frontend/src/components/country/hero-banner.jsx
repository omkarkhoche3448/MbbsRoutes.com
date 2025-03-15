export const HeroBanner = ({
  title,
  subtitle,
  backgroundImage,
  buttonText = "Get Started",
  buttonLink = "#",
  setIsModalOpen,
}) => {
  return (
    <div className="relative">
      {/* Mobile View (Stacked Layout) */}
      <div className="md:hidden">
        <div className="bg-blue-100 relative px-4 h-[160px]">
          <div className="absolute -bottom-12 z-[1] inset-x-0 space-y-5">
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">
              {title}
            </h1>
            {buttonText && (
              <div
                role="button"
                className="font-semibold rounded-full px-3 py-2 md:py-1.5 bg-blue-500 text-white cursor-pointer w-full max-w-[160px] mx-auto text-center"
                onClick={() => setIsModalOpen(true)}
              >
                {buttonText}
              </div>
            )}
          </div>
        </div>
        <div className="relative">
          <div
            className="h-[220px] sm:h-[250px] bg-no-repeat bg-contain bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-transparent "></div>
        </div>
      </div>

      {/* Desktop View (Two-Column Layout) */}
      <div className=" hidden md:block bg-blue-100">
        <div className=" mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Title, Subtitle, and Button */}
            <div className="text-left mx-auto">
              <h1 className="text-4xl font-bold text-black mb-4">{title}</h1>
              {subtitle && (
                <p className="text-xl text-gray-700 mb-6">{subtitle}</p>
              )}
              {buttonText && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors"
                >
                  {buttonText}
                </button>
              )}
            </div>
            {/* Right Column: Background Image */}
            <div className="relative h-[400px] w-full">
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
              {/* Overlay to blend with the left section */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent rounded-lg "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
