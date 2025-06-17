import {getAllProducts} from './data/products.js';
import ProductCard from './components/ProductCard.jsx';
import './App.css';
import {getAllTags} from './data/tags.js';
import TagList from './components/taglist.jsx';
const App = () => {
  const tags = getAllTags()
  const products = getAllProducts()
;
  return (
    <div className="App">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="tag-list-container">
        <TagList tags={tags} />
      </div>
    </div>
  );
};

export default App;