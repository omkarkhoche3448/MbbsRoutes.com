import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "./icons";

export const Breadcrumb = ({ items }) => {
  return (
    <div className="bg-gray-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <HomeIcon className="w-4 h-4 mr-1" />
            <span>Home</span>
          </Link>

          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-gray-400 mx-1">&gt;</span>
              {item.isLast ? (
                <span className="text-blue-600 font-medium">{item.label}</span>
              ) : (
                <Link
                  to={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
