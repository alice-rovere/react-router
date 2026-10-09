import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartProductContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const totCartProducts = cartProducts.length;
  function handleAddProduct(prod) {
    setCartProducts((actual) => [...actual, prod]);
    console.log(totCartProducts);
  }
  return (
    <CartProductContext.Provider
      value={{
        cartProducts,
        totCartProducts,
        handleAddProduct,
      }}
    >
      {children}
    </CartProductContext.Provider>
  );
}
//eslint-disable-next-line
export function useCartProductContext() {
  const context = useContext(CartProductContext);
  if (!context) {
    throw new Error(
      "Il componente deve essere figlio del CartContextProvider per accedere alle variabili di stato globali",
    );
  }
  return context;
}
