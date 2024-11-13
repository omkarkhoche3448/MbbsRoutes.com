import React, { useState } from 'react'
import { MapPin, DollarSign, Users, TrendingUp, GraduationCap, ExternalLink } from 'lucide-react'

const medicalCollegeData = [
  {
    id: 1,
    name: "Harvard Medical School",
    location: "Boston, MA",
    tuition: 63000,
    acceptanceRate: 3.9,
    studentPopulation: 715,
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
  },
  {
    id: 2,
    name: "Stanford University School of Medicine",
    location: "Stanford, CA",
    tuition: 62000,
    acceptanceRate: 2.5,
    studentPopulation: 520,
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
  },
  {
    id: 3,
    name: "Johns Hopkins University School of Medicine",
    location: "Baltimore, MD",
    tuition: 60000,
    acceptanceRate: 10.5,
    studentPopulation: 482,
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
  },
  {
    id: 4,
    name: "University of California, San Francisco School of Medicine",
    location: "San Francisco, CA",
    tuition: 55000,
    acceptanceRate: 3.8,
    studentPopulation: 688,
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
  },
  {
    id: 5,
    name: "Columbia University Vagelos College of Physicians and Surgeons",
    location: "New York, NY",
    tuition: 63000,
    acceptanceRate: 7.1,
    studentPopulation: 600,
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
  }
]

export default function MedicalCollegeRecommendationPage() {
  const [studentData, setStudentData] = useState({
    gpa: '',
    mcat: ''
  })
  const [recommendations, setRecommendations] = useState([])
  const [showRecommendations, setShowRecommendations] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setStudentData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate KNN algorithm by filtering and sorting colleges
    const filteredColleges = medicalCollegeData.filter(college => 
      college.acceptanceRate <= 10
    )
    
    const scoredColleges = filteredColleges.map(college => ({
      ...college,
      score: calculateMatchScore(college, studentData)
    }))

    const sortedColleges = scoredColleges.sort((a, b) => b.score - a.score)
    setRecommendations(sortedColleges.slice(0, 3))
    setShowRecommendations(true)
  }

  const calculateMatchScore = (college, student) => {
    let score = 0
    if (student.gpa >= 3.6) {
      score += 50
    }
    if (student.mcat >= 510) {
      score += 50
    }
    score += (1 - college.acceptanceRate / 100) * 50 // Lower acceptance rate gives higher score
    return score
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Medical College Recommendation</h1>
      
      {!showRecommendations ? (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Enter Your Information</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="gpa" className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="mcat" className="block text-sm font-medium text-gray-700 mb-1">MCAT Score</label>
              <input
                type="number"
                id="mcat"
                name="mcat"
                min="400"
                max="528"
                required
                value={studentData.mcat}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Get Recommendations
          </button>
        </form>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Your Medical College Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map(college => (
              <div key={college.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48">
                  <img src={college.imageUrl} alt={college.name} className="w-full h-full object-cover" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{college.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{college.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-green-500 mr-1" />
                      <span className="font-semibold text-gray-700">${college.tuition.toLocaleString()}/year</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-blue-500 mr-1" />
                      <span className="font-semibold text-gray-700">{college.studentPopulation.toLocaleString()} students</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-600 mb-1">Match Score</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${college.score}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-sm font-semibold text-blue-600 mt-1">{college.score.toFixed(1)}%</div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center text-gray-600 mb-2">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="text-sm">Acceptance Rate: {college.acceptanceRate}%</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span className="text-sm">Medical School</span>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowRecommendations(false)}
            className="mt-8 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Back to Form
          </button>
        </div>
      )}
    </div>
  )
}