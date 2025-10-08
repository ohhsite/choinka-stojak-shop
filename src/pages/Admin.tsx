import React from 'react';
import { EditableContentProvider } from '../context/EditableContentContext';
import { EditController } from '../components/EditController';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import FinalCTA from '../components/FinalCTA';
import OrderForm from '../components/OrderForm';
import Footer from '../components/Footer';

const Admin = () => {
  return (
    <EditableContentProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Products />
        <FinalCTA />
        <OrderForm />
        <Footer />
        <EditController />
      </div>
    </EditableContentProvider>
  );
};

export default Admin;