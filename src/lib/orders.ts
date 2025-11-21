// Klient Supabase - gotowy do podpięcia gdy będą klucze API

import { Order, OrderItem, OrderFilters, OrderStats } from '../types/orders';

// Mock client - zwraca hardcoded dane dopóki nie skonfigurujemy Supabase
const MOCK_ORDERS: Order[] = [
  {
    id: '1',
    stripePaymentIntentId: 'pi_mock_123',
    stripeCustomerEmail: 'jan.kowalski@example.com',
    customerName: 'Jan Kowalski',
    customerPhone: '+48 604 821 125',
    customerEmail: 'jan.kowalski@example.com',
    shippingAddress: {
      street: 'ul. Testowa 123',
      city: 'Warszawa',
      postalCode: '00-001',
      country: 'Polska'
    },
    totalAmount: 45800, // 458 zł
    currency: 'PLN',
    status: 'paid',
    paymentStatus: 'paid',
    shippingMethod: 'Kurier DPD',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    paidAt: new Date().toISOString(),
    items: [
      {
        id: '1',
        orderId: '1',
        productId: 'stojak-maly-czarny',
        productName: 'Metalowy stojak mały – czarny mat',
        quantity: 2,
        unitPrice: 22900,
        totalPrice: 45800,
        createdAt: new Date().toISOString()
      }
    ]
  },
  {
    id: '2',
    stripePaymentIntentId: 'pi_mock_456',
    customerName: 'Anna Nowak',
    customerEmail: 'anna.nowak@example.com',
    customerPhone: '+48 500 123 456',
    shippingAddress: {
      street: 'ul. Kwiatowa 45',
      city: 'Kraków',
      postalCode: '30-001',
      country: 'Polska',
      company: 'Firma ABC Sp. z o.o.'
    },
    totalAmount: 39900,
    currency: 'PLN',
    status: 'pending',
    paymentStatus: 'unpaid',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 3600000).toISOString(),
    items: [
      {
        id: '2',
        orderId: '2',
        productId: 'stojak-duzy-czarny',
        productName: 'Metalowy stojak duży – czarny mat',
        quantity: 1,
        unitPrice: 39900,
        totalPrice: 39900,
        createdAt: new Date(Date.now() - 3600000).toISOString()
      }
    ]
  }
];

// Helper do sprawdzenia czy Supabase jest skonfigurowany
export const isSupabaseConfigured = (): boolean => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return Boolean(url && key && url !== '' && key !== '');
};

// API Functions - teraz zwracają mock dane, później będą łączyć się z Supabase

export const fetchOrders = async (filters?: OrderFilters): Promise<Order[]> => {
  // Symulacja opóźnienia API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filtered = [...MOCK_ORDERS];
  
  if (filters?.status) {
    filtered = filtered.filter(o => o.status === filters.status);
  }
  
  if (filters?.paymentStatus) {
    filtered = filtered.filter(o => o.paymentStatus === filters.paymentStatus);
  }
  
  if (filters?.search) {
    const search = filters.search.toLowerCase();
    filtered = filtered.filter(o => 
      o.customerName.toLowerCase().includes(search) ||
      o.customerEmail.toLowerCase().includes(search) ||
      o.id.toLowerCase().includes(search)
    );
  }
  
  return filtered;
};

export const fetchOrderById = async (id: string): Promise<Order | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_ORDERS.find(o => o.id === id) || null;
};

export const updateOrderStatus = async (
  orderId: string, 
  status: Order['status']
): Promise<Order> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const order = MOCK_ORDERS.find(o => o.id === orderId);
  if (!order) throw new Error('Order not found');
  
  order.status = status;
  order.updatedAt = new Date().toISOString();
  
  if (status === 'shipped' && !order.shippedAt) {
    order.shippedAt = new Date().toISOString();
  }
  
  return order;
};

export const updateTrackingNumber = async (
  orderId: string,
  trackingNumber: string
): Promise<Order> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const order = MOCK_ORDERS.find(o => o.id === orderId);
  if (!order) throw new Error('Order not found');
  
  order.trackingNumber = trackingNumber;
  order.updatedAt = new Date().toISOString();
  
  return order;
};

export const updateAdminNotes = async (
  orderId: string,
  notes: string
): Promise<Order> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const order = MOCK_ORDERS.find(o => o.id === orderId);
  if (!order) throw new Error('Order not found');
  
  order.adminNotes = notes;
  order.updatedAt = new Date().toISOString();
  
  return order;
};

export const fetchOrderStats = async (): Promise<OrderStats> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const orders = MOCK_ORDERS;
  
  return {
    totalOrders: orders.length,
    totalRevenue: orders
      .filter(o => o.paymentStatus === 'paid')
      .reduce((sum, o) => sum + o.totalAmount, 0),
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    shippedOrders: orders.filter(o => o.status === 'shipped').length,
    completedOrders: orders.filter(o => o.status === 'delivered').length
  };
};

// Export mock data dla development
export { MOCK_ORDERS };
