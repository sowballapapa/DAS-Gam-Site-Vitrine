import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
          src="https://images.unsplash.com/photo-1712700004723-4adc42a3532f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwZGFrYXJ8ZW58MXx8fHwxNzYyMzU5MTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Chantier GAM"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-[#003366]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
          Polyvalence, expertise et fiabilité<br />depuis 2006
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
