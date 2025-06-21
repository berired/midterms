import './CartPage.css';

function CartPage() {
  return (
    <div className="cart-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Shopping Cart</h1>
          <p className="page-subtitle">Your cart is currently empty</p>
        </div>
        
        <div className="cart-content">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Start shopping to add items to your cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage; 