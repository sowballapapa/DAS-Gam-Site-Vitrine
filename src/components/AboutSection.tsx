import { Card } from "./ui/card";
import { Award, Target, Shield } from "lucide-react";

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
          <div>
            <h2 className="text-[#003366] text-4xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              À propos de GAM
            </h2>
            <p className="text-[#666666] mb-4">
              Fondée le 28 Mars 2006 à Dakar, <strong>GAM – Générale Activité Mondiale</strong> est une entreprise sénégalaise spécialisée dans plusieurs secteurs clés de l'économie : BTP, location automobile, transport, électricité bâtiment et fournitures.
            </p>
            <p className="text-[#666666] mb-4">
              Notre mission est d'accompagner nos clients, particuliers et professionnels, en leur offrant des services de qualité, polyvalents et adaptés à leurs besoins spécifiques.
            </p>
            <p className="text-[#666666]">
              Grâce à notre expertise diversifiée et notre connaissance approfondie du marché sénégalais, nous sommes devenus un partenaire de confiance pour de nombreux projets d'envergure.
            </p>
          </div>

          <Card className="bg-white p-6 border-l-4 border-[#DC143C]">
            <h3 className="text-[#003366] text-xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Mot du Directeur
            </h3>
            <p className="text-[#666666] italic mb-4">
              "Chez GAM, nous croyons en la polyvalence et l'excellence. Notre engagement est de fournir à nos clients des solutions intégrées qui répondent à leurs attentes les plus exigeantes. Depuis notre création, nous avons su évoluer et nous adapter aux défis du marché tout en maintenant nos valeurs fondamentales : expertise, réactivité et fiabilité."
            </p>
            <p className="text-[#003366]">
              — Direction Générale, Mr. Abdoulaye DIOP
            </p>
          </Card>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-[#003366] text-3xl mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Nos Valeurs
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-white p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center">
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
