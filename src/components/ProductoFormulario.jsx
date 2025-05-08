import React, { useState } from "react";

const ProductoFormulario = ({ onAddProductoPersonalizado }) => {
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !precio || !imagen) return;

    const nuevoProducto = {
      id: Date.now(), // ID único local
      title: titulo,
      price: parseFloat(precio),
      image: imagen,
      isCustom: true,
    };

    onAddProductoPersonalizado(nuevoProducto);

    // limpiar
    setTitulo("");
    setPrecio("");
    setImagen("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "2rem 0" }}>
      <h3>Agregar producto personalizado</h3>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL de imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        required
      />
      <button type="submit">Agregar producto</button>
    </form>
  );
};

export default ProductoFormulario;
