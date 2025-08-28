import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function ProductList() {
  const { products, loading, error } = useFetch();

  return (
    <div>
      {products.map((x) => (
        <div key={x.id}> </div>
      ))}
    </div>
  );
}
