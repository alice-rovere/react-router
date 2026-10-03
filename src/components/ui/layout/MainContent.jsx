export default function MainContent({
  titolo = "default",
  sottotitolo = "default",
  children,
}) {
  return (
    <div className="container gap-3 mt-5 p-3">
      <h3>{titolo}</h3>
      <main className="p-2 fs-5">{sottotitolo}</main>
      <div className="container bg-white p-4">{children}</div>
    </div>
  );
}
