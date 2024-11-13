// Reusable Button Component
import React from "react";
import { Icon } from "lucide-react";
const Button = ({
  variant = "primary",
  children,
  onClick,
  className = "",
  icon: Icon,
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2";
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 shadow-lg",
    secondary:
      "bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 hover:scale-105 shadow-md",
    outline:
      "bg-transparent hover:bg-white/10 text-white border-2 border-white hover:scale-105",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default Button;
