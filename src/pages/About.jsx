import { Award, Users, Heart, Target, Dumbbell, Zap, Crosshair, User, Apple, Sparkles, Star } from 'lucide-react';
import { gymData } from '../data/gymData';
import ImageSlider from '../components/ImageSlider';


const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Des équipements premium et un service de qualité supérieure'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Un environnement bienveillant et motivant pour tous'
    },
    {
      icon: Heart,
      title: 'Bien-être',
      description: 'Une approche holistique de la santé et du fitness'
    },
    {
      icon: Target,
      title: 'Résultats',
      description: 'Des méthodes éprouvées pour atteindre vos objectifs'
    }
  ];

  const services = [
    {
      icon: Dumbbell,
      title: 'MUSCULATION',
      description: 'Développez votre force et votre masse musculaire',
      features: [
        'Zone de poids libres complète',
        'Machines guidées professionnelles',
        'Programmes personnalisés',
        'Suivi de progression'
      ]
    },
    {
      icon: Zap,
      title: 'CARDIO TRAINING',
      description: 'Améliorez votre endurance cardiovasculaire',
      features: [
        'Tapis de course dernière génération',
        'Vélos et elliptiques',
        'Cours collectifs HIIT',
        'Plans d\'entraînement adaptés'
      ]
    },
    {
      icon: Crosshair,
      title: 'FIGHT TRAINING',
      description: 'Canalisez votre énergie avec nos cours de combat',
      features: [
        'Sacs de frappe professionnels',
        'Cours de boxe et kickboxing',
        'Training martial arts',
        'Amélioration de la coordination'
      ]
    },
    {
      icon: User,
      title: 'COACHING PERSONNALISÉ',
      description: 'Un accompagnement sur-mesure pour vos objectifs',
      features: [
        'Bilan personnalisé gratuit',
        'Programme adapté à vos besoins',
        'Suivi hebdomadaire',
        'Conseils nutritionnels'
      ]
    },
    {
      icon: Apple,
      title: 'NUTRITION SPORTIVE',
      description: 'Optimisez vos résultats avec une nutrition adaptée',
      features: [
        'Plans alimentaires personnalisés',
        'Conseils de notre nutritionniste',
        'Recettes et astuces',
        'Suivi de vos macros'
      ]
    },
    {
      icon: Sparkles,
      title: 'ESPACE DÉTENTE',
      description: 'Récupérez dans un environnement premium',
      features: [
        'Vestiaires spacieux',
        'Douches modernes',
        'Zone de repos',
        'Casiers sécurisés'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-3">
      {/* Header */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Effet de fond */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-fire-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-fire-blue rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            À PROPOS DE FIRE FIT
          </h1>
          <div className="w-32 h-2 bg-fire-orange mx-auto mb-6"></div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                NOTRE MISSION
              </h2>
              <div className="w-24 h-1.5 bg-fire-orange mb-8"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fire Fit est né d'une passion : celle de créer un espace où chaque personne, quel que soit son niveau, peut se dépasser et atteindre ses objectifs. Nous croyons fermement que la transformation physique commence par un environnement inspirant et un accompagnement de qualité.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Notre centre premium combine équipements de dernière génération, coachs certifiés et une communauté bienveillante pour vous offrir l'expérience fitness ultime. Rejoignez les 500+ membres qui transforment leur vie chaque jour chez Fire Fit.
              </p>
            </div>
          <ImageSlider />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              NOS VALEURS
            </h2>
            <div className="w-24 h-1.5 bg-fire-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-fire-blue transition-colors">
                  <value.icon className="w-8 h-8 text-fire-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              NOS SERVICES
            </h2>
            <div className="w-24 h-1.5 bg-fire-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-fire-blue rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start space-x-2">
                      <span className="text-fire-orange">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              ILS NOUS FONT CONFIANCE
            </h2>
            <div className="w-24 h-1.5 bg-fire-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gymData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-fire-orange fill-fire-orange" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-blue-400 pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-blue-200">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
