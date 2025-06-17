// Componente che mostra solo informazioni
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="buy-button">Acquista ora</button>
    </div>
  );
};




export default ProductCard;

