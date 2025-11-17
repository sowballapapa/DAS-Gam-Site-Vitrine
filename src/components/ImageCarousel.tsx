import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

import btp from '../assets/references/btp.jpg';
import coster from '../assets/references/toyota_coster.jpg';
import minicar from '../assets/references/minicar.jpg';
import car from '../assets/references/car2.jpg';
import garage1 from '../assets/references/garage1.jpg';
import garage4 from '../assets/references/garage4.jpg';
import garage5 from '../assets/references/garage5.jpg';
import garage6 from '../assets/references/garage6.jpg';
import garage7 from '../assets/references/garage7.jpg';
import garage8 from '../assets/references/garage8.jpg';
import garage9 from '../assets/references/garage9.jpg';
import garage10 from '../assets/references/garage10.jpg';
import garage11 from '../assets/references/garage11.jpg';
import garage12 from '../assets/references/garage12.jpg';
import garage3 from '../assets/references/garage3.jpg';
import garage2 from '../assets/references/garage2.jpg';
import garage_enter from '../assets/references/garage_enter.jpg';

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      url: car,
      alt: "Location Automobile",
      title: "Location Automobile",
    },
    {
      url: minicar,
      alt: "Transport Scolaire & Transport Professionnel",
      title: "Transport Scolaire & Transport Professionnel",
    },
    {
      url: coster,
      alt: "Location Automobile",
      title: "Location Automobile",
    },
      {
          url: garage1,
          alt: "Atelier de réparation automobile",
          title: "Atelier Automobile",
      },
      {
          url: garage2,
          alt: "Atelier de réparation automobile",
          title: "Atelier Automobile",
      },
      {
          url: garage3,
          alt: "Atelier de réparation automobile",
          title: "Atelier Automobile",
      },
      {
          url: garage4,
          alt: "Atelier de réparation automobile",
          title: "Atelier Automobile",
      },
      {
          url: garage5,
          alt: "Atelier de réparation automobile",
          title: "Atelier Automobile",
      },
      {
          url: garage6,
          alt: "Atelier de réparation automobile",
          title: "Atelier Automobile",
      },
      {
          url: garage7,
          alt: "Atelier de réparation automobile",
          title: "Atelier Automobile",
      },
      {
          url: garage8,
          alt: "Atelier de réparation automobile",
          title: "Atelier Automobile",
      },
      {
          url: garage9,
          alt: "Atelier de réparation automobile",
          title: "Atelier Automobile",
      },
      {
          url: garage10,
          alt: "Atelier de réparation automobile",
          title: "Atelier Automobile",
      },
      {
          url: garage11,
          alt: "Atelier de réparation automobile",
          title: "Atelier Automobile",
      },
      {
          url: garage12,
          alt: "Atelier de réparation automobile",
          title: "Atelier Automobile",
      },
      {
          url: btp,
          alt: "Chantier de construction BTP",
          title: "Construction BTP",
      },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#003366] text-4xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Quelques illustrations en images
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            Découvrez notre expertise à travers quelques images de notre ateliers et des véhicules de transport.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Container - Single Image */}
          <div className="relative overflow-hidden">
            <div 
              className="relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="relative h-[500px] sm:h-[600px] overflow-hidden rounded-2xl shadow-2xl p-1 bg-gradient-to-br from-[#003366] via-[#DC143C] to-[#003366] animate-gradient">
                <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                  <ImageWithFallback
                    src={images[currentIndex].url}
                    alt={images[currentIndex].alt}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                    <p className="text-white text-2xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      {images[currentIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#003366] hover:bg-[#DC143C] text-white rounded-full w-14 h-14 p-0 shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Image précédente"
          >
            <ChevronLeft size={28} />
          </Button>

          <Button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#003366] hover:bg-[#DC143C] text-white rounded-full w-14 h-14 p-0 shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Image suivante"
          >
            <ChevronRight size={28} />
          </Button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#DC143C] w-12 shadow-lg' 
                  : 'bg-[#003366]/30 w-3 hover:bg-[#003366]/50 hover:w-6'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        <style>{`
          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
