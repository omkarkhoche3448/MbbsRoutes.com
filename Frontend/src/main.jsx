import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 4000,
      }}
    />
    <App />
  </BrowserRouter>
);
