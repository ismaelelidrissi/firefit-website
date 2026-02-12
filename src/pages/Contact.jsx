import { useState } from 'react';
import { MapPin, Phone, Instagram, Mail, Send, ArrowRight } from 'lucide-react';
import { gymData } from '../data/gymData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactCards = [
    {
      icon: MapPin,
      title: 'ADRESSE',
      lines: [
        gymData.contactInfo.address.street,
        gymData.contactInfo.address.street2,
        `${gymData.contactInfo.address.city}, ${gymData.contactInfo.address.country}`
      ],
      link: gymData.contactInfo.address.mapUrl,
      linkText: 'Ouvrir dans Google Maps',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'TÉLÉPHONE',
      lines: gymData.contactInfo.phones,
      link: `tel:${gymData.contactInfo.phones[0]}`,
      linkText: 'Appeler maintenant',
      color: 'green'
    },
    {
      icon: Instagram,
      title: 'INSTAGRAM',
      lines: [
        gymData.contactInfo.instagram.handle,
        `${gymData.contactInfo.instagram.followers} followers`
      ],
      link: gymData.contactInfo.instagram.url,
      linkText: 'Suivre sur Instagram',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            CONTACTEZ-NOUS
          </h1>
          <div className="w-32 h-1.5 bg-fire-orange mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous sommes là pour répondre à toutes vos questions et vous aider à démarrer votre transformation
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 bg-${card.color}-100 rounded-2xl flex items-center justify-center`}>
                    <card.icon className={`w-8 h-8 text-fire-blue`} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 text-center mb-6">
                  {card.title}
                </h3>

                <div className="text-center mb-6 space-y-2">
                  {card.lines.map((line, idx) => (
                    <p key={idx} className="text-gray-700">
                      {card.title === 'TÉLÉPHONE' ? (
                        <a
                          href={`tel:${line}`}
                          className="hover:text-fire-blue transition-colors font-medium"
                        >
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>

                <a
                  href={card.link}
                  target={card.title !== 'TÉLÉPHONE' ? '_blank' : undefined}
                  rel={card.title !== 'TÉLÉPHONE' ? 'noopener noreferrer' : undefined}
                  className="block w-full text-center bg-fire-blue hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                >
                  {card.linkText}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-10">
                <Mail className="w-16 h-16 text-fire-blue mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  ENVOYEZ-NOUS UN MESSAGE
                </h2>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-fire-blue focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-fire-blue focus:border-transparent transition-all"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-fire-blue focus:border-transparent transition-all"
                    placeholder="06XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-fire-blue focus:border-transparent transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center space-x-2 bg-fire-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>ENVOYER LE MESSAGE</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ou appelez-nous directement
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Besoin d'une réponse immédiate ? Notre équipe est disponible pour vous renseigner
          </p>
          <a
            href="tel:0537735052"
            className="group inline-flex items-center justify-center space-x-2 bg-fire-blue hover:bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Phone className="w-6 h-6" />
            <span>APPELER MAINTENANT</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              NOUS TROUVER
            </h2>
            <div className="w-24 h-1.5 bg-fire-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Centre ville Hassan en face SNRT, Rue Moulay Abdelaziz, Rabat
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5876845938384!2d-6.8374!3d34.0209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAxJzE1LjIiTiA2wrA1MCcxNC42Ilc!5e0!3m2!1sfr!2sma!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Fire Fit Location"
            ></iframe>
            
            <div className="p-8 bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4 text-white">
                  <MapPin className="w-8 h-8 text-fire-orange" />
                  <div>
                    <p className="font-bold text-lg">Centre ville Hassan en face SNRT</p>
                    <p className="text-blue-100">Rue Moulay Abdelaziz, Rabat, Maroc</p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir//Rue+Moulay+Abdelaziz+Rabat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-fire-orange hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  <MapPin className="w-5 h-5" />
                  <span>OBTENIR L'ITINÉRAIRE</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;