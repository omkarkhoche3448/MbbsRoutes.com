import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
// import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  // <AuthProvider>
  <BrowserRouter >
    <Toaster />
    <App />
  </BrowserRouter>
  // </AuthProvider>
);
