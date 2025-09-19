function Cart({ products, cart }) {
  const items = products.filter((p) => cart[p.id] > 0);
  const total = items.reduce((sum, p) => sum + p.value * cart[p.id], 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">🛒 Your Shopping Cart</h2>
        <div className="cart-count">
          {items.length} item{items.length !== 1 ? "s" : ""}
        </div>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Add some products to get started!</p>
        </div>
      ) : (
        <div className="cart-items">
          {items.map((product) => (
            <div key={product.id} className="cart-item">
              <img
                src={product.img}
                alt={product.title}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h4 className="cart-item-title">{product.title}</h4>
                <p className="cart-item-price">${product.value} each</p>
                <div className="cart-item-quantity">
                  Quantity: {cart[product.id]}
                </div>
              </div>
              <div className="cart-item-total">
                ${(product.value * cart[product.id]).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <div className="cart-total">
              <h3>Total: ${total.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
