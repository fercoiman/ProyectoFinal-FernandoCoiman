import React, { useState } from "react";

const ProductFormModal = ({ onAddProductoPersonalizado }) => {
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !precio || !imagen) return;

    const nuevoProducto = {
      id: Date.now(),
      title: titulo,
      price: parseFloat(precio),
      image: imagen,
      isCustom: true,
    };

    onAddProductoPersonalizado(nuevoProducto);
    setTitulo("");
    setPrecio("");
    setImagen("");
  };

  return (
    <div className="container mt-4">
      <h4>Agregar producto personalizado</h4>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del producto"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            step="0.01"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="URL de imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default ProductFormModal;

