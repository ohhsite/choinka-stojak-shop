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
    seoDescription: 'Profesjonalny mały stojak na choinkę 30x30cm w czarnym matowym wykończeniu. Waga 5kg, pojemnik 1L, max średnica pnia 8cm. ✓ Producent ✓ 2 lata gwarancji ✓ Dostawa 24h',
    seoKeywords: 'mały stojak na choinkę czarny, stojak na choinkę, stojak na choinke, stojak choinkowy, stojak pod choinkę, metalowy stojak na choinkę, stojak na choinkę z wodą, stojak do choinki, solidny stojak do choinki, stojak na żywą choinkę, stojak na choinkę z pojemnikiem na wodę, stojak choinkowy 30x30, stojak stalowy na choinkę, podstawki pod choinke, producent stojaków',
    
    // Unique Content for SEO
    uniqueContent: {
      mainTitle: 'Dlaczego wybrać mały czarny stojak na choinkę w klasycznym stylu?',
      mainDescription: [
        'Mały czarny stojak na choinkę to kwintesencja praktyczności i uniwersalnego designu. Klasyczne czarne wykończenie matowe zostało wybrane z myślą o maksymalnej wszechstronności - pasuje do każdego stylu wnętrza, od nowoczesnego minimalizmu po tradycyjne aranżacje. Podstawa o wymiarach 30×30cm została zaprojektowana z myślą o optymalnym wykorzystaniu przestrzeni w mniejszych pomieszczeniach.',
        'Matowe czarne wykończenie nie tylko prezentuje się elegancko, ale również jest bardzo praktyczne - nie odbija światła, dzięki czemu nie odwraca uwagi od głównej atrakcji jaką jest choinka. Powierzchnia matowa jest również mniej podatna na widoczne odciski palców i drobne zarysowania, co czyni stojak łatwym w utrzymaniu.',
        'Ten model oferuje doskonały stosunek jakości do ceny, zachowując wszystkie kluczowe cechy funkcjonalne przy ekonomicznej cenie. Waga 5 kilogramów zapewnia odpowiednią stabilność dla choinek do 2 metrów wysokości, a uchwyt na pnie do 8 centymetrów średnicy pasuje do większości standardowych drzewek naturalnych dostępnych w sprzedaży.'
      ],
      
      featuresTitle: 'Praktyczne zalety czarnego stojaka na choinkę w klasycznym stylu',
      
      usageTitle: 'Prosta instrukcja montażu klasycznego czarnego stojaka',
      usageSteps: [
        'Wyjmij stojak z folii ochronnej',
        'Nakręć dołączone do zestawu nakładki na śruby',
        'Umieść pień choinki w centralnym uchwycie sprawdzając pionowość drzewka',
        'Dokręć śruby mocujące równomiernie aby zapewnić stabilny chwyt',
        'Wlej do misy wodę',
        'Sprawdź końcową stabilność całej konstrukcji przed dekorowaniem'
      ],
      
      careTitle: 'Łatwa pielęgnacja czarnego matowego stojaka na choinkę',
      careInstructions: [
        'Czyszczenie wykonuj wilgotną ściereczką używając łagodnych detergentów',
        'Matowa powierzchnia ukrywa drobne zarysowania i jest łatwa w utrzymaniu',
        'Po sezonie umyj stojak ciepłą wodą z mydłem i dokładnie wysusz',
        'Przechowuj w suchym miejscu zabezpieczając przed korozją',
        'Regularnie sprawdzaj stan śrub i w razie potrzeby dokręcaj',
        'W przypadku zarysowań można użyć czarnej farby w sprayu do retuszu'
      ],
      
      whyChooseTitle: 'Dlaczego nasz czarny stojak to niezawodny wybór?',
      whyChooseDescription: 'Jako doświadczony polski producent stojaków na choinkę stawiamy na sprawdzone rozwiązania, które łączą niezawodność z przystępną ceną. Nasz mały czarny stojak to produkt stworzony z myślą o klientach ceniących praktyczność i uniwersalność. Klasyczne czarne wykończenie oznacza, że stojak będzie pasował do Państwa wnętrza niezależnie od zmian w aranżacji przez lata. Wybierając ten model, otrzymują Państwo sprawdzony w działaniu produkt, który będzie służył przez wiele sezonów świątecznych. Ekonomiczna cena nie oznacza kompromisów w kwestii bezpieczeństwa - używamy tej samej wysokiej jakości stali co w droższych modelach.'
    }
  };

  return <StandaloneProductPage {...productData} />;
};

export default StojakMalyCzarny;