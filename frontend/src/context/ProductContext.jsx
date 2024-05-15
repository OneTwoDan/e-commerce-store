import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products/${category}`
      );
      setProducts(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, loading, fetchProductsByCategory }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node,
};

export default ProductsContext;
