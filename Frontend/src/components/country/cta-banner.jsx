export const CTABanner = ({ title, buttonText, setIsModalOpen, image }) => {
  return (
    <div className="container mx-auto px-4 md:px-6"> 
      <div className="bg-blue-500 py-6 mx-auto md:max-w-[1110px] rounded-xl">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left Section: Image and Title */}
            <div className="flex items-center justify-center md:justify-start">
              {image && (
                <img
                  src={image || "/placeholder.svg"}
                  alt=""
                  className="h-12 sm:h-16 mr-4"
                />
              )}
              <h3 className="text-lg sm:text-xl font-medium text-white text-center md:text-left">
                {title}
              </h3>
            </div>

            {/* Right Section: Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
