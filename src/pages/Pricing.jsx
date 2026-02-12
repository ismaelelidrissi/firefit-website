import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Award, Users, TrendingUp } from 'lucide-react';
import { gymData } from '../data/gymData';

const Pricing = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Accès Illimité',
      description: '7 jours sur 7, de 6h à 22h30'
    },
    {
      icon: Users,
      title: 'Équipements Premium',
      description: 'Matériel professionnel dernière génération'
    },
    {
      icon: TrendingUp,
      title: 'Coaching Expert',
      description: 'Suivi personnalisé et programmes adaptés'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            LES OFFRES D'ABONNEMENTS
          </h1>
          <div className="w-32 h-1.5 bg-fire-orange mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choisissez l'offre qui vous convient le mieux et commencez votre transformation dès aujourd'hui
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {gymData.pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2
                  ${plan.highlight 
                    ? 'shadow-2xl ring-4 ring-fire-blue' 
                    : 'shadow-lg hover:shadow-2xl'
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-1 right-2 z-10">
                    <div className="bg-fire-blue text-white px-4 py-1.5 rounded-full text-sm font-bold">
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className={`p-8 text-center ${plan.highlight ? 'bg-fire-orange' : 'bg-gray-100'}`}>
                  <h3 className={`text-2xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="p-8 text-center border-b border-gray-100">
                  <div className="mb-6">
                    <span className="text-6xl font-bold text-slate-900">{plan.price.replace('DHS', '')}</span>
                    <span className="text-3xl text-gray-600">DHS</span>
                    <span className="text-xl text-gray-500 ml-2">{plan.period}</span>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <span>Le premier prélèvement à</span>
                      <span className={`${plan.highlight ? 'bg-fire-orange' : 'bg-gray-200'} px-3 py-1 rounded-full font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                        {plan.prelevement}
                      </span>
                    </div>
                    <p>Frais d'adhésion de {plan.adhesion}</p>
                    <p className="font-semibold text-gray-900">Engagement de {plan.engagement}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8">
                  <h4 className="text-sm font-bold text-gray-900 mb-4 italic">En option :</h4>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-sm font-bold text-gray-900 mb-4 italic">En option :</h4>
                  <ul className="space-y-3">
                    {plan.options.map((option, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="p-8 pt-0">
                  <Link
                    to="/contact"
                    className={`group w-full inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl
                      ${plan.highlight
                        ? 'bg-fire-orange hover:bg-orange-600 text-white'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                      }`}
                  >
                    <span>J'EN PROFITE</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-fire-blue rounded-2xl mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-16 h-16 text-fire-orange mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            UNE QUESTION SUR NOS OFFRES ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Notre équipe est là pour vous conseiller et vous aider à choisir l'abonnement parfait
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center space-x-2 bg-fire-orange hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span>CONTACTEZ-NOUS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
