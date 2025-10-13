import React, { useState, useEffect } from 'react';
import { Package, Truck, Calculator, Mail, Phone, CheckCircle, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PRODUCTS } from '../data/products';

const Hurt = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    nip: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    estimatedQuantity: '',
    preferredProducts: '',
    additionalInfo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Zapytanie o ofertę hurtową - stojaki na choinkę');
    const body = encodeURIComponent(`
Zapytanie o ofertę hurtową:

Firma: ${formData.companyName}
NIP: ${formData.nip}
Osoba kontaktowa: ${formData.contactPerson}
Email: ${formData.email}
Telefon: ${formData.phone}
Adres: ${formData.address}
Szacowana ilość: ${formData.estimatedQuantity}
Preferowane produkty: ${formData.preferredProducts}
Dodatkowe informacje: ${formData.additionalInfo}
    `);
    
    window.location.href = `mailto:kontakt@stojakinachoinke.pl?subject=${subject}&body=${body}`;
  };

  // SEO meta tags
  useEffect(() => {
    document.title = "Hurt Stojaki na Choinkę | Oferta Hurtowa dla Sklepów | Rabaty Hurtowe + VAT";
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Oferta hurtowa stojaków na choinkę dla sklepów ogrodniczych. Rabaty hurtowe, dostawa paletowa. ✓ Min. 5 szt ✓ Faktura VAT ✓ Producent ✓ Szybka realizacja');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'hurt stojaki na choinkę, stojaki choinkowe hurt, oferta hurtowa stojaki, rabaty stojaki choinkowe, dystrybutor stojaków, sklep ogrodniczy stojaki, sprzedaż hurtowa, producent stojaków hurt, faktura VAT stojaki');
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Stojaki Choinkowe Hurt
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Specjalna oferta hurtowa dla sklepów, centrów ogrodniczych i dystrybutorów
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
              <Package className="w-5 h-5 inline mr-2" />
              Min. 5 szt.
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
              <Calculator className="w-5 h-5 inline mr-2" />
              Rabaty hurtowe
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
              <Truck className="w-5 h-5 inline mr-2" />
              Dostawa paletowa
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Hurtowa */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Oferta Specjalna dla Hurtowników
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Jesteś właścicielem sklepu ogrodniczego, centrum handlowego lub dystrybutorem? 
                Skorzystaj z naszej wyjątkowej oferty hurtowej na stalowe stojaki na choinkę.
              </p>
            </div>

            {/* Korzyści */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Atrakcyjne Rabaty</h3>
                <p className="text-gray-600 mb-4">
                  Oferujemy atrakcyjne rabaty hurtowe w zależności od wielkości zamówienia. 
                  Im większe zamówienie, tym lepsze warunki cenowe.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Minimum zamówienia: 5 sztuk</li>
                  <li>• Rabaty uzależnione od ilości</li>
                  <li>• Faktura VAT wystawiana</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Logistyka</h3>
                <p className="text-gray-600 mb-4">
                  Profesjonalna dostawa paletowa w całej Polsce. 
                  Możliwość odbioru własnego z naszego magazynu.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dostawa paletowa w Polsce</li>
                  <li>• Odbiór własny - dodatkowy rabat</li>
                  <li>• Elastyczne terminy dostaw</li>
                </ul>
              </div>
            </div>

            {/* Produkty w ofercie hurtowej */}
            <div className="bg-slate-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Produkty w Ofercie Hurtowej
              </h3>
              <p className="text-center text-gray-600 mb-8">
                Wszystkie produkty dostępne w sprzedaży hurtowej. Faktura VAT wystawiana dla każdego zamówienia.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.map(product => (
                  <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      width="200"
                      height="150"
                      className="w-full h-32 object-contain mb-3"
                      style={{ backgroundColor: 'white' }}
                    />
                    <h4 className="font-semibold text-sm mb-2">{product.name}</h4>
                    <p className="text-xs text-gray-600 mb-2">{product.width}</p>
                    <div className="text-green-600 font-bold text-sm">
                      Cena hurt: na zapytanie
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formularz zapytania */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Otrzymaj Indywidualną Ofertę Hurtową
              </h2>
              <p className="text-xl text-gray-600">
                Wypełnij formularz, a nasz zespół przygotuje dla Ciebie spersonalizowaną ofertę cenową
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nazwa firmy *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Wpisz nazwę swojej firmy"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      NIP
                    </label>
                    <input
                      type="text"
                      name="nip"
                      value={formData.nip}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="123-456-78-90"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Osoba kontaktowa *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Imię i nazwisko"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="email@firma.pl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+48 604 821 125"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Szacowana ilość (szt.) *
                    </label>
                    <select
                      name="estimatedQuantity"
                      value={formData.estimatedQuantity}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Wybierz ilość</option>
                      <option value="5-20">5-20 szt.</option>
                      <option value="21-50">21-50 szt.</option>
                      <option value="51-100">51-100 szt.</option>
                      <option value="101-500">101-500 szt.</option>
                      <option value="500+">500+ szt.</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adres firmy
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ulica, kod pocztowy, miasto"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferowane produkty
                  </label>
                  <input
                    type="text"
                    name="preferredProducts"
                    value={formData.preferredProducts}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="np. Stojaki małe czarne, duże złote..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dodatkowe informacje
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Dodatkowe wymagania, pytania, terminy dostaw..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 flex items-center gap-2 mx-auto"
                  >
                    <Mail className="w-5 h-5" />
                    Wyślij Zapytanie o Ofertę
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    Odpowiedź otrzymasz w ciągu 24 godzin roboczych
                  </p>
                </div>
              </form>
            </div>

            {/* Kontakt bezpośredni */}
            <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Preferujesz kontakt bezpośredni?</h3>
              <p className="text-slate-200 mb-6">
                Skontaktuj się z naszym działem handlu hurtowego
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+48604821125"
                  className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  +48 604 821 125
                </a>
                <a
                  href="mailto:kontakt@stojakinachoinke.pl"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  kontakt@stojakinachoinke.pl
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hurt;