import React, { memo } from 'react';
import { Ruler, Trees, Droplets, ShoppingCart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import EditableText from './EditableText';
interface ProductCardProps {
  id: number;
  name: string;
  width: string;
  treeSize: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  detailsUrl?: string;
  priority?: boolean; // dla pierwszego produktu
}
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  width,
  treeSize,
  description,
  price,
  image,
  features,
  detailsUrl,
  priority = false
}) => {
  return <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex md:flex-row flex-col w-full md:h-auto min-h-[800px] md:min-h-0">
      <div className="relative md:w-[40%] w-full">
        <div className="bg-gradient-to-br from-green-50 to-gray-50 flex items-center justify-center p-4 h-full min-h-[300px]">
          <div className="relative w-full h-full">
            <img 
              src={image} 
              alt={name}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={priority ? "high" : "auto"}
              width="400"
              height="300"
              className="w-full h-full object-contain mix-blend-multiply hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-green-100">
            <div className="flex items-baseline gap-1">
              <EditableText
                id={`product-${id}-price`}
                initialText={price.replace('zł', '')}
                component="ProductCard"
                file="src/components/ProductCard.tsx"
                as="span"
                className="text-2xl font-bold text-green-700"
              />
              <span className="text-sm font-semibold text-green-600">zł</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1">
        <EditableText
          id={`product-${id}-name`}
          initialText={name}
          component="ProductCard"
          file="src/components/ProductCard.tsx"
          as="h3"
          className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6"
        />

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700">
            <div className="p-2 bg-green-50 rounded-lg mr-3">
              <Ruler className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-base"><strong>Szerokość podstawy:</strong> 
              <EditableText
                id={`product-${id}-width`}
                initialText={width}
                component="ProductCard"
                file="src/components/ProductCard.tsx"
                as="span"
              />
            </span>
          </div>
          <div className="flex items-center text-gray-700">
            <div className="p-2 bg-green-50 rounded-lg mr-3">
              <Trees className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-base"><strong>Wysokość choinki:</strong> 
              <EditableText
                id={`product-${id}-treesize`}
                initialText={treeSize}
                component="ProductCard"
                file="src/components/ProductCard.tsx"
                as="span"
              />
            </span>
          </div>
          <div className="flex items-center text-gray-700">
            <div className="p-2 bg-green-50 rounded-lg mr-3">
              <Droplets className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-base"><strong>Zbiornik na wodę:</strong> 1L</span>
          </div>
        </div>
        
        <EditableText
          id={`product-${id}-description`}
          initialText={description}
          component="ProductCard"
          file="src/components/ProductCard.tsx"
          as="p"
          className="text-gray-600 mb-8 text-base leading-relaxed"
        />
        
        <div className="flex flex-col md:flex-row gap-3">
          <button
            onClick={() => {
              // Check if we're on the main page
              if (window.location.pathname === '/') {
                const element = document.getElementById('zamowienie');
                element?.scrollIntoView({ behavior: 'smooth' });
              } else {
                // Navigate to main page with hash
                window.location.href = '/#zamowienie';
              }
            }}
            className="flex-1 bg-gradient-to-br from-green-600 to-green-700 text-white py-3 px-6 rounded-xl font-semibold text-base hover:shadow-[0_15px_35px_rgba(22,_163,_74,_0.3)] hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Kup teraz
          </button>
          
          <Link
            to={detailsUrl || `/produkt/${id === 1 ? 'stojak-maly' : 'stojak-duzy'}`}
            className="flex-1 bg-gradient-to-br from-slate-600 to-slate-700 text-white py-3 px-6 rounded-xl font-semibold text-base hover:shadow-[0_15px_35px_rgba(71,_85,_105,_0.3)] hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2 group border border-slate-500/20"
          >
            <Info className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Zobacz szczegóły
          </Link>
        </div>
      </div>
    </div>;
};
export default memo(ProductCard);