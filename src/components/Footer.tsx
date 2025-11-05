import { Separator } from "./ui/separator";

export function Footer() {
  const quickLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#apropos" },
    { label: "Services", href: "#services" },
    { label: "Références", href: "#references" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              GAM
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Générale Activité Mondiale
            </p>
            <p className="text-sm opacity-80">
              Votre partenaire polyvalent pour tous vos projets au Sénégal depuis 2006.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Liens rapides
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-[#DC143C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Mentions légales
            </h4>
            <div className="text-sm opacity-80 space-y-2">
              <p>
                <strong>NINEA:</strong> : 0009288855 2F1
              </p>
              <p>
                <strong>RC:</strong> 2006-A-1716
              </p>
              <p className="pt-2">
                Dakar, Sénégal
              </p>
              <p>
                Tel: +221 33 953 28 24
              </p>
              <p>
                Email: gamondiale@gmail.com
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>© 2025 GAM – Générale Activité Mondiale. Tous droits réservés.</p>
          {/*<div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#DC143C] transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-[#DC143C] transition-colors">
              Conditions d'utilisation
            </a>
          </div>*/}
        </div>
      </div>
    </footer>
  );
}
