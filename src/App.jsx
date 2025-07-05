/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Novedades from "./components/Novedades";
import Cart from "./components/Cart";
import LoginModal from "./components/LoginModal";
import Swal from 'sweetalert2';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  // Cargar usuario desde localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

const handleLogin = (userData) => {
  setUser(userData);
  localStorage.setItem("user", JSON.stringify(userData));

  Swal.fire({
    icon: 'success',
    title: '¡Inicio de sesión exitoso!',
    text: `Bienvenido, ${userData.email}`,
    showConfirmButton: false,
    timer: 2000,
  });

  setShowLogin(false);
};
 




  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <NavBar
        onLoginClick={() => setShowLogin(true)}
        onLogoutClick={handleLogout}
        cartCount={cartItems.length}
        user={user}
      />

      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/cart" element={<Cart items={cartItems} clearCart={clearCart} />} />
      </Routes>

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
    </Router>
  );
}

export default App;
*/


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Novedades from "./components/Novedades";
import Cart from "./components/Cart";
import LoginModal from "./components/LoginModal";
import ProductFormModal from "./components/ProductFormModal"; // IMPORTANTE
import Swal from "sweetalert2";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [customProducts, setCustomProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    Swal.fire({
      icon: "success",
      title: "¡Inicio de sesión exitoso!",
      text: `Bienvenido, ${userData.email}`,
      showConfirmButton: false,
      timer: 2000,
    });

    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleAddCustomProduct = (product) => {
    setCustomProducts((prev) => [...prev, product]);
    setShowProductForm(false);

    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: `El producto "${product.nombre}" fue agregado correctamente.`,
      timer: 2000,
      showConfirmButton: false,
    });
  };

  return (
    <Router>
      <NavBar
        onLoginClick={() => setShowLogin(true)}
        onLogoutClick={handleLogout}
        onAddProductClick={() => setShowProductForm(true)}
        cartCount={cartItems.length}
        user={user}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAddToCart={addToCart}
              customProducts={customProducts}
            />
          }
        />
        <Route path="/novedades" element={<Novedades />} />
        <Route
          path="/cart"
          element={<Cart items={cartItems} clearCart={clearCart} />}
        />
      </Routes>

      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      )}

      {showProductForm && (
        <ProductFormModal
          onClose={() => setShowProductForm(false)}
          onSubmit={handleAddCustomProduct}
        />
      )}
    </Router>
  );
}

export default App;
