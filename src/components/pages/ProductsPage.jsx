import ProductsSection from "../sections/ProductsSection";
import MainContent from "../ui/layout/MainContent";

export default function ProductsPage() {
  return (
    <MainContent
      titolo="I nostri prodotti"
      sottotitolo="Lasciati ispirare dalla nostra collezione"
    >
      <ProductsSection />
    </MainContent>
  );
}
