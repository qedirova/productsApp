import React from "react";
import { useFetch } from "../hooks/useFetch";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";

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
    <div>
      <h2>Our Products</h2>
      {products.map((x) => (
        <Link to={`/products/${x.id}`} key={x.id}>
          <img src={x.image} alt={x.name} />
          <span>{x.title}</span>
          <div>
            <span>${x.price}</span>
            <span>{}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
