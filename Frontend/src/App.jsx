import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
// import ChatBot from "./components/chatBotui/ChatBot";
import Consultancypages from "./Pages/Consultancypages";
import Landingpage from "./Pages/Landingpage";
import AboutPage from "./Pages/AboutPage";
import MBBSEducationAbroad from "./Pages/MBBSEducationAbroad";
// import CollegeRecommendationpage from "./Pages/CollegeRecommendationpage";
import Footer from "./components/common/Footer";
import CountryPage from "./Pages/CountryPage";
import WhatsApp from "./components/common/WhatsApp";
import NotFound from "./Pages/NotFound";
import ContactPage from "./Pages/ContactPage";
import UniversityPage from "./Pages/UniversityPage";
import MBBSConsultancyFormModal from "./components/landingpage/MBBSConsultancyFormModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/consultancy/:countryName/mbbs" element={<Consultancypages />}/>
        {/* <Route path="/about-us" element={<AboutPage />} /> */}
        <Route path="/mbbs-in-abroad" element={<MBBSEducationAbroad />} />
        <Route path="/country/:countryName" element={<CountryPage />} />
        <Route path="/country/:countryName/universities" element={<UniversityPage />}/>
        <Route path="/contact-us" element={<ContactPage />} />
        {/* <Route path="/mbbs-in-abroad/college-recomendation" element={<CollegeRecommendationpage />} */}
        {/* <Route path="/signin" element={<SignIn />} />*/}
        {/* <Route path="/signup" element={<SignUp />} />  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <ChatBot /> */}
      <WhatsApp />
      <Footer />

      <MBBSConsultancyFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
