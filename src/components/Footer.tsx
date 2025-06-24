
import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo i opis */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              🎄 Stojaki Choinkowe
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Jesteśmy wiodącym dostawcą stalowych stojaków choinkowych w Polsce. 
              Od ponad 10 lat zapewniamy najwyższą jakość produktów i profesjonalną obsługę klienta. 
              Nasze stojaki używane są przez tysiące zadowolonych klientów w całym kraju.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-300">4.9/5 (2847 opinii)</span>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a
                href="tel:+48123456789"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-3" />
                +48 123 456 789
              </a>
              <a
                href="https://wa.me/48123456789"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-3" />
                WhatsApp
              </a>
              <a
                href="mailto:info@stojaki-choinkowe.pl"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-3" />
                info@stojaki-choinkowe.pl
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                Warszawa, Polska
              </div>
            </div>
          </div>

          {/* Informacje */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informacje</h4>
            <ul className="space-y-2">
              <li>
                <a href="#produkty" className="text-gray-300 hover:text-white transition-colors">
                  Nasze Produkty
                </a>
              </li>
              <li>
                <a href="#zamowienie" className="text-gray-300 hover:text-white transition-colors">
                  Jak Zamówić
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-300 hover:text-white transition-colors">
                  Dostawa i Płatność
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Regulamin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Polityka Prywatności
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sekcja SEO */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Stojaki Choinkowe - Dlaczego My?</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nasze <strong>stojaki choinkowe stalowe</strong> to gwarancja bezpieczeństwa i trwałości. 
                Oferujemy <strong>stojaki do choinek</strong> wszystkich rozmiarów - od małych stojaków 
                do mieszkań po przemysłowe <strong>stojaki stalowe</strong> dla galerii handlowych. 
                Każdy stojak choinkowy w naszej ofercie przeszedł testy jakości i ma certyfikat bezpieczeństwa.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Popularne Wyszukiwania</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "stojaki choinkowe",
                  "stojaki stalowe", 
                  "stojaki do choinek",
                  "stojak choinkowy metalowy",
                  "stojaki świąteczne",
                  "akcesoria choinkowe"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            © 2024 Stojaki Choinkowe. Wszystkie prawa zastrzeżone. 
            Sprzedaż stojaków choinkowych stalowych w całej Polsce.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
