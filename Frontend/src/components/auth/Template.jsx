import React from 'react';

export default function Template({ title, children, imageSrc, imageAlt }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Left: Full-screen image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg?height=1080&width=1080"}
          alt={imageAlt || "MBBS Consultancy"}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-20 flex items-center justify-center">
          <div className="text-white text-center p-6">
            <h2 className="text-4xl font-bold mb-4">MBBS Consultancy</h2>
            <p className="text-xl">Empowering Your Medical Journey Abroad</p>
          </div>
        </div>
      </div>

      {/* Right: Form section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16">
        <div className="w-full max-w-md">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-blue-600 mb-6 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </a>
          <h1 className="text-3xl font-extrabold tracking-tight mb-6">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}