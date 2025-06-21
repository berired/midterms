import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${formatPrice(product.price)}</p>
        <p className="product-description">{product.description}</p>
        <Link to={`/product/${product.id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;