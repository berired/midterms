import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Midterm Output Product Catalog</h1>
          <p className="hero-subtitle">
            Discover amazing products with our beautiful and modern catalog
          </p>
          <div className="hero-actions">
            <Link to="/products" className="cta-button primary">
              Browse Products
            </Link>
            <Link to="/cart" className="cta-button secondary">
              View Cart
            </Link>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Catalog?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛍️</div>
              <h3>Wide Selection</h3>
              <p>Browse through our carefully curated collection of products</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Shop on any device with our responsive design</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Easy</h3>
              <p>Quick navigation and smooth user experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 