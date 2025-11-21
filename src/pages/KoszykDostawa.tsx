import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, User, MapPin, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCartStore } from '../hooks/use-cart';
import { formatPrice } from '../lib/cart';

interface ShippingFormData {
  // Dane osobowe
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Adres dostawy
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  city: string;
  postalCode: string;
  
  // Firma (opcjonalne)
  isCompany: boolean;
  companyName: string;
  nip: string;
  
  // Notatki
  notes: string;
}

const KoszykDostawa = () => {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, loadCart } = useCartStore();
  
  const [formData, setFormData] = useState<ShippingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    houseNumber: '',
    apartmentNumber: '',
    city: '',
    postalCode: '',
    isCompany: false,
    companyName: '',
    nip: '',
    notes: '',
  });

  useEffect(() => {
    loadCart();
    document.title = "Dostawa i płatność | Stojaki na Choinkę";
    
    // Jeśli koszyk pusty, przekieruj do koszyka
    if (items.length === 0) {
      navigate('/koszyk');
    }
  }, [loadCart, items.length, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Tutaj będzie integracja ze Stripe
    alert('Płatności online będą dostępne wkrótce! Na razie skontaktuj się telefonicznie: +48 604 821 125');
  };

  if (items.length === 0) {
    return null; // Przekierowanie obsługiwane przez useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/koszyk" className="hover:text-green-600 flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Wróć do koszyka
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Dostawa i płatność
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formularz */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dane osobowe */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <User className="w-6 h-6 text-green-600" />
                    Dane kontaktowe
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Imię *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Jan"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nazwisko *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Kowalski"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="jan@example.com"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="+48 123 456 789"
                      />
                    </div>
                  </div>
                </div>

                {/* Adres dostawy */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Truck className="w-6 h-6 text-green-600" />
                    Adres dostawy
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ulica *
                        </label>
                        <input
                          type="text"
                          name="street"
                          value={formData.street}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="ul. Główna"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nr domu *
                        </label>
                        <input
                          type="text"
                          name="houseNumber"
                          value={formData.houseNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="12"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nr lokalu
                        </label>
                        <input
                          type="text"
                          name="apartmentNumber"
                          value={formData.apartmentNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="5"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Kod pocztowy *
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{2}-[0-9]{3}"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="00-001"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Miasto *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Warszawa"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dane firmowe (opcjonalne) */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <input
                      type="checkbox"
                      id="isCompany"
                      name="isCompany"
                      checked={formData.isCompany}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                    />
                    <label htmlFor="isCompany" className="text-lg font-semibold text-gray-900">
                      Kupuję jako firma
                    </label>
                  </div>
                  
                  {formData.isCompany && (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nazwa firmy *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required={formData.isCompany}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Firma Sp. z o.o."
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          NIP *
                        </label>
                        <input
                          type="text"
                          name="nip"
                          value={formData.nip}
                          onChange={handleInputChange}
                          required={formData.isCompany}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="123-456-78-90"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Notatki */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dodatkowe uwagi do zamówienia
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Preferowany termin dostawy, dodatkowe informacje..."
                  />
                </div>

                {/* Przycisk płatności */}
                <button
                  type="submit"
                  disabled
                  className="w-full bg-gray-400 cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                  title="Płatności online wkrótce dostępne"
                >
                  <CreditCard className="w-6 h-6" />
                  Przejdź do płatności (wkrótce)
                </button>
                
                <div className="text-center text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Płatności online wkrótce dostępne!</p>
                  <p>W międzyczasie skontaktuj się telefonicznie: <a href="tel:+48604821125" className="text-green-600 font-semibold">+48 604 821 125</a></p>
                </div>
              </form>
            </div>

            {/* Podsumowanie zamówienia */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Twoje zamówienie
                </h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-gray-900">
                          {item.product.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {item.quantity} × {formatPrice(item.product.priceGrossGrosze)}
                        </p>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        {formatPrice(item.product.priceGrossGrosze * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Produkty ({totalItems})</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-2">
                    <span>Do zapłaty</span>
                    <span className="text-green-600">{formatPrice(totalPrice)}</span>
                  </div>
                  <p className="text-sm text-gray-500 pt-2">+ koszt dostawy kurierem (ustalany indywidualnie)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KoszykDostawa;
