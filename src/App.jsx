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
  const [user, setUser] = useState(null);

  
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  
  const clearCart = () => {
    setCartItems([]);
  };

    const handleLogin = (userData) => {
    setUser(userData);
    alert(`Bienvenido, ${userData.email}`);
    setShowLogin(false);
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

      {showLogin && <LoginModal 
        onClose={() => setShowLogin(false)}
        onLogin={handleLogin} 
        />}
    </Router>
  );
}

export default App;