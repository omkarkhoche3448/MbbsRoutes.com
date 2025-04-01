import { useState, useEffect, useRef } from "react";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";
import City from "../../assets/City.png";
import MBBSConsultancyFormModal from "./MBBSConsultancyFormModal";

export default function StudyAbroadJourney() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Journey steps data
  const journeySteps = [
    {
      icon: "https://img.icons8.com/lollipop/48/compass.png",
      label: "Discover",
      description: "Explore study abroad options and countries",
    },
    {
      icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-counselling-mental-health-flaticons-flat-flat-icons-2.png",
      label: "Counselling",
      description: "Get expert guidance on your journey",
    },
    {
      icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-shortlist-resume-flaticons-flat-flat-icons.png",
      label: "Shortlist",
      description: "Select your preferred universities & programs",
    },
    {
      icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-test-seo-flaticons-lineal-color-flat-icons.png",
      label: "Exams",
      description: "Prepare for and take required tests",
    },
    {
      icon: "https://img.icons8.com/color/48/goodnotes.png",
      label: "Application",
      description: "Submit your university applications",
    },
    {
      icon: "https://img.icons8.com/scribby/50/secured-letter.png",
      label: "Offer letter",
      description: "Receive and accept your admission",
    },
    {
      icon: "https://img.icons8.com/color/48/cash-in-hand.png",
      label: "Finance",
      description: "Arrange funding and scholarships",
    },
    {
      icon: "https://img.icons8.com/color/48/visa.png",
      label: "Visa",
      description: "Process your study visa",
    },
    {
      icon: "https://img.icons8.com/color/48/airplane-take-off--v1.png",
      label: "Travel",
      description: "Plan and prepare for your journey",
    },
    {
      icon: "https://img.icons8.com/color/48/university.png",
      label: "On Campus",
      description: "Begin your international education",
    },
  ];

  // Intersection observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to handle step selection
  const selectStep = (index) => {
    setActiveStep(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-4 py-2 md:py-0 md:pb-0"
      aria-labelledby="journey-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block">
            Your Journey
          </span>
        </div>

        {/* Desktop View - Full Horizontal Timeline */}
        <div className="hidden md:block w-full">
          <div
            className="relative px-6 mx-auto pb-4"
            role="region"
            aria-label="Study abroad journey steps"
          >
            {/* Journey Steps - Desktop */}
            <div className="grid grid-cols-5 gap-2 lg:gap-4 mb-8">
              {journeySteps.map((step, index) => (
                <div
                  key={`desktop-${step.label}`}
                  onClick={() => selectStep(index)}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                  className={`flex flex-col items-center transition-all duration-500 ease-in-out cursor-pointer ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  } ${activeStep === index ? "scale-110" : ""}`}
                >
                  <div className="flex items-center justify-center mt-4">
                    <div
                      className={`relative z-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${
                        activeStep === index
                          ? "bg-blue-600"
                          : "bg-gradient-to-br from-gray-50 to-blue-50"
                      }`}
                    >
                      <img
                        src={step.icon || "/placeholder.svg"}
                        alt=""
                        className={`w-8 md:w-10 ${
                          activeStep === index
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        aria-hidden="true"
                      />
                      <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 md:w-6 md:h-6 bg-blue-100 text-blue-800 rounded-full text-xs font-bold border-2 border-white">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <span
                      className={`font-semibold text-xs md:text-sm lg:text-base ${
                        activeStep === index
                          ? "text-blue-600"
                          : "text-slate-800"
                      }`}
                    >
                      {step.label}
                    </span>
                    <p className="text-xs text-gray-500 mt-1 max-w-[100px] lg:max-w-[120px] hidden lg:block">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center mt-6 mb-4">
              <Button
                size="lg"
                className="mx-auto mb-8"
                onClick={() => setIsModalOpen(true)}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="w-full flex justify-center">
                <img
                  src={City}
                  alt="City Illustration"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Timeline */}
        <div className="md:hidden">
          <div className="relative pl-12 mb-8">
            {/* Vertical Progress Line */}
            <div className="absolute top-0 bottom-0 left-6 w-1 bg-gray-200">
              <div
                className={`w-full bg-blue-600 transition-all duration-2000 ease-in-out ${
                  isVisible ? "h-full" : "h-0"
                }`}
              />
            </div>

            {/* Vertical Steps */}
            {journeySteps.map((step, index) => (
              <div
                key={`mobile-${step.label}`}
                className={`relative mb-8 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
                onClick={() => selectStep(index)}
              >
                {/* Step Icon */}
                <div className="absolute -left-6 top-0 transform -translate-x-1/2">
                  <div
                    className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-md ${
                      activeStep === index
                        ? "bg-blue-600"
                        : "bg-gradient-to-br from-gray-50 to-blue-50"
                    }`}
                  >
                    <img
                      src={step.icon || "/placeholder.svg"}
                      alt=""
                      className={`w-10 ${
                        activeStep === index ? "filter brightness-0 invert" : ""
                      }`}
                      aria-hidden="true"
                    />
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-800 rounded-full text-xs font-bold border-2 border-white">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div
                  className={`pl-4 ${
                    activeStep === index ? "rounded-lg p-4" : ""
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      activeStep === index ? "text-blue-600" : "text-gray-800"
                    }`}
                  >
                    {step.label}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>

                {/* Add connecting dot between steps (except for last step) */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute -left-6 bottom-0 transform -translate-x-1/2 translate-y-1/2">
                    <div className="w-2 h-2 rounded-full bg-blue-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Button and City Image */}
          <div className="flex flex-col items-center px-4">
            <Button
              size="lg"
              className="w-fit mb-8"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <MBBSConsultancyFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
