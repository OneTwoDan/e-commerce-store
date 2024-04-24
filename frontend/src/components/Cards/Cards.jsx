import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./cards.css";
import Loading from "../../assets/images/loading.gif";
import ProductsContext from "../../context/ProductContext";

/* import data from "../../data/data.json"; */

const Cards = ({ category }) => {
  const { products, loading, fetchProductsByCategory } =
    useContext(ProductsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    fetchProductsByCategory(category);
  }, [category, fetchProductsByCategory]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="loading-container">
        <img src={Loading} alt="Loading..." />
      </div>
    );
  }

  return (
    <>
      <div className="pagination">
        {Array.from({
          length: Math.ceil(products.length / productsPerPage),
        }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <div className="product-list">
        {currentProducts.map((product) => (
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
    </>
  );
};

Cards.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Cards;
