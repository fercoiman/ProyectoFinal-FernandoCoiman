import React from "react";

const ProductCard = ({ product, onAdd }) => {
  const {
    title = "Producto sin título",
    description = "Sin descripción.",
    price = 0,
    image = "https://via.placeholder.com/250x250?text=Producto",
  } = product;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image}
          className="card-img-top p-3"
          alt={title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-truncate">{description}</p>
          <p className="card-text fw-bold">${Number(price).toFixed(2)}</p>
          <button className="btn btn-primary mt-auto" onClick={() => onAdd(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
