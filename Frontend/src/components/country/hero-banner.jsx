import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button";
import MBBSConsultancyFormModal from "../landingpage/MBBSConsultancyFormModal";
import {
  CityIcon,
  LanguageIcon,
  PopulationIcon,
  WeatherIcon,
  CurrencyIcon,
  UniversityIcon,
  PhoneIcon,
  ExchangeIcon,
  HomeIcon,
} from "./icons";
import Aeroplane from "../../assets/aeroplane.svg";
import FlyAbroad from "../../assets/FlyAbroad.svg";

// Hero Banner Component - Redesigned with full-width image and overlay text
export const HeroBanner = ({ title, backgroundImage, setIsModalOpen }) => {
  return (
    <div className="relative mt-20">

      {/* Mobile View */}
      <div className="md:hidden">
        <div 
          className="h-[400px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div 
          className="h-[500px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-16 max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6 max-w-xl leading-tight">{title}</h1>
            <p className="text-xl text-gray-100 mb-8 max-w-lg">
              Begin your medical journey abroad with comprehensive guidance and support
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};