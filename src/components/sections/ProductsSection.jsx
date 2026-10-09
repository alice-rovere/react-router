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
                <div className="d-flex align-items-center justify-content-between gap-2 mt-3 pt-3 border-top">
                  <Link
                    to={`/products/${p.id}`}
                    className="btn btn-outline-secondary btn-sm rounded-pill d-inline-flex align-items-center gap-2"
                  >
                    <CircleArrowOutUpRight size={14} /> Open Detail
                  </Link>
                  <button
                    onClick={() => handleAddProduct(p)}
                    className="btn btn-secondary rounded-2 p-2"
                    aria-label={`Add ${p.title} to cart`}
                    title="Add to cart"
                  >
                    <ShoppingCartPlus size={20} />
                  </button>
                </div>
              </ProductCard>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
