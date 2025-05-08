import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ onAdd }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error("Error al obtener productos", err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {productos.map(product => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default ProductList;
