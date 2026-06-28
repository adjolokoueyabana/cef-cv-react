import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./index.css";
import App from "./App.jsx";
/* HelmetProvider : est un composant fourni par la bibliothèque react-helmet-async.
   Son rôle est de gérer toutes les informations situées dans la balise <head> du
   document HTML depuis les composants React.*/
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);