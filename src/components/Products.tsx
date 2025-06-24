
import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Stojak Mini - Stalowy Kompakt",
      width: "25 cm",
      treeSize: "do 1,5 m",
      description: "Nowoczesny stojak dla małych choinek. Solidna konstrukcja stalowa z regulowanymi śrubami zapewnia stabilność. Idealny dla sklepów i biur.",
      price: "49 zł",
      image: "/stojak1.jpg",
      features: [
        "Wzmocniona podstawa stalowa",
        "3 regulowane śruby",
        "Antypoślizgowe nakładki",
        "Kompaktowy design",
        "Pojemność na wodę 1L"
      ]
    },
    {
      id: 2,
      name: "Stojak Standard - Uniwersalny",
      width: "30 cm", 
      treeSize: "1,5 - 2,2 m",
      description: "Najpopularniejszy model B2B. Uniwersalny nowoczesny stojak stalowy odpowiedni dla większości zastosowań komercyjnych.",
      price: "69 zł",
      image: "/stojak2.jpg",
      features: [
        "Stal ocynkowana",
        "4 mocne śruby dociskowe",
        "Pojemność na wodę 1L",
        "Łatwy montaż bez narzędzi",
        "Certyfikat jakości"
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
        "Pojemność na wodę 1L",
        "System auto-centrowania",
        "Powłoka antykorozyjna"
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
        "Pojemność na wodę 1L",
        "Certyfikat bezpieczeństwa",
        "Gwarancja 3 lata"
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
        "Pojemność na wodę 1L",
        "Gwarancja 5 lat",
        "Certyfikat CE"
      ]
    },
    {
      id: 6,
      name: "Stojak Deluxe - Z Systemem Obrotu",
      width: "38 cm",
      treeSize: "2,5 - 3,5 m",
      description: "Innowacyjny stojak z możliwością obrotu choinka o 360°. Idealny do prezentacji w galeriach i sklepach z łatwym dostępem do wszystkich stron drzewa.",
      price: "159 zł",
      image: "/stojak6.jpg",
      features: [
        "System obrotowy 360°",
        "Blokada pozycji",
        "Łożyska kulkowe",
        "Pojemność na wodę 1L",
        "Patent własny"
      ]
    }
  ];

  return (
    <section id="produkty" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Katalog <span className="text-blue-600">Stojaków B2B</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            6 rodzajów nowoczesnych stalowych stojaków choinkowych dla firm. 
            Minimalne zamówienie 5 sztuk. Dostawa paletowa w całej Polsce.
          </p>
          <div className="mt-6 inline-flex items-center bg-red-100 text-red-800 px-6 py-3 rounded-full">
            <span className="font-bold">PROMOCJA -15% do sierpnia!</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg inline-block border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📋 Potrzebujesz indywidualnej oferty?
            </h3>
            <p className="text-gray-600 mb-6">
              Skontaktuj się z naszym działem B2B - przygotujemy ofertę dostosowaną do Twoich potrzeb biznesowych!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+48123456789"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                📞 +48 123 456 789
              </a>
              <a
                href="https://wa.me/48123456789"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                💬 WhatsApp B2B
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Min. zamówienie 5 szt. • Dostawa paletowa • Rabaty ilościowe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
