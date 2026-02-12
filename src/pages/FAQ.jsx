import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, CreditCard, Users, Dumbbell, MapPin, Phone } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      category: 'Inscription & Abonnement',
      icon: CreditCard,
      color: 'blue',
      questions: [
        {
          q: 'Comment puis-je m\'inscrire à Fire Fit ?',
          a: 'Vous pouvez vous inscrire directement à la salle aux horaires d\'ouverture, ou nous contacter par téléphone (0537735052 / 0658943859) ou Instagram (@firefit.ma) pour prendre rendez-vous.'
        },
        {
          q: 'Quels sont les différents abonnements disponibles ?',
          a: 'Nous proposons 3 formules : Offre Classique (150 DHS/mois, engagement 1 mois), Sans Engagement (200 DHS/mois), et Offre Jeune (120 DHS/mois pour les -26 ans, engagement 12 mois). Consultez notre page Tarifs pour plus de détails.'
        },
        {
          q: 'Y a-t-il des frais d\'adhésion ?',
          a: 'Non, tous nos abonnements ont des frais d\'adhésion de 0 DHS. Vous ne payez que votre mensualité.'
        },
        {
          q: 'Puis-je payer par carte bancaire ?',
          a: 'Oui, nous acceptons les paiements en espèces, par carte bancaire et par virement. Le prélèvement mensuel se fait automatiquement.'
        },
        {
          q: 'Puis-je mettre mon abonnement en pause ?',
          a: 'Oui, vous pouvez suspendre votre abonnement pour raisons médicales (certificat requis) ou vacances prolongées. Contactez-nous pour les modalités.'
        }
      ]
    },
    {
      category: 'Horaires & Accès',
      icon: Clock,
      color: 'orange',
      questions: [
        {
          q: 'Quels sont vos horaires d\'ouverture ?',
          a: 'Lundi-Vendredi : 06h00-22h30 | Samedi : 10h00-18h00 | Dimanche : 12h00-18h00. Consultez notre page Horaires pour plus de détails sur les heures de pointe.'
        },
        {
          q: 'Puis-je venir sans rendez-vous ?',
          a: 'Oui, absolument ! Nos membres ont un accès illimité pendant les horaires d\'ouverture, sans réservation nécessaire.'
        },
        {
          q: 'Quelles sont les heures les moins fréquentées ?',
          a: 'Les heures calmes sont généralement de 10h-12h, 14h-16h et 21h-22h. Les heures de pointe sont 8h-10h et 17h-21h.'
        },
        {
          q: 'Êtes-vous ouverts les jours fériés ?',
          a: 'Nous sommes ouverts la plupart des jours fériés avec des horaires parfois ajustés. Suivez-nous sur Instagram @firefit.ma pour les annonces.'
        }
      ]
    },
    {
      category: 'Équipements & Services',
      icon: Dumbbell,
      color: 'green',
      questions: [
        {
          q: 'Que dois-je apporter pour m\'entraîner ?',
          a: 'Apportez une tenue de sport, des chaussures de sport propres, une serviette et une bouteille d\'eau. Des vestiaires avec casiers sécurisés sont disponibles.'
        },
        {
          q: 'Y a-t-il des vestiaires et des douches ?',
          a: 'Oui, nous disposons de vestiaires spacieux avec douches modernes, casiers sécurisés et tout le confort nécessaire.'
        },
        {
          q: 'Quels équipements sont disponibles ?',
          a: 'Nous avons une zone complète de musculation (poids libres, machines guidées), un espace cardio (tapis, vélos, elliptiques), et une zone fight training avec sacs de frappe.'
        },
        {
          q: 'Proposez-vous du coaching personnalisé ?',
          a: 'Oui ! Tous nos abonnements incluent l\'accès aux coachs certifiés. Le coaching personnalisé sur-mesure est disponible en option avec supplément.'
        },
        {
          q: 'Y a-t-il des cours collectifs ?',
          a: 'Nous proposons des programmes de musculation, cardio training et fight training. Nos coachs sont disponibles pour vous guider pendant votre entraînement.'
        },
        {
          q: 'Puis-je avoir un programme d\'entraînement personnalisé ?',
          a: 'Oui, nos coachs créent des programmes adaptés à vos objectifs (perte de poids, prise de masse, remise en forme, etc.).'
        }
      ]
    },
    {
      category: 'Nutrition & Conseils',
      icon: Users,
      color: 'purple',
      questions: [
        {
          q: 'Proposez-vous des conseils en nutrition ?',
          a: 'Oui ! Ibtissam, notre propriétaire, est nutritionniste certifiée. Elle propose des consultations nutrition et des plans alimentaires personnalisés. Contactez-nous pour plus d\'infos.'
        },
        {
          q: 'Puis-je acheter des compléments alimentaires sur place ?',
          a: 'Nous proposons une sélection de produits Fire Fit (shakers, gourdes) et pouvons vous conseiller sur les meilleurs compléments selon vos besoins.'
        }
      ]
    },
    {
      category: 'Pratique',
      icon: MapPin,
      color: 'red',
      questions: [
        {
          q: 'Où êtes-vous situés ?',
          a: 'Fire Fit est situé au Centre ville Hassan en face SNRT, Rue Moulay Abdelaziz à Rabat. Consultez notre page Contact pour la carte interactive.'
        },
        {
          q: 'Y a-t-il un parking ?',
          a: 'Oui, un parking est disponible à proximité de la salle.'
        },
        {
          q: 'Comment puis-je vous contacter ?',
          a: 'Par téléphone : 0537735052 ou 0658943859 | Instagram : @firefit.ma | Ou passez directement nous voir à la salle !'
        },
        {
          q: 'Proposez-vous une séance d\'essai gratuite ?',
          a: 'Contactez-nous pour découvrir nos offres découverte et visiter les installations avec l\'un de nos coachs.'
        }
      ]
    },
    {
      category: 'Boutique Fire Fit',
      icon: HelpCircle,
      color: 'pink',
      questions: [
        {
          q: 'Où puis-je acheter vos produits Fire Fit ?',
          a: 'Nos t-shirts, hoodies et accessoires sont disponibles directement à la salle ou sur commande via Instagram @firefit.ma. Consultez notre page Produits pour voir le catalogue complet.'
        },
        {
          q: 'Puis-je échanger ou retourner un produit ?',
          a: 'Les échanges sont possibles sous 7 jours si le produit n\'a pas été porté et avec l\'étiquette. Contactez-nous pour plus de détails.'
        },
        {
          q: 'Y a-t-il des réductions pour les membres ?',
          a: 'Oui, les membres Fire Fit bénéficient de réductions exclusives sur tous les produits de la boutique !'
        }
      ]
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-700',
    orange: 'from-orange-500 to-orange-700',
    green: 'from-green-500 to-green-700',
    purple: 'from-purple-500 to-purple-700',
    red: 'from-red-500 to-red-700',
    pink: 'from-pink-500 to-pink-700'
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-20 h-20 text-fire-orange mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            QUESTIONS FRÉQUENTES
          </h1>
          <div className="w-32 h-1.5 bg-fire-orange mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Trouvez rapidement les réponses à toutes vos questions sur Fire Fit
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${colorClasses[category.color]} rounded-2xl p-6 mb-6 shadow-xl`}>
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{category.category}</h2>
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={qIndex}
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-bold text-slate-900 pr-4">
                          {faq.q}
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-fire-blue flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-60' : ''}`}>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-white" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-white" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-2">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="w-16 h-16 text-fire-orange mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            VOUS NE TROUVEZ PAS VOTRE RÉPONSE ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Notre équipe est là pour répondre à toutes vos questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0537735052"
              className="inline-flex items-center justify-center space-x-2 bg-fire-orange hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Phone className="w-6 h-6" />
              <span>APPELER MAINTENANT</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-blue-700 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>NOUS CONTACTER</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;