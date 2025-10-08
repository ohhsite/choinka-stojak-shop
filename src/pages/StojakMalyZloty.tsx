import React from 'react';
import StandaloneProductPage from '../components/StandaloneProductPage';
import { getProductByProductId, getProductPrice } from '../data/products';

const StojakMalyZloty = () => {
  const baseProduct = getProductByProductId('stojak-maly-zloty');
  
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
      'Luksusowy złoty kolor metaliczny dodający elegancji wnętrzu',
      'Kompaktowy stojak na choinkę do 2 metrów wysokości',
      'Stalowa podstawa 30×30cm idealna do mniejszych pomieszczeń',
      'Lekka konstrukcja 5kg z wytrzymałej stali malowanej proszkowo',
      'Pojemnik na wodę 1L z systemem dolewania bez zdejmowania choinki',
      'Maksymalna średnica pnia choinki do 8cm - pasuje do większości drzewek',
      'Podkładki stabilizujące na śruby w komplecie dla lepszego chwytu',
      'Antypoślizgowe podkładki pod nogi chroniące powierzchnię podłogi'
    ],
    description: 'Mały metalowy stojak na choinkę w złotym wykończeniu to połączenie funkcjonalności z eleganckim designem. Luksusowe złote wykończenie nadaje świątecznego charakteru każdemu wnętrzu, a solidna stalowa konstrukcja zapewnia bezpieczeństwo.',
    
    // SEO Meta Tags
    seoTitle: 'Mały Złoty Stojak na Choinkę 30x30cm | Eleganckie Wykończenie | Producent',
    seoDescription: 'Luksusowy mały stojak na choinkę 30x30cm w złotym metalicznym wykończeniu. Waga 5kg, pojemnik 1L, max średnica pnia 8cm. ✓ Premium jakość ✓ 2 lata gwarancji ✓ Dostawa 24h',
    seoKeywords: 'mały stojak na choinkę złoty, stojak na choinkę, stojak na choinke, stojak choinkowy, stojak pod choinkę, metalowy stojak na choinkę, stojak na choinkę z wodą, stojak do choinki, solidny stojak do choinki, stojak na żywą choinkę, stojak na choinkę z pojemnikiem na wodę, stojak choinkowy 30x30 złoty, podstawki pod choinke, luksusowy stojak na choinkę, producent stojaków premium',
    
    // Unique Content for SEO
    uniqueContent: {
      mainTitle: 'Dlaczego wybrać mały złoty stojak na choinkę z metalicznym wykończeniem?',
      mainDescription: [
        'Mały złoty stojak na choinkę to doskonałe połączenie praktyczności z eleganckim designem. Luksusowe złote wykończenie metaliczne nadaje świątecznego blasku każdemu wnętrzu, tworząc wyjątkową atmosferę podczas najważniejszych chwil roku. Podstawa o wymiarach 30×30cm została zaprojektowana z myślą o optymalnym wykorzystaniu przestrzeni w mniejszych pomieszczeniach.',
        'Specjalna powłoka malarska w kolorze złotym metalicznym nie tylko pięknie prezentuje się wizualnie, ale również zapewnia dodatkową ochronę przed korozją i zarysowaniami. Proces malowania proszkowego gwarantuje trwałość koloru i odporność na warunki atmosferyczne przez wiele sezonów użytkowania.',
        'Mimo eleganckiego wyglądu, stojak zachowuje wszystkie cechy funkcjonalne modelu podstawowego - waga 5 kilogramów zapewnia stabilność, a uchwyt na pnie do 8 centymetrów średnicy pasuje do większości choinek naturalnych o wysokości do 2 metrów. To idealne rozwiązanie dla osób ceniących zarówno bezpieczeństwo jak i estetykę.'
      ],
      
      featuresTitle: 'Wyjątkowe zalety złotego stojaka na choinkę z premium wykończeniem',
      
      usageTitle: 'Instrukcja montażu eleganckiego złotego stojaka choinkowego',
      usageSteps: [
        'Wyjmij stojak z folii ochronnej, dbając o ochronę wykończenia',
        'Nakręć dołączone do zestawu nakładki na śruby',
        'Delikatnie umieść pień choinki w centralnym uchwycie sprawdzając pionowość',
        'Dokręć śruby dociskowe równomiernie, uważając aby nie zarysować powierzchni',
        'Wlej do misy wodę',
        'Kontroluj poziom wody codziennie - złote wykończenie ułatwia obserwację poziomu'
      ],
      
      careTitle: 'Specjalna pielęgnacja złotego metalowego stojaka na choinkę',
      careInstructions: [
        'Czyszczenie wykonuj delikatną ściereczką z mikrofibry aby nie zarysować złotej powierzchni',
        'Unikaj stosowania ściernych środków czyszczących i twardych szczotek',
        'Po sezonie umyj stojak letnią wodą z łagodnym detergentem bez wybielaczy',
        'Wysusz dokładnie wszystkie elementy miękką ściereczką',
        'Przechowuj w suchym miejscu w oryginalnym opakowaniu lub miękkiej tkaninie',
        'W przypadku drobnych zarysowań można użyć specjalnej farby w kolorze złotym'
      ],
      
      whyChooseTitle: 'Dlaczego nasz złoty stojak to najlepszy wybór dla eleganckich wnętrz?',
      whyChooseDescription: 'Jako polski producent stojaków na choinkę oferujemy unikalne połączenie wysokiej jakości wykonania z luksusowym designem. Nasz mały złoty stojak powstaje w wyniku precyzyjnego procesu malowania proszkowego, który gwarantuje trwałość koloru i odporność na uszkodzenia. Wybierając ten model, otrzymujesz nie tylko funkcjonalny stojak, ale również element dekoracyjny, który pięknie komponuje się z świąteczną aranżacją. Eleganckie złote wykończenie sprawia, że stojak staje się częścią dekoracji, a nie tylko praktycznym elementem.'
    }
  };

  return <StandaloneProductPage {...productData} />;
};

export default StojakMalyZloty;