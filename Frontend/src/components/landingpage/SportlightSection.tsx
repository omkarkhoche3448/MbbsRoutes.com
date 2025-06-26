import React, { useRef, useEffect, useState } from "react";

const mentors = [
  {
    name: "Atharava Aggarwal",
    img: "https://res.cloudinary.com/dkbzscmmq/image/upload/v1750969021/bf3miis3ip9g7tbcavrw.jpg",
  },
  {
    name: "Soyeb Aftab",
    img: "https://res.cloudinary.com/dkbzscmmq/image/upload/v1750969181/lgev81ejgfd4hzqciwcc.jpg",
  },
  {
    name: "Deepak Sahu",
    img: "https://res.cloudinary.com/dkbzscmmq/image/upload/v1750968809/w9h2tjwfd4cl8kh1qbzj.jpg",
  },
];

export default function SportlightSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll to the current mentor
  const scrollToCard = (idx: number, instant = false) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.children[idx] as HTMLElement;
    if (card) {
      card.scrollIntoView({
        behavior: instant ? "auto" : "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  // Ensure carousel starts at the middle mentor (index 1) on mount
  useEffect(() => {
    scrollToCard(1, true);
    setCurrent(1);
    // eslint-disable-next-line
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    function startAutoScroll() {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => {
          const next = (prev + 1) % mentors.length;
          scrollToCard(next);
          return next;
        });
      }, 3000);
    }
    startAutoScroll();

    // Pause/resume on hover/touch
    const carousel = carouselRef.current;
    const pause = () => intervalRef.current && clearInterval(intervalRef.current);
    const resume = () => {
      pause();
      startAutoScroll();
    };
    if (carousel) {
      carousel.addEventListener("mouseenter", pause);
      carousel.addEventListener("mouseleave", resume);
      carousel.addEventListener("touchstart", pause);
      carousel.addEventListener("touchend", resume);
    }
    // Always scroll to the current card on update
    scrollToCard(current);

    return () => {
      pause();
      if (carousel) {
        carousel.removeEventListener("mouseenter", pause);
        carousel.removeEventListener("mouseleave", resume);
        carousel.removeEventListener("touchstart", pause);
        carousel.removeEventListener("touchend", resume);
      }
    };
    // eslint-disable-next-line
  }, [current]);

  // Manual navigation (if you want to keep arrow buttons, otherwise remove)
  const goLeft = () => {
    const next = (current - 1 + mentors.length) % mentors.length;
    setCurrent(next);
    scrollToCard(next);
  };
  const goRight = () => {
    const next = (current + 1) % mentors.length;
    setCurrent(next);
    scrollToCard(next);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          MBBS Mentorship <span className="text-blue-600">Spotlight</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Get expert guidance from top mentors for your medical journey. Our
          mentors provide preparation support for exams such as{" "}
          <span className="font-semibold text-blue-700">
            NEET UG/PG/INI-CET, PLAB, USMLE
          </span>{" "}
          and more.
        </p>
      </div>
      <div className="relative">
        <div
          ref={carouselRef}
          className="
            flex md:flex-row flex-nowrap md:gap-12 gap-6 md:justify-center justify-start items-center
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            scrollbar-hide
            px-4 md:px-0 pb-4 md:pb-0
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {mentors.map((mentor, idx) => (
            <div
              key={mentor.name}
              className={`
                relative bg-white/60 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-xl
                flex flex-col items-center p-8 w-72 max-w-xs min-w-[18rem] transition-transform duration-300
                ${idx === 1 ? "md:-translate-y-3" : ""}
                snap-center md:snap-none
                flex-shrink-0
              `}
              style={{
                minHeight: 320,
              }}
            >
              <div className="relative mb-5">
                <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-400 via-blue-200 to-blue-400 opacity-60 blur-sm"></span>
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  className="relative w-28 h-28 rounded-full object-cover border-4 border-blue-200 shadow-lg brightness-110"
                  onError={(e) =>
                    (e.currentTarget.src = "https://via.placeholder.com/112")
                  }
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">
                {mentor.name}
              </h3>
              <span className="inline-block bg-blue-100 text-blue-700 font-semibold text-xs px-3 py-1 rounded-full mb-3 mt-1 shadow">
                MBBS Mentor
              </span>
              <div className="mt-2 text-gray-500 text-base text-center font-medium">
                Preparation Support:{" "}
                <span className="text-blue-700 font-semibold">
                  NEET UG/PG/INI-CET, PLAB, USMLE
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .scrollbar-hide {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
}