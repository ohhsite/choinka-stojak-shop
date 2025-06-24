
import React from 'react';
import { Ruler, Trees, Droplets } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  width: string;
  treeSize: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  width,
  treeSize,
  description,
  price,
  image,
  features
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="relative">
        <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-6xl">🎄</div>
        </div>
        <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
        
        <div className="grid grid-cols-1 gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Ruler className="w-4 h-4 mr-2 text-blue-600" />
            <span><strong>Szerokość:</strong> {width}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Trees className="w-4 h-4 mr-2 text-gray-700" />
            <span><strong>Dla choinek:</strong> {treeSize}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Droplets className="w-4 h-4 mr-2 text-blue-500" />
            <span><strong>Pojemność:</strong> 1L</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Cechy produktu:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={() => {
            const element = document.getElementById('zamowienie');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              const select = document.getElementById('produkt') as HTMLSelectElement;
              if (select) {
                select.value = name;
              }
            }
          }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Zapytaj o Cenę B2B
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
