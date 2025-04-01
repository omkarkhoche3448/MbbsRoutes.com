export const CTABanner = ({ title, buttonText, setIsModalOpen, image }) => {
  const glob =
    "https://img.icons8.com/external-filled-color-icons-papa-vector/78/external-journey-types-of-travel-color-filled-filled-color-icons-papa-vector.png";
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between bg-blue-500 rounded-2xl p-8 backdrop-blur-sm">
        <div className="flex items-center mb-6 md:mb-0">
          {image && (
            <img
              src={glob || image}
              alt=""
              className="h-16 mr-6 animate-bounce-slow"
            />
          )}
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
        >
          {buttonText} →
        </button>
      </div>
    </div>
  );
};
