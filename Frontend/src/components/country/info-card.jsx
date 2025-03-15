export const InfoCard = ({ title, value, icon, bgColor = "bg-blue-50", size = "small" }) => {
  return (
    <div
      className={`
        ${bgColor} rounded-lg p-4 flex items-start w-full sm:w-auto
        ${size === "large" ? "col-span-2" : ""} rounded-xl
      `}
    >
      {/* Icon */}
      <div className="mr-4 mt-1">{icon}</div>

      {/* Content */}
      <div>
        <h3 className="font-medium text-gray-900 text-sm sm:text-base">{title}</h3>
        <p className="text-gray-700 text-xs sm:text-sm">{value}</p>
      </div>
    </div>
  );
};