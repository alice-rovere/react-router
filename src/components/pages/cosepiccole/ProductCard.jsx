export default function ProductCard({ title, category, thumbnail }) {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body ">
          <h3 className="fs-6 card-title">{title}</h3>
          <p className="card-text">{category}</p>
          <img className="card-img-top" src={thumbnail} alt={title} />
        </div>
      </div>
    </div>
  );
}
