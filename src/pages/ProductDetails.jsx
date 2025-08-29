import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { BeatLoader } from "react-spinners";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { products, loading } = useFetch();
  const { id } = useParams();

  const product = products.find((x) => x.id === Number(id));

  if (loading) {
    return (
      <div className="loading">
        <BeatLoader size={20} />
      </div>
    );
  }

  if (!product) {
    return <div className="notFound">Product Not Found</div>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} className="product-img" />
      <h2 className="product-title">{product.title}</h2>
      <Link to="/products" className="details-back-link">
        Back to products
      </Link>
    </div>
  );
}
