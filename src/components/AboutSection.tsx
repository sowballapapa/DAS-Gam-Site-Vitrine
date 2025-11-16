  import { Card } from "./ui/card";
  import { Award, Target, Shield } from "lucide-react";
  import { ImageWithFallback } from "./figma/ImageWithFallback";
  import { AnimatedSection } from "./AnimatedSection";

  export function AboutSection() {
    const values = [
      {
        icon: Award,
        title: "Expertise",
        description: "Plus de 18 ans d'expérience dans nos domaines d'activité",
      },
      {
        icon: Target,
        title: "Réactivité",
        description: "Des solutions rapides et adaptées à vos besoins",
      },
      {
        icon: Shield,
        title: "Fiabilité",
        description: "Un engagement qualité sur tous nos projets",
      },
    ];

    return (
      <section id="apropos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <AnimatedSection direction="left">
              <h2 className="text-[#003366] text-4xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                À propos de GAM
              </h2>
              <p className="text-[#666666] mb-4">
                Fondée en 2006 à Dakar, <strong>GAM – Générale Activité Mondiale</strong> est une entreprise sénégalaise spécialisée dans plusieurs secteurs clés de l'économie : BTP, location automobile, transport, électricité bâtiment et fournitures.
              </p>
              <p className="text-[#666666] mb-4" style={{textAlign: "justify"}}>
                Notre mission est d'accompagner nos clients, particuliers et professionnels, en leur offrant des services de qualité, polyvalents et adaptés à leurs besoins spécifiques.
              </p>
              <p className="text-[#666666]" style={{textAlign:"justify"}}>
                Grâce à notre expertise diversifiée et notre connaissance approfondie du marché sénégalais, nous sommes devenus un partenaire de confiance pour de nombreux projets d'envergure.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card className="bg-white p-6 border-l-4 border-[#DC143C] hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between space-x-4 mb-4 ">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1554246881-d1aec048cc39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkaXJlY3RvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzMwMDA2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Directeur Général GAM"
                    className="h-full w-24 max-w-1/2 rounded object-cover border-4 border-[#003366] hover:scale-105 transition-transform duration-300"
                  />
                  <div className="">
                    <h3 className="text-[#003366] text-xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      Mot du Directeur
                    </h3>
                      <p className="text-[#666666] italic mb-4" style={{textAlign: 'justify'}}>
                          "Chez GAM, nous croyons en la polyvalence et l'excellence. Notre engagement est de fournir à nos clients des solutions intégrées qui répondent à leurs attentes les plus exigeantes. Depuis notre création, nous avons su évoluer et nous adapter aux défis du marché tout en maintenant nos valeurs fondamentales : expertise, réactivité et fiabilité."
                      </p>
                      <p className="text-[#003366]">
                          — Direction Générale, GAM
                      </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>

          {/* Values */}
          <div>
            <AnimatedSection>
              <h3 className="text-[#003366] text-3xl mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Nos Valeurs
              </h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <AnimatedSection key={index} delay={index * 0.2} direction="up">
                    <Card className="bg-white p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center hover:bg-[#DC143C] transition-colors duration-300">
                          <Icon className="text-white" size={32} />
                        </div>
                      </div>
                      <h4 className="text-[#003366] text-xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                        {value.title}
                      </h4>
                      <p className="text-[#666666]">
                        {value.description}
                      </p>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }