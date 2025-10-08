
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
      <WhyChooseUs />
      <FAQPreview />
      <FinalCTA />
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
