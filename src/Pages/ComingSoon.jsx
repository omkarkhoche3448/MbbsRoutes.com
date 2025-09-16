import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-6xl font-bold text-blue-600">Coming Soon</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Country Data Information Hub
      </h2>
      <p className="text-gray-600 mt-2">
        We're working on bringing you comprehensive country data information.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-medium shadow-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ComingSoon;