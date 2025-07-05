import { Link } from "react-router-dom";

function NavBar({ onLoginClick, cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">&copy;Tienda Talento 2025 </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/novedades">Novedades</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <span className="cart-badge">🛒 </span>
              Carrito <span className="badge bg-light text-dark">{cartCount}</span>
            </Link>
          </li>
        </ul>
        <button className="btn btn-outline-light" onClick={onLoginClick}>
          Iniciar Sesión
        </button>
      </div>
    </nav>
  );
}

export default NavBar; 
