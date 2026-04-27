import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechServices from "./components/TechServices";
import StationeryServices from "./components/StationeryServices";
import WhyUs from "./components/WhyUs";
import SolutionsFor from "./components/SolutionsFor";
import DigitalZone from "./components/DigitalZone";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechServices />
        <StationeryServices />
        <WhyUs />
        <SolutionsFor />
        <DigitalZone />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
