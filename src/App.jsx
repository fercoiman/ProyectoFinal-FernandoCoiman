import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductoFormulario from "./components/ProductoFormulario";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [productosPersonalizados, setProductosPersonalizados] = useState([]);

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

  const agregarProductoPersonalizado = (producto) => {
    setProductosPersonalizados(prev => [...prev, producto]);
  };

  return (
    //<div style={{ padding: "2rem" }}>
    <div className="container py-4">
      <h1 className="mb-4 text-center">Tienda Talento Tech 2025</h1>

      <ProductoFormulario onAddProductoPersonalizado={agregarProductoPersonalizado} />
      <Cart cartItems={carrito} onRemove={eliminarDelCarrito} />

      <ProductList
        onAdd={agregarAlCarrito}
        productosExtras={productosPersonalizados}
      />

      
    </div>
  );
}

export default App;

