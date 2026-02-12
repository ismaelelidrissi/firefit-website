import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Équipe', path: '/team' },
    { name: 'Tarifs', path: '/pricing' },
    { name: 'Produits', path: '/products' },
    { name: 'Horaires', path: '/schedule' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Colonne 1: Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                className="w-14 h-14 object-contain" 
                src="/firefit.png" 
                alt="Fire Fit Logo" 
              />
              <div>
                <h3 className="text-2xl font-bold text-white">FIRE FIT</h3>
                <p className="text-sm text-gray-400">Premium Fitness Center</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Centre de remise en forme de référence à Rabat. Transformez votre corps et votre esprit dans un environnement premium avec des coachs certifiés.
            </p>
          </div>

          {/* Colonne 2: Liens Rapides */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-fire-blue transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-fire-orange rounded-full"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-fire-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Centre ville Hassan en face SNRT</p>
                  <p className="text-gray-400">Rue Moulay Abdelaziz, Rabat</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-fire-blue flex-shrink-0" />
                <div>
                  <a href="tel:0537735052" className="text-gray-400 hover:text-fire-blue transition-colors">
                    0537735052
                  </a>
                  <span className="text-gray-400"> / </span>
                  <a href="tel:0658943859" className="text-gray-400 hover:text-fire-blue transition-colors">
                    0658943859
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-fire-blue flex-shrink-0" />
                <a
                  href="https://instagram.com/firefit.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-fire-blue transition-colors"
                >
                  @firefit.ma (6.4K followers)
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-2">Notre équipe :</p>
              <div className="space-y-1">
                <div className="text-sm text-gray-400">
                  Owner:{' '}
                  <a
                    href="https://instagram.com/ibtissamdiet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-fire-blue transition-colors"
                  >
                    @ibtissamdiet
                  </a>
                </div>
                <div className="text-sm text-gray-400">
                  Coachs:{' '}
                  <a
                    href="https://instagram.com/hicham_of_down"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-fire-blue transition-colors"
                  >
                    @hicham_of_down
                  </a>
                  ,{' '}
                  <a
                    href="https://instagram.com/coach_zaari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-fire-blue transition-colors"
                  >
                    @coach_zaari
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Fire Fit. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://instagram.com/firefit.ma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-fire-blue transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:0537735052"
                className="text-gray-400 hover:text-fire-blue transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@firefit.ma"
                className="text-gray-400 hover:text-fire-blue transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;