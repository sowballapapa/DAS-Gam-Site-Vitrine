import {Card, CardContent, CardHeader, CardTitle} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {MapPin, Phone, Mail, Calendar1, Calendar} from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "89, HLM Rte de MBOUR, Sénégal",
    },
    {
      icon: Phone,
      title: "Téléphones",
      content: "+221 77 534 80 34\n+221 33 953 28 24",
    },
    {
      icon: Mail,
      title: "Email",
      content: "gamondiale@gmail.com",
    },
  ];


  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#003366] text-4xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Contactez-nous
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            N'hésitez pas à nous contacter pour toute demande d'information ou de devis. Notre équipe est à votre écoute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="bg-gray-50 p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#DC143C] rounded-full flex items-center justify-center">
                        <Icon className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                        {info.title}
                      </h3>
                      <p className="text-[#666666] whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Map */}
            <Card className="bg-gray-100 h-64 flex items-center justify-center">
                <div className="text-center text-[#666666]">
                    <MapPin className="mx-auto mb-2 text-[#003366]" size={48}/>
                    <p>Carte Google Maps</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.7485271730307!2d-17.3883019!3d14.783189600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10c7ee73fffff%3A0x64c7907d104949e8!2sSchool%20Hamo%204!5e0!3m2!1sen!2ssn!4v1762889677504!5m2!1sen!2ssn"
                         loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Card>
          </div>

           <div className="flex flex-col gap-2">
               {/* Contact Form */}
               <Card className="bg-white p-8 border-2 border-gray-100">
                   <form onSubmit={handleSubmit} className="space-y-6">
                       <div>
                           <Label htmlFor="name" className="text-[#003366]">
                               Nom complet
                           </Label>
                           <Input
                               id="name"
                               name="name"
                               type="text"
                               value={formData.name}
                               onChange={handleChange}
                               required
                               className="mt-2"
                               placeholder="Votre nom"
                           />
                       </div>

                       <div>
                           <Label htmlFor="email" className="text-[#003366]">
                               Email
                           </Label>
                           <Input
                               id="email"
                               name="email"
                               type="email"
                               value={formData.email}
                               onChange={handleChange}
                               required
                               className="mt-2"
                               placeholder="votre@email.com"
                           />
                       </div>

                       <div>
                           <Label htmlFor="message" className="text-[#003366]">
                               Message
                           </Label>
                           <Textarea
                               id="message"
                               name="message"
                               value={formData.message}
                               onChange={handleChange}
                               required
                               className="mt-2 min-h-[150px]"
                               placeholder="Votre message..."
                           />
                       </div>

                       <Button
                           type="submit"
                           className="w-full bg-[#DC143C] hover:bg-[#B01030] text-white"
                       >
                           Envoyer le message
                       </Button>
                   </form>
               </Card>
               {/* Business Hours */}
               <Card className="text-[#003366] bg-gray-50">
                   <CardHeader>
                       <CardTitle className="flex gap-2 text-lg">
                           <Calendar/>
                           Horaires d'ouverture
                       </CardTitle>
                   </CardHeader>
                   <CardContent className="text-[#666666] ">
                       <div className="space-y-2 text-sm">
                           <div className="flex justify-between">
                               <span>Lundi - Vendredi</span>
                               <span className="">8h00 - 18h00</span>
                           </div>
                           <div className="flex justify-between">
                               <span>Samedi</span>
                               <span className="">9h00 - 14h00</span>
                           </div>
                           <div className="flex justify-between">
                               <span>Dimanche</span>
                               <span className="">Fermé</span>
                           </div>
                       </div>
                   </CardContent>
               </Card>
           </div>
        </div>
      </div>
    </section>
  );
}
