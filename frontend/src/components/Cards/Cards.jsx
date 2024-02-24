import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./cards.css";

const Cards = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products?category=${category}`
        );
        setProducts(response.data.results);
        console.log("response", response.data.results);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [category]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.defaultArticle.images[0].url}
            alt={product.defaultArticle.name}
          />
          {/* <p> Category {product.categoryName}</p> */}
          <div className="product-info">
            <h3>{product.articles[0].name}</h3>
            <p>${product.whitePrice.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Cards.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Cards;
