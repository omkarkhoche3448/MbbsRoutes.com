import React, { useState } from "react";
import Modal from "./Modal";
import {
    Users,
    User,
    BookOpen,
    Award,
    Target,
    Mail,
    Phone,
    Calendar,
    Globe,
    GraduationCap,
    FileText,
    MessageSquare,
    HeartPulse,
    Stethoscope,
    ArrowRight,
    Building2,
    X,
  } from "lucide-react";
const MBBSConsultancyFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    country: "",
    education: "",
    preferredCountry: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const preferredCountries = [
    "Russia",
    "Ukraine",
    "Philippines",
    "Kazakhstan",
    "Georgia",
    "China",
    "Bangladesh",
    "Other",
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Schedule a Consultation">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
          Request Consultation
        </h3>

        <div className="space-y-4">
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 sm:py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                placeholder="Your full name"
                required
              />
              <User className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  placeholder="your@email.com"
                  required
                />
                <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Phone
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  placeholder="Your phone number"
                  required
                />
                <Phone className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Age
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  placeholder="Your age"
                  required
                />
                <Calendar className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Current Education
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  placeholder="e.g., 12th Science"
                  required
                />
                <GraduationCap className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Preferred Country for MBBS
            </label>
            <div className="relative">
              <select
                name="preferredCountry"
                value={formData.preferredCountry}
                onChange={handleChange}
                className="w-full px-4 py-2 sm:py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                required
              >
                <option value="">Select a country</option>
                {preferredCountries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <Globe className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div className="relative">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Additional Information
            </label>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 sm:py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white resize-none"
                placeholder="Any specific requirements or questions?"
              />
              <MessageSquare className="w-5 h-5 text-gray-400 absolute left-4 top-6" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 sm:py-4 px-6 rounded-lg font-medium hover:from-teal-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 shadow-lg"
        >
          <span>Request Free Consultation</span>
          <HeartPulse className="w-5 h-5" />
        </button>
      </form>
    </Modal>
  );
};

export default MBBSConsultancyFormModal;
