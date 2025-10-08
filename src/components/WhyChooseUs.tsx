import React from 'react';
import { Shield, Award, Star, Truck } from 'lucide-react';
import EditableText from './EditableText';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Sekcja 1: Dlaczego warto wybrać nasz stojak */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg border border-green-100 relative overflow-hidden">
            {/* Dekoracyjne elementy w tle */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-100 to-transparent rounded-full opacity-30 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-50 to-transparent rounded-full opacity-40 -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                
                <EditableText
                  id="why-choose-title"
                  initialText="Dlaczego warto wybrać metalowy stojak choinkowy z naszej oferty?"
                  component="WhyChooseUs"
                  file="src/components/WhyChooseUs.tsx"
                  as="h2"
                  className="text-2xl font-bold text-gray-900"
                />
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-white/70 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <EditableText
                    id="why-choose-point-1"
                    initialText="Stabilność i bezpieczeństwo – Twoja choinka stoi prosto i pewnie, nawet przy dużym obciążeniu ozdobami."
                    component="WhyChooseUs"
                    file="src/components/WhyChooseUs.tsx"
                    as="p"
                    className="text-gray-700 font-medium"
                  />
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/70 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <EditableText
                    id="why-choose-point-2"
                    initialText="Pojemnik na wodę – utrzymuje świeżość i zapach żywej choinki i wydłuża jej żywotność."
                    component="WhyChooseUs"
                    file="src/components/WhyChooseUs.tsx"
                    as="p"
                    className="text-gray-700 font-medium"
                  />
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/70 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <EditableText
                    id="why-choose-point-3"
                    initialText="Trwałość na lata – solidny metalowy stojak na choinkę, odporny na uszkodzenia i wilgoć."
                    component="WhyChooseUs"
                    file="src/components/WhyChooseUs.tsx"
                    as="p"
                    className="text-gray-700 font-medium"
                  />
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/70 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <EditableText
                    id="why-choose-point-4"
                    initialText="Elegancki wygląd – wybierz między klasyczną czernią a świątecznym złotem."
                    component="WhyChooseUs"
                    file="src/components/WhyChooseUs.tsx"
                    as="p"
                    className="text-gray-700 font-medium"
                  />
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/70 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <EditableText
                    id="why-choose-point-5"
                    initialText="Dwa rozmiary do wyboru – mały do choinek 2 m i duży do 4 m."
                    component="WhyChooseUs"
                    file="src/components/WhyChooseUs.tsx"
                    as="p"
                    className="text-gray-700 font-medium"
                  />
                </div>
              </div>

              {/* Statystyki */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white/80 rounded-lg border border-green-100">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Zadowolonych klientów</div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-lg border border-green-100">
                  <div className="text-2xl font-bold text-green-600">5★</div>
                  <div className="text-sm text-gray-600">Średnia ocena</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg text-white">
                <EditableText
                  id="why-choose-cta"
                  initialText=" Sprawdź dostępne kolory i rozmiary stojaków"
                  component="WhyChooseUs"
                  file="src/components/WhyChooseUs.tsx"
                  as="h3"
                  className="text-lg font-bold text-center"
                />
              </div>
            </div>
          </div>

          {/* Sekcja 2: O nas / gwarancja jakości */}
          <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
            {/* Dekoracyjny element w tle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-transparent rounded-full opacity-20 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100 to-transparent rounded-full opacity-30 -ml-12 -mb-12"></div>
            
            <div className="relative z-10">
              <EditableText
                id="about-us-title"
                initialText="Polska jakość, solidne wykonanie, święta bez stresu"
                component="WhyChooseUs"
                file="src/components/WhyChooseUs.tsx"
                as="h2"
                className="text-2xl font-bold text-gray-900 mb-6"
              />
              
              <EditableText
                id="about-us-description"
                initialText="Jesteśmy producentem stojaków na choinki, które łączą estetykę, trwałość i funkcjonalność. Każdy stojak na choinkę metalowy powstaje z dbałością o szczegóły i przetestowany pod kątem stabilności."
                component="WhyChooseUs"
                file="src/components/WhyChooseUs.tsx"
                as="p"
                className="text-gray-700 leading-relaxed mb-8"
              />

              {/* Ikony z cechami */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-white/60 rounded-lg border border-gray-100">
                  <Shield className="w-8 h-8 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Gwarancja</h4>
                    <p className="text-sm text-gray-600">Pewność jakości</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/60 rounded-lg border border-gray-100">
                  <Award className="w-8 h-8 text-amber-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Producent</h4>
                    <p className="text-sm text-gray-600">Bezpośrednio</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/60 rounded-lg border border-gray-100">
                  <Star className="w-8 h-8 text-yellow-500" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Jakość</h4>
                    <p className="text-sm text-gray-600">Premium</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/60 rounded-lg border border-gray-100">
                  <Truck className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dostawa</h4>
                    <p className="text-sm text-gray-600">Szybka</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-gray-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
                <EditableText
                  id="about-us-guarantee"
                  initialText="Kupując u nas, zyskujesz pewność, że Twoja choinka będzie stała prosto – bez ryzyka przewrócenia."
                  component="WhyChooseUs"
                  file="src/components/WhyChooseUs.tsx"
                  as="p"
                  className="text-gray-700 font-medium italic"
                />
              </div>

              {/* Dodatkowe informacje */}
              <div className="space-y-4 mb-6">
                <div className="bg-white/80 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">🏭 Własna produkcja</h4>
                  <p className="text-sm text-gray-600">Każdy stojak wykonany w naszej fabryce z najwyższą precyzją</p>
                </div>
                
                <div className="bg-white/80 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">🇵🇱 Made in Poland</h4>
                  <p className="text-sm text-gray-600">Wspierasz polską gospodarkę wybierając nasze produkty</p>
                </div>
                
                <div className="bg-white/80 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">⚡ Szybka dostawa</h4>
                  <p className="text-sm text-gray-600">Realizacja zamówień w 24h, wysyłka w całej Polsce</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;