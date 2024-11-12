import React from "react";
import Navbar from "./components/common/Navbar";
import HeroSection from "./components/landingpage/HeroSection";
import InfoSection from "./components/landingpage/InfoSection";
import Info from "./components/landingpage/Info";
import Footer from "./components/common/Footer";
import ConsultingContact from "./components/landingpage/ConsultingContact";
import FlagBanner from "./components/landingpage/FlagBanner";
import MBBSConsultancyForm from "./components/common/MBBSConsultancyForm";
import FAQSection from "./components/common/FAQSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FlagBanner />
      <InfoSection />
      <Info />
      <ConsultingContact />
      <MBBSConsultancyForm />
      <FAQSection />
      <Footer />
    </div>
  );
}
export default App;
