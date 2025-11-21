import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Package, 
  User, 
  MapPin, 
  CreditCard, 
  Truck,
  Edit2,
  Save,
  X
} from 'lucide-react';
import { useOrder } from '../hooks/use-orders';
import { ORDER_STATUS_LABELS, PAYMENT_STATUS_LABELS } from '../types/orders';

const AdminOrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { order, loading, error, updateStatus, updateTracking, updateNotes } = useOrder(id!);
  
  const [editingTracking, setEditingTracking] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [editingNotes, setEditingNotes] = useState(false);
  const [adminNotes, setAdminNotes] = useState('');
  const [updating, setUpdating] = useState(false);

  React.useEffect(() => {
    if (!sessionStorage.getItem('admin_authenticated')) {
      navigate('/admin');
    }
  }, [navigate]);

  React.useEffect(() => {
    if (order) {
      setTrackingNumber(order.trackingNumber || '');
      setAdminNotes(order.adminNotes || '');
    }
  }, [order]);

  const handleStatusChange = async (newStatus: typeof order.status) => {
    if (!order) return;
    try {
      setUpdating(true);
      await updateStatus(newStatus);
      alert('Status zmieniony pomyślnie');
    } catch (err) {
      alert('Błąd zmiany statusu');
    } finally {
      setUpdating(false);
    }
  };

  const handleSaveTracking = async () => {
    try {
      setUpdating(true);
      await updateTracking(trackingNumber);
      setEditingTracking(false);
      alert('Numer przesyłki zapisany');
    } catch (err) {
      alert('Błąd zapisu');
    } finally {
      setUpdating(false);
    }
  };

  const handleSaveNotes = async () => {
    try {
      setUpdating(true);
      await updateNotes(adminNotes);
      setEditingNotes(false);
      alert('Notatki zapisane');
    } catch (err) {
      alert('Błąd zapisu');
    } finally {
      setUpdating(false);
    }
  };

  const formatCurrency = (amountInGrosze: number) => {
    return `${(amountInGrosze / 100).toFixed(2)} zł`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pl-PL');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Ładowanie zamówienia...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Nie znaleziono zamówienia</p>
          <Link to="/admin/zamowienia" className="text-blue-600 hover:underline">
            Powrót do listy
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/admin/zamowienia"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Powrót do listy
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Zamówienie #{order.id}
          </h1>
          <p className="text-gray-600">
            Złożone: {formatDate(order.createdAt)}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lewa kolumna - główne informacje */}
          <div className="lg:col-span-2 space-y-6">
            {/* Produkty */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Produkty
              </h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-4">
                    <div>
                      <p className="font-medium text-gray-900">{item.productName}</p>
                      <p className="text-sm text-gray-600">Ilość: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{formatCurrency(item.totalPrice)}</p>
                      <p className="text-sm text-gray-600">{formatCurrency(item.unitPrice)} / szt.</p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4 text-lg font-bold">
                  <span>Razem:</span>
                  <span>{formatCurrency(order.totalAmount)}</span>
                </div>
              </div>
            </div>

            {/* Dane klienta */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Dane klienta
              </h2>
              <dl className="space-y-2">
                <div>
                  <dt className="text-sm font-medium text-gray-600">Imię i nazwisko</dt>
                  <dd className="text-gray-900">{order.customerName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">Email</dt>
                  <dd className="text-gray-900">
                    <a href={`mailto:${order.customerEmail}`} className="text-blue-600 hover:underline">
                      {order.customerEmail}
                    </a>
                  </dd>
                </div>
                {order.customerPhone && (
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Telefon</dt>
                    <dd className="text-gray-900">
                      <a href={`tel:${order.customerPhone}`} className="text-blue-600 hover:underline">
                        {order.customerPhone}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Adres dostawy */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Adres dostawy
              </h2>
              <div className="text-gray-900">
                {order.shippingAddress.company && (
                  <p className="font-medium">{order.shippingAddress.company}</p>
                )}
                <p>{order.shippingAddress.street}</p>
                <p>{order.shippingAddress.postalCode} {order.shippingAddress.city}</p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </div>
          </div>

          {/* Prawa kolumna - zarządzanie */}
          <div className="space-y-6">
            {/* Status zamówienia */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Status zamówienia</h2>
              <select
                value={order.status}
                onChange={(e) => handleStatusChange(e.target.value as any)}
                disabled={updating}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
              >
                {Object.entries(ORDER_STATUS_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status płatności:</span>
                  <span className={`font-medium ${order.paymentStatus === 'paid' ? 'text-green-600' : 'text-red-600'}`}>
                    {PAYMENT_STATUS_LABELS[order.paymentStatus]}
                  </span>
                </div>
                {order.paidAt && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Opłacono:</span>
                    <span className="text-gray-900">{formatDate(order.paidAt)}</span>
                  </div>
                )}
                {order.shippedAt && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wysłano:</span>
                    <span className="text-gray-900">{formatDate(order.shippedAt)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Numer przesyłki */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Przesyłka
                </h2>
                {!editingTracking && (
                  <button
                    onClick={() => setEditingTracking(true)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {editingTracking ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Numer przesyłki"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveTracking}
                      disabled={updating}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Zapisz
                    </button>
                    <button
                      onClick={() => {
                        setEditingTracking(false);
                        setTrackingNumber(order.trackingNumber || '');
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-900">
                  {order.trackingNumber || 'Brak numeru przesyłki'}
                </p>
              )}
            </div>

            {/* Notatki administratora */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Notatki</h2>
                {!editingNotes && (
                  <button
                    onClick={() => setEditingNotes(true)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {editingNotes ? (
                <div className="space-y-2">
                  <textarea
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    placeholder="Notatki administratora..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveNotes}
                      disabled={updating}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Zapisz
                    </button>
                    <button
                      onClick={() => {
                        setEditingNotes(false);
                        setAdminNotes(order.adminNotes || '');
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-900 whitespace-pre-wrap">
                  {order.adminNotes || 'Brak notatek'}
                </p>
              )}
            </div>

            {/* Dane płatności Stripe */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Płatność
              </h2>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="text-gray-600">Stripe Payment Intent</dt>
                  <dd className="text-gray-900 font-mono text-xs">{order.stripePaymentIntentId}</dd>
                </div>
                {order.notes && (
                  <div>
                    <dt className="text-gray-600">Uwagi klienta</dt>
                    <dd className="text-gray-900">{order.notes}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails;
