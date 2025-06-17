import { useState } from 'react'
import ProductCard from './components/ProductCard.jsx';
import './App.css'
import shopping from './assets/shopping.webp'

const sampleProduct = {
  title: 'Auricolari Bluetooth Noise Cancelling',
  description: 'Qualità audio eccezionale, cancellazione attiva del rumore e durata di 24h.',
  price: 89.99,
  image: shopping
};

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <ProductCard product={sampleProduct} />
    </div>
  );
};

export default App;