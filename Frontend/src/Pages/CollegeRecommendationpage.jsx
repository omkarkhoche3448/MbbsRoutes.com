import React, { useState } from "react";
import {
  MapPin,
  DollarSign,
  Users,
  TrendingUp,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

const ProgressBar = ({ value, max = 100 }) => {
  const percentage = (value / max) * 100
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  )
}

const InfoItem = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center">
    <Icon size={24} className="text-gray-400 mb-1" />
    <span className="text-sm font-medium text-gray-700">{value}</span>
    <span className="text-xs text-gray-500">{label}</span>
  </div>
)

const RecommendationCard = ({ data }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-white to-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={data.imageUrl}
          alt={data.name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-4">
            <h3 className="text-xl font-bold text-white mb-1">{data.name}</h3>
            <div className="flex items-center text-gray-200">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{data.location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <TrendingUp size={20} className="text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-800">{data.score.toFixed(2)}</span>
          </div>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(data.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ExternalLink size={20} />
          </a>
        </div>
        <ProgressBar value={data.score} max={100} />
        <div className="mt-6 grid grid-cols-3 gap-4">
          <InfoItem
            icon={Users}
            value={data.studentPopulation.toLocaleString()}
            label="Students"
          />
          <InfoItem
            icon={DollarSign}
            value={`$${(data.tuition / 1000).toFixed(0)}k`}
            label="Tuition"
          />
          <InfoItem
            icon={GraduationCap}
            value={`${data.acceptanceRate}%`}
            label="Acceptance"
          />
        </div>
      </div>
    </div>
  )
}

export default function CollegeRecommendationpage() {
  const [studentData, setStudentData] = useState({
    gpa: "",
    mcat: "",
  });
  const [recommendations, setRecommendations] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:5000/api/recommendations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gpa: parseFloat(studentData.gpa),
            mcat: parseFloat(studentData.mcat),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
      }

      const data = await response.json();
      setRecommendations(data);
      setShowRecommendations(true);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to get recommendations. Please try again.");
    }
  };

  return (
    <div className="bg-white min-h-fit p-8 mb-24">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Medical College Recommendation
      </h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {!showRecommendations ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto lg:mt-24"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Enter Your Information
          </h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="gpa"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                GPA
              </label>
              <input
                type="number"
                id="gpa"
                name="gpa"
                step="0.01"
                min="0"
                max="4"
                required
                value={studentData.gpa}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="mcat"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                MCAT Score
              </label>
              <input
                type="number"
                id="mcat"
                name="mcat"
                min="400"
                max="528"
                required
                value={studentData.mcat}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Get Recommendations
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-row flex-wrap  mx-auto justify-center items-center gap-16 lg:mt-24 ">
          {recommendations.map((recommendation) => (
            <RecommendationCard key={recommendation.id} data={recommendation} />
          ))}
        </div>
      )}
    </div>
  );
}