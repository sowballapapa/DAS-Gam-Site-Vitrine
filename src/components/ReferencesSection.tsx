  import { Card } from "./ui/card";
  import { CheckCircle } from "lucide-react";
  import { AnimatedSection } from "./AnimatedSection";

  export function ReferencesSection() {
    const projects = [
      {
        title: "Attestations de services",
        category: "BTP",
        year: "",
      },
      {
        title: "Flotte Transport pour certains écoles comme Maarif Thiès",
        category: "Transport",
        year: "",
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
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-[#003366] text-4xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Nos Références
              </h2>
              <p className="text-[#666666] max-w-2xl mx-auto">
                Découvrez quelques-uns de nos projets réalisés et la confiance que nos clients nous accordent depuis 2006.
              </p>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <Card className="bg-[#003366] text-white p-6 text-center hover:bg-[#DC143C] transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="text-4xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    {stat.number}
                  </div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                <Card className="bg-white p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  }