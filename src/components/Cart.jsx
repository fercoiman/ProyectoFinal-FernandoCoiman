import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function Cart({ items, clearCart }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

const handleCheckout = () => {
  Swal.fire({
    icon: 'success',
    title: '¡Compra finalizada!',
    text: 'Gracias por tu compra. Pronto recibirás la confirmación por correo.',
    confirmButtonText: 'Aceptar',
  });

  clearCart();
};



  return (
    <div className="container py-4">
      <h2 className="mb-4">Carrito de Compras</h2>

      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {items.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.title}</strong><br />
                  <small>${item.price.toFixed(2)}</small>
                </div>
                <span className="fw-bold">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <h5 className="mb-3">Total: ${total.toFixed(2)}</h5>

          <div className="d-flex gap-2">
            <button className="btn btn-success" onClick={handleCheckout}>Finalizar Compra</button>
            <Link to="/" className="btn btn-outline-primary">Seguir Comprando</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
