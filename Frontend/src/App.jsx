import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import ChatBot from "./components/chatBotui/ChatBot";
import Consultancypages from "./Pages/Consultancypages";
import Landingpage from "./Pages/Landingpage";
import AboutPage from "./Pages/AboutPage";
import MBBSEducationAbroad from "./Pages/MBBSEducationAbroad";
import CollegeRecommendationpage from "./Pages/CollegeRecommendationpage";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route
            path="/consultancy/:countryName/mbbs"
            element={<Consultancypages />}
          />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/mbbs-in-abroad" element={<MBBSEducationAbroad />} />
          <Route
            path="/mbbs-in-abroad/college-recomendation"
            element={<CollegeRecommendationpage />}
          />
        </Routes>
        <ChatBot />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
