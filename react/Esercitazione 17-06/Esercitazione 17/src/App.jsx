import {getAllProducts} from './data/products.js';

import ProductCard from './components/ProductCard.jsx';
import './App.css';

const App = () => {
  const products = getAllProducts();
  return (
    <div style={{ padding: '2rem' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  );
};

export default App;