import React from "react";
import HeroSection from "../components/landingpage/HeroSection";
import InfoSection from "../components/landingpage/InfoSection";
import Info from "../components/landingpage/Info";
import Footer from "../components/common/Footer";
import FlagBanner from "../components/landingpage/FlagBanner";
import FAQSection from "../components/common/FAQSection";

function Landingpage() {
  return (
    <div>
      <HeroSection />
      <FlagBanner />
      <InfoSection />
      <Info />
      <FAQSection />
    </div>
  );
}

export default Landingpage;
