/* import { useEffect, useState } from "react";

function Home({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container mt-4">Cargando productos...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Productos</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <p className="fw-bold">${product.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => onAddToCart(product)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
 */

import { useEffect, useState } from "react";

function Home({ onAddToCart, customProducts = [] }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setLoading(false);
      });
  }, []);

  const todos = [
    ...products,
    ...customProducts.map((p) => ({
      ...p,
      title: p.nombre,
      description: p.descripcion,
      image: "https://via.placeholder.com/250x250?text=Producto+Personalizado",
    })),
  ];

  if (loading) return <div className="container mt-4">Cargando productos...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Productos</h2>
      <div className="row">
        {todos.map((product) => (
          <div className="col-md-4 mb-4" key={product.id || product.title}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <p className="fw-bold">${Number(product.price).toFixed(2)}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => onAddToCart(product)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
