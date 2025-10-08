import React from 'react';
import StandaloneProductPage from '../components/StandaloneProductPage';
import { getProductByProductId, getProductPrice } from '../data/products';

const StojakDuzyZloty = () => {
  const baseProduct = getProductByProductId('stojak-duzy-zloty');
  
  if (!baseProduct) {
    return <div>Produkt nie został znaleziony</div>;
  }

  const productData = {
    productId: baseProduct.productId,
    productName: baseProduct.fullProductName,
    productPrice: getProductPrice(baseProduct.id),
    productImages: [
      baseProduct.image
    ],
    specs: baseProduct.specs,
    features: [
      'Prestiżowy złoty kolor metaliczny nadający luksusowy charakter wnętrzu',
      'Duży stojak na masywne choinki do 3 metrów wysokości',
      'Stalowa podstawa 40×40cm dla maksymalnej stabilności wielkich drzewek',
      'Wzmocniona konstrukcja 8kg z najwyższej jakości stali malowanej proszkowo',
      'Pojemnik na wodę 2L z podwójnym systemem dolewania dla większych choinek',
      'Maksymalna średnica pnia choinki do 12cm - dla największych drzewek',
      'Profesjonalne śruby mocujące z podkładkami stabilizującymi w komplecie',
      'Podwójne antypoślizgowe podkładki pod nogi dla bezpieczeństwa'
    ],
    description: 'Duży metalowy stojak na choinkę w złotym wykończeniu to najwyższa klasa produktu dla najbardziej wymagających klientów. Luksusowe złote wykończenie metaliczne tworzy prestiżowy element dekoracji, a wzmocniona stalowa konstrukcja gwarantuje bezpieczeństwo największych choinek.',
    
    // SEO Meta Tags
    seoTitle: 'Duży Złoty Stojak na Choinkę 50x50cm | Premium Wykończenie | Producent',
    seoDescription: 'Ekskluzywny duży stojak na choinkę 50x50cm w złotym metalicznym wykończeniu. Waga 6,5kg, pojemnik 1L, max średnica pnia 12cm. ✓ Luksusowy design ✓ 2 lata gwarancji ✓ Dostawa 24h',
    seoKeywords: 'duży stojak na choinkę złoty, stojak na dużą choinkę, stojak na choinkę, stojak na choinke, stojak choinkowy, stojak pod choinkę, stojaki pod choinkę, metalowy stojak na choinkę, stojak na choinkę z wodą, stojak do choinki żywej, solidny stojak do choinki, stojaki do choinek, stojak na żywą choinkę, stojak na choinkę z pojemnikiem na wodę, stojak choinkowy 50x50 złoty, podstawki pod choinke, luksusowy stojak choinkowy duży, producent stojaków ekskluzywnych',
    
    // Unique Content for SEO
    uniqueContent: {
      mainTitle: 'Dlaczego wybrać duży złoty stojak na choinkę z premium wykończeniem?',
      mainDescription: [
        'Duży złoty stojak na choinkę to absolutny szczyt elegancji i funkcjonalności w jednym produkcie. Luksusowe złote wykończenie metaliczne zostało opracowane specjalnie dla najbardziej wymagających klientów, którzy cenią sobie połączenie najwyższej jakości z prestiżowym designem. Podstawa o wymiarach 40×40cm została wzmocniona do wagi 8 kilogramów, co zapewnia niezrównaną stabilność nawet dla największych choinek.',
        'Prestiżowe złote wykończenie powstaje w wyniku zaawansowanego procesu malowania proszkowego z dodatkiem metalicznych pigmentów, które nadają powierzchni wyjątkowy błysk i głębię koloru. Ta specjalna technologia nie tylko tworzy oszałamiający efekt wizualny, ale również zapewnia najwyższą odporność na czynniki zewnętrzne, zarysowania i utratę koloru.',
        'Model premium przeznaczony jest dla choinek o wysokości do 3 metrów z pniem o średnicy maksymalnie 12 centymetrów. To idealne rozwiązanie dla przestronnych wnętrz, gdzie choinka staje się centralnym punktem świątecznej dekoracji. Większy pojemnik na wodę o pojemności 2 litrów został zaprojektowany z myślą o zwiększonych potrzebach wodnych większych drzewek.'
      ],
      
      featuresTitle: 'Ekskluzywne cechy dużego złotego stojaka choinkowego premium',
      
      usageTitle: 'Profesjonalny montaż dużego złotego stojaka na choinkę',
      usageSteps: [
        'Wyjmij stojak z folii ochronnej dbając o zachowanie idealnego stanu wykończenia',
        'Nakręć dołączone do zestawu nakładki na śruby',
        'Ostrożnie umieść pień dużej choinki w centralnym uchwycie sprawdzając wypoziomowanie',
        'Dokręć profesjonalne śruby mocujące stopniowo i równomiernie na całym obwodzie',
        'Wlej do misy wodę',
        'Sprawdź stabilność i końcowe wypoziomowanie - choinka powinna stać idealnie pionowo'
      ],
      
      careTitle: 'Ekskluzywna pielęgnacja złotego stojaka premium na choinkę',
      careInstructions: [
        'Używaj wyłącznie miękkich ściereczek z mikrofibry do czyszczenia złotej powierzchni',
        'Stosuj specjalne środki czyszczące przeznaczone dla powierzchni lakierowanych',
        'Unikaj kontaktu z ostrymi przedmiotami i ściernymi materiałami',
        'Po każdym sezonie wykonuj gruntowne czyszczenie z użyciem profesjonalnych środków',
        'Przechowuj w kontrolowanych warunkach w dedykowanym opakowaniu ochronnym',
        'W przypadku drobnych uszkodzeń skorzystaj z serwisu renowacji powierzchni złotych',
        'Regularnie sprawdzaj stan śrub i mechanizmów - smaruj gdy zajdzie potrzeba'
      ],
      
      whyChooseTitle: 'Dlaczego nasz duży złoty stojak to inwestycja na lata?',
      whyChooseDescription: 'Jako renomowany polski producent stojaków na choinkę premium, oferujemy produkt najwyższej klasy, który łączy w sobie zaawansowaną technologię produkcji z luksusowym designem. Nasz duży złoty stojak powstaje w wyniku wieloetapowego procesu kontroli jakości, gdzie każdy element jest dokładnie sprawdzany przed montażem końcowym. Inwestując w ten model, otrzymujesz nie tylko funkcjonalny stojak na najbardziej okazałe choinki, ale również prestiżowy element wyposażenia domu, który będzie służył przez dziesiątki lat. Złote wykończenie premium nadaje mu status prawdziwej biżuterii świątecznej, a wzmocniona konstrukcja gwarantuje bezpieczeństwo nawet przy największych obciążeniach.'
    }
  };

  return <StandaloneProductPage {...productData} />;
};

export default StojakDuzyZloty;