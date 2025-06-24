
import React from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-800">
              🎄 Stojaki Choinkowe
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#produkty" className="text-gray-700 hover:text-green-600 transition-colors">
              Produkty
            </a>
            <a href="#zamowienie" className="text-gray-700 hover:text-green-600 transition-colors">
              Zamówienie
            </a>
            <a href="#kontakt" className="text-gray-700 hover:text-green-600 transition-colors">
              Kontakt
            </a>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://wa.me/48123456789"
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
            <a
              href="tel:+48123456789"
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Zadzwoń
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#produkty" className="text-gray-700 hover:text-green-600">
                Produkty
              </a>
              <a href="#zamowienie" className="text-gray-700 hover:text-green-600">
                Zamówienie
              </a>
              <a href="#kontakt" className="text-gray-700 hover:text-green-600">
                Kontakt
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <a
                  href="https://wa.me/48123456789"
                  className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
                <a
                  href="tel:+48123456789"
                  className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Zadzwoń
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
