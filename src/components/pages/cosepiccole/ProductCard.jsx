export default function ProductCard({ title, category, thumbnail, children }) {
  return (
    <div className="col">
      <div className="card h-100 product-card">
        <div className="card-body product-card-body">
          <h3 className="fs-6 card-title product-card-title">{title}</h3>
          <p className="card-text product-card-category">{category}</p>
          <img
            className="card-img-top product-card-image"
            src={thumbnail}
            alt={title}
          />
          {children}
        </div>
      </div>
    </div>
  );
}

////// perchè quando rimpicciolisco mi si sfalsano le altezze delle card??
