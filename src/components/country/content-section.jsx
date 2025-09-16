import React from "react";

export const ContentSection = ({ title, children, className = "" }) => {
  return (
    <div className={`container mx-auto px-6 py-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="prose max-w-none">{children}</div>
    </div>
  )
}
