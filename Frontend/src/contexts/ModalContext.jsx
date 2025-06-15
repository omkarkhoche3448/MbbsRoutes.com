import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isManualTrigger, setIsManualTrigger] = useState(false);

  const openModal = (manual = true) => {
    setIsManualTrigger(manual);
    setIsModalOpen(true);
  };

  const openAutoModal = () => {
    setIsManualTrigger(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsManualTrigger(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        isManualTrigger,
        openModal,
        openAutoModal,
        closeModal,
        setIsModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
