import React, { useState, useEffect } from "react";
import UniversityTypesSection from "./UniversityTypesSection";
import UniversitiesListSection from "./UniversitiesListSection";

// Main University Content Component
const UniversityInfoSection = ({ universityTypes, universitiesByType, country }) => {
  const [filterType, setFilterType] = useState("all");
  const [allUniversities, setAllUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  // Process all universities once when the component mounts or data changes
  useEffect(() => {
    // Ensure universitiesByType exists
    if (!universitiesByType) {
      setAllUniversities([]);
      return;
    }

    // Collect all universities from different types
    let universities = [];

    // Process university types based on your Russia data structure
    Object.entries(universitiesByType).forEach(([typeKey, typeData]) => {
      // Check if this property has universities array
      if (typeData?.universities && Array.isArray(typeData.universities)) {
        // Get the title from the data
        const typeName = typeData.title || formatTypeKey(typeKey);
        
        // Map universities with their type
        const mappedUnis = typeData.universities.map((uni) => ({
          ...uni,
          type: typeName,
          id: `${typeKey}-${uni.name.replace(/\s+/g, "-").toLowerCase()}`,
        }));
        
        universities = [...universities, ...mappedUnis];
      }
    });

    setAllUniversities(universities);
    setFilteredUniversities(universities); // Initialize with all universities
  }, [universitiesByType]);

  // Helper function to format type keys into readable names
  const formatTypeKey = (key) => {
    // Convert camelCase to spaces and capitalize
    return key
      .replace(/([A-Z])/g, ' $1') // Insert space before capital letters
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
      .trim();
  };

  // Apply filtering whenever the filter type or all universities change
  useEffect(() => {
    if (filterType === "all") {
      setFilteredUniversities(allUniversities);
    } else {
      // Filter by the selected type
      const filtered = allUniversities.filter((uni) => 
        uni.type.includes(filterType)
      );
      setFilteredUniversities(filtered);
    }
  }, [filterType, allUniversities]);

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Universities in {country}</h2>
        <p className="text-sm text-gray-600">Selection of universities in the country offering the best courses</p>
      </div>

      {/* Filter Section */}
      <UniversityTypesSection
        universityTypes={universityTypes}
        allUniversities={allUniversities}
        onFilterChange={handleFilterChange}
        activeFilter={filterType}
      />

      {/* UniversitiesList Section*/}
      <UniversitiesListSection filteredUniversities={filteredUniversities} />
    </div>
  );
};

export default UniversityInfoSection;