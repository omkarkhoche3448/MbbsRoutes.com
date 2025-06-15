import React from 'react';
import MBBSConsultancyFormModal from '../components/landingpage/MBBSConsultancyFormModal';
import { useModal } from '../contexts/ModalContext';

const RegistrationForm = () => {
  const { closeModal } = useModal();

  const handleClose = () => {
    closeModal();
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <MBBSConsultancyFormModal isOpen={true} onClose={handleClose} isManualTrigger={true} />
      </div>
    </div>
  );
};

export default RegistrationForm;