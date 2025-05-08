import React from "react";

const Cart = ({ cartItems, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ padding: "1rem", border: "1px solid #aaa", marginTop: "1rem" }}>
      <h3>🛒 Carrito de compras</h3>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} style={{ marginBottom: "0.5rem" }}>
              {item.title} x {item.qty} = ${(item.price * item.qty).toFixed(2)}
              <button onClick={() => onRemove(item.id)} style={{ marginLeft: "1rem" }}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
