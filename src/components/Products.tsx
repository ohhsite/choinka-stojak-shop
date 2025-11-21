import React from 'react';
import ProductCard from './ProductCard';
import EditableText from './EditableText';
import { PRODUCTS } from '../data/products';

const Products = () => {
  return <section id="stojaki" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
            <span className="text-green-600 font-medium">Nasze produkty</span>
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <EditableText
              id="products-title"
              initialText="Solidne stojaki na choinkę"
              component="Products"
              file="src/components/Products.tsx"
              as="span"
              className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent"
            />
          </h2>
          <EditableText
            id="products-description"
            initialText="Stalowe stojaki z pojemnikiem na wodę na żywą choinkę z pojemnikiem na wodę, zapewniające stabilność i elegancję. "
            component="Products"
            file="src/components/Products.tsx"
            as="p"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {PRODUCTS.map((product, index) => (
            <div key={product.id} className="transform transition-transform duration-300 hover:scale-105">
              <ProductCard product={product} priority={index === 0} />
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg inline-block border border-gray-100">
            <EditableText
              id="products-cta-title"
              initialText="Potrzebujesz indywidualnej oferty?"
              component="Products"
              file="src/components/Products.tsx"
              as="h3"
              className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4"
            />
            <EditableText
              id="products-cta-description"
              initialText="Skontaktuj się z nami - przygotujemy ofertę dostosowaną do Twoich potrzeb biznesowych!"
              component="Products"
              file="src/components/Products.tsx"
              as="p"
              className="text-gray-600 mb-6"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <a 
                href="tel:+48604821125" 
                className="w-full sm:w-auto bg-gradient-to-br from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-[0_15px_35px_rgba(22,_163,_74,_0.3)] hover:translate-y-[-2px] transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">📞</span>
                <span>+48 604 821 125</span>
              </a>
              <a 
                href="https://wa.me/48604821125" 
                className="w-full sm:w-auto bg-gradient-to-br from-slate-700 to-slate-800 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-[0_15px_35px_rgba(71,_85,_105,_0.3)] hover:translate-y-[-2px] transition-all duration-300 text-center flex items-center justify-center gap-2 group border border-slate-600/20"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Min. zamówienie 5 szt. • Dostawa paletowa • Rabaty ilościowe
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Products;
