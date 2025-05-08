import React from "react";

// const ProductCard = ({ product, onAdd }) => {
//   return (
//     <div className="card" style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem", width: "250px" }}>
//       <img src={product.image} alt={product.title} style={{ height: "150px", objectFit: "contain" }} />
//       <h4>{product.title}</h4>
//       <p><strong>${product.price}</strong></p>
//       <button onClick={() => onAdd(product)}>Agregar al carrito</button>
//     </div>
//   );
// };

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text fw-bold">${product.price.toFixed(2)}</p>
          <button className="btn btn-primary mt-auto" onClick={() => onAdd(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};




export default ProductCard;
