import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";

const ProductPage = ({ category }) => {
  const [currentCategory, setCurrentCategory] = useState(category);

  useEffect(() => {
    setCurrentCategory(category);
  }, [category]);

  return (
    <div>
      <Navbar />
      <Cards category={currentCategory} />
      <Footer />
    </div>
  );
};

ProductPage.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductPage;
