import React from 'react';
import { Star, Shield, Truck, Factory, Award } from 'lucide-react';
const Hero = () => {
  return <section className="bg-gradient-to-br from-gray-50 to-slate-100 py-20 relative overflow-hidden">
      {/* Promocja - wyróżniona sekcja */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full shadow-lg animate-pulse">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span className="font-bold text-lg">PROMOCJA LETNIA -15%</span>
            <span className="text-red-100">do sierpnia!</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center pt-16">
        <div className="mb-4">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            PRODUCENT • PODLASKIE
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Nowoczesne <span className="text-blue-600">Stojaki Choinkowe</span>
          <br />
          <span className="text-gray-700">sprzedaż hurtowa</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Producent stalowych stojaków choinkowych z Podlasia. 
          Minimalne zamówienie 5 sztuk. Dostawa paletowa w całej Polsce.
          Profesjonalne rozwiązania dla sklepów, hoteli i galerii.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <Factory className="w-6 h-6 text-blue-600 mr-2" />
            <span className="font-semibold text-gray-800">Własna produkcja</span>
          </div>
          <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <Shield className="w-6 h-6 text-gray-600 mr-2" />
            <span className="font-semibold text-gray-800">Gwarancja B2B</span>
          </div>
          <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <Truck className="w-6 h-6 text-blue-600 mr-2" />
            <span className="font-semibold text-gray-800">Dostawa paletowa</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#produkty" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Zobacz Katalog B2B
          </a>
          <a href="#zamowienie" className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-colors shadow-lg">
            Zapytanie Ofertowe
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;