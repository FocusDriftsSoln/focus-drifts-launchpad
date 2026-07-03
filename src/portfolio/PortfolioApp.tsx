import { useEffect } from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MasonryGallery from "./components/MasonryGallery";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function PortfolioApp() {
  useEffect(() => {
    document.title = "Focus Drift — Photography Portfolio & Client Galleries";
  }, []);

  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <MasonryGallery />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
