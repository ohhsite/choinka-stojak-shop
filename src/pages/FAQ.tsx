import React, { useEffect } from 'react';
import { ChevronDown, ChevronUp, Phone, MessageCircle, Truck, Shield, Award, Star } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// FAQ data with SEO-optimized questions and professional answers
const faqData = [
  {
    id: 1,
    question: "Jakie są dokładne wymiary i specyfikacja techniczna metalowych stojaków na choinkę?",
    answer: "Produkujemy dwa modele stalowych stojaków malowanych proszkowo, dostosowanych do różnych rozmiarów choinek naturalnych. Model mały: podstawa kwadratowa 30×30cm, maksymalna średnica pnia choinki 8cm, waga konstrukcji 5kg. Model duży: podstawa kwadratowa 50×50cm, maksymalna średnica pnia choinki 10cm, waga konstrukcji 6,5kg. Wszystkie stojaki są przeznaczone wyłącznie do żywych choinek naturalnych i zapewniają optymalną stabilność dzięki stalowej konstrukcji."
  },
  {
    id: 2,
    question: "Jak funkcjonuje i jak obsługiwać pojemnik na wodę w stojaku choinkowym?",
    answer: "Każdy stojak na choinkę wyposażony jest w zintegrowany pojemnik na wodę o pojemności 1 litra. System nawadniania działa w oparciu o systematyczne uzupełnianie wody - zalecamy kontrolowanie poziomu wody codziennie i uzupełnianie tak, aby zbiornik był stale napełniony. Intensywność pobierania wody przez choinkę jest indywidualna - im więcej wody choinka pobiera, tym dłużej zachowuje świeżość, intensywny aromat iglasty i nie gubi igieł, co przedłuża jej żywotność podczas sezonu świątecznego."
  },
  {
    id: 3,
    question: "Jakie są opcje i koszty dostawy stojaków na choinkę w Polsce oraz czas realizacji zamówienia?",
    answer: "Oferujemy profesjonalne usługi logistyczne w całej Polsce. Koszty dostawy są ustalane indywidualnie podczas finalizacji zamówienia w zależności od wybranej opcji transportu i pokrywa je nabywca. Standardowo realizujemy wysyłkę za pośrednictwem kuriera w terminie do 48 godzin roboczych od potwierdzenia zamówienia. Dla klientów hurtowych składających zamówienia powyżej 3 sztuk oferujemy specjalistyczną dostawę paletową z możliwością negocjacji warunków transportu. W okresie przedświątecznym czas dostawy może ulec wydłużeniu ze względu na zwiększone obłożenie firm kurierskich."
  },
  {
    id: 4,
    question: "Jak zapewnić maksymalną stabilność i bezpieczeństwo montażu stojaka choinkowego?",
    answer: "Nasze stojaki na choinkę wykonane są z wysokiej jakości stali konstrukcyjnej malowanej proszkowo, co gwarantuje wyjątkową trwałość i stabilność. W zestawie z każdym stojakiem dostarczamy profesjonalne akcesoria montażowe: specjalne podkładki na śruby dociskowe ułatwiające precyzyjne stabilizowanie i mocowanie choinki oraz ochronne podkładki antypoślizgowe pod nogi stojaka, które chronią powierzchnię podłogi przed zarysowaniami (wymagają samodzielnego naklejenia zgodnie z instrukcją)."
  },
  {
    id: 5,
    question: "Jakie są warunki współpracy hurtowej i rabaty dla firm kupujących stojaki na choinkę?",
    answer: "Oferujemy atrakcyjne warunki współpracy dla przedsiębiorców, sklepów ogrodniczych, centrów handlowych i dystrybutorów. Minimalne zamówienie hurtowe wynosi 3 sztuki z możliwością skorzystania z profesjonalnej dostawy paletowej. Dla partnerów biznesowych przygotowujemy indywidualne oferty cenowe z progresywnymi rabatami ilościowymi. W celu otrzymania szczegółowej kalkulacji prosimy o kontakt telefoniczny pod numerem 604 821 125 lub poprzez komunikator WhatsApp - nasz zespół handlowy przygotuje spersonalizowaną propozycję współpracy."
  },
  {
    id: 6,
    question: "Jakie warianty kolorystyczne stojaków na choinkę są dostępne i jak wygląda proces malowania?",
    answer: "Nasze stojaki na choinkę dostępne są w dwóch eleganckich wersjach kolorystycznych: klasyczna czerń matowa oraz ekskluzywny odcień złoty. Oba warianty są malowane przy użyciu zaawansowanej technologii malowania proszkowego, która zapewnia równomierne pokrycie, wysoką odporność na zarysowania, korozję oraz niekorzystne warunki atmosferyczne. Proces malowania proszkowego gwarantuje trwałość powłoki przez wiele sezonów użytkowania."
  },
  {
    id: 7,
    question: "Jaki jest standardowy czas realizacji zamówienia i czy możliwa jest ekspresowa dostawa?",
    answer: "Standardowy czas realizacji zamówień wynosi do 48 godzin roboczych od momentu potwierdzenia płatności. Dla klientów wymagających przyspieszonej realizacji oferujemy możliwość skrócenia tego terminu - w takich przypadkach prosimy o bezpośredni kontakt z naszym działem obsługi klienta. Należy pamiętać, że w okresie przedświątecznym (listopad-grudzień) czas dostawy może ulec wydłużeniu ze względu na znacznie zwiększone obłożenie wszystkich firm kurierskich i logistycznych w Polsce."
  },
  {
    id: 8,
    question: "Jak przebiega proces montażu stojaka choinkowego i czy wymaga specjalistycznych narzędzi?",
    answer: "Stojak na choinkę dostarczany jest w pełni zmontowany i gotowy do natychmiastowego użycia. Proces instalacji choinki jest intuicyjny i nie wymaga żadnych dodatkowych narzędzi ani specjalistycznej wiedzy technicznej. Wystarczy nałożyć dołączone podkładki na śruby dociskowe, umieścić pień choinki w centralnym uchwycie i delikatnie dokręcić śruby stabilizujące. Całość operacji zajmuje maksymalnie 5 minut. Dodatkowo należy nakleić podkładki ochronne pod nogi stojaka zgodnie z dołączoną instrukcją."
  },
  {
    id: 9,
    question: "Jakie są warunki gwarancji producenta na stojaki choinkowe i zakres serwisu?",
    answer: "Wszystkie nasze stojaki na choinkę objęte są dwuletnią gwarancją producenta, która obejmuje pełną ochronę przed wadami materiałowymi oraz produkcyjnymi. Jako bezpośredni producent zapewniamy kompleksowe wsparcie techniczne, profesjonalny serwis pogwarancyjny oraz dostęp do oryginalnych części zamiennych. Gwarancja nie obejmuje uszkodzeń mechanicznych powstałych w wyniku nieprawidłowego użytkowania lub naturalnego zużycia eksploatacyjnego."
  },
  {
    id: 10,
    question: "Jakie są warunki zwrotu stojaka choinkowego i polityka reklamacyjna?",
    answer: "Zgodnie z obowiązującymi przepisami prawa konsumenckiego, klient posiada prawo do zwrotu produktu w terminie 14 dni kalendarzowych od daty otrzymania przesyłki, bez konieczności podawania przyczyny. Warunkiem zwrotu jest zachowanie oryginalnego stanu produktu - stojak nie może nosić śladów użytkowania ani mechanicznych uszkodzeń. Koszty odesłania produktu ponosi klient, chyba że zwrot wynika z naszej winy (np. dostarczenie wadliwego lub niezgodnego z zamówieniem produktu)."
  },
  {
    id: 11,
    question: "Co zrobić gdy średnica pnia choinki przekracza maksymalne wymiary stojaka?",
    answer: "Jeśli średnica pnia choinki naturalnej przekracza maksymalne możliwości mocowania (8cm dla modelu małego, 10cm dla modelu dużego), konieczne jest mechaniczne dopasowanie pnia do stojaka. Zalecamy ostrożne ociosanie dolnej części pnia przy użyciu piły lub siekiery do momentu uzyskania odpowiedniej średnicy. Podczas ociosywania należy zachować szczególną ostrożność i dbać o równomierne okrążenie pnia, aby zapewnić stabilne osadzenie w stojaku. Proces ten powinien być wykonywany przez osobę dorosłą z zachowaniem wszelkich zasad bezpieczeństwa."
  },
  {
    id: 12,
    question: "Jakie są właściwości antykorozyjne i trwałość stojaków choinkowych?",
    answer: "Wszystkie nasze stojaki wykonane są z wysokiej jakości stali konstrukcyjnej i zabezpieczone zaawansowaną technologią malowania proszkowego. Ta metoda zapewnia wyjątkową ochronę przed korozją, wilgocią, zarysowaniami oraz oddziaływaniem czynników atmosferycznych. Powłoka proszkowa charakteryzuje się wysoką adhezją do podłoża, równomiernym pokryciem oraz długotrwałą trwałością kolorystyczną. Przy prawidłowym użytkowaniu stojak zachowuje swoje właściwości estetyczne i funkcjonalne przez wiele sezonów, co czyni go inwestycją na lata."
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Add structured data for Google
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add meta tags for SEO
    document.title = "FAQ - Pytania o Stojaki na Choinkę | Producent Metalowych Stojaków | Pomoc";
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Odpowiedzi na pytania o stojaki na choinkę stalowe. Specyfikacja, montaż, gwarancja, dostawa stojaków metalowych. ✓ Producent ✓ Fachowe doradztwo ✓ 12 najważniejszych pytań';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'FAQ stojaki na choinkę, stojak na choinkę, stojak na choinke, stojak choinkowy, stojak pod choinkę, metalowy stojak na choinkę, stojak na choinkę z wodą, stojak do choinki, solidny stojak do choinki, stojak na żywą choinkę, stojak na choinkę z pojemnikiem na wodę, podstawki pod choinke, pytania stojaki choinkowe, pomoc stojaki metalowe, specyfikacja stojaków, montaż stojaka choinkowego, gwarancja stojaki, dostawa stojaków';
    document.head.appendChild(metaKeywords);

    return () => {
      document.head.removeChild(script);
      if (document.head.contains(metaDescription)) {
        document.head.removeChild(metaDescription);
      }
      if (document.head.contains(metaKeywords)) {
        document.head.removeChild(metaKeywords);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/30 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            FAQ - Pytania o Stojaki na Choinkę Stalowe
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Znajdź odpowiedzi na najważniejsze pytania dotyczące naszych metalowych stojaków na choinkę
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
              <Shield className="w-5 h-5 inline mr-2" />
              2 lata gwarancji
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
              <Truck className="w-5 h-5 inline mr-2" />
              Szybka dostawa
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
              <Award className="w-5 h-5 inline mr-2" />
              Polish producent
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Quick Navigation */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Specyfikacja i Montaż Stojaków Choinkowych
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {faqData.slice(0, 8).map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className="text-left p-2 rounded hover:bg-green-50 text-green-700 hover:text-green-800 transition-colors"
                >
                  • {item.question}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
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
                  <div className="px-6 pb-5">
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Potrzebujesz Pomocy ze Stojakiem na Choinkę?
            </h2>
            <p className="text-green-100 mb-6 text-lg">
              Skontaktuj się z nami bezpośrednio - chętnie pomożemy!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+48604821125"
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +48 604 821 125
              </a>
              <a
                href="https://wa.me/48604821125"
                className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
            <p className="text-green-200 text-sm mt-4">
              Odpowiadamy w ciągu 24 godzin • Poniedziałek-Piątek 8:00-16:00
            </p>
          </div>

          {/* SEO Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Wysokiej jakości</h3>
              <p className="text-sm text-gray-600">
                Stojaki wykonane z najlepszych materiałów
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Gwarancja 2 lata</h3>
              <p className="text-sm text-gray-600">
                Pełna ochrona Twojej inwestycji
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Polski producent</h3>
              <p className="text-sm text-gray-600">
                Wspierasz polską gospodarkę
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;