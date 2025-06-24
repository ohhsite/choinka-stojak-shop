import React, { useState } from 'react';
import { Send, Phone, MessageCircle, CheckCircle } from 'lucide-react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    imie: '',
    telefon: '',
    email: '',
    produkt: '',
    ilosc: '1',
    adres: '',
    uwagi: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const produkty = [
    "Stojak Mini - Stalowy Kompakt (49 zł)",
    "Stojak Standard - Uniwersalny (69 zł)", 
    "Stojak Premium - Wzmocniony (89 zł)",
    "Stojak Maxi - Profesjonalny (129 zł)",
    "Stojak Gigant - Przemysłowy (199 zł)",
    "Stojak Deluxe - Z Systemem Obrotu (159 zł)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tutaj normalnie byłaby integracja z backendem
    console.log('Dane zamówienia:', formData);
    setIsSubmitted(true);
    
    // Reset formularza po 3 sekundach
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        imie: '',
        telefon: '',
        email: '',
        produkt: '',
        ilosc: '1',
        adres: '',
        uwagi: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    const message = `Dzień dobry! Chciałbym zamówić:
    
🎄 Produkt: ${formData.produkt}
📦 Ilość: ${formData.ilosc} szt.
👤 Imię: ${formData.imie}
📞 Telefon: ${formData.telefon}
📧 Email: ${formData.email}
📍 Adres dostawy: ${formData.adres}
📝 Uwagi: ${formData.uwagi}

Proszę o kontakt w sprawie finalizacji zamówienia.`;
    
    return encodeURIComponent(message);
  };

  if (isSubmitted) {
    return (
      <section id="zamowienie" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl p-12 shadow-xl border border-gray-200">
              <CheckCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dziękujemy za zamówienie!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Twoje zamówienie zostało przyjęte. Skontaktujemy się z Tobą w ciągu 2 godzin 
                w celu potwierdzenia szczegółów i ustalenia dostawy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+48123456789"
                  className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Zadzwoń teraz
                </a>
                <a
                  href={`https://wa.me/48123456789?text=${generateWhatsAppMessage()}`}
                  className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="zamowienie" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Zamów <span className="text-blue-600">Stojak Choinkowy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wypełnij formularz, zadzwoń lub napisz na WhatsApp. 
            Gwarantujemy szybką realizację i profesjonalną obsługę.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formularz */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Send className="w-6 h-6 mr-3 text-blue-600" />
              Formularz Zamówienia
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="imie" className="block text-sm font-semibold text-gray-700 mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="imie"
                    name="imie"
                    required
                    value={formData.imie}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jan Kowalski"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefon" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    required
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+48 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="jan@email.com"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="produkt" className="block text-sm font-semibold text-gray-700 mb-2">
                    Wybierz stojak *
                  </label>
                  <select
                    id="produkt"
                    name="produkt"
                    required
                    value={formData.produkt}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">-- Wybierz stojak --</option>
                    {produkty.map((produkt, index) => (
                      <option key={index} value={produkt}>
                        {produkt}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="ilosc" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ilość *
                  </label>
                  <input
                    type="number"
                    id="ilosc"
                    name="ilosc"
                    min="1"
                    max="20"
                    required
                    value={formData.ilosc}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="adres" className="block text-sm font-semibold text-gray-700 mb-2">
                  Adres dostawy *
                </label>
                <input
                  type="text"
                  id="adres"
                  name="adres"
                  required
                  value={formData.adres}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ul. Świąteczna 123, 00-001 Warszawa"
                />
              </div>

              <div>
                <label htmlFor="uwagi" className="block text-sm font-semibold text-gray-700 mb-2">
                  Uwagi
                </label>
                <textarea
                  id="uwagi"
                  name="uwagi"
                  rows={3}
                  value={formData.uwagi}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Dodatkowe informacje..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Wyślij Zamówienie
              </button>
            </form>
          </div>

          {/* Alternatywne sposoby kontaktu */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Phone className="w-6 h-6 mr-3 text-blue-600" />
                Zamów Telefonicznie
              </h3>
              <p className="text-gray-600 mb-6">
                Zadzwoń i zamów bezpośrednio przez telefon. 
                Nasi konsultanci pomogą Ci wybrać odpowiedni stojak.
              </p>
              <a
                href="tel:+48123456789"
                className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors w-full"
              >
                <Phone className="w-5 h-5 mr-3" />
                +48 123 456 789
              </a>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Pon-Pt: 8:00-18:00, Sob: 9:00-15:00
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-gray-700" />
                Zamów przez WhatsApp
              </h3>
              <p className="text-gray-600 mb-6">
                Napisz do nas na WhatsApp - szybko i wygodnie. 
                Odpowiadamy w ciągu kilku minut!
              </p>
              <a
                href={`https://wa.me/48123456789?text=${generateWhatsAppMessage()}`}
                className="flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-colors w-full"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Napisz na WhatsApp
              </a>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Dostępne 7 dni w tygodniu
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">🎁 Promocja Świąteczna!</h3>
              <ul className="space-y-2 text-white/90">
                <li>✅ Darmowa dostawa od 2 sztuk</li>
                <li>✅ Rabat 10% przy zakupie 3+ stojaków</li>
                <li>✅ Gwarancja satysfakcji lub zwrot pieniędzy</li>
                <li>✅ Ekspresowa dostawa w 24h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
