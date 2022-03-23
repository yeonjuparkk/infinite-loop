import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCategory } from "../axios-services/index";
import "../style/Collections.css";

const LargePlants = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);

  const handleProducts = async () => {
    const fetchedProducts = await fetchCategory("largeplants");
    setProducts(fetchedProducts);
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div>
      <h1>Large Plants</h1>
      {products.map((product) => {
        const { id, name, price, photo } = product;
        return (
          <div>
            <Link to={`/products/${id}`} style={{textDecoration: "none"}}>
                <img className="collection-img" src={photo} />
                <p>{name}</p>
            </Link>
            <p>${price}</p>
            <button
              onClick={() => {
                handleAddToCart(id);
              }}
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default LargePlants;
