import { Card } from "./ui/card";
import {Building2, Car, Truck, Zap, Package, SettingsIcon, BusIcon} from "lucide-react";

export function ServicesSection() {
  const services = [
        {
          icon: Building2,
          title: "BTP",
          description: "Construction, rénovation et gestion de projets de bâtiment. De la conception à la réalisation, nous accompagnons tous vos chantiers.",
        },
        {
          icon: Car,
          title: "Location Automobile",
          description: "Service de location de véhicules adaptés à tous vos besoins : Toyota Coaster et bus pour vos déplacements professionnels ou scolaires.",
          },
          {
              icon: BusIcon,
              title: "Transport",
              description: "Gestion du transport pour les écoles et organisations : sorties pédagogiques, déplacements du personnel et transport régulier des élèves.",
          },
          {
          icon: Zap,
          title: "Électricité Bâtiment",
          description: "Installation électrique, maintenance et mise aux normes pour bâtiments résidentiels et commerciaux."
          },
          {
              icon: Package,
              title: "Fournitures",
              description: "Fourniture complète pour administrations : matériel de bureau, climatiseurs, équipements de plomberie et tout le nécessaire pour le bon fonctionnement de vos locaux.",
          },
          {
           icon: SettingsIcon,
           title: "Réparation et nettoyage Automobile",
           description: ""
          }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#003366] text-4xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Nos Services
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            GAM propose une gamme complète de services pour répondre à tous vos besoins professionnels et logistiques au Sénégal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-white p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-[#DC143C]"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-[#003366] rounded-lg flex items-center justify-center">
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
                <h3 className="text-[#003366] text-xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="text-[#666666]">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
