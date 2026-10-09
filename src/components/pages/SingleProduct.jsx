import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import MainContent from "../ui/layout/MainContent";
import { ArrowUpLeftFromCircle, ShoppingCartPlus } from "lucide-react";
import { useCartProductContext } from "../../contexts/CartProductContext";

export default function SingleProduct() {
  const { id } = useParams();
  const [prodotto, setProdotto] = useState(null);
  const { handleAddProduct } = useCartProductContext();
  useEffect(() => {
    async function fetchProdotto() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProdotto(data);
    }

    fetchProdotto();
  }, [id]);

  return (
    <MainContent
      titolo="Dettaglio prodotto"
      sottotitolo="Scopri caratteristiche, prezzo e dettagli del prodotto."
    >
      {prodotto !== null && (
        <div className="card border-0 shadow-sm overflow-hidden">
          <div className="row g-0">
            <div className="col-12 col-lg-6 p-3 p-md-4">
              <div className="single-product-image-container bg-light rounded-3">
                <img
                  className="single-product-image"
                  src={prodotto.thumbnail}
                  alt={prodotto.title}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card-body h-100 d-flex flex-column p-4 p-md-5">
                <span className="badge text-bg-light align-self-start mb-3 text-capitalize">
                  {prodotto.category}
                </span>
                <h2 className="card-title fs-3 mb-3">{prodotto.title}</h2>
                <p className="text-body-secondary mb-4">
                  {prodotto.description}
                </p>
                <p className="fs-3 fw-semibold mb-4">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(prodotto.price)}
                </p>
                <div className="d-flex flex-wrap align-items-center gap-2 mt-auto pt-3 border-top">
                  <Link
                    to="/products"
                    className="btn btn-outline-secondary rounded-pill d-inline-flex align-items-center gap-2"
                  >
                    <ArrowUpLeftFromCircle size={16} />
                    Torna ai prodotti
                  </Link>
                  <button
                    className="btn btn-secondary rounded-2 d-inline-flex align-items-center gap-2"
                    onClick={() => handleAddProduct(prodotto)}
                  >
                    <ShoppingCartPlus size={18} />
                    Aggiungi al carrello
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainContent>
  );
}
