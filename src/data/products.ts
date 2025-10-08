// Centralne dane produktów - edytuj tutaj ceny, zdjęcia i podstawowe informacje
// Zmiany tutaj automatycznie aktualizują się we wszystkich komponentach

export interface Product {
  id: number;
  name: string;
  width: string;
  treeSize: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  detailsUrl: string;
  productId: string; // ID dla stron produktowych
  fullProductName: string; // Pełna nazwa dla stron SEO
  specs: {
    podstawa: string;
    waga: string;
    pojemnik: string;
    maxPien: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Metalowy Stojak Mały - Czarny Matowy",
    fullProductName: "Metalowy Stojak na Choinkę Mały - Czarny Matowy 30x30cm",
    width: " 30 x 30 cm",
    treeSize: " do 2 m",
    description: "Kompaktowy stojak na choinkę w eleganckim czarnym matowym wykończeniu. Idealny dla mniejszych pomieszczeń i choinek naturalnych do 2 metrów wysokości. Stal malowana proszkowo zapewnia trwałość na lata.",
    price: " 229 zł",
    image: "/images/Stojak stalowy na żywą choinke.png",
    features: ["Podstawa stalowa 30×30cm", "Waga tylko 5kg", "Pojemnik na wodę 1L", "Max średnica pnia 8cm", "Podkładki w zestawie"],
    specs: {
      podstawa: '30×30 cm',
      waga: '5 kg',
      pojemnik: '1 litr',
      maxPien: '8 cm'
    },
    detailsUrl: "/produkt/stojak-maly-czarny",
    productId: "stojak-maly-czarny"
  },
  {
    id: 2,
    name: "Metalowy Stojak Duży - Czarny Matowy",
    fullProductName: "Metalowy Stojak na Choinkę Duży - Czarny Matowy 50x50cm",
    width: " 50 x 50 cm",
    treeSize: " 2 - 4 m",
    description: "Wzmocniony stojak choinkowy dla największych choinek naturalnych. Rozszerzona podstawa 50×50cm i waga 6,5kg gwarantują maksymalną stabilność nawet przy 4-metrowych choinkach z pełną dekoracją.",
    price: " 399 zł",
    image: "/images/stalowy-stojak-do-duzej-choinki-czarny.png",
    features: ["Wzmocniona podstawa 50×50cm", "Waga 6,5kg", "Pojemnik na wodę 1L", "Max średnica pnia 10cm", "Śruby M8 w zestawie"],
    specs: {
      podstawa: '50×50 cm',
      waga: '6,5 kg',
      pojemnik: '1 litr',
      maxPien: '12 cm'
    },
    detailsUrl: "/produkt/stojak-duzy-czarny",
    productId: "stojak-duzy-czarny"
  },
  {
    id: 3,
    name: "Metalowy Stojak Mały - Złoty Metaliczny",
    fullProductName: "Metalowy Stojak na Choinkę Mały - Złoty Metaliczny 30x30cm",
    width: " 30 x 30 cm",
    treeSize: " do 2 m",
    description: "Elegancki stojak w luksusowym złotym wykończeniu, który dodaje świątecznego blasku Twojemu wnętrzu. Kompaktowy rozmiar idealny do salonów, biur i mniejszych przestrzeni mieszkalnych.",
    price: " 249 zł",
    image: "/images/zloty stojak maly.png",
    features: ["Złote wykończenie premium", "Podstawa 30×30cm", "Waga 5kg", "Pojemnik na wodę 1L", "Antypoślizgowe nóżki"],
    specs: {
      podstawa: '30×30 cm',
      waga: '5 kg',
      pojemnik: '1 litr',
      maxPien: '8 cm'
    },
    detailsUrl: "/produkt/stojak-maly-zloty",
    productId: "stojak-maly-zloty"
  },
  {
    id: 4,
    name: "Metalowy Stojak Duży - Złoty Metaliczny",
    fullProductName: "Metalowy Stojak na Choinkę Duży - Złoty Metaliczny 50x50cm",
    width: " 50 x 50 cm",
    treeSize: " 2 - 4 m",
    description: "Prestiżowy duży stojak w złotym wykończeniu dla najwspanialszych choinek. Połączenie funkcjonalności z eleganckim designem - idealny dla reprezentacyjnych pomieszczeń i dużych choinek naturalnych.",
    price: " 429 zł",
    image: "/images/złoty metalowy stojak na choinkę dużą.png",
    features: ["Luksusowe złote wykończenie", "Podstawa wzmocniona 50×50cm", "Waga 6,5kg", "Pojemnik na wodę 1L", "Profesjonalne śruby M8"],
    specs: {
      podstawa: '50×50 cm',
      waga: '6,5 kg',
      pojemnik: '1 litr',
      maxPien: '12 cm'
    },
    detailsUrl: "/produkt/stojak-duzy-zloty",
    productId: "stojak-duzy-zloty"
  }
];

// Helper funkcje do znajdowania produktów
export const getProductById = (id: number): Product | undefined => {
  return PRODUCTS.find(product => product.id === id);
};

export const getProductByProductId = (productId: string): Product | undefined => {
  return PRODUCTS.find(product => product.productId === productId);
};

// Wyciąga cenę jako liczbę (bez "zł")
export const getProductPrice = (id: number): string => {
  const product = getProductById(id);
  return product ? product.price.replace(' zł', '') : '0';
};

// Wyciąga główne zdjęcie produktu
export const getProductImage = (id: number): string => {
  const product = getProductById(id);
  return product ? product.image : '';
};