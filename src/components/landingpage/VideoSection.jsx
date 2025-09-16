import { useState, useEffect, useRef } from "react";
import VideoCard from "../../components/common/VideoCard";
import { ChevronRight, ChevronLeft } from "lucide-react";

const videos = [
  {
    id: "xNA6nGza318",
    title: "SHOCKING UPDATE BY SUPREME COURT ON MBBS ABROAD - MUST WATCH",
    thumbnail: "https://i.ytimg.com/vi/xNA6nGza318/maxresdefault.jpg",
    channel: "MBBS Routes | Path to Become Doctor In Abroad",
    views: "1.1K views",
    timestamp: "12 days ago",
  },
  {
    id: "7HXUz3fDWjA",
    title: "MBBS in NEPAL 🇳🇵 The Shocking Reality You Must Know! || Fees, Life, NMC Rules & More 🔥",
    thumbnail: "https://i.ytimg.com/vi/xIPjVIVuvwY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAayz4v-yJA0ATOWJzSSQ0VN-N2Pg",
    channel: "MBBS Routes | Path to Become Doctor In Abroad",
    views: "15K views",
    timestamp: "3 weeks ago",
  },
  {
    id: "0KuOkB26hiI",
    title: "Top SCAMS You Need to be AWARE of | MBBS Abroad Latest Update",
    thumbnail: "https://i.ytimg.com/vi/0KuOkB26hiI/maxresdefault.jpg",
    channel: "MBBS Routes | Path to Become Doctor In Abroad",
    views: "5.2K views",
    timestamp: "3 weeks ago",
  },
  {
    id: "ARXNLrHcK_U",
    title: "Every NEET Aspirant Must Know !!!",
    thumbnail: "https://i.ytimg.com/vi/ARXNLrHcK_U/maxresdefault.jpg",
    channel: "MBBS Routes | Path to Become Doctor In Abroad",
    views: "8.9K views",
    timestamp: "1 month ago",
  },
  {
    id: "t9flKCS2fNg",
    title: "Complete Review of MEPhI Russia 🇷🇺 || Fees, Hostel, Classes by MBBS Student 🩺",
    thumbnail: "https://i.ytimg.com/vi/384zvUzGNZ8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCso8etMv74JII71WRt7_eN4CV36g",
    channel: "MBBS Routes | Path to Become Doctor In Abroad",
    views: "47K views",
    timestamp: "7 hours ago",
  },
  {
    id: "xIPKGIVuvwY",
    title: "MBBS in RUSSIA Ground Reality 🇷🇺 || Fees, Academic, Hostel || Swasti Gaur",
    thumbnail: "https://i.ytimg.com/vi/pMaCLH5C8tU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB_B5EjSRbVPRj3Fok9jWyJ3EsMuw",
    channel: "MBBS Routes | Path to Become Doctor In Abroad",
    views: "3K views",
    timestamp: "1 month ago",
  }
];

export default function VideoSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoAdvanceTimerRef = useRef(null);

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

  // Auto-advance for mobile view - every 5 seconds
  useEffect(() => {
    if (isMobile) {
      // Clear any existing timer when component updates
      if (autoAdvanceTimerRef.current) {
        clearInterval(autoAdvanceTimerRef.current);
      }
      
      // Set up new timer
      autoAdvanceTimerRef.current = setInterval(() => {
        setCurrentSlide((prevSlide) => {
          // Loop back to the beginning when we reach the end
          return prevSlide === videos.length - 1 ? 0 : prevSlide + 1;
        });
      }, 5000);
    }
    
    // Clean up timer when component unmounts or when mobile state changes
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearInterval(autoAdvanceTimerRef.current);
      }
    };
  }, [isMobile, videos.length]);

  // Reset the auto-advance timer when manually navigating
  const resetAutoAdvanceTimer = () => {
    if (isMobile && autoAdvanceTimerRef.current) {
      clearInterval(autoAdvanceTimerRef.current);
      
      autoAdvanceTimerRef.current = setInterval(() => {
        setCurrentSlide((prevSlide) => {
          return prevSlide === videos.length - 1 ? 0 : prevSlide + 1;
        });
      }, 5000);
    }
  };

  // Move to next slide
  const handleNextSlide = () => {
    if (currentSlide < videos.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to the beginning
    }
    resetAutoAdvanceTimer();
  };

  // Move to previous slide
  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(videos.length - 1); // Loop to the end
    }
    resetAutoAdvanceTimer();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-[60px] relative mt-2 md:mt-0">
      {/* Header */}
      <div className="flex items-center">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900">
          Discover and <span className="text-blue-600"> Learn</span>
        </h2>
      </div>
      
      <h3 className="text-gray-600 mt-2 md:mt-4 text-sm font-medium md:text-base max-w-[80%] pb-4 md:pb-6">
        Explore and Learn with MbbsRoutes about getting started on your journey
        to Study Abroad
      </h3>
      
      {/* Mobile Carousel View */}
      {isMobile ? (
        <div className="relative">
          {/* Mobile Carousel */}
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex">
                {videos.map((video) => (
                  <div key={video.id} className="w-full flex-shrink-0">
                    <VideoCard video={video} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation Indicators */}
          <div className="flex justify-center gap-1 mt-4">
            {videos.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => {
                  setCurrentSlide(index);
                  resetAutoAdvanceTimer();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-4 bg-blue-600" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Mobile Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-2">
            <button 
              onClick={handlePrevSlide}
              className="bg-white rounded-full p-2 shadow-md text-blue-600 z-10"
              aria-label="Previous video"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNextSlide}
              className="bg-white rounded-full p-2 shadow-md text-blue-600 z-10"
              aria-label="Next video"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      ) : (
        /* Desktop Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}