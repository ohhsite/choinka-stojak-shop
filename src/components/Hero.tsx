
import React from 'react';
import { Star, Shield, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-slate-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Solidne <span className="text-blue-600">Stojaki Choinkowe</span>
          <br />
          <span className="text-gray-700">Stalowe</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Najwyższej jakości stojaki stalowe do choinek. 
          6 rodzajów dla różnych wielkości drzew. 
          Solidne, bezpieczne i trwałe!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <Shield className="w-6 h-6 text-blue-600 mr-2" />
            <span className="font-semibold text-gray-800">Gwarancja jakości</span>
          </div>
          <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <Star className="w-6 h-6 text-gray-600 mr-2" />
            <span className="font-semibold text-gray-800">Sprawdzona jakość</span>
          </div>
          <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <Truck className="w-6 h-6 text-blue-600 mr-2" />
            <span className="font-semibold text-gray-800">Szybka dostawa</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#produkty"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Zobacz Stojaki
          </a>
          <a
            href="#zamowienie"
            className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-colors shadow-lg"
          >
            Zamów Teraz
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
