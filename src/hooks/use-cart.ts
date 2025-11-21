import { create } from 'zustand';
import { Cart, CartItem, getCart, addToCart as addToCartUtil, removeFromCart as removeFromCartUtil, updateCartItemQuantity as updateCartItemQuantityUtil, clearCart as clearCartUtil } from '../lib/cart';
import { Product } from '../data/products';

interface CartStore extends Cart {
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  loadCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  totalItems: 0,
  totalPrice: 0,

  loadCart: () => {
    const cart = getCart();
    set(cart);
  },

  addToCart: (product: Product, quantity: number = 1) => {
    const cart = addToCartUtil(product, quantity);
    set(cart);
  },

  removeFromCart: (productId: string) => {
    const cart = removeFromCartUtil(productId);
    set(cart);
  },

  updateQuantity: (productId: string, quantity: number) => {
    const cart = updateCartItemQuantityUtil(productId, quantity);
    set(cart);
  },

  clearCart: () => {
    const cart = clearCartUtil();
    set(cart);
  },
}));
