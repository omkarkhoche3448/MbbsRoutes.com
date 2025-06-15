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
import ReferralForm from "./pages/ReferralForm";
import { ModalProvider, useModal } from "./contexts/ModalContext";

function AppContent() {
  const { isModalOpen, openAutoModal, closeModal, isManualTrigger } = useModal();

  useEffect(() => {
    const currentPath = window.location.pathname;
    // Don't set timer on registration, form pages, or any manual trigger pages
    if (!["/registration", "/form"].includes(currentPath)) {
      const timer = setTimeout(() => {
        openAutoModal(); // Use openAutoModal instead of openModal
      }, 8000);

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
