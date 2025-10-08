import React from 'react';
import StandaloneProductPage from '../components/StandaloneProductPage';
import { getProductByProductId, getProductPrice } from '../data/products';

const StojakMalyCzarny = () => {
  const baseProduct = getProductByProductId('stojak-maly-czarny');
  
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
      'Klasyczny czarny kolor matowy pasujący do każdego wnętrza',
      'Kompaktowy stojak na choinkę do 2 metrów wysokości',
      'Stalowa podstawa 30×30cm idealna do mniejszych pomieszczeń',
      'Ekonomiczna konstrukcja 5kg z wysokiej jakości stali malowanej proszkowo',
      'Pojemnik na wodę 1L z prostym systemem dolewania',
      'Maksymalna średnica pnia choinki do 8cm - standardowe rozmiary',
      'Podstawowe śruby mocujące z podkładkami w komplecie',
      'Antypoślizgowe podkładki pod nogi chroniące podłogę'
    ],
    description: 'Mały metalowy stojak na choinkę w klasycznym czarnym wykończeniu to doskonałe rozwiązanie dla osób szukających niezawodnego i ekonomicznego produktu. Uniwersalny czarny kolor pasuje do każdego stylu wnętrza, a solidna konstrukcja zapewnia bezpieczeństwo użytkowania.',
    
    // SEO Meta Tags
    seoTitle: 'Mały Czarny Stojak na Choinkę 30x30cm | Stal Malowana | Producent',
  seoDescription: 'Profesjonalny mały stojak na choinkę 30x30cm w czarnym matowym wykończeniu. Waga 5kg, pojemnik 1L, max średnica pnia 8cm. ✓ Producent ✓ 2 lata gwarancji ✓ Wysyłka w 48h',
    seoKeywords: 'mały stojak na choinkę czarny, stojak na choinkę, stojak na choinke, stojak choinkowy, stojak pod choinkę, metalowy stojak na choinkę, stojak na choinkę z wodą, stojak do choinki, solidny stojak do choinki, stojak na żywą choinkę, stojak na choinkę z pojemnikiem na wodę, stojak choinkowy 30x30, stojak stalowy na choinkę, podstawki pod choinke, producent stojaków',
    
    // Unique Content for SEO
    uniqueContent: {
        mainTitle: 'Stojak na choinkę metalowy czarny 30x30cm – solidny wybór do żywej choinki',
        mainDescription: [
          'Metalowy stojak na choinkę z pojemnikiem na wodę to idealne rozwiązanie dla osób szukających trwałości i bezpieczeństwa. Stalowa konstrukcja malowana proszkowo gwarantuje stabilność nawet dla choinek do 2 metrów wysokości. Pojemnik na wodę 1L pozwala utrzymać świeżość drzewka przez cały sezon świąteczny.',
          'Stojak pod choinkę z szybkim montażem – wystarczy kilka minut, by cieszyć się stabilną i bezpieczną dekoracją. Antypoślizgowe podkładki chronią podłogę, a śruby mocujące zapewniają pewny chwyt pnia. Produkt polskiego producenta z 2-letnią gwarancją.',
          'Stojak stalowy na choinkę to nie tylko praktyczność, ale także estetyka – matowy czarny kolor pasuje do każdego wnętrza. Wybierz sprawdzony stojak choinkowy z pojemnikiem na wodę i ciesz się świętami bez obaw o przewrócenie drzewka.'
        ],
      
        featuresTitle: 'Najważniejsze zalety metalowego stojaka na choinkę z pojemnikiem na wodę',
      
        usageTitle: 'Jak zamontować solidny stojak pod choinkę? Instrukcja krok po kroku',
        usageSteps: [
          'Wyjmij metalowy stojak z opakowania',
          'Załóż nakładki na śruby mocujące',
          'Umieść pień choinki w uchwycie i sprawdź pion',
          'Dokręć śruby równomiernie dla stabilności',
          'Wlej wodę do pojemnika',
          'Sprawdź stabilność przed dekorowaniem choinki'
        ],
      
        careTitle: 'Pielęgnacja metalowego stojaka na choinkę – praktyczne wskazówki',
        careInstructions: [
          'Czyść stojak wilgotną ściereczką z łagodnym detergentem',
          'Matowa stal ukrywa zarysowania i jest łatwa w utrzymaniu',
          'Po sezonie umyj stojak i dokładnie wysusz',
          'Przechowuj w suchym miejscu, by zapobiec korozji',
          'Regularnie sprawdzaj stan śrub',
          'W razie potrzeby użyj czarnej farby do retuszu'
        ],
      
        whyChooseTitle: 'Metalowy stojak na choinkę z gwarancją producenta – dlaczego warto?',
        whyChooseDescription: 'Wybierając nasz metalowy stojak na choinkę, stawiasz na polskiego producenta, solidną stalową konstrukcję i praktyczny pojemnik na wodę. To produkt, który zapewnia bezpieczeństwo, trwałość i wygodę użytkowania przez wiele sezonów. Sprawdź opinie klientów i zamów stojak na choinkę z szybką dostawą.'
      }
  };

  return <StandaloneProductPage {...productData} />;
};

export default StojakMalyCzarny;