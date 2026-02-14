import { Clock, TrendingUp, TrendingDown } from 'lucide-react';
import { gymData } from '../data/gymData';

const Schedule = () => {
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
            NOS HORAIRES
          </h1>
          <div className="w-32 h-2 bg-fire-orange mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ouvert 7/7 jours pour vous accompagner dans votre transformation

          </p>
        </div>
      </section>

      {/* Schedule Cards */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {gymData.schedule.map((day, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Clock className="w-8 h-8 text-fire-blue" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 text-center mb-4">
                    {day.day}
                  </h3>

                  <div className="bg-fire-blue text-white text-center py-4 px-6 rounded-xl mb-4">
                    <p className="text-2xl font-bold">{day.hours}</p>
                  </div>

                  <div className="text-center">
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold">
                      {day.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Peak Hours Info */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  PLANIFIEZ VOTRE VISITE
                </h2>
                <div className="w-24 h-1.5 bg-fire-orange mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Heures Calmes */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <TrendingDown className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">HEURES CALMES</h3>
                  </div>
                  <p className="text-blue-100 mb-4">
                    Pour un entraînement tranquille et avoir accès à tous les équipements :
                  </p>
                  <ul className="space-y-3">
                    {gymData.peakHours.calm.map((time, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-3 text-white"
                      >
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span>{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Heures de Pointe */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">HEURES DE POINTE</h3>
                  </div>
                  <p className="text-blue-100 mb-4">
                    Périodes de forte affluence, idéal pour une ambiance motivante :
                  </p>
                  <ul className="space-y-3">
                    {gymData.peakHours.peak.map((time, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-3 text-white"
                      >
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        <span>{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200 shadow-lg">
            <div className="text-center">
              <Clock className="w-16 h-16 text-fire-blue mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                ACCÈS FLEXIBLE
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Profitez d'un accès illimité pendant nos heures d'ouverture. Que vous soyez du matin ou du soir, Fire Fit s'adapte à votre emploi du temps.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="font-bold text-slate-900 mb-2">Du Lundi au Vendredi</p>
                  <p className="text-fire-blue text-2xl font-bold">16h30 d'ouverture</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <p className="font-bold text-slate-900 mb-2">Weekend</p>
                  <p className="text-fire-orange text-2xl font-bold">Ouvert 2 jours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            COMMENCEZ DÈS AUJOURD'HUI
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Venez découvrir Fire Fit et profitez d'une séance découverte gratuite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-fire-orange hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>RÉSERVER UNE SÉANCE</span>
            </a>
            <a
              href="tel:0537735052"
              className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-blue-700 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white"
            >
              <Clock className="w-5 h-5" />
              <span>APPELER MAINTENANT</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
