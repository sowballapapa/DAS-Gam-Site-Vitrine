import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import img_garage from "../assets/hero/gam-garage.jpg"

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
            src={img_garage}
          alt="Chantier GAM"
          className="w-full h-full object-cover animate-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-[#003366]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-5xl md:text-6xl mb-6" 
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
        >
          Polyvalence, Expertise et Fiabilité<br />depuis 2006
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-xl mb-8 max-w-2xl mx-auto"
        >
          GAM – Générale Activité Mondiale, votre partenaire de confiance pour tous vos projets au Sénégal
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-[#DC143C] hover:bg-[#B01030] text-white px-8 py-6 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
            Nous contacter
          </Button>
        </motion.div>
      </div>

      <style>{`
        @keyframes zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-zoom {
          animation: zoom 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
