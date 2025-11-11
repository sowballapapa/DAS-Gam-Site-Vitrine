import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ReferencesSection } from "./components/ReferencesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./components/Loader";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Vérifie si la page est déjà chargée
        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            // Attend l'événement 'load' du navigateur
            const handleLoad = () => setIsLoading(false);
            window.addEventListener("load", handleLoad);

            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (isLoading) {
        return (
            <Loader />
        );
    }

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <ReferencesSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
