import React from "react";

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="card" style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem", width: "250px" }}>
      <img src={product.image} alt={product.title} style={{ height: "150px", objectFit: "contain" }} />
      <h4>{product.title}</h4>
      <p><strong>${product.price}</strong></p>
      <button onClick={() => onAdd(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
