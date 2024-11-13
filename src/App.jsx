import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import ConsultancyPage from "./pages/ConsultancyPage";
import Landingpage from "./pages/Landingpage";
import AboutPage from "./pages/AboutPage";
import MBBSEducationAbroad from "./pages/MBBSEducationAbroad";
import CollegeRecommendationpage from "./pages/CollegeRecommendationpage";
import Footer from "./components/common/Footer"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route
            path="/consultancy/:countryName/mbbs"
            element={<ConsultancyPage />}
          />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/mbbs-in-abroad" element={<MBBSEducationAbroad />} />
          <Route path ="/mbbs-in-abroad/college-recomendation" element={<CollegeRecommendationpage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
