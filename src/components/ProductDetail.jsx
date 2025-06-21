import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  if (!product) {
    return (
      <div className="product-detail-container">
        <div className="error-message">
          <h2>Product not found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/products" className="back-btn">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-price">${formatPrice(product.price)}</p>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-actions">
            <button className="add-to-cart-btn">Add to Cart</button>
            <Link to="/products" className="back-to-products-btn">Back to Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;