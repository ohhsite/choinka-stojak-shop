import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EditableText from '../components/EditableText';

const Reguamin = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Regulamin sklepu</h1>

        <div className="prose max-w-none">
          <p>
            <strong>Właściciel:</strong>{' '}
            <EditableText
              id="regulamin-nip"
              initialText="NIP: 000-000-00-00"
              component="Regulamin"
              file="src/pages/Regulamin.tsx"
              as="span"
            />
          </p>

          <p>
            Niniejszy regulamin dotyczy sprzedaży hurtowej i detalicznej stojaków na choinkę. Wszelkie szczegóły dotyczące zamówień, reklamacji i zwrotów regulowane są zgodnie z obowiązującymi przepisami prawa.
          </p>

          <p>
            Uwaga: zawartość regulaminu została skrócona do wymaganego minimum. Pełna treść dostępna na życzenie.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reguamin;
