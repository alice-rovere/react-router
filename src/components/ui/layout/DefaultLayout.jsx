import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 bg-light">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
