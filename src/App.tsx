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
import {Helmet, HelmetProvider} from "react-helmet-async";
// import Loader from "./components/Loader";

export default function App() {
    // const [isLoading, setIsLoading] = useState(true);
    //
    // useEffect(() => {
    //     // Vérifie si la page est déjà chargée
    //     if (document.readyState === "complete") {
    //         setIsLoading(false);
    //     } else {
    //         // Attend l'événement 'load' du navigateur
    //         const handleLoad = () => setIsLoading(false);
    //         window.addEventListener("load", handleLoad);
    //
    //         return () => window.removeEventListener("load", handleLoad);
    //     }
    // }, []);
    //
    // if (isLoading) {
    //     return (
    //         <Loader />
    //     );
    // }

    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    {/* Title */}
                    <title>GAM – Générale Activité Mondiale | BTP, Location Automobile, Transport & Fournitures au Sénégal</title>

                    {/* Meta Description */}
                    <meta name="description" content="Fondée en 2006 à Dakar, GAM – Générale Activité Mondiale est une entreprise sénégalaise spécialisée dans le BTP, la location automobile, le transport, l’électricité bâtiment et les fournitures. Votre partenaire de confiance au Sénégal." />

                    {/* Google search */}
                    <meta name="google-site-verification" content="j2YSQfuQXYduoB2fKh1qhmGWHmtIRTvRr9T4WNBurrI" />

                    {/* Keywords */}
                    <meta name="keywords" content="GAM, Générale Activité Mondiale, BTP Sénégal, location automobile Dakar, transport Sénégal, électricité bâtiment, fournitures, logistiques, entreprise sénégalaise, services Dakar, Thiés" />

                    {/* Author */}
                    <meta name="author" content="GAM - Générale Activité Mondiale" />

                    {/* Open Graph */}
                    <meta property="og:title" content="GAM – Générale Activité Mondiale | BTP, Location Automobile & Transport au Sénégal" />
                    <meta property="og:description" content="Entreprise sénégalaise multisectorielle fondée en 2006 à Dakar. BTP, location automobile, transport, électricité bâtiment et fournitures." />
                    <meta property="og:url" content="https://www.gamondial.com/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://www.gamondial.com/logo_gam.jpg" />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="GAM – Générale Activité Mondiale | BTP & Location Auto au Sénégal" />
                    <meta name="twitter:description" content="Entreprise sénégalaise spécialisée en BTP, transport et services polyvalents. Expertise et fiabilité depuis 2006." />
                    <meta name="twitter:image" content="https://www.gamondial.com/logo_gam.jpg" />
                </Helmet>
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
            </div>
        </HelmetProvider>
    );
}
