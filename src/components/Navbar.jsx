import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Équipe', path: '/team' },
    { name: 'Tarifs', path: '/pricing' },
    { name: 'Produits', path: '/products' },
    { name: 'Horaires', path: '/schedule' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 group">
            <div className="relative">
              <img 
                className="w-14 h-14 object-contain rounded-full ring-2 ring-fire-orange/50 group-hover:ring-fire-orange transition-all" 
                src="/firefit.png" 
                alt="Fire Fit Logo" 
              />
              <div className="absolute -inset-1 bg-fire-orange/20 rounded-full blur-md group-hover:bg-fire-orange/40 transition-all"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">FIRE FIT</h1>
              <p className="text-xs text-fire-orange font-semibold">Premium Fitness</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group px-4 py-2 text-sm font-semibold transition-all duration-300 relative rounded-lg
                  ${isActive(link.path) 
                    ? 'text-fire-orange bg-fire-orange/10' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-700'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-fire-orange to-transparent rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* S'INSCRIRE Button Desktop */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-fire-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-black text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fire-orange/50 group"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>S'INSCRIRE</span>
          </Link>

          {/* Mobile: S'INSCRIRE + Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* S'INSCRIRE Mobile - visible à côté du menu */}
            <Link
              to="/contact"
              className="flex items-center space-x-1.5 bg-gradient-to-r from-fire-orange to-orange-600 text-white px-4 py-2 rounded-lg font-bold text-xs transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>S'INSCRIRE</span>
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2.5 hover:bg-slate-700 rounded-lg transition-all duration-300 border border-slate-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700 shadow-xl">
          <div className="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300
                  ${isActive(link.path)
                    ? 'bg-gradient-to-r from-fire-orange to-orange-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;