import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";

import App from "./App";
import PortfolioApp from "./portfolio/PortfolioApp";
import TemplatesIndex from "./portfolio/templates/TemplatesIndex";
import TemplateRoute from "./portfolio/templates/TemplateRoute";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<PortfolioApp />} />
        <Route path="/templates" element={<TemplatesIndex />} />
        <Route path="/templates/:slug" element={<TemplateRoute />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
