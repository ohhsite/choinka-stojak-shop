import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Factory } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo i opis */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              🎄 Stojaki Choinkowe
              <span className="ml-2 text-sm bg-blue-600 px-2 py-1 rounded">PRODUCENT</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Jesteśmy producentem nowoczesnych stalowych stojaków choinkowych z siedzibą na Podlasiu. 
              Od lat specjalizujemy się w dostawach B2B dla sklepów, hoteli, galerii i firm dekoratorskich. 
              Oferujemy profesjonalne rozwiązania z dostępą paletową w całej Polsce.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-blue-400">
                <Factory className="w-5 h-5 mr-2" />
                <span className="text-gray-300">Własna produkcja • Podlaskie</span>
              </div>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt B2B</h4>
            <div className="space-y-3">
              <a href="tel:+48123456789" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 mr-3" />
                +48 123 456 789
              </a>
              <a href="https://wa.me/48123456789" className="flex items-center text-gray-300 hover:text-gray-100 transition-colors">
                <MessageCircle className="w-4 h-4 mr-3" />
                WhatsApp B2B
              </a>
              <a href="mailto:b2b@stojaki-choinkowe.pl" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 mr-3" />
                b2b@stojaki-choinkowe.pl
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                Podlaskie, Polska
              </div>
            </div>
          </div>

          {/* Informacje */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Dla Firm</h4>
            <ul className="space-y-2">
              <li>
                <a href="#produkty" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Katalog B2B
                </a>
              </li>
              <li>
                <a href="#zamowienie" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Zapytanie Ofertowe
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Dostawa Paletowa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Regulamin B2B
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Polityka Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sekcja SEO */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Nowoczesne Stojaki Choinkowe B2B</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Producent <strong>nowoczesnych stojaków choinkowych stalowych</strong> z Podlasia. 
                Oferujemy <strong>stojaki do choinek</strong> dla firm - minimalne zamówienie 5 sztuk, 
                dostawa paletowa. Nasze <strong>stojaki stalowe</strong> o pojemności 1L zapewniają 
                stabilność i bezpieczeństwo. Specjalizujemy się w dostawach B2B dla sklepów i galerii.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Popularne Wyszukiwania B2B</h4>
              <div className="flex flex-wrap gap-2">
                {["stojaki choinkowe hurtownia", "stojaki stalowe B2B", "stojaki do choinek sklep", "nowoczesne stojaki choinkowe", "stojaki choinkowe producent", "dostawa paletowa stojaki"].map(tag => <span key={tag} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                    {tag}
                  </span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Polityka Cookies */}
        <div id="cookies" className="border-t border-gray-700 mt-8 pt-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-3">Polityka Cookies</h4>
            <p className="text-gray-300 text-sm mb-4">
              Ta strona wykorzystuje pliki cookies w celu zapewnienia najwyższej jakości usług. 
              Korzystając z naszej strony wyrażasz zgodę na używanie cookies zgodnie z naszą polityką prywatności. 
              Cookies pomagają nam analizować ruch na stronie i dostosowywać treści do Twoich potrzeb biznesowych.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                Akceptuję wszystkie
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700 transition-colors">
                Tylko niezbędne
              </button>
              <a href="#" className="text-blue-400 text-sm hover:underline flex items-center">
                Ustawienia cookies
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Stojaki Choinkowe - Producent z Podlasia. Wszystkie prawa zastrzeżone. Nowoczesne stojaki stalowe - dostawa paletowa w całej Polsce.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;