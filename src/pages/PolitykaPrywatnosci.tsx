import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EditableText from '../components/EditableText';

const PolitykaPrywatnosci = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Polityka prywatności</h1>

        <div className="prose max-w-none">
          <p>
            <strong>Administrator danych:</strong>{' '}
            <EditableText
              id="policy-nip"
              initialText="NIP: 000-000-00-00"
              component="PolitykaPrywatnosci"
              file="src/pages/PolitykaPrywatnosci.tsx"
              as="span"
            />
          </p>

          <p>
            Dane osobowe przekazywane za pośrednictwem formularzy są przetwarzane wyłącznie w celu obsługi zapytań handlowych. Nie przekazujemy danych osobowych osobom trzecim poza przypadkami wymaganymi prawem.
          </p>

          <p>
            Kontakt: kontakt@stojakinachoinke.pl
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitykaPrywatnosci;
