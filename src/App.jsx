import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import ChatBot from "./components/chatBotui/ChatBot";
import Consultancypages from "./pages/Consultancypages";
<<<<<<< HEAD
// import Landingpage from "./pages/Landingpage";
=======
import Landingpage from "./pages/Landingpage";
>>>>>>> 19d00fab45cd944c9d66794ccab307691af8307f
import AboutPage from "./pages/AboutPage";
import MBBSEducationAbroad from "./pages/MBBSEducationAbroad";
import CollegeRecommendationpage from "./pages/CollegeRecommendationpage";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
<<<<<<< HEAD
          {/* <Route path="/" element={<Landingpage />} /> */}
=======
          <Route path="/" element={<Landingpage />} />
>>>>>>> 19d00fab45cd944c9d66794ccab307691af8307f
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
