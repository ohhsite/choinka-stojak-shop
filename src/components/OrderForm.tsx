import React, { useState } from 'react';
import { Send, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import EditableText from './EditableText';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    kontakt: '',
    telefon: '',
    email: '',
    uwagi: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        kontakt: '',
        telefon: '',
        email: '',
        uwagi: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    const message = `Dzień dobry! Zapytanie ofertowe:\n\n Osoba kontaktowa: ${formData.kontakt}\n📞 Telefon: ${formData.telefon}\n📧 Email: ${formData.email}\n💬 Uwagi: ${formData.uwagi}\n\nProszę o kontakt.`;
    return encodeURIComponent(message);
  };

  if (isSubmitted) {
    return (
      <section id="zamowienie" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl p-12 shadow-xl border border-gray-200">
              <CheckCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <EditableText
                id="orderform-success-title"
                initialText="Dziękujemy za zapytanie!"
                component="OrderForm"
                file="src/components/OrderForm.tsx"
                as="h2"
                className="text-3xl font-bold text-gray-900 mb-4"
              />
              <EditableText
                id="orderform-success-description"
                initialText="Twoje zapytanie ofertowe zostało przyjęte. Skontaktujemy się z Tobą w ciągu 24 godzin roboczych w celu przygotowania indywidualnej oferty B2B."
                component="OrderForm"
                file="src/components/OrderForm.tsx"
                as="p"
                className="text-lg text-gray-600 mb-6"
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+48123456789" className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  Zadzwoń teraz
                </a>
                <a href={`https://wa.me/48123456789?text=${generateWhatsAppMessage()}`} className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
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
    <section id="zamowienie" className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            <span className="text-green-600">
              <EditableText
                id="orderform-title"
                initialText="Zamów Stojak na Choinkę"
                component="OrderForm"
                file="src/components/OrderForm.tsx"
                as="span"
              />
            </span>
            <EditableText
              id="orderform-title-subtitle"
              initialText=" - skontaktuj się z nami"
              component="OrderForm"
              file="src/components/OrderForm.tsx"
              as="span"
            />
          </h2>
          <EditableText
            id="orderform-description"
            initialText="Dostawa paletowa kurierem w całej Polsce. Przygotujemy indywidualną ofertę dla Twojej firmy."
            component="OrderForm"
            file="src/components/OrderForm.tsx"
            as="p"
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          />
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Formularz */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-6 border border-gray-100">
            <div className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
              <Send className="w-5 h-5 md:w-6 md:h-6 mr-3 text-green-600" />
              <EditableText
                id="orderform-form-title"
                initialText="Napisz do nas"
                component="OrderForm"
                file="src/components/OrderForm.tsx"
                as="span"
              />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                <div>
                  <label htmlFor="kontakt" className="block text-sm font-semibold text-gray-700 mb-2">
                    Osoba kontaktowa *
                  </label>
                  <input
                    type="text"
                    id="kontakt"
                    name="kontakt"
                    required
                    value={formData.kontakt}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
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
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                    placeholder="+48 123 456 789"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email firmowy *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="zamowienia@firma.pl"
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
                  placeholder="Dodatkowe wymagania, terminy dostawy..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-br from-green-600 to-green-700 text-white py-4 rounded-lg text-lg font-semibold hover:shadow-[0_20px_50px_rgba(22,_163,_74,_0.3)] hover:translate-y-[-2px] transition-all duration-300 shadow-lg"
              >
                Wyślij Zapytanie Ofertowe
              </button>
            </form>
          </div>
          {/* Alternatywne sposoby kontaktu */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Phone className="w-6 h-6 mr-3 text-blue-600" />
                Kontakt Telefoniczny
              </div>
              <p className="text-gray-600 mb-6">
                Zadzwoń bezpośrednio do działu sprzedaży B2B.
                Nasi konsultanci pomogą przygotować ofertę.
              </p>
              <div className="grid gap-4">
                <a
                  href="tel:+48123456789"
                  className="flex items-center justify-center bg-gradient-to-br from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +48 123 456 789
                </a>
                <a
                  href={`https://wa.me/48123456789?text=${generateWhatsAppMessage()}`}
                  className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Pon-Pt: 8:00-17:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;