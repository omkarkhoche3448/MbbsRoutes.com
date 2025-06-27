import React, { useState, useEffect } from "react";
import { Play, Youtube, ChevronLeft, ChevronRight } from "lucide-react";

const YouTubeShowcase = ({ channels = [], showHeader = true }) => {
  const [activeChannel, setActiveChannel] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and set mobile view
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobileView();

    // Add event listener for resize
    window.addEventListener("resize", checkMobileView);

    // Cleanup listener
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  // Reset activeChannel when channels change or are empty
  useEffect(() => {
    if (channels.length === 0) {
      setActiveChannel(0);
    } else if (activeChannel >= channels.length) {
      setActiveChannel(0);
    }
  }, [channels, activeChannel]);

  // Auto-cycle channels only if we have channels
  useEffect(() => {
    if (channels.length === 0) return;
    
    const intervalId = setInterval(() => {
      setActiveChannel((prevChannel) => (prevChannel + 1) % channels.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, [channels]);

  // Handle channel navigation for mobile
  const navigateChannel = (direction) => {
    if (channels.length === 0) return;
    
    setActiveChannel((prev) => {
      if (direction === "next") {
        return (prev + 1) % channels.length;
      } else {
        return prev === 0 ? channels.length - 1 : prev - 1;
      }
    });
  };

  // If no channels, return empty div
  if (!channels || channels.length === 0) {
    return <div className="py-4"></div>;
  }

  // Common header component for both mobile and desktop
  const HeaderSection = () => (
    <div className="text-center mb-8 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
        Our YouTube Section: Medical
        <span className="text-blue-600"> Creators Spotlight</span>
      </h2>
      <p className="text-gray-600 text-sm md:text-base max-w-full md:max-w-2xl mx-auto">
        Explore inspiring medical education content from top performers and
        educators who are transforming medical learning.
      </p>
    </div>
  );

  if (isMobile) {
    return (
      <div className="max-w-full mx-auto px-4 py-4">
        {showHeader && <HeaderSection />}

        <div className="relative">
          {/* Mobile Channel Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => navigateChannel("prev")}
              className="p-2 bg-blue-50 rounded-full"
            >
              <ChevronLeft className="text-blue-600" />
            </button>
            <div className="flex items-center">
              <img
                src={channels[activeChannel]?.logoUrl}
                alt={`${channels[activeChannel]?.name || 'Channel'} Logo`}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  {channels[activeChannel]?.name || 'Channel'}
                </h3>
                <p className="text-xs text-gray-500">
                  {channels[activeChannel]?.handle || ''}
                </p>
              </div>
            </div>
            <button
              onClick={() => navigateChannel("next")}
              className="p-2 bg-blue-50 rounded-full"
            >
              <ChevronRight className="text-blue-600" />
            </button>
          </div>

          {/* Channel Description */}
          <div className="bg-white border border-blue-100 rounded-xl p-4 mb-4 text-center">
            <p className="text-sm text-gray-600 mb-3">
              {channels[activeChannel]?.description || 'No description available'}
            </p>
            <div className="flex justify-center space-x-4 text-xs text-gray-700 mb-3">
              <span>
                <strong>{channels[activeChannel]?.subscribers || '0'}</strong>{" "}
                Subscribers
              </span>
              <span>
                <strong>{channels[activeChannel]?.totalVideos || '0'}+</strong> Total
                Videos
              </span>
            </div>
            <a
              href={channels[activeChannel]?.channelUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-500 text-white px-3 py-2 rounded-xl text-xs hover:bg-red-600 transition"
            >
              <Youtube className="mr-1" size={16} />
              Subscribe
            </a>
          </div>

          {/* Video Thumbnails */}
          <div className="grid grid-cols-2 gap-3">
            {channels[activeChannel]?.videos?.map((video, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group"
              >
                <img
                  src={video?.thumbnailUrl || ''}
                  alt={video?.title || 'Video thumbnail'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="text-white mb-1" size={32} />
                  <p className="text-white text-xs text-center px-1 line-clamp-2">
                    {video?.title || 'Video title'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop View
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {showHeader && <HeaderSection />}

      <div className="flex space-x-6">
        {/* Channel Selector */}
        <div className="w-1/4 space-y-4">
          {channels.map((channel, index) => (
            <div
              key={channel?.name || index}
              onClick={() => setActiveChannel(index)}
              className={`
                cursor-pointer p-4 rounded-xl transition-all duration-300 flex items-center
                ${
                  activeChannel === index
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white border border-blue-100 text-gray-700 hover:bg-blue-50"
                }
              `}
            >
              <img
                src={channel?.logoUrl || ''}
                alt={`${channel?.name || 'Channel'} Logo`}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="font-semibold">{channel?.name || 'Channel'}</h3>
                <p className="text-sm opacity-70">{channel?.handle || ' '}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Channel Details */}
        <div className="w-3/4">
          <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-md">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <img
                  src={channels[activeChannel]?.logoUrl || ''}
                  alt={`${channels[activeChannel]?.name || 'Channel'} Logo`}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {channels[activeChannel]?.name || 'Channel'}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {channels[activeChannel]?.description || 'No description available'}
                  </p>
                </div>
              </div>
              <a
                href={channels[activeChannel]?.channelUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
              >
                <Youtube className="mr-2" size={20} />
                Subscribe
              </a>
            </div>

            <div className="mt-4 flex space-x-4 text-sm text-gray-700 mb-6">
              <span>
                <strong>{channels[activeChannel]?.subscribers || '0'}</strong>{" "}
                Subscribers
              </span>
              <span>
                <strong>{channels[activeChannel]?.totalVideos || '0'} +</strong> Total
                Videos
              </span>
            </div>

            {/* Video Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {channels[activeChannel]?.videos?.map((video, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden group"
                >
                  <img
                    src={video?.thumbnailUrl || ''}
                    alt={video?.title || 'Video thumbnail'}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="text-white mb-2" size={48} />
                    <p className="text-white text-sm text-center px-2">
                      {video?.title || 'Video title'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeShowcase;
