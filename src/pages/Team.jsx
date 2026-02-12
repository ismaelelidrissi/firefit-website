import { Instagram, Award } from 'lucide-react';
import { gymData } from '../data/gymData';

const Team = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            NOTRE ÉQUIPE
          </h1>
          <div className="w-32 h-1.5 bg-fire-orange mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les professionnels passionnés qui vous accompagneront dans votre transformation
          </p>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl overflow-hidden border-2 border-fire-blue">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Photo Column */}
              <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                <div className="absolute top-6 left-6 z-10">
                  <div className="bg-fire-blue text-white px-4 py-1.5 rounded-full text-sm font-bold">
                    PROPRIÉTAIRE
                  </div>
                </div>
                <img 
                  className="w-full h-full object-cover min-h-[500px]" 
                  src="/team/ibtissam.jpg" 
                  alt={gymData.owner.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-700/30 to-transparent z-10"></div>
              </div>

              {/* Info Column */}
              <div className="p-12">
                <h2 className="text-4xl font-bold text-slate-900 mb-2">{gymData.owner.name}</h2>
                <p className="text-xl text-fire-blue font-semibold mb-6">{gymData.owner.role}</p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  {gymData.owner.bio}
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                    Spécialités
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {gymData.owner.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-fire-blue text-white px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://instagram.com/${gymData.owner.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Instagram className="w-5 h-5" />
                  <span>{gymData.owner.instagram}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {gymData.coaches.map((coach, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Photo Section */}
                <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 h-80 overflow-hidden">
                  <img 
                    className="absolute inset-0 w-100 h-100 object-cover" 
                    src={`/team/coach-${index + 1}.jpg`}
                    alt={coach.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-700/50 to-transparent z-10"></div>
                </div>

                {/* Info Section */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">{coach.name}</h3>
                  <p className="text-lg text-fire-blue font-semibold mb-6">{coach.role}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                      Spécialités
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider flex items-center space-x-2">
                      <Award className="w-4 h-4 text-fire-orange" />
                      <span>Certifications</span>
                    </h4>
                    <ul className="space-y-2">
                      {coach.certifications.map((cert, idx) => (
                        <li key={idx} className="text-gray-700 text-sm space-x-2">
                          <span className="text-fire-orange mt-1.5">•</span>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://instagram.com/${coach.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>{coach.instagram}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            PRÊT À RENCONTRER L'ÉQUIPE ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Venez nous rendre visite et découvrez comment nous pouvons vous aider à atteindre vos objectifs
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center space-x-2 bg-fire-orange hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span>PLANIFIER UNE VISITE</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;