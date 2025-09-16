"use client"
import { Play } from "lucide-react"



export default function VideoCard({ video }) {
  const handleClick = () => {
    window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")
  }

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        <img
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="w-6 h-6 text-black fill-black ml-1" />
          </div>
        </div>

        {/* Video Duration (optional) */}
        {/* <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          10:45
        </div> */}
      </div>

      {/* Video Info */}
      <div className="mt-3 flex">
        {/* Title and Meta */}
        <div className="flex-1">
          <h3 className="font-medium text-base line-clamp-2 group-hover:text-blue-600">{video.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{video.channel}</p>
          {/* <div className="text-gray-600 text-sm flex items-center">
            <span>{video.views}</span>
            <span className="mx-1">•</span>
            <span>{video.timestamp}</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

