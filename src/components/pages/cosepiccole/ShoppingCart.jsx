import { ShoppingCartIcon } from "lucide-react";
import { useCartProductContext } from "../../../contexts/CartProductContext";

export default function ShoppingCart() {
  const { totCartProducts } = useCartProductContext();
  return (
    <div className="position-relative">
      <ShoppingCartIcon />
      <span className="position-absolute top-0 start-100 translate-middle rounded-pill badge bg-info">
        {totCartProducts}
      </span>
    </div>
  );
}
