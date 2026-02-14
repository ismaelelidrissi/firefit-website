import { Instagram, Award, Star, Trophy, Zap } from 'lucide-react';
import { gymData } from '../data/gymData';

const Team = () => {
  return (
    <div className="min-h-screen bg-white pt-3">
      {/* Header Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Effet de fond */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-fire-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-fire-blue rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            NOTRE ÉQUIPE
          </h1>
          <div className="w-32 h-2 bg-fire-orange mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Des professionnels passionnés et certifiés pour votre transformation
          </p>
        </div>
      </section>

      {/* Owner Section - ROSE POUR IBTISSAM */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge Propriétaire - ROSE */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
              <Star className="w-5 h-5" />
              <span>FONDATRICE & PROPRIÉTAIRE</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Column - Glow ROSE */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-500">
                <div className="aspect-[3/4] bg-gradient-to-br from-pink-50 to-pink-100">
                  <img 
                    className="w-full h-full object-cover" 
                    src="/team/ibtissam.png" 
                    alt={gymData.owner.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>

            {/* Info Column */}
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-3">
                {gymData.owner.name}
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600 mb-8">
                {gymData.owner.role}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {gymData.owner.bio}
              </p>

              {/* Spécialités - ROSE */}
              <div className="mb-8">
                <h3 className="flex items-center space-x-2 text-sm font-black text-gray-900 mb-4 uppercase tracking-wider">
                  <Trophy className="w-5 h-5 text-pink-500" />
                  <span>Spécialités</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {gymData.owner.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:scale-105 transition-transform"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instagram */}
              <a
                href={`https://instagram.com/${gymData.owner.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Instagram className="w-6 h-6" />
                <span>{gymData.owner.instagram}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section - Séparés par genre */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Coachs Hommes */}
          <div className="mb-16">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                NOS COACHS HOMMES
              </h2>
              <div className="w-24 h-1.5 bg-fire-blue mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {gymData.coaches.filter(coach => coach.gender === 'male').map((coach, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Badge Coach */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-fire-blue text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Zap className="w-3 h-3" />
                      <span>COACH</span>
                    </div>
                  </div>

                  {/* Photo */}
                  <div className="relative h-80 bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
                    <img 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                      src={`/team/coach-${index + 1}.png`}
                      alt={coach.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Info */}
                  <div className="p-8">
                    <h3 className="text-3xl font-black text-slate-900 mb-1">
                      {coach.name}
                    </h3>
                    <p className="text-lg font-bold text-fire-blue mb-6">
                      {coach.role}
                    </p>

                    {/* Spécialités */}
                    <div className="mb-6">
                      <h4 className="text-xs font-black text-gray-900 mb-3 uppercase tracking-wider">
                        Spécialités
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-fire-blue px-3 py-1.5 rounded-lg text-sm font-semibold border border-blue-100"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-6">
                      <h4 className="flex items-center space-x-2 text-xs font-black text-gray-900 mb-3 uppercase tracking-wider">
                        <Award className="w-4 h-4 text-fire-blue" />
                        <span>Certifications</span>
                      </h4>
                      <ul className="space-y-2">
                        {coach.certifications.map((cert, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-700 text-sm">
                            <span className="text-fire-blue font-bold ">•</span>
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Instagram */}
                    <a
                      href={`https://instagram.com/${coach.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-fire-blue to-blue-500 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>{coach.instagram}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coachs Femmes */}
          {gymData.coaches.filter(coach => coach.gender === 'female').length > 0 && (
            <div>
              <div className="text-center mb-8 md:mb-10">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                  NOS COACHS FEMMES
                </h2>
                <div className="w-24 h-1.5 bg-pink-500 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {gymData.coaches.filter(coach => coach.gender === 'female').map((coach, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Badge Coach */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-pink-500 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Zap className="w-3 h-3" />
                        <span>COACH</span>
                      </div>
                    </div>

                    {/* Photo */}
                    <div className="relative h-80 bg-gradient-to-br from-pink-100 to-pink-50 overflow-hidden">
                      <img 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        src={`/team/coach-female-${index + 1}.png`}
                        alt={coach.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* Info */}
                    <div className="p-8">
                      <h3 className="text-3xl font-black text-slate-900 mb-1">
                        {coach.name}
                      </h3>
                      <p className="text-lg font-bold text-pink-500 mb-6">
                        {coach.role}
                      </p>

                      {/* Spécialités */}
                      <div className="mb-6">
                        <h4 className="text-xs font-black text-gray-900 mb-3 uppercase tracking-wider">
                          Spécialités
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {coach.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="bg-pink-50 text-pink-600 px-3 py-1.5 rounded-lg text-sm font-semibold border border-pink-100"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Certifications */}
                      <div className="mb-6">
                        <h4 className="flex items-center space-x-2 text-xs font-black text-gray-900 mb-3 uppercase tracking-wider">
                          <Award className="w-4 h-4 text-pink-500" />
                          <span>Certifications</span>
                        </h4>
                        <ul className="space-y-2">
                          {coach.certifications.map((cert, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-700 text-sm">
                              <span className="text-pink-500 font-bold ">•</span>
                              <span>{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Instagram */}
                      <a
                        href={`https://instagram.com/${coach.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <Instagram className="w-5 h-5" />
                        <span>{coach.instagram}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            PRÊT À RENCONTRER L'ÉQUIPE ?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Venez découvrir nos installations et rencontrer nos coachs passionnés
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center space-x-2 bg-fire-orange hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span>PLANIFIER UNE VISITE</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;