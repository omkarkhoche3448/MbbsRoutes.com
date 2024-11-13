import React, { useState } from "react";
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
import infoImg from "../../assets/LandingImg.png";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-300";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 hover:bg-blue-50",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white/10",
  };
  const sizeClasses = {
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group">
    <div className="mb-4 inline-block p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-blue-50 rounded-lg">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <div>
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        <div className="text-gray-600 font-medium">{label}</div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ title, description, className = "" }) => (
  <div
    className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
  >
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const MBBSConsultancyFormModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

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
  const handleClose = () => {
    setIsModalOpen(false); 
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
    <Modal
      isOpen={isModalOpen}
      onClose={handleClose}
      title="Schedule a Consultation"
    >
      <form onSubmit={handleSubmit} className="space-y-6 ">
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
                {preferredCountries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
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
    </Modal>
  );
};

export default function Info() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: GraduationCap,
      title: "Quality Education",
      description:
        "Access top-tier medical education from renowned institutions worldwide.",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description:
        "Earn a degree that's recognized and respected internationally.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Receive personalized support from experienced education consultants.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Programs",
      description: "Choose from a wide range of specialized medical programs.",
    },
    {
      icon: Award,
      title: "Career Support",
      description: "Get assistance with placements and career development.",
    },
    {
      icon: Target,
      title: "Focused Approach",
      description:
        "Benefit from our structured and result-oriented methodology.",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Medical Education
              <span className="text-blue-600"> Worldwide</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join thousands of successful medical professionals who started
              their journey with us. Experience world-class education with
              personalized guidance.
            </p>
            <Button size="lg" onClick={() => setIsModalOpen(true)}>
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <StatCard icon={Users} value="15,000+" label="Students Enrolled" />
            <StatCard
              icon={Building2}
              value="50+"
              label="Partner Universities"
            />
            <StatCard icon={Award} value="98%" label="Success Rate" />
            <StatCard
              icon={GraduationCap}
              value="25+"
              label="Countries Served"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
                <img
                  src={infoImg}
                  alt="Medical Education"
                  className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Ranked</div>
                      <div className="text-xl font-bold text-gray-900">
                        #1 in Service
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureCard
                title="Expert Guidance"
                description="Get personalized counseling from experienced medical education consultants."
                className="bg-blue-50 border-l-4 border-blue-600"
              />
              <FeatureCard
                title="Global Recognition"
                description="Study at internationally recognized universities with world-class facilities."
              />
              <FeatureCard
                title="Career Support"
                description="Comprehensive assistance with placements and career development."
              />
              <FeatureCard
                title="Visa Assistance"
                description="Complete support for visa application and documentation process."
              />
            </div>
          </div>

          <div className="space-y-12 mb-20">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Benefits for Your Medical Journey
              </h2>
              <p className="text-gray-600 text-lg">
                Discover how our expertise and support can help you achieve your
                medical education goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Begin Your Medical Journey?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards your medical career. Our expert
              counselors are here to guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsModalOpen(true)}
              >
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
      <MBBSConsultancyFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
