import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Factory } from 'lucide-react';
import EditableText from './EditableText';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-8 md:py-12 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo i opis */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex flex-col sm:flex-row sm:items-center">
              <EditableText
                id="footer-title"
                initialText="🎄 Stojaki Choinkowe"
                component="Footer"
                file="src/components/Footer.tsx"
                as="span"
              />
              <span className="mt-2 sm:mt-0 sm:ml-2 text-xs md:text-sm bg-gradient-to-r from-green-500 to-green-600 px-2 py-1 rounded-full text-white/90 self-start">PRODUCENT</span>
            </h3>
            <EditableText
              id="footer-description"
              initialText="Jesteśmy producentem nowoczesnych stalowych stojaków choinkowych z siedzibą na Podlasiu. Od lat specjalizujemy się w dostawach B2B dla sklepów, hoteli, galerii i firm dekoratorskich."
              component="Footer"
              file="src/components/Footer.tsx"
              as="p"
              className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base"
            />
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center text-green-400">
                <Factory className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                <span className="text-gray-300 text-sm md:text-base">Własna produkcja • Podlaskie</span>
              </div>
            </div>
          </div>

          {/* Kontakt */}
          <div className="order-1 md:order-none">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-green-400">Kontakt B2B</h4>
            <div className="space-y-2 md:space-y-3">
              <a href="tel:+48123456789" className="flex items-center text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <EditableText
                  id="footer-phone"
                  initialText="604 821 125"
                  component="Footer"
                  file="src/components/Footer.tsx"
                  as="span"
                />
              </a>
              <a href="https://wa.me/48123456789" className="flex items-center text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">
                <MessageCircle className="w-4 h-4 mr-3 flex-shrink-0" />
                WhatsApp 
              </a>
              <a href="mailto:b2b@stojaki-choinkowe.pl" className="flex items-center text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <EditableText
                  id="footer-email"
                  initialText="kontakt@stojakinachoinke.pl"
                  component="Footer"
                  file="src/components/Footer.tsx"
                  as="span"
                />
              </a>
              <div className="flex items-center text-gray-300 text-sm md:text-base">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                Podlaskie, Polska
              </div>
            </div>
          </div>

          {/* Informacje */}
          <div className="order-2 md:order-none">
            <EditableText
              id="footer-company-title"
              initialText="Dla Firm"
              component="Footer"
              file="src/components/Footer.tsx"
              as="h4"
              className="text-lg font-semibold mb-4 text-green-400"
            />
            <ul className="space-y-2">
              <li>
                <a href="/#stojaki" className="text-gray-300 hover:text-green-400 transition-all duration-300">
                  <EditableText
                    id="footer-catalog-link"
                    initialText="Katalog B2B"
                    component="Footer"
                    file="src/components/Footer.tsx"
                    as="span"
                  />
                </a>
              </li>
              <li>
                <a href="/#zamowienie" className="text-gray-300 hover:text-green-400 transition-all duration-300">
                  <EditableText
                    id="footer-quote-link"
                    initialText="Zapytanie Ofertowe"
                    component="Footer"
                    file="src/components/Footer.tsx"
                    as="span"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-all duration-300">
                  <EditableText
                    id="footer-delivery-link"
                    initialText="Dostawa Paletowa"
                    component="Footer"
                    file="src/components/Footer.tsx"
                    as="span"
                  />
                </a>
              </li>
              <li>
                <a href="/files/Regulamin Sklepu Internetowego Clever Way (2).pdf" className="text-gray-300 hover:text-green-400 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                  <EditableText
                    id="footer-terms-link"
                    initialText="Regulamin Sklepu"
                    component="Footer"
                    file="src/components/Footer.tsx"
                    as="span"
                  />
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-gray-300 hover:text-green-400 transition-all duration-300">
                  <EditableText
                    id="footer-cookies-link"
                    initialText="Polityka Cookies"
                    component="Footer"
                    file="src/components/Footer.tsx"
                    as="span"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="text-center text-gray-400">
            <EditableText
              id="footer-copyright"
              initialText="© 2025 Stojaki Choinkowe. Wszelkie prawa zastrzeżone."
              component="Footer"
              file="src/components/Footer.tsx"
              as="p"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;