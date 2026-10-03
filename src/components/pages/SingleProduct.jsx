import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MainContent from "../ui/layout/MainContent";

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
            <div className="card-body text-center">
              <h5 className="card-title">{prodotto.title}</h5>
              <p>{prodotto.description}</p>
              <p>{prodotto.price}</p>
              <p>{prodotto.category}</p>
              <img className="card-img w-50" src={prodotto.thumbnail} alt="" />
            </div>
          </div>
        )}
      </MainContent>
    </div>
  );
}
// Aggiungiamo la pagina di dettaglio per ogni prodotto, con le informazioni prese dal seguente endpoint dell'API 1 (l'1 sarà dinamico al momento della chiamata AJAX).
