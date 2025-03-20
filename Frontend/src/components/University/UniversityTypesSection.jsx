import React from 'react';

const UniversityTypesSection = ({
  universityTypes,
  onFilterChange,
  activeFilter = "all",
  allUniversities = []
}) => {
  // Get unique types from the data structure
  const getUniqueTypes = () => {
    // Extract actual type titles from the universitiesByType structure
    const uniqueTypes = [...new Set(allUniversities.map(uni => uni.type))];
    return uniqueTypes;
  };
  
  const uniqueTypes = getUniqueTypes();
  
  const handleFilterClick = (type) => {
    if (onFilterChange) {
      onFilterChange(type);
    }
  };

  // Mobile view: Select dropdown
  const MobileFilter = () => (
    <div className="md:hidden w-full mb-6">
      <select
        className="w-full p-3 border border-gray-300 rounded-xl bg-white"
        value={activeFilter}
        onChange={(e) => handleFilterClick(e.target.value)}
      >
        <option value="all">All Universities</option>
        {uniqueTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );

  // Desktop view: Pills
  const DesktopFilter = () => (
    <div className="hidden md:flex flex-wrap gap-4 mb-6">
      <button
        onClick={() => handleFilterClick("all")}
        className={`px-4 py-2 rounded-xl font-medium transition-colors
          ${
            activeFilter === "all"
              ? "bg-blue-600 text-white"
              : "bg-blue-50 text-blue-700 hover:bg-blue-100"
          }`}
      >
        All Universities
      </button>
      {uniqueTypes.map((type, index) => (
        <button
          key={index}
          onClick={() => handleFilterClick(type)}
          className={`px-4 py-2 rounded-xl font-medium transition-colors
            ${
              activeFilter === type
                ? "bg-blue-600 text-white"
                : "bg-blue-50 text-blue-700 hover:bg-blue-100"
            }`}
        >
          {type}
        </button>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {universityTypes?.title || "Types of Universities"}
      </h3>
      <MobileFilter />
      <DesktopFilter />
    </div>
  );
};

export default UniversityTypesSection;