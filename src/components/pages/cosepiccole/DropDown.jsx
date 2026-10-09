import { Link } from "react-router";
import { useCartProductContext } from "../../../contexts/CartProductContext";
import ShoppingCart from "./ShoppingCart";

export default function DropDown() {
  const { cartProducts } = useCartProductContext();
  return (
    <div className="dropdown ms-5">
      <button
        className="btn btn-secondary dropdown-toggle d-flex align-items-center gap-2"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        disabled={cartProducts.length === 0}
      >
        Vedi Carrello
        <ShoppingCart />
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {cartProducts.map((cartProd) => (
          <Link
            key={cartProd.id}
            className="dropdown-item"
            to={`/products/${cartProd.id}`}
          >
            {cartProd.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
