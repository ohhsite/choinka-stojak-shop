import { useState, useEffect } from 'react';
import { Order, OrderFilters, OrderStats } from '../types/orders';
import { 
  fetchOrders, 
  fetchOrderById, 
  fetchOrderStats,
  updateOrderStatus,
  updateTrackingNumber,
  updateAdminNotes 
} from '../lib/orders';

export const useOrders = (filters?: OrderFilters) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadOrders = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchOrders(filters);
      setOrders(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Błąd ładowania zamówień');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, [JSON.stringify(filters)]);

  return { orders, loading, error, refetch: loadOrders };
};

export const useOrder = (id: string) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadOrder = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchOrderById(id);
      setOrder(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Błąd ładowania zamówienia');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) loadOrder();
  }, [id]);

  const updateStatus = async (status: Order['status']) => {
    if (!order) return;
    try {
      const updated = await updateOrderStatus(order.id, status);
      setOrder(updated);
    } catch (err) {
      throw err;
    }
  };

  const updateTracking = async (trackingNumber: string) => {
    if (!order) return;
    try {
      const updated = await updateTrackingNumber(order.id, trackingNumber);
      setOrder(updated);
    } catch (err) {
      throw err;
    }
  };

  const updateNotes = async (notes: string) => {
    if (!order) return;
    try {
      const updated = await updateAdminNotes(order.id, notes);
      setOrder(updated);
    } catch (err) {
      throw err;
    }
  };

  return { 
    order, 
    loading, 
    error, 
    refetch: loadOrder,
    updateStatus,
    updateTracking,
    updateNotes
  };
};

export const useOrderStats = () => {
  const [stats, setStats] = useState<OrderStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadStats = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchOrderStats();
      setStats(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Błąd ładowania statystyk');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return { stats, loading, error, refetch: loadStats };
};
