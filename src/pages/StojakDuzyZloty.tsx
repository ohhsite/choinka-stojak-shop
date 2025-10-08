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
  seoDescription: 'Ekskluzywny duży stojak na choinkę 50x50cm w złotym metalicznym wykończeniu. Waga 6,5kg, pojemnik 1L, max średnica pnia 12cm. ✓ Luksusowy design ✓ 2 lata gwarancji ✓ Wysyłka w 48h',
    seoKeywords: 'duży stojak na choinkę złoty, stojak na dużą choinkę, stojak na choinkę, stojak na choinke, stojak choinkowy, stojak pod choinkę, stojaki pod choinkę, metalowy stojak na choinkę, stojak na choinkę z wodą, stojak do choinki żywej, solidny stojak do choinki, stojaki do choinek, stojak na żywą choinkę, stojak na choinkę z pojemnikiem na wodę, stojak choinkowy 50x50 złoty, podstawki pod choinke, luksusowy stojak choinkowy duży, producent stojaków ekskluzywnych',
    
    // Unique Content for SEO
      uniqueContent: {
        mainTitle: 'Duży złoty metalowy stojak na choinkę 50x50cm – stabilność i luksusowa dekoracja',
        mainDescription: [
          'Prestiżowy złoty stojak na dużą choinkę z pojemnikiem na wodę to idealny wybór do reprezentacyjnych wnętrz. Metalowa podstawa 50x50cm zapewnia maksymalną stabilność nawet przy 4-metrowych choinkach. Pojemnik na wodę 1L utrzymuje świeżość igieł przez cały sezon.',
          'Stojak pod dużą choinkę z szybkim montażem i solidnymi śrubami mocującymi. Antypoślizgowe podkładki chronią podłogę, a konstrukcja z wysokiej jakości stali malowanej proszkowo gwarantuje bezpieczeństwo użytkowania. Produkt polskiego producenta z 2-letnią gwarancją.',
          'Złoty stojak na dużą choinkę to nie tylko praktyczność, ale także ozdoba – luksusowy kolor podkreśla świąteczny klimat. Wybierz sprawdzony stojak choinkowy z pojemnikiem na wodę i ciesz się świętami bez obaw o przewrócenie drzewka.'
        ],
        featuresTitle: 'Najważniejsze zalety dużego złotego metalowego stojaka na choinkę z pojemnikiem na wodę',
        usageTitle: 'Jak zamontować prestiżowy stojak pod dużą choinkę? Instrukcja krok po kroku',
        usageSteps: [
          'Wyjmij duży złoty stojak z opakowania',
          'Załóż nakładki na śruby mocujące',
          'Umieść pień choinki w uchwycie i sprawdź pion',
          'Dokręć śruby równomiernie dla stabilności',
          'Wlej wodę do pojemnika',
          'Sprawdź stabilność przed dekorowaniem choinki'
        ],
        careTitle: 'Pielęgnacja dużego złotego metalowego stojaka na choinkę – praktyczne wskazówki',
        careInstructions: [
          'Czyść stojak wilgotną ściereczką z łagodnym detergentem',
          'Złota stal ukrywa zarysowania i jest łatwa w utrzymaniu',
          'Po sezonie umyj stojak i dokładnie wysusz',
          'Przechowuj w suchym miejscu, by zapobiec korozji',
          'Regularnie sprawdzaj stan śrub',
          'W razie potrzeby użyj złotej farby do retuszu'
        ],
        whyChooseTitle: 'Duży złoty metalowy stojak na choinkę z gwarancją producenta – dlaczego warto?',
        whyChooseDescription: 'Wybierając nasz duży złoty metalowy stojak na choinkę, stawiasz na polskiego producenta, solidną stalową konstrukcję i praktyczny pojemnik na wodę. To produkt, który zapewnia bezpieczeństwo, trwałość i wygodę użytkowania przez wiele sezonów. Sprawdź opinie klientów i zamów duży złoty stojak na choinkę z szybką dostawą.'
      }
  };

  return <StandaloneProductPage {...productData} />;
};

export default StojakDuzyZloty;