import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Send,  SendHorizonal, Calendar} from "lucide-react";
import { useState } from "react";
import {toast} from "sonner";
import emailjs from "emailjs-com";

export function ContactSection() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });

    const [loading, setLoading] = useState(false);

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    const isValidMessage = (message: string) => {
        return message.length > 9 && message.length <= 1000;
    };
    const isValidName = (name: string) => {
        return name.length > 0 && name.length <= 100;
    };
    const validateForm = () => {

        if (!isValidEmail(formData.email)) {
            toast.error('Veuillez entrer un email valide');
            return false;
        }
        if (!isValidMessage(formData.message)) {
            toast.error('Veuillez entrer un message valide');
            return false;
        }
        if (!isValidName(formData.name)) {
            toast.error('Veuillez entrer un nom valide');
            return false;
        }
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        setLoading(true);

        e.preventDefault();
        if (!validateForm()) {
            setLoading(false);
            return;
        }
        emailjs.send(
            'service_7mkq6if',
            'template_b2xtlm5',
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            'WB-kt04d74u5DKkzm'
        )
            .then(() => {
                setLoading(false);
                toast.success('Message envoyé avec succès ! Nous vous recontacterons bientôt.');
                setFormData({ name: '', email: '', message: '' });
                setTouched({ name: false, email: false, message: false });
            })
            .catch(() => {
                toast.error('Une erreur est survenue lors de l\'envoi du message.');
            });
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
    };


  const addresses = [
    {
      ville: "Dakar",
      adresse: "Dakar, Sénégal",
      description: "Siège social",
        location:  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.7485271730307!2d-17.3883019!3d14.783189600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10c7ee73fffff%3A0x64c7907d104949e8!2sSchool%20Hamo%204!5e0!3m2!1sen!2ssn!4v1762889677504!5m2!1sen!2ssn"

    },
      {
          ville: "Thiès",
          adresse: "89, HLM Rte de MBOUR, Sénégal",
          description: "Agence régionale",
          location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15432.43685547734!2d-16.94935656902734!3d14.76287654116667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1957c96db3d41%3A0xe129366336693501!2sTouba%20Darou%20Salam%20Sogeras%20Assurances!5e0!3m2!1sen!2ssn!4v1763331103554!5m2!1sen!2ssn"

      },
  ];

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-[#003366] text-4xl mb-4"
                        style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 700}}>
                        Contactez-nous
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            N'hésitez pas à nous contacter pour toute demande d'information ou de devis. Notre équipe est à votre écoute.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Addresses */}
          <div className="space-y-8">
            {/* Coordonnées regroupées */}
            <div>
              <h3 className="text-[#003366] text-2xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                Nos Coordonnées
              </h3>
              <div className="space-y-4">
                <Card className=" grid md:grid-cols-2 justify-between bg-gray-50 p-6  space-x-4 hover:shadow-lg transition-all duration-300 border-l-4 border-[#003366]">
                    <div>
                        <div className="">
                            <div className="w-12 h-12 bg-[#DC143C] rounded-full flex items-center justify-center">
                                <Phone className="text-white" size={24} />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                                Téléphones
                            </h4>
                            <p className="text-[#666666] whitespace-pre-line">
                                +221 33 953 28 24{'\n'}+221 77 534 80 34{'\n'}+221 77 137 13 24
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <div className="w-12 h-12 bg-[#DC143C] rounded-full flex items-center justify-center">
                                <Mail className="text-white" size={24} />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                                Email
                            </h4>
                            <p className="text-[#666666] whitespace-pre-line">
                                gamondiale@gmail.com
                            </p>
                        </div>
                    </div>
                </Card>

              </div>
            </div>

            {/* Nos Adresses avec maps à côté */}
            <div>
              <h3 className="text-[#003366] text-2xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                Nos Adresses
              </h3>
              <div className="space-y-4">
                {addresses.map((address, index) => (
                  <div key={index} className="grid md:grid-cols-1 gap-4">
                    <Card className="bg-white p-6 border-l-4 border-[#003366] hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#DC143C] rounded-full flex items-center justify-center">
                            <MapPin className="text-white" size={24} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[#003366] mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                            {address.ville}
                          </h4>
                          <p className="text-[#666666] text-sm mb-1">
                            {address.description}
                          </p>
                          <p className="text-[#666666]">
                            {address.adresse}
                          </p>
                        </div>
                      </div>

                        <Card className="bg-gray-100 h-full min-h-[140px] flex items-center justify-center hover:shadow-lg transition-all duration-300">
                            <div className="text-center text-[#666666]">
                                <MapPin className="mx-auto mb-2 text-[#003366]" size={40} />
                                <p className="text-sm">Carte</p>
                                <iframe
                                    src={address.location} loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                                <p className="text-xs">{address.ville}</p>
                            </div>
                        </Card>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form - Horaire*/}
          <div>
              <Card className="bg-white p-8 border-2 border-gray-100 h-fit hover:shadow-xl transition-all duration-300">
                  <h3 className="text-[#003366] text-2xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      Envoyez-nous un message
                  </h3>
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
                              onBlur={handleBlur}
                              required
                              style={
                                  touched.name && !isValidName(formData.name)
                                      ? {border: '2px solid red'}
                                      : touched.name
                                          ? {border: '2px solid green'}
                                          : {}
                              }
                              className={`mt-2 transition-all duration-300 focus:ring-2 focus:ring-[#003366]`}
                              placeholder="Votre nom"
                          />

                          {!isValidName(formData.name) && touched.name && touched.name &&   (
                              <p style={{color: 'red'}}>Veuillez entrer un nom valide (3-100 caractères)</p>
                          )}
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
                              onBlur={handleBlur}
                              required
                              style={
                                  touched.email && !isValidName(formData.email)
                                      ? {border: '2px solid red'}
                                      : touched.email
                                          ? {border: '2px solid green'}
                                          : {}
                              }
                              className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-[#003366]"
                              placeholder="votre@email.com"
                          />
                          {!isValidEmail(formData.email) && touched.email && (
                              <p style={{color: 'red'}}>Veuillez entrer un email valide (ex: example@example.com)</p>
                          )}
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
                              onBlur={handleBlur}
                              required
                              style={
                                  touched.message && !isValidName(formData.message)
                                      ? {border: '2px solid red'}
                                      : touched.message
                                          ? {border: '2px solid green'}
                                          : {}
                              }
                              className="mt-2 min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-[#003366]"
                              placeholder="Votre message..."
                          />
                          {!isValidMessage(formData.message)  && touched.message && (
                              <p style={{color: 'red'}}>Veuillez entrer un message valide (10-1000 caractères)</p>
                          )}
                      </div>

                      <Button
                          type="submit"
                          className="w-full bg-[#DC143C] hover:bg-[#B01030] text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                          onClick={handleSubmit}
                      >
                          {loading ? (
                              <>

                                  <SendHorizonal
                                      className="ml-2 w-4 h-4 group-hover:translate-x-1 "
                                      style={{
                                          transitionProperty: "transform",
                                          transitionDuration: "150ms",
                                          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                        }}
                                  />
                                  En cours d'envoie...
                              </>
                          ) : (
                              <>
                                  Envoyer le message
                                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </>
                          )}
                      </Button>
                  </form>
              </Card>

              {/* Business Hours */}
              <Card className="text-[#003366] bg-gray-50 hover:shadow-xl transition-all duration-300" style={{marginTop:10}}>
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
                          <div className="flex justify-center text-center text-[#003366] font-bold text-lg">
                              (En ligne 24h/24 et 7j/7)
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
