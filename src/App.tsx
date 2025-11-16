import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ImageCarousel } from "./components/ImageCarousel";
import { ReferencesSection } from "./components/ReferencesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ImageCarousel />
        <ReferencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}