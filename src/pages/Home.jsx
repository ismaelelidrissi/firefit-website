import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Heart, Target, Dumbbell, Zap, Crosshair } from 'lucide-react';
import { gymData } from '../data/gymData';
import CountUp from '../components/CountUp';

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
      {/* Hero Section - Image background sur mobile, split screen sur desktop */}
      <section className="pt-20">
        <div className="min-h-[calc(100vh-5rem)] grid lg:grid-cols-2">
          {/* Left Side - Content avec background mobile */}
          <div className="relative flex items-center justify-center px-6 lg:px-12 py-16 lg:py-0 bg-gradient-to-br from-gray-50 to-white">
            
            {/* Image de fond SEULEMENT sur mobile */}
            <div className="absolute inset-0 lg:hidden">
              <img 
                src="/hero-gym.jpg" 
                alt="Fire Fit Gym" 
                className="w-full h-full object-cover"
              />
              {/* Overlay sombre pour lire le texte sur mobile */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
            </div>

            {/* Contenu texte avec flou derrière */}
            <div className="relative z-10 max-w-xl space-y-6">
              
              {/* Titre avec flou */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-blur-bg inline-block text-fire-orange">FIRE</span>
                <br />
                <span className="text-blur-bg inline-block text-white lg:text-slate-900">FIT</span>
                <br />
                <span className="text-blur-bg inline-block text-fire-blue">CLUB</span>
              </h1>
              
              {/* Sous-titre avec flou */}
              <h2 className="text-blur-bg inline-block text-lg md:text-2xl font-semibold text-white lg:text-slate-700">
                CENTRE DE REMISE EN FORME PREMIUM
              </h2>
              
              {/* Paragraphe avec flou */}
              <p className="text-blur-bg text-base text-white lg:text-gray-600 leading-relaxed">
                Nous sommes déjà plus de <span className="text-fire-orange lg:text-fire-blue font-bold">500+ athlètes</span> à travers Rabat qui parviennent, chaque jour, à placer nos limites physiques et mentales un peu plus loin qu'hier.
              </p>
              
              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/pricing"
                  className="group inline-flex items-center justify-center space-x-2 bg-fire-orange hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span>VOIR LES TARIFS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center space-x-2 bg-fire-blue hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span>NOUS CONTACTER</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
            </div>
          </div>

          {/* Right Side - Image SEULEMENT sur desktop */}
          <div className="hidden lg:block relative overflow-hidden bg-gradient-to-br from-slate-200 via-blue-200 to-blue-400">
            <img 
              src="/hero-gym.jpg" 
              alt="Fire Fit Gym Interior" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
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

      {/* Stats Bar - Compact et moderne */}
      <section className="relative py-8 md:py-12 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        {/* Lignes décoratives diagonales */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fire-orange to-transparent transform -rotate-12"></div>
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-fire-blue to-transparent transform rotate-12"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Disposition en zigzag moderne - COMPACT */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3">
            
            {/* Stat 1 - Haut */}
            <div className="text-center lg:translate-y-0">
              <div className="inline-block relative group">
                <div className="absolute -inset-3 bg-fire-orange/10 rounded-full blur-xl group-hover:bg-fire-orange/20 transition-all"></div>
                <div className="relative">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-fire-orange mb-1 group-hover:scale-110 transition-transform">
                    <CountUp end="6" suffix="+" />
                  </div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-fire-orange to-transparent mx-auto mb-2"></div>
                  <div className="text-xs md:text-sm text-gray-300 font-semibold uppercase tracking-wide">
                    Années
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 2 - Bas */}
            <div className="text-center lg:translate-y-6">
              <div className="inline-block relative group">
                <div className="absolute -inset-3 bg-fire-orange/10 rounded-full blur-xl group-hover:bg-fire-orange/20 transition-all"></div>
                <div className="relative">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-fire-orange mb-1 group-hover:scale-110 transition-transform">
                    <CountUp end="500" suffix="+" />
                  </div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-fire-orange to-transparent mx-auto mb-2"></div>
                  <div className="text-xs md:text-sm text-gray-300 font-semibold uppercase tracking-wide">
                    Membres
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 3 - Haut */}
            <div className="text-center lg:translate-y-0">
              <div className="inline-block relative group">
                <div className="absolute -inset-3 bg-fire-blue/10 rounded-full blur-xl group-hover:bg-fire-blue/20 transition-all"></div>
                <div className="relative">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-fire-blue mb-1 group-hover:scale-110 transition-transform">
                    <CountUp end="3" />
                  </div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-fire-blue to-transparent mx-auto mb-2"></div>
                  <div className="text-xs md:text-sm text-gray-300 font-semibold uppercase tracking-wide">
                    Coachs
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 4 - Bas */}
            <div className="text-center lg:translate-y-6">
              <div className="inline-block relative group">
                <div className="absolute -inset-3 bg-fire-blue/10 rounded-full blur-xl group-hover:bg-fire-blue/20 transition-all"></div>
                <div className="relative">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-fire-blue mb-1 group-hover:scale-110 transition-transform">
                    <CountUp end="100" suffix="%" />
                  </div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-fire-blue to-transparent mx-auto mb-2"></div>
                  <div className="text-xs md:text-sm text-gray-300 font-semibold uppercase tracking-wide">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Offre Spéciale Section - NOUVELLE */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titre */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              OFFRE SPÉCIALE
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-transparent via-fire-orange to-transparent mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 font-semibold">
              Rejoignez-nous dès aujourd'hui !
            </p>
          </div>

          {/* Image promotionnelle */}
          <div className="max-w-2xl mx-auto">
            <Link 
              to="/contact"
              className="group relative block overflow-hidden rounded-3xl shadow-2xl hover:shadow-fire-orange/50 transition-all duration-500 hover:scale-105"
            >
              {/* Effet de glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-fire-orange via-orange-600 to-fire-orange rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src="/promo-firefit.jpg" 
                  alt="Offre Fire Fit - 150 MAD/mois ou 1200 MAD/an"
                  className="w-full h-auto rounded-3xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="bg-gradient-to-br from-orange-500 to-red-600 aspect-[9/16] rounded-3xl flex items-center justify-center text-white p-8">
                        <div class="text-center">
                          <h3 class="text-4xl font-black mb-6">OFFRES FIRE FIT</h3>
                          <div class="space-y-4 mb-8">
                            <div class="bg-blue-600 px-6 py-4 rounded-xl">
                              <span class="text-5xl font-black">150 MAD</span>
                              <span class="text-2xl ml-2">/ 1 MOIS</span>
                            </div>
                            <div class="bg-yellow-500 px-6 py-4 rounded-xl">
                              <span class="text-5xl font-black">1200 MAD</span>
                              <span class="text-2xl ml-2">/ 1 AN</span>
                            </div>
                          </div>
                          <p class="text-sm uppercase tracking-wider">Sans frais d'inscription</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                
                {/* Badge "Cliquez pour vous inscrire" */}
                <div className="absolute top-4 right-4 bg-fire-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  Cliquez ici !
                </div>

                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-fire-orange/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl flex items-end justify-center pb-8">
                  <div className="text-white text-center">
                    <p className="text-2xl font-black mb-2">S'INSCRIRE MAINTENANT</p>
                    <p className="text-sm">Cliquez pour nous contacter →</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Avantages Section - 3 colonnes */}
      
      <section className="py-12 md:py-16 bg-gray-50">
              <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        NOS AVANTAGES
        </h2>
        <div className="w-20 h-1 bg-fire-orange mx-auto"></div>
      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Avantage 1 - Salle Mixte */}
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-slate-800 flex items-center justify-center bg-white group-hover:bg-slate-800 transition-all duration-300">
                  <svg className="w-8 h-8 text-slate-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-wide">
                  SALLE MIXTE
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hommes et femmes bienvenus
                </p>
              </div>
            </div>
            {/* Avantage 2 - Équipement */}
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-slate-800 flex items-center justify-center bg-white group-hover:bg-slate-800 transition-all duration-300">
                  <svg className="w-8 h-8 text-slate-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-wide">
                  ÉQUIPEMENT HAUT DE GAMME
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Technogym & Hammer Strength
                </p>
              </div>
            </div>

            {/* Avantage 3 - Ouvert 7/7 */}
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-slate-800 flex items-center justify-center bg-white group-hover:bg-slate-800 transition-all duration-300">
                  <svg className="w-8 h-8 text-slate-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-wide">
                  OUVERT 7J/7
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Vous gardez le contrôle
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Programs Section - Padding réduit */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              NOS PROGRAMMES
            </h2>
            <div className="w-20 h-1 bg-fire-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl h-80 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient}`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
                
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