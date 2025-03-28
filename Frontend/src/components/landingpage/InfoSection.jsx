import React from "react";
import { ArrowRight } from "lucide-react";
import infoImg from "../../assets/LandingImg2.png";

// Reusable Button Component
const Button = ({
  children,
  onClick,
  className = "",
  icon: Icon,
  variant = "primary",
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300";
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105",
    secondary:
      "bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 shadow-md hover:shadow-lg hover:scale-105",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

// Reusable Section Title Component
const SectionTitle = ({ subtitle, title, className = "" }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <h3 className="text-blue-600 font-semibold text-lg uppercase tracking-wider">
        {subtitle}
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
    </div>
  );
};

// Info Section Component
const InfoSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Image Container */}
        <div className="relative group" data-aos="fade-right">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative">
            <img
              src={infoImg}
              alt="Medical Students"
              className="rounded-xl shadow-2xl w-full h-auto max-h-[500px] object-cover object-top"
            />

            {/* Floating Stats Card */}
            {/* <div className="absolute -bottom-6 -right-0 lg:-right-6 bg-white rounded-xl shadow-xl p-3 md:p-6 animate-float">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-600">Success Rate</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  98%
                </div>
                <div className="text-sm text-gray-500">
                  Student Satisfaction
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Content Container */}
        <div className="space-y-6 " data-aos="fade-left">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Begin Your Medical Journey with AIIMS Delhi Doctors"
          />

          {/* Feature List */}
          <div className="space-y-4">
            {[
              {
                title: "Choosing the Right Country/University",
                description:
                  "Explore top destinations like Russia, China, Philippines, Georgia, Nepal & more!",
              },
              {
                title: "Admission & Visa Guidance",
                description:
                  "Understand admission processes, fees, scholarships & visa requirements.",
              },
              {
                title: "Student Experiences & Safety",
                description:
                  "Read student reviews, learn about cultural adaptation & get safety tips.",
              },
              {
                title: "Avoiding Scams",
                description:
                  "Get reliable consultancy recommendations to ensure a secure admission process.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-1 h-12 bg-blue-600 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default InfoSection;
