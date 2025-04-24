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
import MBBSConsultancyFormModal from "./MBBSConsultancyFormModal";
import FeaturedIn from "./FeaturedIn";
import YouTubeShowcase from "./YouTubeShowcase";
import { channels } from "../../data/youtubeChannels";

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
    md: "px-4 sm:px-6 py-2 text-sm",
    lg: "px-6 sm:px-8 py-3 text-base",
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
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group">
    <div className="mb-4 inline-block p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
      {title}
    </h3>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="p-2 sm:p-3 bg-blue-50 rounded-lg">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
      </div>
      <div>
        <div className="text-xl sm:text-3xl font-bold text-gray-900">
          {value}
        </div>
        <div className="text-sm sm:text-base text-gray-600 font-medium">
          {label}
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ title, description, className = "" }) => (
  <div
    className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
  >
    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

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
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
              Why Choose MBBS Routes for{" "}
              <span className="text-blue-600">Your Medical Journey?</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-14 md:mb-24 ">
            {/* Image Section */}
            <div className="relative group">
              {/* Gradient Background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>

              {/* Image Container */}
              <div className="relative mb-6">
                <img
                  src={infoImg}
                  alt="Medical Education"
                  className="rounded-xl shadow-2xl  w-full h-auto max-h-[500px] object-cover object-top"
                />

                {/* Badge */}
                <div className="absolute -bottom-4 sm:-bottom-6 -right-0 md:-right-4 sm:-right-6 bg-white p-3 sm:p-5 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Seminar
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-gray-900">
                        #Our Seminar
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <FeatureCard
                title="AIIMS Delhi Expertise"
                description="Our team is led by professionals from India’s top medical institution, ensuring expert guidance."
                className="bg-blue-50 border-l-4 border-blue-600"
              />
              <FeatureCard
                title="Extensive Network of Top Med Universities"
                description="We partner with top medical universities worldwide to help you choose the best MBBS options."
              />
              <FeatureCard
                title="Personalized Support"
                description="We provide tailored advice to help you choose the best MBBS program based on your goals and preferences."
              />
              <FeatureCard
                title="End-to-End Assistance"
                description="From university selection to visa support, we assist you at every step of your MBBS journey abroad."
              />
            </div>
          </div>

          {/* First YouTube Section - with header */}
          <YouTubeShowcase channels={channels.slice(0, 3)} showHeader={true} />
          
          {/* Second YouTube Section - without header */}
          <YouTubeShowcase channels={channels.slice(3)} showHeader={false} />

          <FeaturedIn/>

          <div className="bg-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white ">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">
              Ready to Begin Your Medical Journey?
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Take the first step towards your medical career. Our expert
              counsellors are here to guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsModalOpen(true)}
              >
                Schedule Free Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://pages.razorpay.com/pl_QC8n1HsnBKPWmH/view",
                    "_blank"
                  )
                }
              >
                Book Your Seat
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
