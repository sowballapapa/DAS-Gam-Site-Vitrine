import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import garage from "../assets/hero/gam-garage.jpg"
export function HeroSection() {
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
  return (
    <section id="accueil" className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
            src={garage}
          alt="Atelier GAM et Location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-[#003366]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
          Polyvalence, Expertise et Fiabilité<br />depuis 2006
        </h1>
        <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
          GAM – Générale Activité Mondiale, votre partenaire de confiance pour tous vos projets au Sénégal
        </p>
          <a href="#contact">
              <Button
                  size="lg"
                  className="bg-[#DC143C] hover:bg-[#B01030] text-white px-8 py-6"
              >
                  Nous contacter
              </Button>
          </a>
      </div>
    </section>
  );
}
