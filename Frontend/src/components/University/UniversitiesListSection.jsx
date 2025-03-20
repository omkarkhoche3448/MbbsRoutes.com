import React, { useEffect, useState } from "react";
import UniversityCard from "./UniversityCard";

function UniversitiesListSection({ filteredUniversities }) {
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    setVisibleCount(12);
  }, [filteredUniversities]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  // Split universities into two columns
  const getColumnedUniversities = () => {
    const visible = filteredUniversities.slice(0, visibleCount);
    const column1Count = Math.ceil(visible.length / 2);

    return {
      column1: visible.slice(0, column1Count),
      column2: visible.slice(column1Count),
    };
  };

  const { column1, column2 } = getColumnedUniversities();
  const hasMoreToShow = visibleCount < filteredUniversities.length;

  return (
    <div className="container mx-auto mb-8">
        <p className="text-gray-600 mb-6">
        Showing {Math.min(visibleCount, filteredUniversities.length)} of{" "}
        {filteredUniversities.length} universities
      </p>

      {Array.isArray(filteredUniversities) &&
      filteredUniversities.length > 0 ? (
        <>
          {/* University Cards in Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Column 1 */}
            <div className="space-y-6">
              {column1.map((university, index) => (
                <UniversityCard key={`col1-${index}`} university={university} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              {column2.map((university, index) => (
                <UniversityCard key={`col2-${index}`} university={university} />
              ))}
            </div>
          </div>

          {/* View More Button */}
          {hasMoreToShow && (
            <div className="flex justify-center">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                View More Universities
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 text-gray-500">
          No universities found for the selected filter.
        </div>
      )}
    </div>
  );
}

export default UniversitiesListSection;