import React, { useState, useEffect } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import ReferralConsultationFormModal from "../components/landingpage/ReferralConsultationFormModal";
import HeroSection from '../components/landingpage/HeroSection';
import Navbar from '../components/common/Navbar';

const ReferralForm = () => {
  const [searchParams] = useSearchParams();
  const [isValidRef, setIsValidRef] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const validateReferral = async () => {
      try {
        const ref = searchParams.get("ref");
        if (!ref) {
          setIsLoading(false);
          return;
        }
        setIsValidRef(true);
      } catch (error) {
        console.error("Error validating referral:", error);
      } finally {
        setIsLoading(false);
      }
    };

    validateReferral();
  }, [searchParams]);

  const handleClose = () => {
    setShowModal(false);
    window.location.href = "/";
  };
  if (isLoading) {
    return (
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Navbar />
          <HeroSection />
        </div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (!isValidRef) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="relative min-h-screen">
      {/* Navbar and Hero section as background */}
      <div className="absolute inset-0 z-0">
        <Navbar />
        <HeroSection />
      </div>
      
      {/* Form overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <ReferralConsultationFormModal isOpen={showModal} onClose={handleClose} isManualTrigger={true} />
      </div>
    </div>
  );
};

export default ReferralForm;
