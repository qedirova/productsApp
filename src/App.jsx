import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Welcome to our App</h1>
      <Link to="/products">Go to products</Link>
    </div>
  );
}
