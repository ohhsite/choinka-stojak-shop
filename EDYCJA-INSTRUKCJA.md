# Instrukcja zastosowania zmian z panelu administracyjnego

## Jak zastosować zmiany do kodu:

1. **Eksportuj zmiany** - kliknij przycisk "Eksportuj zmiany" w panelu admin
2. **Pobierz plik JSON** z listą wszystkich zmian
3. **Ręcznie zastosuj zmiany** w kodzie według poniższego mapowania:

## Mapowanie ID do plików:

### Hero Component (`src/components/Hero.tsx`):
- `hero-title-1` → linia ~18: "Stalowe stojaki na choinki"
- `hero-title-2` → linia ~25: "z pojemnikiem na wodę" 
- `hero-description` → linia ~29: opis pod tytułem
- `hero-feature-1` → linia ~38: "Własna produkcja"
- `hero-feature-2` → linia ~45: "Dostawa w całej Polsce"
- `hero-feature-3` → linia ~52: "Gwarancja jakości"
- `hero-cta-text` → linia ~58: "Zamów swój stojak na choinkę"

### Products Component (`src/components/Products.tsx`):
- `products-title` → linia ~12: "Produkty"
- `products-description` → linia ~16: opis sekcji
- `products-cta-title` → linia ~23: "Potrzebujesz indywidualnej oferty?"
- `products-cta-description` → linia ~27: opis CTA

### ProductCard Component (`src/components/ProductCard.tsx`):
- `product-{ID}-name` → nazwa produktu
- `product-{ID}-width` → szerokość podstawy
- `product-{ID}-treesize` → wysokość choinki
- `product-{ID}-description` → opis produktu
- `product-{ID}-price` → cena (bez "zł")

### FinalCTA Component (`src/components/FinalCTA.tsx`):
- `finalcta-title` → główny tytuł
- `finalcta-description` → opis sekcji
- `finalcta-button` → tekst przycisku

### OrderForm Component (`src/components/OrderForm.tsx`):
- `orderform-title` → "Zapytanie"
- `orderform-title-highlight` → " Ofertowe B2B"
- `orderform-description` → opis sekcji
- `orderform-form-title` → "Formularz B2B"
- `orderform-success-title` → "Dziękujemy za zapytanie!"
- `orderform-success-description` → komunikat po wysłaniu

### Header Component (`src/components/Header.tsx`):
- `header-logo` → "🎄 Stojaki Choinkowe"
- `header-nav-products` → "Produkty"

### Footer Component (`src/components/Footer.tsx`):
- `footer-title` → "🎄 Stojaki Choinkowe"
- `footer-description` → opis firmy
- `footer-phone` → numer telefonu
- `footer-email` → adres email
- `footer-company-title` → "Dla Firm"
- `footer-catalog-link` → "Katalog B2B"
- `footer-quote-link` → "Zapytanie Ofertowe"
- `footer-delivery-link` → "Dostawa Paletowa"
- `footer-terms-link` → "Regulamin Sklepu"
- `footer-cookies-link` → "Polityka Cookies"
- `footer-copyright` → "© 2024 Stojaki Choinkowe. Wszelkie prawa zastrzeżone."

## Przykład zastosowania zmiany:

Jeśli w JSON masz:
```json
{
  "id": "hero-title-1",
  "newContent": "Najlepsze stojaki choinkowe",
  "originalContent": "Stalowe stojaki na choinki"
}
```

To w pliku `src/components/Hero.tsx` znajdź:
```tsx
initialText="Stalowe stojaki na choinki"
```

I zmień na:
```tsx
initialText="Najlepsze stojaki choinkowe"
```