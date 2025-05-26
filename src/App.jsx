import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Novedades from "./components/Novedades";
import Cart from "./components/Cart";
import LoginModal from "./components/LoginModal";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Vaciar carrito
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <NavBar
        onLoginClick={() => setShowLogin(true)}
        cartCount={cartItems.length}
      />

      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/cart" element={<Cart items={cartItems} clearCart={clearCart} />} />
      </Routes>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </Router>
  );
}

export default App;