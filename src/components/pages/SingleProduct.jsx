import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import MainContent from "../ui/layout/MainContent";
import { ArrowUpLeftFromCircle } from "lucide-react";

export default function SingleProduct() {
  const { id } = useParams();
  const [prodotto, setProdotto] = useState(null);
  useEffect(() => {
    async function fetchProdotto() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);

      const data = await response.json();
      setProdotto(data);
    }
    fetchProdotto();
  }, [id]);

  return (
    <div>
      <MainContent titolo={`Prodotto numero ${id}`} sottotitolo="da sistemare">
        {prodotto !== null && (
          <div className="card">
            <div className="card-body ">
              <h5 className="card-title">{prodotto.title}</h5>
              <p>{prodotto.description}</p>
              <p>{prodotto.price}</p>
              <p>{prodotto.category}</p>
              <img className="card-img w-50" src={prodotto.thumbnail} alt="" />
              <Link
                to="/products"
                className="text-decoration-none text-muted fs-6 d-block"
              >
                <ArrowUpLeftFromCircle size={15}>back</ArrowUpLeftFromCircle>
              </Link>
            </div>
          </div>
        )}
      </MainContent>
    </div>
  );
}
