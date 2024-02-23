import { useState, useEffect } from "react";

const ProductPage = ({ category }) => {
  const [currentCategory, setCurrentCategory] = useState(category);

  useEffect(() => {}, [currentCategory]);

  return <div>ProductPage</div>;
};

export default ProductPage;
