import React, { useState, useEffect } from "react";

const FeaturedIn = () => {
  const [activeTab, setActiveTab] = useState("media");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % articles.length);
      }, 5000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isMobile]);


  const logos = [
    {
      name: "ABP News",
      placeholder:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/ABP_News_logo.svg/330px-ABP_News_logo.svg.png",
    },
    {
      name: "Hindustan Times",
      placeholder:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hindustan_Times_logo.svg/690px-Hindustan_Times_logo.svg.png",
    },
    {
      name: "Times of India",
      placeholder:
        "https://imgs.search.brave.com/L8p7e5QEvoak-G0Yw0ji5lYWI7s8cIyWDBsaRf5dRwU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vd2xw/cm9qZWN0Lm9yZy9v/dXItd29yay90aW1l/cy1vZi1pbmRpYS1s/b2dvLnBuZy9AQGlt/YWdlcy9pbWFnZS5w/bmc",
    },
    {
      name: "Josh Talks",
      placeholder:
        "https://imgs.search.brave.com/fiEleA7bRPZMelD3bkpiPwlOSGGfJoa-AXOIfGRhtXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Vla3BuZy5jb20v/cG5nL2RldGFpbC8z/NzAtMzcwNjA1OF9q/b3NoLXRhbGtzLWxv/Z28ucG5n",
    },
  ];

  const articles = [
    {
      title: "Soyeb Aftab: NEET 2020 Perfect Score",
      source: "Times of India",
      date: "Oct 16, 2020",
      excerpt:
        "He created history by getting this perfect score in NEET (720 marks out of 720)",
      image:
        "https://imgs.search.brave.com/L9afntRqR33zggVNBb3jF4MEPJUPx3yrnZwnWwGDt34/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzIw/MjAtMTAvbmlnZnJp/MTRfc295ZWItYWZ0/YWItbmR0di1fNjI1/eDMwMF8xNl9PY3Rv/YmVyXzIwLmpwZw",
      readmore:"https://timesofindia.indiatimes.com/home/education/news/neet-2020-topper-soyeb-aftab-secures-perfect-neet-score/articleshow/78707255.cms"
    },
    {
      title: "Odisha's Soyeb Aftab Tops with 720/720",
      source: "Hindustan Times",
      date: "Oct 16, 2020",
      excerpt:
        "From small town to top medical institution, an inspiring journey.",
      image:
        "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/10/16/Pictures/_8b461c24-0fce-11eb-9477-4f430730ecf3.jpg",
      readmore:"https://www.hindustantimes.com/education/neet-results-2020-odisha-s-soyeb-aftab-is-the-topper-scores-720-out-of-720/story-B7Km9Zmf5upoo7FGZNKnDK.html"
    },
    {
      title: "Deepak Sahu's inspiring NEET journey",
      source: "Josh Talks",
      date: "March 10, 2025",
      excerpt:
        "NEET में AIR 5 लाने का Attitude | Best NEET Motivation @DeepakAIIMSonian Josh Talks NEET",
      image:
        "https://i.ytimg.com/vi/9Ry4WMbora8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCBCKIisZcahfrAvG5GNlLtfIevnw",
      readmore:"https://youtu.be/9Ry4WMbora8?si=qlfFEk8ustlVn2Ix"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  // Carousel controls
  const renderCarouselControls = () => {
    return (
      <div className="flex items-center justify-center mt-4 space-x-2">
        <button
          onClick={prevSlide}
          className="p-2 bg-blue-100 rounded-full"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex space-x-1">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-4 bg-blue-600" : "w-2 bg-gray-300"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-blue-100"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  };

  // Logo carousel for mobile
  const renderLogoCarousel = () => {
    return (
      <div className="relative overflow-hidden py-4">
        <div className="flex space-x-8 animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center p-3 bg-gray-100 rounded-xl w-32"
            >
              <img
                src={logo.placeholder}
                alt={`${logo.name} logo`}
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-800">
        Featured In
      </h2>
      <p className="text-center text-gray-600 mb-6 text-sm md:text-base">
        Our success stories have been recognized by leading media outlets
      </p>

      {/* Logos - Carousel on mobile, grid on desktop */}
      {isMobile ? (
        renderLogoCarousel()
      ) : (
        <div className="grid grid-cols-4 gap-4 items-center justify-center mb-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-3 bg-gray-100 rounded-xl hover:bg-gray-200"
            >
              <img
                src={logo.placeholder}
                alt={`${logo.name} logo`}
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6 border-b border-gray-200">
        <button
          onClick={() => {
            setActiveTab("media");
            setCurrentSlide(0);
          }}
          className={`px-4 py-2 text-sm md:text-base font-medium ${
            activeTab === "media"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Media Coverage
        </button>
      </div>

      {/* Content - Carousel on mobile, grid on desktop */}
      {activeTab === "media" && (
        <>
          {isMobile ? (
            <div className="relative overflow-hidden">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={articles[currentSlide].image}
                  alt={articles[currentSlide].title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600">
                      {articles[currentSlide].source}
                    </span>
                    <span className="text-xs text-gray-500">
                      {articles[currentSlide].date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {articles[currentSlide].title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {articles[currentSlide].excerpt}
                  </p>
                  <button
                    className="text-sm text-blue-600 font-medium"
                    onClick={() => window.open(articles[currentSlide].readmore, "_blank")}
                  >
                    Read More →
                  </button>
                </div>
              </div>
              {renderCarouselControls()}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600">
                        {article.source}
                      </span>
                      <span className="text-sm text-gray-500">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {article.excerpt}
                    </p>
                    <button
                      className="text-blue-600 font-medium"
                      onClick={() => window.open(article.readmore, "_blank")}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FeaturedIn;