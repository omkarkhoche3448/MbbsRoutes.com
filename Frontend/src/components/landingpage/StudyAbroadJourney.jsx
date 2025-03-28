import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

export default function StudyAbroadJourney() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

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

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center mb-3 pb-4 "
      aria-labelledby="journey-title"
    >
      {/* Journey Steps Timeline */}
      <div className="w-full overflow-hidden md:overflow-x-auto scrollbar-hide">
        <div
          ref={scrollContainerRef}
          className="relative px-4 flex flex-col md:flex-row gap-5 md:gap-8 mx-auto md:min-w-max md:px-8"
          tabIndex={0}
          role="region"
          aria-label="Study abroad journey steps"
        >
          {/* Desktop Progress Bar (Horizontal) */}
          <div className="absolute z-0 hidden md:block top-10 left-8 right-8 h-1 bg-gray-200">
            <div
              className={`h-full bg-blue-600 transition-all duration-2000 ease-in-out ${
                isVisible ? "w-full" : "w-0"
              }`}
            />
          </div>

          {/* Mobile Progress Bar (Vertical) */}
          <div className="absolute z-0 md:hidden top-0 bottom-0 left-8 w-1 bg-gray-200">
            <div
              className={`w-full bg-blue-600 transition-all duration-2000 ease-in-out ${
                isVisible ? "h-full" : "h-0"
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
              className={`flex md:flex-col items-center shrink-0 transition-all duration-500 ease-in-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              } ${index === 0 ? "relative" : ""}`}
            >
              <div className="flex items-center justify-center mb-0 md:mb-4">
                <div className="relative z-10 flex items-center justify-center w-12 h-12 p-2 bg-gradient-to-br from-gray-50 to-blue-50 rounded-full shadow-md md:w-20 md:h-20 hover:scale-110 transition-transform duration-300 md:mr-[0.4rem]">
                  <img src={step.icon || "/placeholder.svg"} alt="" className="w-8 md:w-12" aria-hidden="true" />
                </div>
              </div>
              <span className="ml-4 font-semibold md:ml-0 md:text-center text-slate-800">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}