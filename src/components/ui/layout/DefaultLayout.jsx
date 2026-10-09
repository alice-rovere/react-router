import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import CartContextProvider from "../../../contexts/CartProductContext";

export default function DefaultLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CartContextProvider>
        <Header />
        <main className="flex-grow-1 bg-light">
          <Outlet />
        </main>
      </CartContextProvider>
      <Footer />
    </div>
  );
}
