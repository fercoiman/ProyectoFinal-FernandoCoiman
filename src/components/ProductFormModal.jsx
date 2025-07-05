import React, { useState } from "react";
import "./LoginModal.css"; // Estilo modal compartido

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
        <h4 className="mb-4">Agregar Producto Personalizado</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre del producto</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Cafetera digital"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              className="form-control"
              rows="3"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Describe brevemente el producto..."
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Precio</label>
            <input
              type="number"
              className="form-control"
              step="0.01"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Ej: 1499.99"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">URL de imagen (opcional)</label>
            <input
              type="text"
              className="form-control"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              placeholder="https://misimagenes.com/foto.png"
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success w-50 me-2">
              Aceptar
            </button>
            <button type="button" className="btn btn-secondary w-50" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductFormModal;
