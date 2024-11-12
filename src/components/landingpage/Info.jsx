import React from "react";
import {
  GraduationCap,
  Globe,
  Users,
  BookOpen,
  Award,
  Target,
  ArrowRight,
  Building2,
} from "lucide-react";
// import { Users, Building2 } from "lucide-react";/

// Reusable Card Component
const BenefitCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group">
      <div className="mb-4 inline-block p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

// Reusable Button Component
const Button = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300";
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

// Main Info Section Component
const InfoPart = () => {
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
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content Container */}
          <div className="space-y-6">
            <div>
              <h2 className="text-blue-600 font-semibold text-lg uppercase tracking-wider mb-2">
                Why Choose Us
              </h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Transform Your Medical Career with Expert Guidance
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We provide comprehensive support for aspiring medical
                professionals, helping you navigate the path to a successful
                career in medicine through quality education and expert
                guidance.
              </p>
            </div>
            <div className="space-x-4">
              <Button icon={ArrowRight}>Get Started Now</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-75 blur group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypN8uJrIrW4FQWJT_Tq6_6XayBIcQbikr7Q&s"
                alt="Medical Education"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    15k+
                  </div>
                  <div className="text-sm text-gray-600">
                    Successful Students
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid Section */}
        {/* <div className="space-y-12">
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
        </div> */}
      </div>
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ icon: Icon, value, label }) => {
  return (
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
};

// Reusable Feature Card Component
const FeatureCard = ({ title, description, className = "" }) => {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

// Main Section Component
const Info = () => {
  return (
    <>
      <InfoPart />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
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
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Stats Grid */}
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

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypN8uJrIrW4FQWJT_Tq6_6XayBIcQbikr7Q&s"
                  alt="Medical Education"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover"
                />
                {/* Floating Achievement Card */}
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

            {/* Content Grid */}
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

          {/* Call to Action Section */}
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Begin Your Medical Journey?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards your medical career. Our expert
              counselors are here to guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
