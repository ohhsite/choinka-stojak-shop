// Centralne dane produktów - edytuj tutaj ceny, zdjęcia i podstawowe informacje
// Zmiany tutaj automatycznie aktualizują się we wszystkich komponentach

export interface Product {
  id: string; // slug-based ID
  name: string;
  fullProductName: string;
  
  priceGrossGrosze: number; // cena brutto w groszach
  currency: string;
  
  widthCm: [number, number]; // [szerokość, długość] w cm
  maxTreeHeightM: number;
  maxTrunkDiameterCm: number;
  weightKg: number;
  waterTankLiters: number;
  
  description: string;
  image: string;
  detailsUrl: string;
  
  features: string[];
  specs: {
    podstawa: string;
    waga: string;
    pojemnik: string;
    maxPien: string;
  };
  
  stripeProductId: string | null;
  stripePriceId: string | null;
  
  // Backward compatibility helpers
  get price(): string;
  get width(): string;
  get treeSize(): string;
  get productId(): string;
}

export const PRODUCTS: Product[] = [
  {
    id: "stojak-maly-czarny",
    name: "Metalowy stojak mały – czarny mat",
    fullProductName: "Metalowy stojak na choinkę mały – czarny mat 30×30 cm",
    
    priceGrossGrosze: 29900,
    currency: "PLN",
    
    widthCm: [30, 30],
    maxTreeHeightM: 2,
    maxTrunkDiameterCm: 8,
    weightKg: 5,
    waterTankLiters: 1,
    
    description: "Kompaktowy stojak na choinkę w eleganckim czarnym matowym wykończeniu. Idealny dla mniejszych pomieszczeń i choinek naturalnych do 2 metrów wysokości. Stal malowana proszkowo zapewnia trwałość na lata.",
    image: "/images/Stojak stalowy na żywą choinke.webp",
    detailsUrl: "/produkt/stojak-maly-czarny",
    
    features: ["Podstawa stalowa 30×30cm", "Waga tylko 5kg", "Pojemnik na wodę 1L", "Max średnica pnia 8cm", "Podkładki w zestawie"],
    specs: {
      podstawa: '30×30 cm',
      waga: '5 kg',
      pojemnik: '1 litr',
      maxPien: '8 cm'
    },
    
    stripeProductId: null,
    stripePriceId: null,
    
    get price() { return ` ${(this.priceGrossGrosze / 100).toFixed(0)} zł`; },
    get width() { return ` ${this.widthCm[0]} x ${this.widthCm[1]} cm`; },
    get treeSize() { return ` do ${this.maxTreeHeightM} m`; },
    get productId() { return this.id; }
  },
  {
    id: "stojak-duzy-czarny",
    name: "Metalowy stojak duży – czarny mat",
    fullProductName: "Metalowy stojak na choinkę duży – czarny mat 50×50 cm",
    
    priceGrossGrosze: 39900,
    currency: "PLN",
    
    widthCm: [50, 50],
    maxTreeHeightM: 4,
    maxTrunkDiameterCm: 12,
    weightKg: 6.5,
    waterTankLiters: 1,
    
    description: "Wzmocniony stojak choinkowy dla największych choinek naturalnych. Rozszerzona podstawa 50×50cm i waga 6,5kg gwarantują maksymalną stabilność nawet przy 4-metrowych choinkach z pełną dekoracją.",
    image: "/images/stalowy-stojak-do-duzej-choinki-czarny.webp",
    detailsUrl: "/produkt/stojak-duzy-czarny",
    
    features: ["Wzmocniona podstawa 50×50cm", "Waga 6,5kg", "Pojemnik na wodę 1L", "Max średnica pnia 10cm", "Śruby M8 w zestawie"],
    specs: {
      podstawa: '50×50 cm',
      waga: '6,5 kg',
      pojemnik: '1 litr',
      maxPien: '12 cm'
    },
    
    stripeProductId: null,
    stripePriceId: null,
    
    get price() { return ` ${(this.priceGrossGrosze / 100).toFixed(0)} zł`; },
    get width() { return ` ${this.widthCm[0]} x ${this.widthCm[1]} cm`; },
    get treeSize() { return ` ${this.maxTreeHeightM === 4 ? '2 - 4' : `do ${this.maxTreeHeightM}`} m`; },
    get productId() { return this.id; }
  },
  {
    id: "stojak-maly-zloty",
    name: "Metalowy stojak mały – złoty metaliczny",
    fullProductName: "Metalowy stojak na choinkę mały – złoty metaliczny 30×30 cm",
    
    priceGrossGrosze: 34900,
    currency: "PLN",
    
    widthCm: [30, 30],
    maxTreeHeightM: 2,
    maxTrunkDiameterCm: 8,
    weightKg: 5,
    waterTankLiters: 1,
    
    description: "Elegancki stojak w luksusowym złotym wykończeniu, który dodaje świątecznego blasku Twojemu wnętrzu. Kompaktowy rozmiar idealny do salonów, biur i mniejszych przestrzeni mieszkalnych.",
    image: "/images/zloty stojak maly.webp",
    detailsUrl: "/produkt/stojak-maly-zloty",
    
    features: ["Złote wykończenie premium", "Podstawa 30×30cm", "Waga 5kg", "Pojemnik na wodę 1L", "Antypoślizgowe nóżki"],
    specs: {
      podstawa: '30×30 cm',
      waga: '5 kg',
      pojemnik: '1 litr',
      maxPien: '8 cm'
    },
    
    stripeProductId: null,
    stripePriceId: null,
    
    get price() { return ` ${(this.priceGrossGrosze / 100).toFixed(0)} zł`; },
    get width() { return ` ${this.widthCm[0]} x ${this.widthCm[1]} cm`; },
    get treeSize() { return ` do ${this.maxTreeHeightM} m`; },
    get productId() { return this.id; }
  },
  {
    id: "stojak-duzy-zloty",
    name: "Metalowy stojak duży – złoty metaliczny",
    fullProductName: "Metalowy stojak na choinkę duży – złoty metaliczny 50×50 cm",
    
    priceGrossGrosze: 44900,
    currency: "PLN",
    
    widthCm: [50, 50],
    maxTreeHeightM: 4,
    maxTrunkDiameterCm: 12,
    weightKg: 6.5,
    waterTankLiters: 1,
    
    description: "Prestiżowy duży stojak w złotym wykończeniu dla najwspanialszych choinek. Połączenie funkcjonalności z eleganckim designem - idealny dla reprezentacyjnych pomieszczeń i dużych choinek naturalnych.",
    image: "/images/złoty metalowy stojak na choinkę dużą.webp",
    detailsUrl: "/produkt/stojak-duzy-zloty",
    
    features: ["Luksusowe złote wykończenie", "Podstawa wzmocniona 50×50cm", "Waga 6,5kg", "Pojemnik na wodę 1L", "Profesjonalne śruby M8"],
    specs: {
      podstawa: '50×50 cm',
      waga: '6,5 kg',
      pojemnik: '1 litr',
      maxPien: '12 cm'
    },
    
    stripeProductId: null,
    stripePriceId: null,
    
    get price() { return ` ${(this.priceGrossGrosze / 100).toFixed(0)} zł`; },
    get width() { return ` ${this.widthCm[0]} x ${this.widthCm[1]} cm`; },
    get treeSize() { return ` ${this.maxTreeHeightM === 4 ? '2 - 4' : `do ${this.maxTreeHeightM}`} m`; },
    get productId() { return this.id; }
  }
];

// Helper funkcje do znajdowania produktów
export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find(product => product.id === id);
};

export const getProductByProductId = (productId: string): Product | undefined => {
  return PRODUCTS.find(product => product.id === productId);
};

// Wyciąga cenę jako liczbę (w złotych)
export const getProductPrice = (id: string): string => {
  const product = getProductById(id);
  return product ? (product.priceGrossGrosze / 100).toFixed(0) : '0';
};

// Wyciąga główne zdjęcie produktu
export const getProductImage = (id: string): string => {
  const product = getProductById(id);
  return product ? product.image : '';
};