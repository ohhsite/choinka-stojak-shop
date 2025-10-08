import React from 'react';
import EditableText from './EditableText';

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>

      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-12 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-gray-100">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
                <span className="text-green-600 font-medium">Zamów już dziś</span>
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
              </div>

              {/* Heading */}
              <EditableText
                id="finalcta-title"
                initialText="Postaw choinkę stabilnie i ciesz się świętami "
                component="FinalCTA"
                file="src/components/FinalCTA.tsx"
                as="h2"
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              />
              
              {/* Description */}
              <EditableText
                id="finalcta-description"
                initialText="Nie czekaj na ostatnią chwilę! Wybierz metalowy stojak na choinkę – czarny lub złoty, w odpowiednim rozmiarze, i zamów już dziś. Z nami Twoje święta będą piękne, pachnące i spokojne."
                component="FinalCTA"
                file="src/components/FinalCTA.tsx"
                as="p"
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              />

              {/* CTA Button */}
              <div className="pt-4">
                <a 
                  href="/#zamowienie" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-br from-green-600 to-green-700 rounded-xl hover:shadow-[0_20px_50px_rgba(22,_163,_74,_0.7)] hover:translate-y-[-2px]"
                >
                  <span className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-br from-green-600/0 to-green-700/0 group-hover:from-green-600/10 group-hover:to-green-700/10 transition-all duration-300"></span>
                  <span className="relative flex items-center gap-2">
                    <EditableText
                      id="finalcta-button"
                      initialText="ZOBACZ STOJAKI I ZAMÓW TERAZ"
                      component="FinalCTA"
                      file="src/components/FinalCTA.tsx"
                      as="span"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;