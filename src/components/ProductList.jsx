import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

// const ProductList = ({ onAdd, productosExtras }) => {
//   const [productosAPI, setProductosAPI] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then(res => res.json())
//       .then(data => setProductosAPI(data))
//       .catch(err => console.error("Error al obtener productos", err));
//   }, []);

//   const productosTotales = [...productosAPI, ...productosExtras];

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap" }}>
//       {productosTotales.map(product => (
//         <ProductCard key={product.id} product={product} onAdd={onAdd} />
//       ))}
//     </div>
//   );
// };


const ProductList = ({ onAdd, productosExtras }) => {
  const [productosAPI, setProductosAPI] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProductosAPI(data))
      .catch(err => console.error("Error al obtener productos", err));
  }, []);

  const productosTotales = [...productosAPI, ...productosExtras];

  return (
    <div className="container mt-4">
      <div className="row">
        {productosTotales.map(product => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};


export default ProductList;

