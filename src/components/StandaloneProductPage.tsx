import React, { useEffect } from 'react';
import { ArrowLeft, Check, ShoppingCart, Ruler, Weight, Shield, Droplets, Package, Award, Star, Truck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PRODUCTS } from '../data/products';
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
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${window.location.pathname}`;

    // Helper function to create/update meta tags
    const setMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
      let element = document.querySelector(`meta[${attr}='${value}']`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to create/update link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // --- Standard SEO ---
    document.title = seoTitle;
    setMetaTag('name', 'description', seoDescription);
    setMetaTag('name', 'keywords', seoKeywords);
    setLinkTag('canonical', canonicalUrl);

    // --- Open Graph (Facebook, LinkedIn, etc.) ---
    setMetaTag('property', 'og:title', seoTitle);
    setMetaTag('property', 'og:description', seoDescription);
    setMetaTag('property', 'og:type', 'product');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', `${origin}${productImages[0]}`);
    setMetaTag('property', 'og:site_name', 'Metalowe Stojaki Choinkowe');

    // --- Twitter Cards ---
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seoTitle);
    setMetaTag('name', 'twitter:description', seoDescription);
    setMetaTag('name', 'twitter:image', `${origin}${productImages[0]}`);

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

  // FAQ Structured Data
  useEffect(() => {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Jaki stojak na żywą choinkę jest najlepszy i najstabilniejszy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Najlepsze i najstabilniejsze są stojaki ciężkie, wykonane ze stali i o szerokiej podstawie. Nasz stojak waży do 6,5 kg i ma podstawę do 50x50 cm, co gwarantuje, że nawet 4-metrowa choinka się nie przewróci. To inwestycja w bezpieczeństwo i spokój na lata."
          }
        },
        {
          "@type": "Question",
          "name": "Jak sprawić, by żywa choinka nie gubiła igieł?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kluczem jest stałe nawadnianie. Choinka potrzebuje wody tak samo jak kwiaty w wazonie. Dlatego nasze stojaki mają wbudowany 1-litrowy pojemnik na wodę, który znacząco przedłuża żywotność i świeżość drzewka, ograniczając opadanie igieł."
          }
        },
        {
          "@type": "Question",
          "name": "Jak szybko i łatwo zamontować choinkę w stojaku?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Szukaj stojaka z prostym systemem mocowania, który nie wymaga narzędzi. W naszych modelach wystarczy umieścić pień w otworze i dokręcić ręcznie 4 śruby motylkowe. Cały proces zajmuje mniej niż 5 minut i można go wykonać w pojedynkę."
          }
        },
        {
          "@type": "Question",
          "name": "Jak dobrać stojak do wielkości i wagi choinki?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zmierz wysokość choinki i średnicę pnia. Nasz mały stojak (30x30cm) jest idealny dla drzewek do 2m i pnia do 8cm. Dla większych choinek (2-4m) i pni do 12cm, wybierz nasz duży, wzmocniony model (50x50cm)."
          }
        },
        {
          "@type": "Question",
          "name": "Czy warto inwestować w metalowy stojak zamiast plastikowego?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zdecydowanie tak. Stojak metalowy, w przeciwieństwie do plastikowego, jest praktycznie niezniszczalny i odporny na pęknięcia. Jest też znacznie cięższy, co zapewnia nieporównywalnie większą stabilność. To jednorazowy zakup, który posłuży wielu pokoleniom."
          }
        },
        {
          "@type": "Question",
          "name": "Co zrobić, gdy pień choinki jest za gruby i nie mieści się w stojaku?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "W takiej sytuacji wystarczy delikatnie ociosać dolną część pnia siekierą lub piłą, aby dopasować go do otworu w stojaku. Podczas ociosywania zachowaj okrągły kształt pnia i usuń tylko tyle drewna, ile potrzeba. To standardowa praktyka i nie wpływa negatywnie na żywotność choinki."
          }
        },
        {
          "@type": "Question",
          "name": "Jaki stojak wybrać do jodły kaukaskiej, a jaki do świerka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do świerka zazwyczaj wystarczy mały stojak (30x30cm), ponieważ ma cieńszy pień i jest lżejszy. Jodła kaukaska ma znacznie grubszy pień i jest dużo cięższa, dlatego wymaga dużego, wzmocnionego stojaka (50x50cm), który pomieści pień o średnicy do 12cm i zapewni odpowiednią stabilność."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqStructuredData);
    faqScript.id = 'faq-structured-data';
    document.head.appendChild(faqScript);

    return () => {
      // Cleanup
      const existingScript = document.getElementById('faq-structured-data');
      if (existingScript && document.head.contains(existingScript)) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

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
                alt={`${productName} - profesjonalny metalowy stojak na choinkę z pojemnikiem na wodę - widok ${currentImageIndex + 1}`}
                loading="eager"
                decoding="async"
                width="500"
                height="500"
                className="w-full h-full object-contain mix-blend-multiply hover:scale-110 transition-transform duration-300"
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
                      alt={`${productName} - miniatura ${index + 1} - metalowy stojak choinkowy`}
                      loading="lazy"
                      decoding="async"
                      width="100"
                      height="100"
                      className="w-full h-full object-contain mix-blend-multiply"
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
                disabled
                className="w-full bg-gray-400 text-white py-4 px-8 rounded-xl font-bold text-lg cursor-not-allowed flex items-center justify-center gap-3 opacity-60"
              >
                <ShoppingCart className="w-5 h-5" />
                Niedługo dostępne - {productPrice} zł
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

        {/* Zobacz także inne stojaki */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Zobacz także</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {PRODUCTS.filter(p => p.productId !== productId).map(product => (
              <Link 
                key={product.productId} 
                to={product.detailsUrl} 
                className="group block bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 p-4 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-lg p-4 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    width="200"
                    height="128"
                    className="w-full h-32 object-contain mix-blend-multiply"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-700 mb-2 text-sm">{product.name}</h3>
                <div className="text-xs text-gray-500 mb-2">{product.width.trim()} | {product.treeSize.trim()}</div>
                <div className="flex items-center justify-between">
                  <span className="text-green-700 font-bold">{product.price.trim()}</span>
                  <span className="text-green-600 text-xs font-medium group-hover:underline">Szczegóły →</span>
                </div>
              </Link>
            ))}
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

        {/* FAQ Section - Optimized for AI & Featured Snippets */}
        <div id="faq" className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Odpowiedzi na Twoje pytania
          </h3>
          <div className="space-y-4">
            {/* Pytanie 1 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                Jaki stojak na żywą choinkę jest najlepszy i najstabilniejszy?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Najlepsze i najstabilniejsze są stojaki ciężkie, wykonane ze stali i o szerokiej podstawie. Nasz stojak waży do 6,5 kg i ma podstawę do 50x50 cm, co gwarantuje, że nawet 4-metrowa choinka się nie przewróci. To inwestycja w bezpieczeństwo i spokój na lata.
              </p>
            </div>
            
            {/* Pytanie 2 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                Jak sprawić, by żywa choinka nie gubiła igieł?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Kluczem jest stałe nawadnianie. Choinka potrzebuje wody tak samo jak kwiaty w wazonie. Dlatego nasze stojaki mają wbudowany 1-litrowy pojemnik na wodę, który znacząco przedłuża żywotność i świeżość drzewka, ograniczając opadanie igieł.
              </p>
            </div>
            
            {/* Pytanie 3 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                Jak szybko i łatwo zamontować choinkę w stojaku?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Szukaj stojaka z prostym systemem mocowania, który nie wymaga narzędzi. W naszych modelach wystarczy umieścić pień w otworze i dokręcić ręcznie 4 śruby motylkowe. Cały proces zajmuje mniej niż 5 minut i można go wykonać w pojedynkę.
              </p>
            </div>
            
            {/* Pytanie 4 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                Jak dobrać stojak do wielkości i wagi choinki?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Zmierz wysokość choinki i średnicę pnia. Nasz mały stojak (30x30cm) jest idealny dla drzewek do 2m i pnia do 8cm. Dla większych choinek (2-4m) i pni do 12cm, wybierz nasz duży, wzmocniony model (50x50cm).
              </p>
            </div>
            
            {/* Pytanie 5 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                Czy warto inwestować w metalowy stojak zamiast plastikowego?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Zdecydowanie tak. Stojak metalowy, w przeciwieństwie do plastikowego, jest praktycznie niezniszczalny i odporny na pęknięcia. Jest też znacznie cięższy, co zapewnia nieporównywalnie większą stabilność. To jednorazowy zakup, który posłuży wielu pokoleniom.
              </p>
            </div>
            
            {/* Pytanie 6 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                Co zrobić, gdy pień choinki jest za gruby i nie mieści się w stojaku?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                W takiej sytuacji wystarczy delikatnie ociosać dolną część pnia siekierą lub piłą, aby dopasować go do otworu w stojaku. Podczas ociosywania zachowaj okrągły kształt pnia i usuń tylko tyle drewna, ile potrzeba. To standardowa praktyka i nie wpływa negatywnie na żywotność choinki.
              </p>
            </div>
            
            {/* Pytanie 7 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                Jaki stojak wybrać do jodły kaukaskiej, a jaki do świerka?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Do świerka zazwyczaj wystarczy mały stojak (30x30cm), ponieważ ma cieńszy pień i jest lżejszy. Jodła kaukaska ma znacznie grubszy pień i jest dużo cięższa, dlatego wymaga dużego, wzmocnionego stojaka (50x50cm), który pomieści pień o średnicy do 12cm i zapewni odpowiednią stabilność.
              </p>
            </div>
          </div>
          
          {/* CTA do FAQ */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Masz więcej pytań? Sprawdź wszystkie odpowiedzi w sekcji{' '}
              <a href="#faq" className="text-green-600 hover:text-green-700 font-semibold underline">
                FAQ
              </a>
              {' '}lub napisz do nas!
            </p>
            <a
              href="https://wa.me/48604821125"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Napisz na WhatsApp
            </a>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center max-w-4xl mx-auto">
          <h6 className="text-2xl font-bold mb-4">
            Zamów wygodnie online i ciesz się świąteczną choinką już za 48h!
          </h6>
          <p className="text-green-100 mb-6 text-lg">
            Szybka wysyłka, 2 lata gwarancji, polski producent – wybierz pewny stojak na choinkę!
          </p>
          <button
            disabled
            className="bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold cursor-not-allowed inline-flex items-center gap-2 opacity-60"
          >
            <ShoppingCart className="w-5 h-5" />
            Niedługo dostępne - {productPrice} zł
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