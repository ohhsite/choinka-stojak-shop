import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Top 4 najważniejsze pytania z FAQ - zoptymalizowane pod SEO
const topFAQ = [
  {
    id: 1,
    question: "Jakie są wymiary i specyfikacja metalowych stojaków na choinkę?",
    answer: "Oferujemy dwa rozmiary stalowych stojaków malowanych proszkowo. Model mały: podstawa 30×30cm, maksymalna średnica pnia 8cm, waga 5kg. Model duży: podstawa 50×50cm, maksymalna średnica pnia 10cm, waga 6,5kg. Wszystkie stojaki przeznaczone wyłącznie do żywych choinek naturalnych."
  },
  {
    id: 2,
    question: "Jak funkcjonuje system pojemnika na wodę w stojaku choinkowym?",
    answer: "Każdy stojak wyposażony jest w pojemnik na wodę o pojemności 1 litra. Kluczem do utrzymania świeżości choinki jest systematyczne uzupełnianie wody - im więcej choinka pobiera wody, tym dłużej zachowuje świeżość, intensywny aromat i nie gubi igieł."
  },
  {
    id: 3,
    question: "Jakie są koszty i opcje dostawy stojaków na choinkę w Polsce?",
    answer: "Koszty dostawy ustalane są podczas finalizacji zamówienia i pokrywa je kupujący. Realizujemy wysyłkę kurierem w całej Polsce w ciągu 48 godzin roboczych. Dla zamówień hurtowych powyżej 3 sztuk oferujemy dostawę paletową z możliwością negocjacji warunków."
  },
  {
    id: 4,
    question: "Jakie akcesoria i dodatki są dołączone do stojaka choinkowego?",
    answer: "W komplecie ze stojakiem otrzymujesz: podkładki na śruby stabilizujące ułatwiające mocowanie choinki oraz podkładki ochronne pod nogi stojaka chroniące powierzchnię podłogi (wymagają samodzielnego naklejenia). Stojak dostarczany jest w pełni gotowy do użycia."
  }
];

const FAQPreview = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header sekcji */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Pytania o Metalowe Stojaki na Choinkę
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sprawdź odpowiedzi na najpopularniejsze pytania o nasze stojaki na choinkę
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-8">
            {topFAQ.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                  aria-expanded={openItems.includes(item.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA do pełnej strony FAQ */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Masz więcej pytań?
              </h3>
              <p className="text-green-100 mb-6 text-lg">
                Sprawdź naszą pełną sekcję FAQ z 12 szczegółowymi odpowiedziami
              </p>
              <Link 
                to="/faq"
                className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>Zobacz wszystkie pytania</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-green-200">
                <span>✓ 12 szczegółowych odpowiedzi</span>
                <span>✓ Informacje o gwarancji</span>
                <span>✓ Szczegóły dostawy</span>
                <span>✓ Pomoc techniczna</span>
              </div>
            </div>
          </div>

          {/* Statystyki */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-green-600">1L</div>
              <div className="text-sm text-gray-600">Pojemnik na wodę</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">48h</div>
              <div className="text-sm text-gray-600">Realizacja</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-amber-600">14 dni</div>
              <div className="text-sm text-gray-600">Na zwrot</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-purple-600">5-6,5kg</div>
              <div className="text-sm text-gray-600">Waga stojaka</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;