import { useFetch } from "../../hooks/useFetch";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import "./ProductList.css";

export default function ProductList() {
  const { products, loading, error } = useFetch();

  if (loading) {
    return (
      <div className="loading">
        <BeatLoader size={20} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        Something went wrong! Try again in a few minutes
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="products-title">Our Products</h2>
      <div className="product-list">
        {products.map((x) => (
          <Link to={`/products/${x.id}`} key={x.id} className="products-link">
            <img src={x.image} alt={x.name} className="products-img" />
            <span>{x.title}</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <span className="products-price">${x.price}</span>
              <span>{x.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
