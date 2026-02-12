import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Heart, Target, Dumbbell, Zap, Crosshair } from 'lucide-react';
import { gymData } from '../data/gymData';

const Home = () => {
  const programs = [
    {
      title: 'MUSCULATION',
      description: 'Développez votre force et votre masse musculaire avec nos équipements de pointe',
      gradient: 'from-blue-500 to-blue-700',
      icon: Dumbbell
    },
    {
      title: 'CARDIO TRAINING',
      description: 'Améliorez votre endurance et brûlez des calories efficacement',
      gradient: 'from-orange-500 to-red-600',
      icon: Zap
    },
    {
      title: 'FIGHT TRAINING',
      description: 'Canalisez votre énergie avec nos cours de combat et d\'arts martiaux',
      gradient: 'from-yellow-500 to-orange-600',
      icon: Crosshair
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Équipements Premium',
      description: 'Matériel professionnel de dernière génération'
    },
    {
      icon: Users,
      title: 'Coachs Certifiés',
      description: 'Accompagnement personnalisé par des experts'
    },
    {
      icon: Target,
      title: 'Résultats Garantis',
      description: 'Méthodes éprouvées et suivi de progression'
    },
    {
      icon: Heart,
      title: 'Bien-être Global',
      description: 'Approche complète corps et esprit'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split Screen */}
      <section className="pt-20">
        <div className="min-h-[calc(100vh-5rem)] grid lg:grid-cols-2">
          {/* Left Side - Content */}
          <div className="flex items-center justify-center px-6 lg:px-12 py-16 lg:py-0 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-xl">
            
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-fire-orange">FIRE</span>
                <br />
                <span className="text-slate-900">FIT</span>
                <br />
                <span className="text-fire-blue">CLUB</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
                CENTRE DE REMISE EN FORME PREMIUM
              </h2>
              
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Nous sommes déjà plus de <span className="text-fire-blue font-bold">500+ athlètes</span> à travers Rabat qui parviennent, chaque jour, à placer nos limites physiques et mentales un peu plus loin qu'hier.
              </p>

              <p className="text-gray-500 mb-8">
                Trouvez votre club le plus proche
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/pricing"
                  className="group inline-flex items-center justify-center space-x-2 bg-fire-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span>VOIR LES TARIFS</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center space-x-2 bg-fire-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span>NOUS CONTACTER</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
              </div>
              
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:block relative overflow-hidden bg-gradient-to-br from-slate-200 via-blue-200 to-blue-400">
            <img 
              src="/public/hero-gym1.jpg" 
              alt="Fire Fit Gym Interior" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay gradient pour meilleur contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
            {/* Badge décoratif optionnel */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-fire-orange rounded-xl flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">500+ Membres</p>
                  <p className="text-xs text-gray-600">Nous font confiance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-800 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {gymData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-fire-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              NOS PROGRAMMES
            </h2>
            <div className="w-24 h-1.5 bg-fire-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl h-80 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient}`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Icon Background */}
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <program.icon className="w-48 h-48 text-white" strokeWidth={1} />
                </div>

                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">{program.title}</h3>
                  <p className="text-white/90 leading-relaxed">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              POURQUOI <span className="text-fire-blue">FIRE FIT</span> ?
            </h2>
            <div className="w-24 h-1.5 bg-fire-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-fire-blue transition-colors">
                  <feature.icon className="w-8 h-8 text-fire-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            PRÊT À TRANSFORMER VOTRE CORPS ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Rejoignez Fire Fit aujourd'hui et bénéficiez de l'accompagnement de nos coachs professionnels certifiés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="group inline-flex items-center justify-center space-x-2 bg-fire-orange hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>COMMENCER MAINTENANT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/team"
              className="group inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-blue-700 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white"
            >
              <span>DÉCOUVRIR L'ÉQUIPE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;