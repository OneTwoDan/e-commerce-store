import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./cards.css";
import Loading from "../../assets/images/loading.gif";
import ProductsContext from "../../context/ProductContext";

/* import data from "../../data/data.json"; */

const Cards = ({ category }) => {
  const { products, loading, fetchProductsByCategory } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchProductsByCategory(category);
  }, [category, fetchProductsByCategory]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

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
          <Link to={`/details/${product.pk}`} className="link-style">
            <img
              src={product.defaultArticle.images[0].url}
              alt={product.defaultArticle.name}
            />
            <div className="product-info">
              <h3>{product.articles[0].name}</h3>
              <p>${product.whitePrice.value}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

Cards.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Cards;
