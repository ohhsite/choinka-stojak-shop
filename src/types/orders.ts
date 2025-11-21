// Typy dla systemu zamówień - przygotowane pod Supabase i Stripe

export interface OrderAddress {
  street: string;
  city: string;
  postalCode: string;
  country: string;
  company?: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number; // w groszach
  totalPrice: number; // w groszach
  createdAt: string;
}

export type OrderStatus = 'pending' | 'processing' | 'paid' | 'shipped' | 'delivered' | 'cancelled' | 'failed';
export type PaymentStatus = 'unpaid' | 'paid' | 'refunded' | 'failed';

export interface Order {
  id: string;
  
  // Stripe
  stripePaymentIntentId: string;
  stripeCustomerEmail?: string;
  
  // Dane klienta
  customerName: string;
  customerPhone?: string;
  customerEmail: string;
  
  // Adresy
  shippingAddress: OrderAddress;
  billingAddress?: OrderAddress;
  
  // Finansowe
  totalAmount: number; // w groszach
  currency: string;
  
  // Statusy
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  
  // Wysyłka
  shippingMethod?: string;
  trackingNumber?: string;
  
  // Notatki
  notes?: string;
  adminNotes?: string;
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
  paidAt?: string;
  shippedAt?: string;
  
  // Relacje
  items: OrderItem[];
}

export interface OrderFilters {
  status?: OrderStatus;
  paymentStatus?: PaymentStatus;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
}

export interface OrderStats {
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
  shippedOrders: number;
  completedOrders: number;
}

export const ORDER_STATUS_MAP: Record<OrderStatus, string> = {
  pending: 'Oczekujące',
  processing: 'W trakcie',
  paid: 'Opłacone',
  shipped: 'Wysłane',
  delivered: 'Dostarczone',
  cancelled: 'Anulowane',
  failed: 'Nieudane',
};

export const ORDER_STATUS_LABELS = ORDER_STATUS_MAP;

export const PAYMENT_STATUS_LABELS: Record<PaymentStatus, string> = {
  unpaid: 'Nieopłacone',
  paid: 'Opłacone',
  refunded: 'Zwrócone',
  failed: 'Błąd płatności'
};
