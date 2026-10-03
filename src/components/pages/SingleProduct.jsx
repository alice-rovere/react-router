import { useEffect } from "react";
import { useParams } from "react-router";

export default function SingleProduct() {
  const { id } = useParams();

  useEffect(() => {
    // fetch dati usando l'id
  }, []);

  return (
    <div>
      <h1>ID prodotto: {id}</h1>
    </div>
  );
}
