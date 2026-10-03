import { useState, useEffect } from "react";
import { Link } from "react-router";
import ProductCard from "../pages/cosepiccole/ProductCard";

const endpoint = "https://dummyjson.com/products?limit=12";

export default function ProductsSection() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(endpoint);
      const data = await response.json();
      setproducts(data.products);
    }
    fetchProducts();
  }, []);

  return (
    <>
      {products && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.map((p) => (
            <div key={p.id}>
              <ProductCard
                title={p.title}
                thumbnail={p.thumbnail}
                category={p.category}
              >
                <Link to={`/products/${p.id}`}>Open Detail</Link>
              </ProductCard>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
// Nella pagina Prodotti:

// Utilizzando il seguente endpoint  ottenere e mostrare in pagina i prodotti
// Ogni prodotto deve avere un link che ci porti alla pagina di dettaglio del prodotto (usa <Link>)
// Configuriamo la rotta dinamica con il parametro :id da usare per la pagina di dettaglio del prodotto
