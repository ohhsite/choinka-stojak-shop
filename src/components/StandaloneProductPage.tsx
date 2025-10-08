import React, { useEffect } from 'react';
import { ArrowLeft, Check, ShoppingCart, Ruler, Weight, Shield, Droplets, Package, Award, Star, Truck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StandaloneProductPage = ({ 
  productId, 
  productName, 
  productPrice, 
  productImages, 
  specs, 
  features, 
  description,
  seoTitle,
  seoDescription,
  seoKeywords,
  uniqueContent
}: {
  productId: string;
  productName: string;
  productPrice: string;
  productImages: string[];
  specs: any;
  features: string[];
  description: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  uniqueContent: any;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // SEO meta tags
  useEffect(() => {
    // Set page title
    document.title = seoTitle;
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', seoDescription);
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Add meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', seoKeywords);
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Add structured data for product
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": productName,
      "description": seoDescription,
      "image": productImages,
      "brand": {
        "@type": "Brand",
        "name": "Metalowe Stojaki Choinkowe"
      },
      "offers": {
        "@type": "Offer",
        "price": productPrice,
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Metalowe Stojaki Choinkowe"
        }
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Metalowe Stojaki Choinkowe"
      },
      "category": "Stojaki na choinkę",
      "material": "Stal malowana proszkowo"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [productName, seoTitle, seoDescription, seoKeywords, productPrice, productImages]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb - important for SEO */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-green-600 transition-colors">Strona główna</Link>
          <span>/</span>
          <Link to="/#stojaki" className="hover:text-green-600 transition-colors">Stojaki na choinkę</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{productName}</span>
        </div>

        {/* Back button */}
        <Link 
          to="/#stojaki" 
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Powrót do stojaków na choinkę
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Galeria zdjęć */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <img 
                src={productImages[currentImageIndex]} 
                alt={`${productName} - wysokiej jakości metalowy stojak na choinkę z pojemnikiem na wodę`}
                loading="eager"
                decoding="async"
                width="500"
                height="500"
                className="w-full h-full object-contain"
                style={{ backgroundColor: 'white' }}
              />
            </div>
            
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`bg-gray-100 rounded-lg p-2 aspect-square border-2 transition-all ${
                      index === currentImageIndex ? 'border-green-500' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${productName} ${index + 1} - stojak choinkowy metalowy`}
                      loading="lazy"
                      decoding="async"
                      width="100"
                      height="100"
                      className="w-full h-full object-contain"
                      style={{ backgroundColor: 'white' }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* H1 - Most important for SEO */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {productName}
              </h1>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-green-700">{productPrice}</span>
                <span className="text-xl text-green-600">zł</span>
                <span className="text-sm text-gray-500 ml-2">+ koszt dostawy kurierem</span>
              </div>
            </div>

            {/* Main CTA Button - Single prominent action */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Zamów metalowy stojak na choinkę już dziś!
              </h2>
              <p className="text-gray-700 mb-4 text-sm">
                Realizacja zamówienia w 48h | Dostawa kurierem w całej Polsce | 2 lata gwarancji
              </p>
              <button
                onClick={() => {
                  window.location.href = '/#zamowienie';
                }}
                className="w-full bg-gradient-to-br from-green-600 to-green-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-[0_20px_50px_rgba(22,_163,_74,_0.3)] hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-5 h-5" />
                Zamów stojak na choinkę - {productPrice} zł
              </button>
              <div className="mt-3 text-center">
                <a
                  href="tel:+48604821125"
                  className="text-green-700 hover:text-green-800 font-medium text-sm"
                >
                  📞 Lub zadzwoń: 604 821 125
                </a>
              </div>
            </div>

            {/* H2 - Technical Specifications */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-green-600" />
                Specyfikacja techniczna stojaka choinkowego
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Ruler className="w-4 h-4 text-green-600" />
                  <div>
                    <div className="text-sm text-gray-600">Podstawa stojaka</div>
                    <div className="font-semibold">{specs.podstawa}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Weight className="w-4 h-4 text-green-600" />
                  <div>
                    <div className="text-sm text-gray-600">Waga konstrukcji</div>
                    <div className="font-semibold">{specs.waga}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Droplets className="w-4 h-4 text-green-600" />
                  <div>
                    <div className="text-sm text-gray-600">Pojemnik na wodę</div>
                    <div className="font-semibold">{specs.pojemnik}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-green-600" />
                  <div>
                    <div className="text-sm text-gray-600">Max średnica pnia</div>
                    <div className="font-semibold">{specs.maxPien}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Content Sections - Important for SEO */}
        {uniqueContent && (
          <div className="max-w-6xl mx-auto mt-16 space-y-12">
            
            {/* H2 - Main description */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {uniqueContent.mainTitle}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                {uniqueContent.mainDescription.map((paragraph: string, index: number) => (
                  <p key={index} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* H3 - Key Features */}
            <div className="bg-green-50 rounded-xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-green-600" />
                {uniqueContent.featuresTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* H3 - Usage guide */}
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {uniqueContent.usageTitle}
              </h3>
              <div className="space-y-4 text-gray-700">
                {uniqueContent.usageSteps.map((step: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* H4 - Care instructions */}
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                {uniqueContent.careTitle}
              </h4>
              <div className="space-y-2 text-gray-700">
                {uniqueContent.careInstructions.map((instruction: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{instruction}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* H4 - Why choose this stand */}
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                {uniqueContent.whyChooseTitle}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {uniqueContent.whyChooseDescription}
              </p>
            </div>
          </div>
        )}

        {/* H5 - Additional benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplets className="w-6 h-6 text-green-600" />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2">System nawadniania stojaka</h5>
            <p className="text-sm text-gray-600">Pojemnik na wodę 1L utrzymuje świeżość choinki przez cały sezon świąteczny</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2">Stabilność metalowego stojaka</h5>
            <p className="text-sm text-gray-600">Stalowa konstrukcja malowana proszkowo gwarantuje bezpieczeństwo</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2">Gwarancja polskiego producenta</h5>
            <p className="text-sm text-gray-600">Wysokiej jakości wykonanie z 2-letnią gwarancją producenta</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center max-w-4xl mx-auto">
          <h6 className="text-2xl font-bold mb-4">
            Zamów {productName} już dziś!
          </h6>
          <p className="text-green-100 mb-6 text-lg">
            Profesjonalny stojak na choinkę z gwarancją polskiego producenta
          </p>
          <button
            onClick={() => {
              window.location.href = '/#zamowienie';
            }}
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Zamów za {productPrice} zł
          </button>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-green-200">
            <span>✓ Dostawa kurierem 48h</span>
            <span>✓ 2 lata gwarancji</span>
            <span>✓ Polski producent</span>
            <span>✓ Pojemnik na wodę 1L</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StandaloneProductPage;