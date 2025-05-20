import React from "react";

const Cart = ({ cartItems, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title">🛒 Carrito de compras</h4>
          {cartItems.length === 0 ? (
            <p className="text-muted">El carrito está vacío.</p>
          ) : (
            <ul className="list-group list-group-flush">
              {cartItems.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.title} x {item.qty}
                  <div>
                    <span className="fw-bold me-3">${(item.price * item.qty).toFixed(2)}</span>
                    <button className="btn btn-sm btn-danger" onClick={() => onRemove(item.id)}>
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-3 fw-bold">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;