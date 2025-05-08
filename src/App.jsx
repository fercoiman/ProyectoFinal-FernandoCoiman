import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existe = prev.find(p => p.id === producto.id);
      if (existe) {
        return prev.map(p => p.id === producto.id ? { ...p, qty: p.qty + 1 } : p);
      } else {
        return [...prev, { ...producto, qty: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tienda React - FakeStore API</h1>
      <ProductList onAdd={agregarAlCarrito} />
      <Cart cartItems={carrito} onRemove={eliminarDelCarrito} />
    </div>
  );
}

export default App;
