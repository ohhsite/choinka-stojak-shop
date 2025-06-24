
import React from 'react';
import { Star, Shield, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-red-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Solidne <span className="text-green-600">Stojaki Choinkowe</span>
          <br />
          <span className="text-red-600">Stalowe</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Najwyższej jakości stojaki stalowe do choinek. 
          6 rodzajów dla różnych wielkości drzew. 
          Solidne, bezpieczne i trwałe!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
            <Shield className="w-6 h-6 text-green-600 mr-2" />
            <span className="font-semibold">Gwarancja jakości</span>
          </div>
          <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            <span className="font-semibold">Sprawdzona jakość</span>
          </div>
          <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
            <Truck className="w-6 h-6 text-blue-600 mr-2" />
            <span className="font-semibold">Szybka dostawa</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#produkty"
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
          >
            Zobacz Stojaki
          </a>
          <a
            href="#zamowienie"
            className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
          >
            Zamów Teraz
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
