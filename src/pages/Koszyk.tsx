import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, Package } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCartStore } from '../hooks/use-cart';
import { formatPrice } from '../lib/cart';

const Koszyk = () => {
  const { items, totalItems, totalPrice, loadCart, updateQuantity, removeFromCart } = useCartStore();

  useEffect(() => {
    loadCart();
    document.title = "Koszyk | Stojaki na Choinkę";
  }, [loadCart]);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-12">
              <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Twój koszyk jest pusty
              </h1>
              <p className="text-gray-600 mb-8">
                Dodaj produkty do koszyka, aby kontynuować zakupy
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Przeglądaj produkty
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            <ShoppingCart className="inline-block w-10 h-10 mr-3 text-green-600" />
            Koszyk ({totalItems} {totalItems === 1 ? 'produkt' : 'produkty'})
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lista produktów */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-xl shadow-md p-6 flex gap-6"
                >
                  {/* Zdjęcie produktu */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />

                  {/* Detale produktu */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.product.description.substring(0, 100)}...
                    </p>
                    
                    <div className="flex items-center gap-4">
                      {/* Cena jednostkowa */}
                      <div className="text-lg font-semibold text-gray-900">
                        {formatPrice(item.product.priceGrossGrosze)}
                      </div>

                      {/* Kontrolki ilości */}
                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-200 rounded transition-colors"
                          aria-label="Zmniejsz ilość"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-1 font-semibold min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-200 rounded transition-colors"
                          aria-label="Zwiększ ilość"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Usuń */}
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-auto p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        aria-label="Usuń z koszyka"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Cena łączna */}
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Razem</div>
                    <div className="text-2xl font-bold text-green-600">
                      {formatPrice(item.product.priceGrossGrosze * item.quantity)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Podsumowanie */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Podsumowanie
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Produkty ({totalItems})</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Do zapłaty</span>
                      <span className="text-green-600">{formatPrice(totalPrice)}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">+ koszt dostawy kurierem (ustalany indywidualnie)</p>
                  </div>
                </div>

                <Link
                  to="/koszyk/dostawa"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2 mb-4"
                >
                  Przejdź do dostawy
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/"
                  className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  Kontynuuj zakupy
                </Link>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <p className="font-semibold mb-1">Dostawa kurierem</p>
                      <p>Wysyłka w całej Polsce - koszt ustalany indywidualnie</p>
                    </div>
                  </div>
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

export default Koszyk;
