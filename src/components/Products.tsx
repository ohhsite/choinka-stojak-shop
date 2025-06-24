
import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Stojak Mini - Stalowy Kompakt",
      width: "25 cm",
      treeSize: "do 1,5 m",
      description: "Idealny dla małych choinek i mieszkań. Solidna konstrukcja stalowa z regulowanymi śrubami zapewnia stabilność nawet dla gęstych drzew.",
      price: "49 zł",
      image: "/stojak1.jpg",
      features: [
        "Wzmocniona podstawa stalowa",
        "3 regulowane śruby",
        "Antypoślizgowe nakładki",
        "Kompaktowy design"
      ]
    },
    {
      id: 2,
      name: "Stojak Standard - Uniwersalny",
      width: "30 cm", 
      treeSize: "1,5 - 2,2 m",
      description: "Najpopularniejszy model. Uniwersalny stojak stalowy odpowiedni dla większości domowych choinek. Łączy solidność z łatwością montażu.",
      price: "69 zł",
      image: "/stojak2.jpg",
      features: [
        "Stal ocynkowana",
        "4 mocne śruby dociskowe",
        "Pojemność na wodę 2L",
        "Łatwy montaż bez narzędzi"
      ]
    },
    {
      id: 3,
      name: "Stojak Premium - Wzmocniony",
      width: "35 cm",
      treeSize: "2,2 - 3 m",
      description: "Dla większych choinek wymagających dodatkowej stabilności. Wzmocniona konstrukcja z dodatkowym systemem blokującym.",
      price: "89 zł",
      image: "/stojak3.jpg",
      features: [
        "Podwójnie wzmocniona podstawa",
        "6 śrub w 2 poziomach",
        "Pojemność na wodę 3L",
        "System auto-centrowania"
      ]
    },
    {
      id: 4,
      name: "Stojak Maxi - Profesjonalny",
      width: "42 cm",
      treeSize: "3 - 4 m",
      description: "Profesjonalny stojak dla wysokich choinek. Używany przez firmy dekoratorskie i hotele. Maksymalna stabilność i trwałość.",
      price: "129 zł",
      image: "/stojak4.jpg",
      features: [
        "Stal nierdzewna",
        "8 śrub mocujących",
        "Pojemność na wodę 4L",
        "Certyfikat bezpieczeństwa"
      ]
    },
    {
      id: 5,
      name: "Stojak Gigant - Przemysłowy",
      width: "50 cm",
      treeSize: "4 - 6 m",
      description: "Dla największych choinek w galeriach, urzędach i przestrzeniach publicznych. Najwyższa klasa wytrzymałości i bezpieczeństwa.",
      price: "199 zł",
      image: "/stojak5.jpg",
      features: [
        "Konstrukcja przemysłowa",
        "10 śrub w 3 poziomach",
        "Pojemność na wodę 6L",
        "Gwarancja 5 lat"
      ]
    },
    {
      id: 6,
      name: "Stojak Deluxe - Z Systemem Obrotu",
      width: "38 cm",
      treeSize: "2,5 - 3,5 m",
      description: "Innowacyjny stojak z możliwością obrotu choinka o 360°. Idealny do prezentacji i łatwego dostępu do wszystkich stron drzewa.",
      price: "159 zł",
      image: "/stojak6.jpg",
      features: [
        "System obrotowy 360°",
        "Blokada pozycji",
        "Łożyska kulkowe",
        "Pojemność na wodę 3,5L"
      ]
    }
  ];

  return (
    <section id="produkty" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nasza Oferta <span className="text-green-600">Stojaków Choinkowych</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            6 rodzajów stalowych stojaków choinkowych dla każdej wielkości drzewa. 
            Wszystkie wykonane z najwyższej jakości materiałów z gwarancją trwałości.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Nie wiesz który stojak wybrać?
            </h3>
            <p className="text-gray-600 mb-6">
              Zadzwoń do nas - pomożemy dobrać idealny stojak dla Twojej choinki!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+48123456789"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                📞 +48 123 456 789
              </a>
              <a
                href="https://wa.me/48123456789"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
