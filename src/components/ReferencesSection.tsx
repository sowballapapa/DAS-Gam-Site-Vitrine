import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";
import coster from '../assets/references/toyota_coster.jpg';
import garage from '../assets/references/garage3.jpg';
import garage2 from '../assets/references/garage2.jpg';

export function ReferencesSection() {
  const projects = [
    {
      title: "Projet Immobilier Grand Dakar",
      category: "BTP",
      year: "2023",
    },
    {
      title: "Flotte Transport pour certains écoles comme Maarif Thiès",
      category: "Transport",
      year: "2023",
    },
    {
      title: "Installation Électrique Complexe Commercial",
      category: "Électricité",
      year: "2022",
    },
    {
      title: "Fourniture Matériaux Construction",
      category: "Fournitures",
      year: "2024",
    },
  ];

  const stats = [
    { number: "18+", label: "Années d'expérience" },
    { number: "500+", label: "Projets réalisés" },
    { number: "200+", label: "Clients satisfaits" },
    { number: "5", label: "Domaines d'activité" },
  ];

  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#003366] text-4xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Nos Références
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets réalisés et la confiance que nos clients nous accordent depuis 2006.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-[#003366] text-white p-6 text-center">
              <div className="text-4xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                {stat.number}
              </div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-[#DC143C]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#003366] text-lg mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-[#666666]">
                    <span className="bg-gray-100 px-3 py-1 rounded">{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative h-64 overflow-hidden rounded-lg">
            <ImageWithFallback
                src={coster}
                alt="Transport et Location automobile"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg">
            <ImageWithFallback
              src={garage}
              alt="Atelier Mécanique"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg">
            <ImageWithFallback
              src={garage2}
              alt="Atelier Mécanique"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
