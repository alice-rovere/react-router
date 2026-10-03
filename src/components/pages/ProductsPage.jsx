import MainContent from "../ui/layout/MainContent";

export default function ProductsPage() {
  return (
    <MainContent
      titolo="I nostri prodotti"
      sottotitolo="Lasciati ispirare dalla nostra collezione"
    >
      <p>Children della home</p>
    </MainContent>
  );
}
// Nella pagina Prodotti:

// Utilizzando il seguente endpoint https://dummyjson.com/products ottenere e mostrare in pagina i prodotti
// Ogni prodotto deve avere un link che ci porti alla pagina di dettaglio del prodotto (usa <Link>)
// Configuriamo la rotta dinamica con il parametro :id da usare per la pagina di dettaglio del prodotto
