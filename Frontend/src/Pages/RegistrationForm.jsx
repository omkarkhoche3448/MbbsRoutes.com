import React from 'react';
import MBBSConsultancyFormModal from '../components/landingpage/MBBSConsultancyFormModal';
import { useModal } from '../contexts/ModalContext';
import HeroSection from '../components/landingpage/HeroSection';
import Navbar from '../components/common/Navbar';

const RegistrationForm = () => {
  const { closeModal } = useModal();

  const handleClose = () => {
    closeModal();
    window.location.href = '/';
  };
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Navbar />
        <HeroSection />
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <MBBSConsultancyFormModal isOpen={true} onClose={handleClose} isManualTrigger={true} />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;