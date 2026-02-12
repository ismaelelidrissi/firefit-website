import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X, Instagram } from 'lucide-react';

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
    <nav className="fixed top-0 left-0 right-0 bg-slate-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <img 
              className="w-16 h-16 object-contain" 
              src="/firefit.png" 
              alt="Fire Fit Logo" 
            />
            <div>
              <h1 className="text-2xl font-bold text-white">FIRE FIT</h1>
              <p className="text-xs text-gray-300">Premium Fitness Center</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative
                  ${isActive(link.path) 
                    ? 'text-fire-blue' 
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-fire-blue"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Instagram Button Desktop */}
          <a
            href="https://instagram.com/firefit.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center space-x-2 bg-fire-blue hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-700 border-t border-slate-600">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                  ${isActive(link.path)
                    ? 'bg-fire-blue text-white'
                    : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://instagram.com/firefit.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-fire-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium mt-4"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;