import React from "react";
import { Link } from "react-router-dom";
import { CustomBuildingIcon } from "../country/icons";
// University Card Component
const UniversityCard = ({ university }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden h-fit md:h-28  ">
      <Link
        to={`/university/${university.id}`}
        className="flex flex-col sm:flex-row h-full"
      >
        <div className="w-full sm:w-1/3 h-40 sm:h-full bg-gray-100">
          {university.image ? (
            <img
              src={university.image}
              alt={university.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <CustomBuildingIcon />
            </div>
          )}
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h4 className="text-lg font-semibold text-gray-900 mb-1">
            {university.name}
          </h4>
          {/* <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {university.address ||
                university.location ||
                university.country}
            </p> */}
          <div className="mt-auto flex items-center text-sm text-gray-500">
            <span className="mr-2">
              Tuition Fee: {university.fee || "Fee not specified"}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default UniversityCard;
