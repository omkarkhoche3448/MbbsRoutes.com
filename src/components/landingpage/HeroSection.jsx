import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown, GraduationCap, ArrowDown } from 'lucide-react';

// Reusable Button Component
const Button = ({ 
  variant = 'primary', 
  children, 
  onClick, 
  className = '',
  icon: Icon
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 shadow-lg",
    secondary: "bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 hover:scale-105 shadow-md",
    outline: "bg-transparent hover:bg-white/10 text-white border-2 border-white hover:scale-105"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

// Reusable Animated Text Component
const AnimatedText = ({ text, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}>
      {text}
    </div>
  );
};

// Reusable Country Selector Component
const CountrySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const countries = [
    { name: 'United States', code: 'US' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'Canada', code: 'CA' },
    { name: 'Australia', code: 'AU' },
    { name: 'New Zealand', code: 'NZ' }
  ];

  return (
    <div className="relative">
      <Button 
        variant="outline" 
        onClick={() => setIsOpen(!isOpen)}
        icon={Globe}
      >
        Select Country
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {isOpen && (
        <div className="absolute mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-10">
          {countries.map((country) => (
            <button
              key={country.code}
              className="flex items-center w-full px-4 py-2 hover:bg-gray-50 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <img
                src={`https://flagcdn.com/24x18/${country.code.toLowerCase()}.png`}
                alt={`${country.name} flag`}
                className="w-6 mr-2"
              />
              {country.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90" />
        <img
          src="/api/placeholder/1920/1080"
          alt="Global Education Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <AnimatedText
            text={
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Your Path to
                <span className="text-blue-400"> Global Education </span>
                Starts Here
              </h1>
            }
            delay={300}
          />

          {/* Subheadline */}
          <AnimatedText
            text={
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Connecting Students with the Best Opportunities Worldwide
              </p>
            }
            delay={600}
          />

          {/* Icon */}
          <AnimatedText
            text={
              <div className="flex justify-center">
                <GraduationCap className="w-16 h-16 text-blue-400 animate-bounce" />
              </div>
            }
            delay={900}
          />

          {/* CTA Buttons */}
          <AnimatedText
            text={
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button variant="primary">
                  Get Started
                </Button>
                <Button variant="secondary">
                  Learn More
                </Button>
                <CountrySelector />
              </div>
            }
            delay={1200}
          />

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;