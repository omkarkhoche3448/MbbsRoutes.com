import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Consultancypages from "./Pages/Consultancypages";
import Landingpage from "./Pages/Landingpage";
import AboutPage from "./Pages/AboutPage";
import MBBSEducationAbroad from "./Pages/MBBSEducationAbroad";
import Footer from "./components/common/Footer";
import CountryPage from "./Pages/CountryPage";
import WhatsApp from "./components/common/WhatsApp";
import NotFound from "./Pages/NotFound";
import ContactPage from "./Pages/ContactPage";
import UniversityPage from "./Pages/UniversityPage";
import MBBSConsultancyFormModal from "./components/landingpage/MBBSConsultancyFormModal";
import RegistrationForm from "./Pages/RegistrationForm";
import ReferralForm from "./Pages/ReferralForm";
import { ModalProvider, useModal } from "./contexts/ModalContext";

function AppContent() {
  const { isModalOpen, openAutoModal, closeModal, isManualTrigger } = useModal();

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (!["/registration", "/form"].includes(currentPath)) {
      
      // Check if user has seen modal before and not filled form
      const modalSeen = localStorage.getItem('mbbsModalSeen') === 'true';
      const formSubmitted = localStorage.getItem('mbbsFormSubmitted') === 'true';
      
      // If form is submitted, don't show auto-modal at all
      if (formSubmitted) {
        return;
      }
      
      // Determine timer delay based on whether user has seen modal before
      const delay = modalSeen ? 15000 : 8000; // 15 seconds if seen before, 8 seconds for first time
      
      // console.log(`Setting auto-modal timer: ${delay}ms (${delay/1000}s) - First time: ${!modalSeen}`);
      
      const timer = setTimeout(() => {
        openAutoModal();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [openAutoModal]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/consultancy/:countryName/mbbs" element={<Consultancypages />}/>
        <Route path="/mbbs-in-abroad" element={<MBBSEducationAbroad />} />
        <Route path="/country/:countryName" element={<CountryPage />} />
        <Route path="/country/:countryName/universities" element={<UniversityPage />}/>
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/form" element={<ReferralForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Only show Navbar and Footer if not on registration or form page */}
      {!["/registration", "/form"].includes(window.location.pathname) && (
        <>
          <Navbar />
          <Footer />
        </>
      )}

      {/* Global consultation modal - COMPLETELY EXCLUDE from registration and form pages */}
      {!["/registration", "/form"].includes(window.location.pathname) && (
        <MBBSConsultancyFormModal
          isOpen={isModalOpen}
          onClose={closeModal}
          isManualTrigger={isManualTrigger} // Now uses the context value
        />
      )}
      
      <WhatsApp />
    </div>
  );
}

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}

export default App;
