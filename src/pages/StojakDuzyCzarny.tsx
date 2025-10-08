import React from 'react';
import StandaloneProductPage from '../components/StandaloneProductPage';
import { getProductByProductId, getProductPrice } from '../data/products';

const StojakDuzyCzarny = () => {
  const baseProduct = getProductByProductId('stojak-duzy-czarny');
  
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
      'Wszechstronny czarny kolor matowy dopasowany do każdego stylu',
      'Duży stojak na masywne choinki do 3 metrów wysokości',
      'Stalowa podstawa 40×40cm dla maksymalnej stabilności dużych drzewek',
      'Wzmocniona konstrukcja 8kg z wysokiej jakości stali malowanej proszkowo',
      'Pojemnik na wodę 2L z efektywnym systemem dolewania dla większych choinek',
      'Maksymalna średnica pnia choinki do 12cm - dla standardowych dużych drzewek',
      'Wzmocnione śruby mocujące z podkładkami stabilizującymi w komplecie',
      'Podwójne antypoślizgowe podkładki pod nogi dla bezpieczeństwa'
    ],
    description: 'Duży metalowy stojak na choinkę w klasycznym czarnym wykończeniu to profesjonalne rozwiązanie dla większych choinek. Uniwersalny czarny kolor matowy pasuje do każdego wnętrza, a wzmocniona stalowa konstrukcja gwarantuje bezpieczeństwo nawet największych drzewek.',
    
    // SEO Meta Tags
    seoTitle: 'Duży Czarny Stojak na Choinkę 50x50cm | Wzmocniona Konstrukcja | Producent',
    seoDescription: 'Profesjonalny duży stojak na choinkę 50x50cm w czarnym matowym wykończeniu. Waga 6,5kg, pojemnik 1L, max średnica pnia 12cm. ✓ Wzmocniona stal ✓ 2 lata gwarancji ✓ Wysyłka w 48h',
    seoKeywords: 'duży stojak na choinkę czarny, stojak na dużą choinkę, stojak na choinkę, stojak na choinke, stojak choinkowy, stojak pod choinkę, stojaki pod choinkę, metalowy stojak na choinkę, stojak na choinkę z wodą, stojak do choinki żywej, solidny stojak do choinki, stojaki do choinek, stojak na żywą choinkę, stojak na choinkę z pojemnikiem na wodę, stojak choinkowy 50x50, podstawki pod choinke, producent stojaków profesjonalnych',
    
    // Unique Content for SEO
    uniqueContent: {
      mainTitle: 'Stojak na dużą choinkę metalowy czarny 50x50cm – stabilność i bezpieczeństwo dla Twojej dekoracji',
      mainDescription: [
        'Wzmocniony metalowy stojak na choinkę z pojemnikiem na wodę to idealny wybór dla dużych, żywych drzewek. Stalowa podstawa 50x50cm zapewnia maksymalną stabilność nawet przy 4-metrowych choinkach. Pojemnik na wodę 1L utrzymuje świeżość igieł przez cały sezon.',
        'Stojak pod dużą choinkę z szybkim montażem i solidnymi śrubami mocującymi. Antypoślizgowe podkładki chronią podłogę, a konstrukcja z wysokiej jakości stali malowanej proszkowo gwarantuje bezpieczeństwo użytkowania. Produkt polskiego producenta z 2-letnią gwarancją.',
        'Stojak stalowy na dużą choinkę to nie tylko praktyczność, ale także estetyka – matowy czarny kolor pasuje do każdego wnętrza. Wybierz sprawdzony stojak choinkowy z pojemnikiem na wodę i ciesz się świętami bez obaw o przewrócenie drzewka.'
      ],
      featuresTitle: 'Najważniejsze zalety dużego metalowego stojaka na choinkę z pojemnikiem na wodę',
      usageTitle: 'Jak zamontować solidny stojak pod dużą choinkę? Instrukcja krok po kroku',
      usageSteps: [
        'Wyjmij wzmocniony stojak z opakowania',
        'Załóż nakładki na śruby mocujące',
        'Umieść pień choinki w uchwycie i sprawdź pion',
        'Dokręć śruby równomiernie dla stabilności',
        'Wlej wodę do pojemnika',
        'Sprawdź stabilność przed dekorowaniem choinki'
      ],
      careTitle: 'Pielęgnacja dużego metalowego stojaka na choinkę – praktyczne wskazówki',
      careInstructions: [
        'Czyść stojak wilgotną ściereczką z łagodnym detergentem',
        'Matowa stal ukrywa zarysowania i jest łatwa w utrzymaniu',
        'Po sezonie umyj stojak i dokładnie wysusz',
        'Przechowuj w suchym miejscu, by zapobiec korozji',
        'Regularnie sprawdzaj stan śrub',
        'W razie potrzeby użyj czarnej farby do retuszu'
      ],
      whyChooseTitle: 'Duży metalowy stojak na choinkę z gwarancją producenta – dlaczego warto?',
      whyChooseDescription: 'Wybierając nasz duży metalowy stojak na choinkę, stawiasz na polskiego producenta, solidną stalową konstrukcję i praktyczny pojemnik na wodę. To produkt, który zapewnia bezpieczeństwo, trwałość i wygodę użytkowania przez wiele sezonów. Sprawdź opinie klientów i zamów stojak na dużą choinkę z szybką dostawą.'
    }
  };

  return <StandaloneProductPage {...productData} />;
};

export default StojakDuzyCzarny;