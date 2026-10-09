import { useState, useEffect } from "react";
import { Link } from "react-router";
import ProductCard from "../pages/cosepiccole/ProductCard";
import { CircleArrowOutUpRight } from "lucide-react";
import { ShoppingCartPlus } from "lucide-react";
import { useCartProductContext } from "../../contexts/CartProductContext";

const endpoint = "https://dummyjson.com/products?limit=12";

export default function ProductsSection() {
  const [products, setproducts] = useState([]);
  const { handleAddProduct } = useCartProductContext();

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
        <div className="row row-cols-3 row-cols-md-4 row-cols-lg-4 g-4">
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
                <button
                  onClick={() => handleAddProduct(p)}
                  className="btn btn-secondary mt-3"
                >
                  <ShoppingCartPlus size="15"></ShoppingCartPlus>
                </button>
              </ProductCard>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
