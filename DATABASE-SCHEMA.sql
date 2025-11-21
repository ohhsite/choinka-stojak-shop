-- BAZA DANYCH DLA SKLEPU ZE STOJAKAMI
-- Wykonaj to w Supabase SQL Editor

-- ========================================
-- TABELA: orders (zamówienia)
-- ========================================
CREATE TABLE IF NOT EXISTS orders (
  -- Klucze
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Stripe
  stripe_payment_intent_id TEXT UNIQUE,
  stripe_customer_email TEXT,
  
  -- Dane klienta
  customer_name TEXT NOT NULL,
  customer_phone TEXT,
  customer_email TEXT NOT NULL,
  
  -- Adres dostawy (JSONB - obiekt JSON)
  shipping_address JSONB NOT NULL,
  -- Przykład: {"street": "ul. Testowa 1", "city": "Warszawa", "postalCode": "00-001", "country": "Polska"}
  
  billing_address JSONB,
  
  -- Produkty (JSONB - tablica obiektów)
  items JSONB NOT NULL,
  -- Przykład: [{"id": "1", "productId": "stojak-maly-czarny", "productName": "...", "quantity": 2, "unitPrice": 22900, "totalPrice": 45800}]
  
  -- Finansowe
  total_amount INTEGER NOT NULL, -- w groszach (22900 = 229 zł)
  currency TEXT DEFAULT 'PLN',
  
  -- Statusy
  status TEXT NOT NULL DEFAULT 'pending' 
    CHECK (status IN ('pending', 'processing', 'paid', 'shipped', 'delivered', 'cancelled', 'failed')),
  payment_status TEXT NOT NULL DEFAULT 'unpaid' 
    CHECK (payment_status IN ('unpaid', 'paid', 'refunded', 'failed')),
  
  -- Wysyłka
  shipping_method TEXT,
  tracking_number TEXT,
  
  -- Notatki
  notes TEXT,
  admin_notes TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  paid_at TIMESTAMPTZ,
  shipped_at TIMESTAMPTZ
);

-- ========================================
-- INDEXY (dla szybszego wyszukiwania)
-- ========================================
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON orders(payment_status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_stripe_payment_intent ON orders(stripe_payment_intent_id);

-- ========================================
-- TRIGGER: Auto-update updated_at
-- ========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS update_orders_updated_at ON orders;
CREATE TRIGGER update_orders_updated_at 
  BEFORE UPDATE ON orders
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- ROW LEVEL SECURITY (RLS)
-- ========================================
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Polityka: Każdy może tworzyć zamówienia (publiczny dostęp)
DROP POLICY IF EXISTS "Anyone can create orders" ON orders;
CREATE POLICY "Anyone can create orders" ON orders
  FOR INSERT WITH CHECK (true);

-- Polityka: Tylko uwierzytelnieni użytkownicy (admini) mogą czytać zamówienia
DROP POLICY IF EXISTS "Admins can view all orders" ON orders;
CREATE POLICY "Admins can view all orders" ON orders
  FOR SELECT USING (auth.role() = 'authenticated');

-- Polityka: Tylko uwierzytelnieni użytkownicy (admini) mogą aktualizować zamówienia
DROP POLICY IF EXISTS "Admins can update orders" ON orders;
CREATE POLICY "Admins can update orders" ON orders
  FOR UPDATE USING (auth.role() = 'authenticated');

-- ========================================
-- KONIEC SCHEMATU
-- ========================================

-- Sprawdzenie czy tabela została utworzona:
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name = 'orders';
