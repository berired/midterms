import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products as productsData } from '../data/products';
import './ProductListPage.css';

function ProductListPage() {
  const [products] = useState(productsData);

  return (
    <div className="product-list-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">Discover our amazing collection of Apple products</p>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage; 