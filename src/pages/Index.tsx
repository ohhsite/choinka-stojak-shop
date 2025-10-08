
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQPreview from '../components/FAQPreview';
import FinalCTA from '../components/FinalCTA';
import OrderForm from '../components/OrderForm';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      
      {/* Wyróżniona sekcja o wadze stojaków */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border-4 border-amber-400 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-4 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-3">
                  <span className="text-3xl">⚖️</span>
                  NASZE STOJAKI SĄ WYJĄTKOWO CIĘŻKIE!
                  <span className="text-3xl">💪</span>
                </h2>
              </div>
              
              <div className="p-8 md:p-12">
                <p className="text-center text-xl text-gray-700 mb-8 leading-relaxed">
                  Postawiliśmy na maksymalne bezpieczeństwo - 
                  <strong className="text-amber-600"> nasze stojaki ważą aż 5-6,5 kg!</strong> To gwarancja absolutnej stabilności nawet dla największych i najcięższych choinek z pełną dekoracją.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-3">⚖️</div>
                    <h3 className="text-lg font-bold text-gray-700 mb-2">Typowy stojak</h3>
                    <div className="text-3xl font-bold text-gray-600 mb-2">2-3 kg</div>
                    <p className="text-sm text-gray-600">Standardowa waga na rynku</p>
                  </div>
                  
                  <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-3">💪</div>
                    <h3 className="text-lg font-bold text-green-700 mb-2">Nasze Stojaki</h3>
                    <div className="text-3xl font-bold text-green-600 mb-2">5-6,5 kg</div>
                    <p className="text-sm text-gray-600">Wzmocniona konstrukcja - maksymalna stabilność</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-center text-white">
                  <p className="text-lg font-semibold mb-2">
                    🏆 Bezpieczeństwo przede wszystkim!
                  </p>
                  <p className="text-green-100">
                    Dzieci bawiące się obok, zwierzęta domowe, ciężkie ozdoby - nasz stojak da radę! To pewna inwestycja na lata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      <FAQPreview />
      <FinalCTA />
      
      {/* Cross-link banner do strony z choinkami w Białymstoku */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🎄 Jesteś z Białegostoku lub okolic?
            </h2>
            <p className="text-lg text-green-50 mb-6">
              Oprócz stojaków, prowadzimy także sprzedaż najpiękniejszych <strong>żywych choinek</strong> z odbiorem osobistym w Białymstoku!
              <br />
              Jodła kaukaska, świerk - tylko najświeższe drzewka.
            </p>
            <a
              href="https://choinki.bialystok.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Zobacz naszą ofertę choinek w Białymstoku →
            </a>
            <p className="text-sm text-green-100 mt-4">
              Najwyższa jakość | Świeże choinki | Odbiór osobisty
            </p>
          </div>
        </div>
      </section>
      
      <OrderForm />
      
      {/* Hidden SEO Content */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Profesjonalne stojaki na choinkę dla każdego domu
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Metalowe stojaki na choinkę z pojemnikiem na wodę</h3>
                <p className="text-gray-600 mb-4">
                  Nasze <strong>stojaki na choinkę</strong> to profesjonalne <strong>metalowe stojaki na choinkę</strong> 
                  wyposażone w pojemnik na wodę. Każdy <strong>stojak na choinkę z wodą</strong> zapewnia długotrwałą 
                  świeżość drzewka. Oferujemy <strong>stojaki do choinki żywej</strong> w różnych rozmiarach.
                  Nasz <strong>solidny stojak do choinki</strong> to gwarancja bezpieczeństwa i stabilności.
                </p>
                <p className="text-gray-600">
                  <strong>Stojak pod choinkę</strong> dostępny w wersji małej 30x30cm oraz dużej 50x50cm. 
                  Nasze <strong>podstawki pod choinke</strong> to solidne konstrukcje stalowe malowane proszkowo.
                  Każdy <strong>solidny stojak do choinki</strong> wykonany jest z najwyższej jakości materiałów.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Stojaki do choinek - różne rozmiary</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Stojak na dużą choinkę</strong> 50x50cm wytrzyma choinki do 4 metrów wysokości. 
                  <strong>Stojak na żywą choinkę</strong> z naszej oferty to gwarancja stabilności i bezpieczeństwa. 
                  Każdy <strong>stojak choinkowy</strong> ma wbudowany system nawadniania.
                </p>
                <p className="text-gray-600">
                  <strong>Stojaki pod choinkę</strong> produkujemy z najwyższej jakości stali. 
                  <strong>Stojak na choinkę z pojemnikiem na wodę</strong> to standard w naszej ofercie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
