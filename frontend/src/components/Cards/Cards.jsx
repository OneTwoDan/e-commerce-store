import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./cards.css";

import Loading from "../../assets/images/loading.gif";

const Cards = ({ category }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/${category}`
        );
        setProducts(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="loading-container">
        <img src={Loading} alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.pk} className="product-card">
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
