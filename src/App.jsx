import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./components/pages/HomePage";
import AboutUsPage from "./components/pages/AboutUsPage";
import ProductsPage from "./components/pages/ProductsPage";
import DefaultLayout from "./components/ui/layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutUsPage />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
