  import { Card } from "./ui/card";
  import { Building2, Wrench, Truck, Zap, Package } from "lucide-react";
  import { AnimatedSection } from "./AnimatedSection";
  import {ImageCarousel} from "./ImageCarousel";

  export function ServicesSection() {
    const services = [
      {
        icon: Building2,
        title: "BTP – Construction, Réhabilitation et Travaux Spécialisés",
        description: "GAM réalise des travaux de construction, de rénovation et de réhabilitation pour les administrations, entreprises et collectivités. Nous collaborons étroitement avec l'Entreprise des Grands Travaux (EGT), ce qui nous permet d'intervenir sur des chantiers de haute exigence technique.",
        prestations: [
          "Construction et gros œuvre",
          "Réhabilitation complète des bâtiments",
          "Travaux en avenant (extensions, reprises, modifications)",
          "Suivi, contrôle qualité et respect strict des délais",
        ],
        conclusion: "Nous garantissons une exécution fiable, conforme aux normes, avec une équipe expérimentée.",
      },
      {
        icon: Wrench,
        title: "Réparation & Entretien Automobile – Atelier Professionnel",
        description: "GAM dispose d'un atelier moderne dédié à la maintenance, au diagnostic électronique, à la mécanique générale, à la climatisation et à la tôlerie. Nous assurons notamment la majeure partie des entretiens et réparations des véhicules de la SENELEC, avec un haut niveau de satisfaction.",
        equipements: [
          "Pont élévateur",
          "Plan élévateur",
          "Machine d'équilibrage",
          "Diagnostic électronique",
          "Poste de soudure & atelier de tôlerie",
        ],
        conclusion: "Nous offrons un service rapide, sécurisé et conforme aux standards professionnels.",
      },
      {
        icon: Truck,
        title: "Transport Scolaire & Transport Professionnel",
        description: "GAM opère des services de transport réguliers pour les écoles, entreprises et organisations. Nous gérons notamment le transport quotidien de l'école Maarif de Dakar et Pioneer's Academy de Thiès.",
        prestations: [
          "Transport quotidien des élèves",
          "Sorties pédagogiques",
          "Déplacements professionnels",
          "Transport événementiel",
        ],
        conclusion: "Nos chauffeurs sont formés, ponctuels et contrôlés régulièrement pour garantir sécurité et fiabilité.",
      },
      {
        icon: Zap,
        title: "Climatisation, Électricité & Maintenance Technique",
        description: "GAM assure l'installation, la maintenance et la mise aux normes des systèmes électriques et de climatisation pour les bâtiments publics et privés. Nous intervenons régulièrement dans plusieurs structures universitaires, notamment UFR Sciences de l'Ingénieur (SI), Institut Universitaire de Technologie (IUT) et autres UFR de l'Université de Thiès.",
        prestations: [
          "Installation d'équipements",
          "Maintenance préventive et corrective",
          "Mise aux normes électriques",
          "Dépannage rapide",
        ],
      },
      {
        icon: Package,
        title: "Fournitures & Équipements Professionnels",
        description: "GAM propose une large gamme de fournitures destinées aux administrations, institutions, écoles et entreprises. Nous avons notamment fourni les mobiliers de bureau de plusieurs sphères ministérielles à Diamniadio, dans le cadre de marchés institutionnels.",
        gammes: [
          "Mobilier de bureau",
          "Matériel informatique",
          "Climatisation",
          "Plomberie et équipements techniques",
          "Produits divers pour le fonctionnement des locaux",
        ],
      },
    ];

    return (
      <section id="services" >
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <div className="text-center mb-12">
                  <h2 className="text-[#003366] text-4xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Nos Services
                  </h2>
                  <p className="text-[#666666] max-w-2xl mx-auto">
                    GAM propose une gamme complète de services pour répondre à tous vos besoins professionnels et logistiques au Sénégal.
                  </p>
                </div>
              </AnimatedSection>

              <div className="space-y-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <AnimatedSection key={index} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                      <Card
                        className="bg-white p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-[#DC143C] hover:-translate-y-1"
                      >
                        <div className="flex items-start space-x-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-[#003366] rounded-lg flex items-center justify-center hover:bg-[#DC143C] transition-colors duration-300 hover:rotate-6">
                              <Icon className="text-white" size={32} />
                            </div>
                          </div>

                          <div className="flex-1">
                            <h3 className="text-[#003366] text-2xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                              {service.title}
                            </h3>

                            <p className="text-[#666666] mb-4">
                              {service.description}
                            </p>

                            {service.prestations && (
                              <div className="mb-4">
                                <p className="text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                                  Nos prestations :
                                </p>
                                <ul className="space-y-2">
                                  {service.prestations.map((prestation, i) => (
                                    <li key={i} className="flex items-start text-[#666666]">
                                      <span className="text-[#DC143C] mr-2">•</span>
                                      <span>{prestation}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {service.equipements && (
                              <div className="mb-4">
                                <p className="text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                                  Équipements :
                                </p>
                                <ul className="space-y-2">
                                  {service.equipements.map((equipement, i) => (
                                    <li key={i} className="flex items-start text-[#666666]">
                                      <span className="text-[#DC143C] mr-2">•</span>
                                      <span>{equipement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {service.gammes && (
                              <div className="mb-4">
                                <p className="text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                                  Nos gammes :
                                </p>
                                <ul className="space-y-2">
                                  {service.gammes.map((gamme, i) => (
                                    <li key={i} className="flex items-start text-[#666666]">
                                      <span className="text-[#DC143C] mr-2">•</span>
                                      <span>{gamme}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {service.conclusion && (
                              <p className="text-[#666666] italic mt-4">
                                {service.conclusion}
                              </p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </section>
          <ImageCarousel/>
        </section>
    );
  }