import React from 'react';
import MBBSConsultancyFormModal from '../components/landingpage/MBBSConsultancyFormModal';

const RegistrationForm = () => {
  const handleClose = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <MBBSConsultancyFormModal isOpen={true} onClose={handleClose} />
      </div>
    </div>
  );
};

export default RegistrationForm;