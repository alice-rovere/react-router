import { useState, useEffect } from "react";
import { Link } from "react-router";
import ProductCard from "../pages/cosepiccole/ProductCard";
import { CircleArrowOutUpRight } from "lucide-react";

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
                <Link
                  to={`/products/${p.id}`}
                  className="text-decoration-none text-muted fs-6 "
                >
                  <CircleArrowOutUpRight size={14} /> Open Detail
                </Link>
              </ProductCard>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
