import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "./icons";

export const Breadcrumb = ({ items }) => {
  return (
    <div className="flex items-center space-x-2 py-1 md:py-4 px-6 text-sm">
      {/* Home Link */}
      <Link
        to="/"
        className="flex items-center text-gray-600 hover:text-gray-900"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <HomeIcon className="w-4 h-4 mr-1" />
        Home
      </Link>

      {/* Breadcrumb Items */}
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-400 mx-1">&gt;</span>
          {item.isLast ? (
            <span className="text-gray-900 font-medium">{item.label}</span>
          ) : (
            <Link to={item.href} className="text-gray-600 hover:text-gray-900">
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
