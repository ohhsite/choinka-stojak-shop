# Instrukcja konfiguracji Supabase i Stripe

## 1. Supabase - Konfiguracja Bazy Danych

### Krok 1: Utwórz projekt w Supabase
1. Wejdź na https://supabase.com
2. Załóż konto lub zaloguj się
3. Utwórz nowy projekt (New Project)
4. Zapisz:
   - **Project URL** (np. `https://xxxxx.supabase.co`)
   - **anon/public API key** (klucz publiczny)
   - **service_role key** (klucz prywatny - NIGDY nie ujawniaj!)

### Krok 2: Utwórz tabelę `orders`

W zakładce **SQL Editor** w Supabase, wykonaj poniższe zapytanie:

```sql
-- Tworzenie tabeli zamówień
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Status zamówienia
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'paid', 'shipped', 'delivered', 'cancelled', 'failed')),
  
  -- Dane klienta
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  
  -- Adres dostawy (JSONB)
  shipping_address JSONB NOT NULL,
  
  -- Firma (opcjonalnie)
  is_company BOOLEAN DEFAULT FALSE,
  company_name TEXT,
  nip TEXT,
  
  -- Produkty (JSONB array)
  items JSONB NOT NULL,
  
  -- Ceny w groszach
  subtotal_grosze INTEGER NOT NULL,
  shipping_cost_grosze INTEGER DEFAULT 0,
  total_grosze INTEGER NOT NULL,
  
  -- Stripe
  stripe_payment_intent_id TEXT UNIQUE,
  paid_at TIMESTAMPTZ,
  
  -- Notatki
  notes TEXT
);

-- Index dla szybszego wyszukiwania
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX idx_orders_customer_email ON orders(customer_email);
CREATE INDEX idx_orders_stripe_payment_intent ON orders(stripe_payment_intent_id);

-- Funkcja automatycznej aktualizacji updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) - zabezpieczenia
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Polityka: Każdy może tworzyć zamówienia (publiczny dostęp)
CREATE POLICY "Anyone can create orders" ON orders
  FOR INSERT WITH CHECK (true);

-- Polityka: Tylko admini mogą czytać wszystkie zamówienia (wymaga uwierzytelnienia)
CREATE POLICY "Admins can view all orders" ON orders
  FOR SELECT USING (auth.role() = 'authenticated');

-- Polityka: Tylko admini mogą aktualizować zamówienia
CREATE POLICY "Admins can update orders" ON orders
  FOR UPDATE USING (auth.role() = 'authenticated');
```

### Krok 3: Dodaj zmienne środowiskowe w Vercel

W Vercel Dashboard → Settings → Environment Variables:

```
VITE_SUPABASE_URL=https://twoj-projekt.supabase.co
VITE_SUPABASE_ANON_KEY=twoj_publiczny_klucz
SUPABASE_SERVICE_ROLE_KEY=twoj_prywatny_klucz (tylko dla API routes!)
```

---

## 2. Stripe - Konfiguracja Płatności

### Krok 1: Utwórz konto Stripe
1. Wejdź na https://stripe.com
2. Załóż konto biznesowe
3. Przejdź przez weryfikację (KYC) - wymagane do produkcji
4. Zapisz klucze API (Developers → API Keys):
   - **Publishable key** (klucz publiczny)
   - **Secret key** (klucz prywatny)

### Krok 2: Utwórz produkty w Stripe

W Stripe Dashboard → Products, utwórz 4 produkty:

1. **Metalowy stojak mały – czarny mat**
   - Cena: 229.00 PLN
   - Recurring: No (jednorazowa płatność)
   - Zapisz **Product ID** i **Price ID**

2. **Metalowy stojak duży – czarny mat**
   - Cena: 399.00 PLN

3. **Metalowy stojak mały – złoty metaliczny**
   - Cena: 249.00 PLN

4. **Metalowy stojak duży – złoty metaliczny**
   - Cena: 429.00 PLN

### Krok 3: Skonfiguruj Webhook

1. Stripe Dashboard → Developers → Webhooks
2. Kliknij **Add endpoint**
3. Endpoint URL: `https://twoja-domena.vercel.app/api/stripe-webhook`
4. Wybierz eventy do subskrypcji:
   - `payment_intent.created`
   - `payment_intent.processing`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `payment_intent.canceled`
5. Zapisz **Signing secret** (webhook secret)

### Krok 4: Dodaj zmienne środowiskowe w Vercel

```
STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx (dla produkcji) lub pk_test_xxxxx (dla testów)
STRIPE_SECRET_KEY=sk_live_xxxxx (dla produkcji) lub sk_test_xxxxx (dla testów)
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

### Krok 5: Zaktualizuj Product IDs w kodzie

W pliku `src/data/products.ts` dodaj odpowiednie ID z Stripe:

```typescript
stripeProductId: "prod_xxxxx",
stripePriceId: "price_xxxxx",
```

---

## 3. Testowanie

### Tryb testowy Stripe (Test Mode)
Używaj numerów kart testowych:
- **Udana płatność**: `4242 4242 4242 4242`
- **Nieudana płatność**: `4000 0000 0000 0002`
- **Wymaga 3D Secure**: `4000 0027 6000 3184`

Dowolna przyszła data ważności i dowolny CVC.

### Sprawdzenie webhooków
1. Stripe Dashboard → Developers → Webhooks
2. Kliknij na swój endpoint
3. Sprawdź zakładkę **Attempts** - czy webhoki przychodzą poprawnie

### Testowanie lokalnie (opcjonalnie)
```bash
# Zainstaluj Stripe CLI
stripe listen --forward-to localhost:3000/api/stripe-webhook

# Symuluj event
stripe trigger payment_intent.succeeded
```

---

## 4. Włączenie płatności w aplikacji

Po skonfigurowaniu Supabase i Stripe, w pliku `src/pages/KoszykDostawa.tsx`:

**Usuń:**
```typescript
disabled
```

**Dodaj integrację z Stripe:**
```typescript
// TODO: Implementacja płatności Stripe
// 1. Utworzenie PaymentIntent przez API
// 2. Przekierowanie do Stripe Checkout
// 3. Obsługa webhooków
```

---

## 5. Checklist przed uruchomieniem produkcji

- [ ] Konto Stripe zweryfikowane (KYC)
- [ ] Produkty utworzone w Stripe z prawidłowymi cenami
- [ ] Webhook skonfigurowany i testowany
- [ ] Zmienne środowiskowe ustawione w Vercel (produkcyjne klucze!)
- [ ] Tabela `orders` utworzona w Supabase
- [ ] RLS (Row Level Security) włączone
- [ ] Polityki dostępu skonfigurowane
- [ ] Testowe zamówienie przeszło poprawnie
- [ ] Email z potwierdzeniem działa
- [ ] Panel admina działa z prawdziwymi danymi

---

## 6. Monitorowanie

- **Stripe Dashboard**: Płatności, zwroty, webhooks
- **Supabase Dashboard**: Zamówienia, użytkownicy, logi
- **Vercel Dashboard**: Logi API, błędy, performance

---

## Kontakt w razie problemów
- Stripe Support: https://support.stripe.com
- Supabase Support: https://supabase.com/support
