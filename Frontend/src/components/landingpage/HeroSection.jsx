import React from "react";
import { ArrowRight, GraduationCap, Globe, Award } from "lucide-react";
import heroImg from "../../assets/LandingImg3.png";
import MBBSConsultancyFormModal from "./MBBSConsultancyFormModal";

const Button = React.forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "default",
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-full font-medium shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const sizeClasses = {
      small: "h-9 px-6 text-xs",
      default: "h-12 px-8 text-sm",
      large: "h-14 px-10 text-base",
      icon: "h-12 w-12 p-0",
    };

    const variantClasses = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600",
      secondary:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400",
      outline:
        "border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-600",
      ghost:
        "bg-transparent text-blue-600 shadow-none hover:bg-blue-50 focus-visible:ring-blue-600",
      destructive:
        "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
      success:
        "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-600",
    };

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

const Icon = ({ name }) => {
  const icons = {
    ArrowRight: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    GraduationCap: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    Globe: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    Award: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  };

  return icons[name] || null;
};

const FeatureGrid = () => {
  const features = [
    {
      icon: GraduationCap,
      text: "Top Universities",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      icon: Globe,
      text: "Global Network",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      icon: Award,
      text: "Expert Guidance",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
      {features.map(({ icon: Icon, text, bgColor, textColor }, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-2 text-center"
        >
          <div className={`rounded-full p-2 ${bgColor}`}>
            <Icon className={`h-4 w-4 sm:h-6 sm:w-6 ${textColor}`} />
          </div>
          <span className={`text-xs sm:text-sm font-medium ${textColor}`}>
            {text}
          </span>
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-[1fr_600px] lg:mt-0 mt-14">
            {/* Left Content Column */}
            <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight">
                  Elevate MBBS Abroad By
                  <br></br>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AIIMS Delhi Drs.
                  </span>{" "}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-[600px]">
                  Expert guidance for future medical professionals. Simplifying
                  admissions, visas, and cultural transitions—helping you
                  achieve your dream of studying abroad with confidence.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="w-full sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    window.scrollTo({ top: 800, behavior: "smooth" })
                  }
                >
                  Explore Programs
                </Button>
              </div>

              {/* Features Grid */}
              <FeatureGrid />
            </div>

            {/* Right Image Column */}
            <div className="relative mt-8 lg:mt-0 flex items-center justify-center lg:justify-end">
              {/* Background Blurs */}
              <div className="absolute -right-20 -top-20 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-blue-200 blur-3xl opacity-50" />
              <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-purple-200 blur-3xl opacity-50" />

              {/* Main Image */}
              <div className="relative h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px]">
                <img
                  src={heroImg}
                  alt="MBBS Consultancy"
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />

                {/* Floating Stats */}
                <div className="absolute -bottom-4 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-2 sm:py-3 px-4 sm:px-6 shadow-lg">
                  <p className="text-xs sm:text-sm font-medium text-gray-900">
                    Trusted by 10,000+ Students
                  </p>
                </div>
                {/* <div className="absolute top-1/2 -left-4 sm:left-0 transform -translate-y-1/2 bg-white rounded-full py-2 sm:py-3 px-4 sm:px-6 shadow-lg">
                  <p className="text-xs sm:text-sm font-medium text-gray-900">
                    100+ Partner Universities
                  </p>
                </div>
                <div className="absolute top-4 right-4 sm:top-0 sm:right-0 bg-white rounded-full py-2 sm:py-3 px-4 sm:px-6 shadow-lg">
                  <p className="text-xs sm:text-sm font-medium text-gray-900">
                    95% Success Rate
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <MBBSConsultancyFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
