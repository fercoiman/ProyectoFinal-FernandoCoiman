import { useEffect, useState } from "react";

function Novedades() {
  const [products, setProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // Elegimos 4 productos aleatorios
        const shuffled = data.sort(() => 0.5 - Math.random());
        setRandomProducts(shuffled.slice(0, 4));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar novedades:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container mt-4">Cargando novedades...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Novedades</h2>
      <div className="row">
        {randomProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{product.title}</h6>
                <p className="fw-bold">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Novedades;
