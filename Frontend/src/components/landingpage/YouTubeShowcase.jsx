import React, { useState, useEffect } from "react";
import { Play, Youtube, ChevronLeft, ChevronRight } from "lucide-react";

// Note: Channel data remains the same as in the original implementation
const channels = [
  {
    id: "UCgxWVz0CSbqZvCXUKs6y9uw", // Soyeb Aftab's channel ID
    name: "Soyeb Aftab",
    handle: "@soyebaftabaiims",
    description:
      "AIIMS medical aspirant and top NEET performer sharing educational insights, medical preparation strategies, and motivational content.",
    logoUrl:
      "https://yt3.googleusercontent.com/qzzAY_ylmZ6viFCI_30_ol1dqM1NwGOa3gvS1ybB_ii7AH94U-fQbn4rWt8lU8t3339CJJv2Fwg=s160-c-k-c0x00ffffff-no-rj",
    channelUrl: "https://www.youtube.com/@soyebaftabaiims",
    subscribers: "139K",
    totalVideos: 260,
    videos: [
      {
        title:
          "How I Scored 720/720 & All India Rank 1 in NEET | My Story | How You Can Learn From It For Your Prep",
        thumbnailUrl:
          "https://i.ytimg.com/vi/sWp1lQrfd4g/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD2KDnesi5BAIXengW8tRtyV93d8A",
      },
      {
        title:
          "45 Chapters = 600+ Marks🔥| NEET Ultra-High Yield Chapters 🚀|Only Half Syllabus = 600+|Soyeb Aftab",
        thumbnailUrl:
          "https://i.ytimg.com/vi/uN7v-xN5Lhc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCVExEjwJ5svjW_88BJt_a02qdH1g",
      },
      {
        title:
          "A Day In My Life as an AIIMS Delhi MBBS Student || Soyeb Aftab || NEET 2020 AIR 1",
        thumbnailUrl:
          "https://i.ytimg.com/vi/keuwKH5LMDI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC9Q3LgUZYkuxTBzWgStkaU6AdM7g",
      },
    ],
  },
  {
    id: "UCRkO8VrqyEzxWYRGbhmcwUg", // Deepak AIIMS channel ID
    name: "Deepak AIIMS",
    handle: "@DeepakAIIMSonian",
    description:
      "Medical education content creator focusing on NEET preparation, medical insights, and student success strategies.",
    logoUrl:
      "https://yt3.googleusercontent.com/etCknj_o65LeF95DVxpFVSIL7FwuwSLzdE_07wKUmMxS38D6tTjm9mrezqxipyI4CV4YaQ65Ew=s160-c-k-c0x00ffffff-no-rj",
    channelUrl: "https://www.youtube.com/@DeepakAIIMSonian",
    subscribers: "111K",
    totalVideos: 383,
    videos: [
      {
        title:
          "SAFE SCORE FOR GOVT MEDICAL COLLEGE ? CUT OFF FOR NEET 2025 Is HERE  ‼️",
        thumbnailUrl:
          "https://i.ytimg.com/vi/Eqi8Tl8YHSY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJexWGWod-q6Q1JVs43xKftZFX1w",
      },
      {
        title:
          "A day in my life in AIIMS DELHI MBBS life| #aiimsdelhi #aiims #mbbs #aiimslifestyle #neet #neet2024",
        thumbnailUrl:
          "https://i.ytimg.com/vi/X8gIEUaflIU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtS1CVp-hh1n1Kq_U8o0jMZ-GcmQ",
      },
      {
        title:
          "BEST STRATEGY FOR DROPPERS NEET2025 🔥COMPLETE MONTHLY PLAN 🤩#neet2025 #aiims #neet #droppers",
        thumbnailUrl:
          "https://i.ytimg.com/vi/AN_OKY_g74Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-m_S4viIzu_UNKo25M_RXcwBthg",
      },
    ],
  },
  {
    id: "UCXXGbEr2PMqh1rd4UtK4jVQ", // Atharva Aggarwal channel ID
    name: "Atharva Aggarwal",
    handle: "@AtharvaAggarwal",
    description:
      "Medical student and content creator sharing academic journey, medical education tips, and motivational content for aspiring doctors.",
    logoUrl:
      "https://yt3.googleusercontent.com/mQftRm-vJQEzd0mcmahx2HC8FKxC49vm8HB4BqhvH-FT8p-LRCgmXVM0E3r0eW3MiNZtgCUO2A=s160-c-k-c0x00ffffff-no-rj",
    channelUrl: "https://www.youtube.com/@AtharvaAggarwal",
    subscribers: "230K",
    totalVideos: 964,
    videos: [
      {
        title: "0 to 500+ marks in 45 Days🚀| NEET 2025 | Detailed Plan",
        thumbnailUrl:
          "https://i.ytimg.com/vi/WkP6Zk_2ZB8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZc6M8lbdCSV8KbEGWsIX2RuhIzw",
      },
      {
        title: "AIIMS Cut-off😱 | NEET 2024/25 | Shocking Analysis",
        thumbnailUrl:
          "https://i.ytimg.com/vi/GR5VVjD-Fkc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbGWMp8O_CWK-uvENMDDpYqFQhbQ",
      },
      {
        title:
          "Salary of Doctors/Med Students at AIIMS🤑 | MBBS / PG / Post PG | Real Truth😱",
        thumbnailUrl:
          "https://i.ytimg.com/vi/w3sjnAFM1AI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ7pRCd5eHokExaaraxdCtB2TrLw",
      },
    ],
  },
];
const YouTubeShowcase = () => {
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

  // Auto-cycle channels
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveChannel((prevChannel) => (prevChannel + 1) % channels.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, []);

  // Handle channel navigation for mobile
  const navigateChannel = (direction) => {
    setActiveChannel((prev) => {
      if (direction === "next") {
        return (prev + 1) % channels.length;
      } else {
        return prev === 0 ? channels.length - 1 : prev - 1;
      }
    });
  };

  if (isMobile) {
    return (
      <div className="max-w-full mx-auto px-4 py-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Medical <span className="text-blue-600"> Creators Spotlight</span>
          </h2>
          <p className="text-gray-600 text-sm max-w-full">
            Explore inspiring medical education content from top performers
          </p>
        </div>

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
                src={channels[activeChannel].logoUrl}
                alt={`${channels[activeChannel].name} Logo`}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  {channels[activeChannel].name}
                </h3>
                <p className="text-xs text-gray-500">
                  {channels[activeChannel].handle}
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
              {channels[activeChannel].description}
            </p>
            <div className="flex justify-center space-x-4 text-xs text-gray-700 mb-3">
              <span>
                <strong>{channels[activeChannel].subscribers}</strong>{" "}
                Subscribers
              </span>
              <span>
                <strong>{channels[activeChannel].totalVideos}+</strong> Total
                Videos
              </span>
            </div>
            <a
              href={channels[activeChannel].channelUrl}
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
            {channels[activeChannel].videos.map((video, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group"
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="text-white mb-1" size={32} />
                  <p className="text-white text-xs text-center px-1 line-clamp-2">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop View (unchanged from previous implementation)
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our YouTube Section: Medical
          <span className="text-blue-600"> Creators Spotlight</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore inspiring medical education content from top performers and
          educators who are transforming medical learning.
        </p>
      </div>

      <div className="flex space-x-6">
        {/* Channel Selector */}
        <div className="w-1/4 space-y-4">
          {channels.map((channel, index) => (
            <div
              key={channel.name}
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
                src={channel.logoUrl}
                alt={`${channel.name} Logo`}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="font-semibold">{channel.name}</h3>
                <p className="text-sm opacity-70">{channel.handle}</p>
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
                  src={channels[activeChannel].logoUrl}
                  alt={`${channels[activeChannel].name} Logo`}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {channels[activeChannel].name}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {channels[activeChannel].description}
                  </p>
                </div>
              </div>
              <a
                href={channels[activeChannel].channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition "
              >
                <Youtube className="mr-2" size={20} />
                Subscribe
              </a>
            </div>

            <div className="mt-4 flex space-x-4 text-sm text-gray-700 mb-6">
              <span>
                <strong>{channels[activeChannel].subscribers}</strong>{" "}
                Subscribers
              </span>
              <span>
                <strong>{channels[activeChannel].totalVideos} +</strong> Total
                Videos
              </span>
            </div>

            {/* Video Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {channels[activeChannel].videos.map((video, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden group"
                >
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="text-white mb-2" size={48} />
                    <p className="text-white text-sm text-center px-2">
                      {video.title}
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
