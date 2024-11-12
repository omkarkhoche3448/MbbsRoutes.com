import { useState } from 'react';
import { 
  User, Mail, Phone, Calendar, Globe, 
  GraduationCap, FileText, MessageSquare, 
  HeartPulse, Stethoscope 
} from 'lucide-react';

const MBBSConsultancyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    country: '',
    education: '',
    preferredCountry: '',
    budget: '',
    message: ''
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const preferredCountries = [
    'Russia', 'Ukraine', 'Philippines', 'Kazakhstan',
    'Georgia', 'China', 'Bangladesh', 'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Information */}
        <div className="bg-gradient-to-br from-teal-600 to-blue-600 p-8 text-white md:w-2/5 relative overflow-hidden">
          {/* Medical-themed decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <Stethoscope className="absolute top-10 right-10 w-32 h-32" />
            <HeartPulse className="absolute bottom-10 left-10 w-24 h-24" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">MBBS Abroad Consultancy</h2>
            <p className="mb-8 text-white/90">
              Your journey to becoming a medical professional starts here. Let us guide you through the process of studying MBBS abroad.
            </p>
            
            {/* Key Benefits */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Top Medical Universities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>MCI/WHO Approved</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Global Recognition</span>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="font-semibold mb-4">Contact Details:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>admissions@mbbsconsultancy.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-8 md:w-3/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Request Consultation
            </h3>

            {/* Personal Information */}
            <div className="space-y-4">
              {/* Name Input */}
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
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    placeholder="Your full name"
                    required
                  />
                  <User className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white"
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
                      className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                      placeholder="Your phone number"
                      required
                    />
                    <Phone className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
              </div>

              {/* Age and Education */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white"
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
                      className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                      placeholder="e.g., 12th Science"
                      required
                    />
                    <GraduationCap className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
              </div>

              {/* Preferred Country */}
              <div className="relative">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Preferred Country for MBBS
                </label>
                <div className="relative">
                  <select
                    name="preferredCountry"
                    value={formData.preferredCountry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    required
                  >
                    <option value="">Select a country</option>
                    {preferredCountries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <Globe className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Message */}
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
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-gray-50/50 hover:bg-white resize-none"
                    placeholder="Any specific requirements or questions?"
                  />
                  <MessageSquare className="w-5 h-5 text-gray-400 absolute left-4 top-6" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:from-teal-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Request Free Consultation</span>
              <HeartPulse className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MBBSConsultancyForm;