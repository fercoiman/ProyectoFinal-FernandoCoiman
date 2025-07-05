import React, { useState } from "react";
import "./LoginModal.css"; // Reutilizamos el mismo estilo visual del login

const ProductFormModal = ({ onSubmit, onClose }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !descripcion || !precio) return;

    const nuevoProducto = {
      id: Date.now(),
      nombre,
      descripcion,
      price: parseFloat(precio),
      image: imagen || "https://via.placeholder.com/250x250?text=Producto",
    };

    onSubmit(nuevoProducto);
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setImagen("");
  };

  return (
    <div className="login-modal-backdrop">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Agregar Producto Personalizado</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre del producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <textarea
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows={3}
            required
          />
          <input
            type="number"
            placeholder="Precio"
            step="0.01"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="URL de imagen (opcional)"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />

          <div className="d-flex gap-2 mt-3">
            <button type="submit" className="btn btn-success w-100">Aceptar</button>
            <button type="button" className="btn btn-secondary w-100" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductFormModal;
