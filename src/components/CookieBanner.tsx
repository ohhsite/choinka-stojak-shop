import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import EditableText from './EditableText';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    // Sprawdź czy użytkownik już zaakceptował cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }

    // Nasłuchuj custom event z Footer do otwierania polityki cookies
    const handleOpenPolicy = () => {
      setShowPolicy(true);
    };
    
    window.addEventListener('openCookiePolicy', handleOpenPolicy);
    
    return () => {
      window.removeEventListener('openCookiePolicy', handleOpenPolicy);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
    setShowPolicy(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
    setShowPolicy(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg z-50">
        <div className="container mx-auto px-3 py-3 md:px-6 md:py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
            <div className="flex items-start md:items-center gap-3">
              <Cookie className="w-5 h-5 md:w-6 md:h-6 text-amber-600 flex-shrink-0 mt-0.5 md:mt-0" />
              <div className="flex-1">
                <EditableText
                  id="cookie-banner-title"
                  initialText="Używamy plików cookies"
                  component="CookieBanner"
                  file="src/components/CookieBanner.tsx"
                  as="p"
                  className="font-semibold text-gray-900 text-sm md:text-base"
                />
                <EditableText
                  id="cookie-banner-description"
                  initialText="Używamy cookies do analizy ruchu, reklam i poprawy funkcjonalności. Dane z formularzy służą tylko do kontaktu."
                  component="CookieBanner"
                  file="src/components/CookieBanner.tsx"
                  as="p"
                  className="text-xs md:text-sm text-gray-600 mt-1"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <button
                onClick={() => setShowPolicy(true)}
                className="text-xs md:text-sm text-green-600 hover:text-green-700 underline whitespace-nowrap"
              >
                Polityka cookies
              </button>
              <button
                onClick={rejectCookies}
                className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                Odrzuć
              </button>
              <button
                onClick={acceptCookies}
                className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                Akceptuj
              </button>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Cookie Policy Modal */}
      {showPolicy && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[85vh] md:max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Polityka Cookies</h2>
              <button
                onClick={() => setShowPolicy(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <EditableText
                id="cookie-policy-content"
                initialText="POLITYKA COOKIES - STOJAKI NA CHOINKĘ

1. INFORMACJE OGÓLNE
Ta strona internetowa używa plików cookies w celu świadczenia usług na najwyższym poziomie i analizy ruchu na stronie.

2. RODZAJE UŻYWANYCH COOKIES

COOKIES NIEZBĘDNE (zawsze aktywne)
• Cookies techniczne umożliwiające prawidłowe funkcjonowanie strony
• Cookies bezpieczeństwa chroniące przed atakami
• Cookies sesji - usuwane po zamknięciu przeglądarki

COOKIES ANALITYCZNE
• Google Analytics - analiza ruchu na stronie, statystyki odwiedzin
• Pomiar skuteczności reklam i optymalizacja treści
• Dane agregowane i anonimowe

COOKIES REKLAMOWE
• Google Ads, Facebook Pixel - personalizacja reklam
• Remarketing - wyświetlanie spersonalizowanych reklam
• Śledzenie konwersji z kampanii reklamowych

3. DANE Z FORMULARZY
• Dane z formularzy kontaktowych używamy wyłącznie do odpowiedzi na zapytania
• Przechowujemy tylko adresy email w celach komunikacyjnych
• Nie sprzedajemy ani nie udostępniamy danych osobowych trzecim stronom
• Dane można usunąć na żądanie kontaktując się z nami

4. ZARZĄDZANIE COOKIES
Możesz zarządzać cookies w ustawieniach swojej przeglądarki lub odrzucić je poniżej. Pamiętaj, że wyłączenie niektórych cookies może wpłynąć na funkcjonalność strony.

5. KONTAKT
W sprawach dotyczących polityki cookies: kontakt@stojakinachoinke.pl

Ostatnia aktualizacja: październik 2025"
                component="CookieBanner"
                file="src/components/CookieBanner.tsx"
                as="div"
                className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base"
              />
              <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-2 md:gap-3">
                <button
                  onClick={() => {
                    setShowPolicy(false);
                    rejectCookies();
                  }}
                  className="px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Odrzuć wszystkie
                </button>
                <button
                  onClick={() => {
                    setShowPolicy(false);
                    acceptCookies();
                  }}
                  className="px-4 py-2 text-sm md:text-base bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Akceptuj wszystkie
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;