import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function StudyAbroadJourney() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Journey steps data
  const journeySteps = [
    { icon: "https://www.acadfly.com/_next/static/media/Discover.b5268a7c.svg", label: "Discover" },
    { icon: "https://www.acadfly.com/_next/static/media/Counselling.4b2588f8.svg", label: "Counselling" },
    { icon: "https://www.acadfly.com/_next/static/media/Shortlist.0a612141.svg", label: "Shortlist" },
    { icon: "https://www.acadfly.com/_next/static/media/Exams.baaa2811.svg", label: "Exams" },
    { icon: "https://www.acadfly.com/_next/static/media/Application.ec9f5a78.svg", label: "Application" },
    { icon: "https://www.acadfly.com/_next/static/media/Offerletter.a07c92fc.svg", label: "Offer letter" },
    { icon: "https://www.acadfly.com/_next/static/media/Finance.33a17eda.svg", label: "Finance" },
    { icon: "https://www.acadfly.com/_next/static/media/Visa.5f9af770.svg", label: "Visa" },
    { icon: "https://www.acadfly.com/_next/static/media/Travel.71a18df5.svg", label: "Travel" },
    { icon: "https://www.acadfly.com/_next/static/media/OnCampus.93429840.svg", label: "On Campus" },
  ];

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

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

  // Horizontal scroll with arrow keys for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!scrollContainerRef.current) return;

      if (e.key === "ArrowRight") {
        scrollContainerRef.current.scrollLeft += 100;
      } else if (e.key === "ArrowLeft") {
        scrollContainerRef.current.scrollLeft -= 100;
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (container) {
        container.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  // Move to next step
  const handleNextStep = () => {
    if (currentStep < journeySteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Move to previous step
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center mb-3 pb-4"
      aria-labelledby="journey-title"
    >
      {/* Journey Steps Timeline */}
      <div className="w-full overflow-hidden md:overflow-x-auto scrollbar-hide">
        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="px-4 relative">
            {/* Mobile Progress Bar (indicator dots) */}
            <div className="flex justify-center gap-1 mb-2">
              {journeySteps.map((_, index) => (
                <div 
                  key={`indicator-${index}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentStep === index ? "w-4 bg-blue-600" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
            
            {/* Current Step Display */}
            <div 
              className={`flex flex-col items-center p-4 transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative flex items-center justify-center w-16 h-16 p-2 bg-gradient-to-br from-gray-50 to-blue-50 rounded-full shadow-md mb-3 hover:scale-110 transition-transform duration-300">
                <img 
                  src={journeySteps[currentStep].icon || "/placeholder.svg"} 
                  alt="" 
                  className="w-10" 
                  aria-hidden="true" 
                />
              </div>
              <span className="font-semibold text-center text-slate-800 text-lg">
                {journeySteps[currentStep].label}
              </span>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Step {currentStep + 1} of {journeySteps.length}
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-2">
              <button 
                onClick={handlePrevStep}
                disabled={currentStep === 0}
                className={`bg-white rounded-full p-2 shadow-md ${
                  currentStep === 0 ? "text-gray-300" : "text-blue-600"
                }`}
                aria-label="Previous step"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNextStep}
                disabled={currentStep === journeySteps.length - 1}
                className={`bg-white rounded-full p-2 shadow-md ${
                  currentStep === journeySteps.length - 1 ? "text-gray-300" : "text-blue-600"
                }`}
                aria-label="Next step"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Desktop Timeline View (unchanged) */}
        {!isMobile && (
          <div
            ref={scrollContainerRef}
            className="relative px-4 flex flex-row gap-8 mx-auto min-w-max px-8"
            tabIndex={0}
            role="region"
            aria-label="Study abroad journey steps"
          >
            {/* Desktop Progress Bar (Horizontal) */}
            <div className="absolute z-0 top-10 left-8 right-8 h-1 bg-gray-200">
              <div
                className={`h-full bg-blue-600 transition-all duration-2000 ease-in-out ${
                  isVisible ? "w-full" : "w-0"
                }`}
              />
            </div>

            {/* Journey Steps */}
            {journeySteps.map((step, index) => (
              <div
                key={step.label}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                className={`flex flex-col items-center shrink-0 transition-all duration-500 ease-in-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                } ${index === 0 ? "relative" : ""}`}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 p-2 bg-gradient-to-br from-gray-50 to-blue-50 rounded-full shadow-md hover:scale-110 transition-transform duration-300 mr-[0.4rem]">
                    <img src={step.icon || "/placeholder.svg"} alt="" className="w-12" aria-hidden="true" />
                  </div>
                </div>
                <span className="font-semibold text-center text-slate-800">{step.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}