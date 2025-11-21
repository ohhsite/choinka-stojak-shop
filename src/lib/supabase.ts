import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Typy dla bazy danych
export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  pricePerItemGrosze: number;
  totalPriceGrosze: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  updatedAt: string;
  
  // Status zamówienia
  status: 'pending' | 'processing' | 'paid' | 'shipped' | 'delivered' | 'cancelled' | 'failed';
  
  // Dane klienta
  customerEmail: string;
  customerPhone: string;
  customerName: string;
  
  // Adres dostawy
  shippingAddress: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  
  // Firma (opcjonalnie)
  isCompany: boolean;
  companyName?: string;
  nip?: string;
  
  // Produkty
  items: OrderItem[];
  
  // Ceny
  subtotalGrosze: number; // Suma produktów
  shippingCostGrosze: number; // Koszt dostawy
  totalGrosze: number; // Całkowita kwota
  
  // Stripe
  stripePaymentIntentId?: string;
  paidAt?: string;
  
  // Notatki
  notes?: string;
}

// Funkcje pomocnicze do pracy z zamówieniami

export async function createOrder(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) {
  const { data, error } = await supabase
    .from('orders')
    .insert([orderData])
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function getOrderById(orderId: string) {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', orderId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getAllOrders() {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('createdAt', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function updateOrderStatus(orderId: string, status: Order['status']) {
  const { data, error } = await supabase
    .from('orders')
    .update({ status, updatedAt: new Date().toISOString() })
    .eq('id', orderId)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function getOrdersByStatus(status: Order['status']) {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('status', status)
    .order('createdAt', { ascending: false });
  
  if (error) throw error;
  return data;
}
