// System koszyka - zarządzanie produktami w koszyku
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number; // w groszach
}

const CART_STORAGE_KEY = 'choinka-cart';

// Pobierz koszyk z localStorage
export const getCart = (): Cart => {
  if (typeof window === 'undefined') {
    return { items: [], totalItems: 0, totalPrice: 0 };
  }

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) {
      return { items: [], totalItems: 0, totalPrice: 0 };
    }

    const cart = JSON.parse(stored);
    return calculateCartTotals(cart.items || []);
  } catch (error) {
    console.error('Error reading cart:', error);
    return { items: [], totalItems: 0, totalPrice: 0 };
  }
};

// Zapisz koszyk do localStorage
export const saveCart = (items: CartItem[]): Cart => {
  if (typeof window === 'undefined') {
    return { items: [], totalItems: 0, totalPrice: 0 };
  }

  const cart = calculateCartTotals(items);
  
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items }));
  } catch (error) {
    console.error('Error saving cart:', error);
  }

  return cart;
};

// Oblicz sumy w koszyku
const calculateCartTotals = (items: CartItem[]): Cart => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.priceGrossGrosze * item.quantity,
    0
  );

  return { items, totalItems, totalPrice };
};

// Dodaj produkt do koszyka
export const addToCart = (product: Product, quantity: number = 1): Cart => {
  const cart = getCart();
  const existingItemIndex = cart.items.findIndex(
    (item) => item.product.id === product.id
  );

  let newItems: CartItem[];

  if (existingItemIndex > -1) {
    // Produkt już jest w koszyku - zwiększ ilość
    newItems = cart.items.map((item, index) =>
      index === existingItemIndex
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    // Nowy produkt - dodaj do koszyka
    newItems = [...cart.items, { product, quantity }];
  }

  return saveCart(newItems);
};

// Usuń produkt z koszyka
export const removeFromCart = (productId: string): Cart => {
  const cart = getCart();
  const newItems = cart.items.filter((item) => item.product.id !== productId);
  return saveCart(newItems);
};

// Aktualizuj ilość produktu
export const updateCartItemQuantity = (productId: string, quantity: number): Cart => {
  const cart = getCart();
  
  if (quantity <= 0) {
    return removeFromCart(productId);
  }

  const newItems = cart.items.map((item) =>
    item.product.id === productId ? { ...item, quantity } : item
  );

  return saveCart(newItems);
};

// Wyczyść cały koszyk
export const clearCart = (): Cart => {
  return saveCart([]);
};

// Formatuj cenę do wyświetlenia
export const formatPrice = (priceInGrosze: number): string => {
  return `${(priceInGrosze / 100).toFixed(2)} zł`;
};
