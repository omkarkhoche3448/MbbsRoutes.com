import React from "react";

export const FeatureCard = ({ title, icon, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-blue-600">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};
