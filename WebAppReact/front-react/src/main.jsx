import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// notificaciones globales
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// localizacion de idioma
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import spanishContent from "../public/lang/es.json";
import englishContent from "../public/lang/en.json";
import { Loader } from "./Loader.jsx";
i18n.use(initReactI18next).init({
  resources: {
    es: spanishContent,
    en: englishContent,
  },

  fallbackLng: "es",

  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Loader />
    <App />
    <ToastContainer
      theme="colored"
      pauseOnFocusLoss={false}
      limit={5}
      pauseOnHover={true}
      position="top-center"
      transition={Slide}
    />
  </React.StrictMode>
);
