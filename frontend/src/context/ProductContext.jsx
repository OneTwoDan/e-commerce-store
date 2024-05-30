import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await fetch(
        `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=28&categories=${getCategory(
          category
        )}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "e7e6150844msh698703697b873c9p1dad23jsn50d82dd9f8ac",
            "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      setProducts(data.results);
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

function getCategory(category) {
  switch (category) {
    case "women":
      return "ladies_all";
    case "men":
      return "men_all";
    case "kids":
      return "kids_all";
    case "beauty":
      return "beauty_all";
    default:
      throw new Error("Invalid category");
  }
}
