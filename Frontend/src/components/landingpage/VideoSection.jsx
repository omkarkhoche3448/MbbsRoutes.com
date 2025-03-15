import VideoCard from "../../components/common/VideoCard";

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
    title: "THE LIFE OF INDIAN MBBS IN RUSSIA | FEES, NEET CUTOFF",
    thumbnail: "https://i.ytimg.com/vi/7HXUz3fDWjA/maxresdefault.jpg",
    channel: "MBBS Routes | Path to Become Doctor In Abroad",
    views: "12K views",
    timestamp: "2 weeks ago",
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
    title:
      "MBBS India vs Abroad: Full Comparison (Cost, Quality, Opportunities) AIR 1 @soyebaftabaiims",
    thumbnail: "https://i.ytimg.com/vi/t9flKCS2fNg/maxresdefault.jpg",
    channel: "MBBS Routes | Path to Become Doctor In Abroad",
    views: "47K views",
    timestamp: "7 hours ago",
  },
];

export default function VideoSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-[60px] relative mt-2 md:mt-0">
      {/* Header */}
      <div className="flex items-center">
        {/* <h2 className=""> </h2> */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900">
          Discover and <span className="text-blue-600"> Learn</span>
        </h2>
        {/* <img src="/_next/static/media/bulb.3fe95fed.svg" alt="bulb" className="w-[22px] md:w-[41px] ml-2" /> */}
      </div>

      {/* <img src="/_next/static/media/zigzag.d1f61145.svg" alt="zigzag" className="w-[178px] md:w-[284px]" /> */}

      <h3 className="text-gray-600 mt-2 md:mt-4 text-sm font-medium md:text-base max-w-[80%] pb-4 md:pb-6">
        Explore and Learn with MbbsRoutes about getting started on your journey
        to Study Abroad
      </h3>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
