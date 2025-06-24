import React, { useState } from 'react';
import { Send, Phone, MessageCircle, CheckCircle, Package, Plus, Minus } from 'lucide-react';
import EditableHeading from './EditableHeading';

interface ProductOrder {
  id: string;
  product: string;
  quantity: number;
}

const MultiProductOrderForm = () => {
  const [formData, setFormData] = useState({
    firma: '',
    nip: '',
    kontakt: '',
    telefon: '',
    email: '',
    adres: '',
    uwagi: ''
  });

  const [productOrders, setProductOrders] = useState<ProductOrder[]>([
    { id: '1', product: '', quantity: 5 }
  ]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const produkty = [
    "Stojak Mini - Stalowy Kompakt (49 zł)",
    "Stojak Standard - Uniwersalny (69 zł)", 
    "Stojak Premium - Wzmocniony (89 zł)",
    "Stojak Maxi - Profesjonalny (129 zł)",
    "Stojak Gigant - Przemysłowy (199 zł)",
    "Stojak Deluxe - Z Systemem Obrotu (159 zł)"
  ];

  const addProductRow = () => {
    const newId = (productOrders.length + 1).toString();
    setProductOrders([...productOrders, { id: newId, product: '', quantity: 5 }]);
  };

  const removeProductRow = (id: string) => {
    if (productOrders.length > 1) {
      setProductOrders(productOrders.filter(order => order.id !== id));
    }
  };

  const updateProductOrder = (id: string, field: 'product' | 'quantity', value: string | number) => {
    setProductOrders(productOrders.map(order => 
      order.id === id ? { ...order, [field]: value } : order
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dane zamówienia:', { formData, productOrders });
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firma: '',
        nip: '',
        kontakt: '',
        telefon: '',
        email: '',
        adres: '',
        uwagi: ''
      });
      setProductOrders([{ id: '1', product: '', quantity: 5 }]);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    const productsText = productOrders
      .filter(order => order.product)
      .map(order => `${order.product} - ${order.quantity} szt.`)
      .join('\n');

    const message = `Dzień dobry! Zapytanie ofertowe B2B:
    
🏢 Firma: ${formData.firma}
🔢 NIP: ${formData.nip}
👤 Osoba kontaktowa: ${formData.kontakt}
📞 Telefon: ${formData.telefon}
📧 Email: ${formData.email}
🎄 Produkty:
${productsText}
📍 Adres dostawy: ${formData.adres}
📝 Uwagi: ${formData.uwagi}

Proszę o przygotowanie oferty B2B z ceną hurtową.`;
    return encodeURIComponent(message);
  };

  if (isSubmitted) {
    return (
      <section id="zamowienie" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl p-12 shadow-xl border border-gray-200">
              <CheckCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <EditableHeading 
                level={2} 
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Dziękujemy za zapytanie!
              </EditableHeading>
              <p className="text-lg text-gray-600 mb-6">
                Twoje zapytanie ofertowe zostało przyjęte. Skontaktujemy się z Tobą w ciągu 2 godzin 
                roboczych w celu przygotowania indywidualnej oferty B2B.
              </p>
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
    <section id="zamowienie" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <EditableHeading 
            level={2} 
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Zapytanie <span className="text-blue-600">Ofertowe B2B</span>
          </EditableHeading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Minimalne zamówienie 5 sztuk. Dostawa paletowa kurierem w całej Polsce. 
            Przygotujemy indywidualną ofertę dla Twojej firmy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formularz */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
            <EditableHeading 
              level={3} 
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
            >
              <Send className="w-6 h-6 mr-3 text-blue-600" />
              Formularz B2B
            </EditableHeading>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firma" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nazwa firmy *
                  </label>
                  <input 
                    type="text" 
                    id="firma" 
                    name="firma" 
                    required 
                    value={formData.firma} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Nazwa firmy Sp. z o.o." 
                  />
                </div>
                
                <div>
                  <label htmlFor="nip" className="block text-sm font-semibold text-gray-700 mb-2">
                    NIP
                  </label>
                  <input 
                    type="text" 
                    id="nip" 
                    name="nip" 
                    value={formData.nip} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="123-456-78-90" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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

              {/* Sekcja produktów */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-semibold text-gray-700">
                    Wybierz stojaki *
                  </label>
                  <button
                    type="button"
                    onClick={addProductRow}
                    className="flex items-center bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Dodaj produkt
                  </button>
                </div>
                
                {productOrders.map((order, index) => (
                  <div key={order.id} className="flex gap-3 mb-3 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <select
                        value={order.product}
                        onChange={(e) => updateProductOrder(order.id, 'product', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">-- Wybierz stojak --</option>
                        {produkty.map((produkt, idx) => (
                          <option key={idx} value={produkt}>
                            {produkt}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="w-24">
                      <input
                        type="number"
                        min="5"
                        max="1000"
                        value={order.quantity}
                        onChange={(e) => updateProductOrder(order.id, 'quantity', parseInt(e.target.value) || 5)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="5"
                      />
                    </div>
                    
                    {productOrders.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProductRow(order.id)}
                        className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
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
                  placeholder="ul. Firmowa 123, 00-001 Warszawa" 
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
                className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Wyślij Zapytanie Ofertowe
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
              <EditableHeading 
                level={3} 
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
              >
                <Phone className="w-6 h-6 mr-3 text-blue-600" />
                Kontakt Telefoniczny
              </EditableHeading>
              <p className="text-gray-600 mb-6">
                Zadzwoń bezpośrednio do działu sprzedaży B2B. 
                Nasi konsultanci pomogą przygotować ofertę.
              </p>
              <a href="tel:+48123456789" className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                <Phone className="w-5 h-5 mr-3" />
                +48 123 456 789
              </a>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Pon-Pt: 8:00-17:00
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
              <EditableHeading 
                level={3} 
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
              >
                <MessageCircle className="w-6 h-6 mr-3 text-gray-700" />
                Szybki Kontakt WhatsApp
              </EditableHeading>
              <p className="text-gray-600 mb-6">
                Napisz na WhatsApp - najszybszy sposób na otrzymanie oferty. 
                Odpowiadamy w godzinach pracy.
              </p>
              <a href={`https://wa.me/48123456789?text=${generateWhatsAppMessage()}`} className="flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-colors w-full">
                <MessageCircle className="w-5 h-5 mr-3" />
                Napisz na WhatsApp
              </a>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Pon-Pt: 8:00-17:00
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
              <EditableHeading 
                level={3} 
                className="text-2xl font-bold mb-4 flex items-center text-white"
              >
                <Package className="w-6 h-6 mr-2" />
                Promocja B2B -15%
              </EditableHeading>
              <ul className="space-y-2 text-white/90 mb-4">
                <li>✅ Rabat 15% do sierpnia 2025</li>
                <li>✅ Dostawa paletowa w całej Polsce</li>
                <li>✅ Minimalne zamówienie 5 sztuk</li>
                <li>✅ Faktury VAT dla firm</li>
                <li>✅ Rabaty przy większych ilościach</li>
              </ul>
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="font-bold">Oszczędź nawet do 1000 zł!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiProductOrderForm;
