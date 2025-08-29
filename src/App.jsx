import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <div className="home-page">
        <h1 className="title">Welcome to our App</h1>
        <Link to="/products" className="link">
          Go to products
        </Link>
      </div>
    </div>
  );
}
