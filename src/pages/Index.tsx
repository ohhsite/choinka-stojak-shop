
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import MultiProductOrderForm from '../components/MultiProductOrderForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <MultiProductOrderForm />
      <Footer />
    </div>
  );
};

export default Index;
