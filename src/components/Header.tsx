import React from 'react';
import { Phone, MessageCircle, Menu, X, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditableText from './EditableText';
import { useCartStore } from '../hooks/use-cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, loadCart } = useCartStore();

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo po lewej stronie - z linkiem do strony głównej */}
          <div className="flex-shrink-0">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <EditableText
                id="header-logo"
                initialText="Metalowe Stojaki Choinkowe"
                component="Header"
                file="src/components/Header.tsx"
                as="h1"
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent hover:from-green-800 hover:to-green-700 transition-all duration-300"
              />
            </Link>
          </div>

          {/* Menu desktop - po środku */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/#stojaki" 
              className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium text-lg relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              <EditableText
                id="header-nav-products"
                initialText="Stojaki na choinkę"
                component="Header"
                file="src/components/Header.tsx"
                as="span"
              />
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium text-lg relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              <EditableText
                id="header-nav-faq"
                initialText="FAQ"
                component="Header"
                file="src/components/Header.tsx"
                as="span"
              />
            </Link>
            <Link 
              to="/hurt" 
              className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium text-lg relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              <EditableText
                id="header-nav-hurt"
                initialText="Hurt"
                component="Header"
                file="src/components/Header.tsx"
                as="span"
              />
            </Link>
            <Link 
              to="/#zamowienie" 
              className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium text-lg relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              <EditableText
                id="header-nav-contact"
                initialText="Kontakt"
                component="Header"
                file="src/components/Header.tsx"
                as="span"
              />
            </Link>
          </nav>

          {/* Przyciski kontaktowe desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/koszyk"
              className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Koszyk"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <a
              href="https://wa.me/48604821125"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
            <a
              href="tel:+48604821125"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Zadzwoń</span>
            </a>
          </div>

          {/* Przyciski mobilne */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              to="/koszyk"
              className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Koszyk"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-b-lg">
            <nav className="flex flex-col space-y-2 mt-4 px-2">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-green-600 font-medium py-3 px-4 rounded-lg hover:bg-green-50 transition-all duration-200 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                🏠 Strona główna
              </Link>
              <Link 
                to="/#stojaki" 
                className="text-gray-700 hover:text-green-600 font-medium py-3 px-4 rounded-lg hover:bg-green-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                🎄 Stojaki na choinkę
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-700 hover:text-green-600 font-medium py-3 px-4 rounded-lg hover:bg-green-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                ❓ FAQ
              </Link>
              <Link 
                to="/hurt" 
                className="text-gray-700 hover:text-green-600 font-medium py-3 px-4 rounded-lg hover:bg-green-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                📦 Hurt
              </Link>
              <Link 
                to="/#zamowienie" 
                className="text-gray-700 hover:text-green-600 font-medium py-3 px-4 rounded-lg hover:bg-green-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                📞 Kontakt
              </Link>
              <div className="grid grid-cols-1 gap-3 pt-4 mt-4 border-t border-gray-200">
                <a
                  href="https://wa.me/48604821125"
                  className="flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-medium shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp - 604 821 125
                </a>
                <a
                  href="tel:+48604821125"
                  className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Zadzwoń - 604 821 125
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;