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
  seoDescription: 'Luksusowy mały stojak na choinkę 30x30cm w złotym metalicznym wykończeniu. Waga 5kg, pojemnik 1L, max średnica pnia 8cm. ✓ Premium jakość ✓ 2 lata gwarancji ✓ Wysyłka w 48h',
    seoKeywords: 'mały stojak na choinkę złoty, stojak na choinkę, stojak na choinke, stojak choinkowy, stojak pod choinkę, metalowy stojak na choinkę, stojak na choinkę z wodą, stojak do choinki, solidny stojak do choinki, stojak na żywą choinkę, stojak na choinkę z pojemnikiem na wodę, stojak choinkowy 30x30 złoty, podstawki pod choinke, luksusowy stojak na choinkę, producent stojaków premium',
    
    // Unique Content for SEO
      uniqueContent: {
        mainTitle: 'Złoty metalowy stojak na choinkę 30x30cm – elegancja i funkcjonalność w jednym',
        mainDescription: [
          'Elegancki złoty stojak na choinkę z pojemnikiem na wodę to idealny wybór do nowoczesnych i klasycznych wnętrz. Metalowa podstawa 30x30cm zapewnia stabilność dla choinek do 2 metrów wysokości. Pojemnik na wodę 1L utrzymuje świeżość drzewka przez cały sezon.',
          'Stojak pod choinkę z szybkim montażem – kilka minut i gotowe! Antypoślizgowe podkładki chronią podłogę, a śruby mocujące zapewniają pewny chwyt pnia. Produkt polskiego producenta z 2-letnią gwarancją.',
          'Złoty stojak na choinkę to nie tylko praktyczność, ale także ozdoba – luksusowy kolor podkreśla świąteczny klimat. Wybierz sprawdzony stojak choinkowy z pojemnikiem na wodę i ciesz się świętami bez obaw o przewrócenie drzewka.'
        ],
        featuresTitle: 'Najważniejsze zalety złotego metalowego stojaka na choinkę z pojemnikiem na wodę',
        usageTitle: 'Jak zamontować elegancki stojak pod choinkę? Instrukcja krok po kroku',
        usageSteps: [
          'Wyjmij złoty stojak z opakowania',
          'Załóż nakładki na śruby mocujące',
          'Umieść pień choinki w uchwycie i sprawdź pion',
          'Dokręć śruby równomiernie dla stabilności',
          'Wlej wodę do pojemnika',
          'Sprawdź stabilność przed dekorowaniem choinki'
        ],
        careTitle: 'Pielęgnacja złotego metalowego stojaka na choinkę – praktyczne wskazówki',
        careInstructions: [
          'Czyść stojak wilgotną ściereczką z łagodnym detergentem',
          'Złota stal ukrywa zarysowania i jest łatwa w utrzymaniu',
          'Po sezonie umyj stojak i dokładnie wysusz',
          'Przechowuj w suchym miejscu, by zapobiec korozji',
          'Regularnie sprawdzaj stan śrub',
          'W razie potrzeby użyj złotej farby do retuszu'
        ],
        whyChooseTitle: 'Złoty metalowy stojak na choinkę z gwarancją producenta – dlaczego warto?',
        whyChooseDescription: 'Wybierając nasz złoty metalowy stojak na choinkę, stawiasz na polskiego producenta, solidną stalową konstrukcję i praktyczny pojemnik na wodę. To produkt, który zapewnia bezpieczeństwo, trwałość i wygodę użytkowania przez wiele sezonów. Sprawdź opinie klientów i zamów złoty stojak na choinkę z szybką dostawą.'
      }
  };

  return <StandaloneProductPage {...productData} />;
};

export default StojakMalyZloty;