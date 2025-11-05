import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#apropos" },
    { label: "Services", href: "#services" },
    { label: "Références", href: "#references" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col">
                <span  className=" rounded-full h-70 w-70">
                    <img width="100px" src="/src/assets/logo_gam.jpg" alt="Logo de GAM"/>
                </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#666666] hover:text-[#003366] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          {/*<div className="hidden md:block">
            <Button className="bg-[#DC143C] hover:bg-[#B01030] text-white">
              Demander un devis
            </Button>
          </div>*/}

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#003366]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-[#666666] hover:text-[#003366] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
           {/* <Button className="w-full bg-[#DC143C] hover:bg-[#B01030] text-white">
              Demander un devis
            </Button>*/}
          </nav>
        )}
      </div>
    </header>
  );
}
