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
    seoDescription: 'Profesjonalny duży stojak na choinkę 50x50cm w czarnym matowym wykończeniu. Waga 6,5kg, pojemnik 1L, max średnica pnia 12cm. ✓ Wzmocniona stal ✓ 2 lata gwarancji ✓ Dostawa 24h',
    seoKeywords: 'duży stojak na choinkę czarny, stojak na dużą choinkę, stojak na choinkę, stojak na choinke, stojak choinkowy, stojak pod choinkę, stojaki pod choinkę, metalowy stojak na choinkę, stojak na choinkę z wodą, stojak do choinki żywej, solidny stojak do choinki, stojaki do choinek, stojak na żywą choinkę, stojak na choinkę z pojemnikiem na wodę, stojak choinkowy 50x50, podstawki pod choinke, producent stojaków profesjonalnych',
    
    // Unique Content for SEO
    uniqueContent: {
      mainTitle: 'Dlaczego wybrać duży czarny stojak na choinkę w profesjonalnej jakości?',
      mainDescription: [
        'Duży czarny stojak na choinkę to doskonałe połączenie profesjonalnej jakości z uniwersalnym designem. Klasyczne czarne wykończenie matowe zostało zaprojektowane z myślą o maksymalnej wszechstronności - doskonale komponuje się z każdym stylem wnętrza i kolorem dekoracji świątecznych. Podstawa o wymiarach 40×40cm zapewnia solidne oparcie nawet dla największych choinek domowych.',
        'Matowa czarna powierzchnia ma szereg praktycznych zalet - nie odbija światła choinkowych lampek, dzięki czemu nie konkuruje z dekoracjami, a jednocześnie ukrywa drobne ślady użytkowania i jest łatwa w czyszczeniu. Ta cecha sprawia, że stojak przez lata zachowuje swój profesjonalny wygląd bez konieczności specjalnej pielęgnacji.',
        'Model ten został wzmocniony do wagi 8 kilogramów, co czyni go idealnym wyborem dla choinek o wysokości do 3 metrów z pniem o średnicy do 12 centymetrów. Większy pojemnik na wodę o pojemności 2 litrów został zaprojektowany z myślą o zwiększonych potrzebach wodnych większych drzewek, co znacznie ułatwia utrzymanie ich w świeżym stanie przez cały sezon.'
      ],
      
      featuresTitle: 'Profesjonalne cechy dużego czarnego stojaka na choinkę',
      
      usageTitle: 'Instrukcja montażu profesjonalnego dużego czarnego stojaka',
      usageSteps: [
        'Wyjmij stojak z folii ochronnej',
        'Nakręć dołączone do zestawu nakładki na śruby',
        'Ostrożnie umieść pień dużej choinki w centralnym uchwycie',
        'Dokręć wzmocnione śruby mocujące stopniowo i równomiernie',
        'Wlej do misy wodę',
        'Sprawdź stabilność i pionowość całej konstrukcji'
      ],
      
      careTitle: 'Profesjonalna pielęgnacja dużego czarnego stojaka na choinkę',
      careInstructions: [
        'Używaj standardowych środków czyszczących bezpiecznych dla malowanych powierzchni',
        'Matowa powierzchnia jest odporna na odciski i łatwa w utrzymaniu',
        'Po sezonie wykonaj gruntowne czyszczenie i sprawdź stan wszystkich elementów',
        'Przechowuj w suchym miejscu zabezpieczając przed wilgocią',
        'Regularnie kontroluj stan śrub mocujących i w razie potrzeby dokręcaj',
        'Sprawdzaj stan antypoślizgowych podkładek i wymieniaj gdy zajdzie potrzeba',
        'W przypadku zarysowań można użyć czarnej farby do retuszu powierzchni'
      ],
      
      whyChooseTitle: 'Dlaczego nasz duży czarny stojak to wybór profesjonalistów?',
      whyChooseDescription: 'Jako uznany polski producent stojaków na choinkę oferujemy produkt, który zdobył zaufanie zarówno klientów indywidualnych jak i profesjonalnych dekoratorów wnętrz. Nasz duży czarny stojak łączy w sobie sprawdzoną konstrukcję z uniwersalnym designem, co czyni go wyborem numer jeden dla osób ceniących niezawodność i praktyczność. Profesjonalna jakość wykonania oznacza, że produkt będzie służył przez dziesiątki lat, a klasyczne czarne wykończenie nigdy nie wyjdzie z mody. Wybierając ten model, inwestują Państwo w sprawdzone rozwiązanie, które sprawdzi się w każdych warunkach i z każdą choinką. To stojak, na którym mogą Państwo polegać przez wiele sezonów świątecznych.'
    }
  };

  return <StandaloneProductPage {...productData} />;
};

export default StojakDuzyCzarny;