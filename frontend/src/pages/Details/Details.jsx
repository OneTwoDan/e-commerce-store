import { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductsContext from "../../context/ProductContext";

import "./details.css";

const Details = () => {
  const { products } = useContext(ProductsContext);
  const { id } = useParams();

  const product = products.find((product) => product.pk === id);
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 15);

  const formatDeliveryDate = (date) => {
    const options = { month: "long", day: "numeric" };
    const firstDay = date.toLocaleDateString("en-US", options);
    const secondDay = new Date(
      date.getTime() + 24 * 60 * 60 * 1000
    ).toLocaleDateString("en-US", { day: "numeric" });
    return `${firstDay} - ${secondDay}`;
  };

  return (
    <div className="details-container">
      <Navbar />
      <div className="product-image">
        <img
          src={product.defaultArticle.images[0].url}
          alt={product.defaultArticle.name}
        />
      </div>

      <div className="product-details">
        <div className="product-title">
          <div className="product-season">New Season</div>
          <h3>{product.articles[0].name}</h3>
        </div>
        <div className="product-price">
          <p>${product.whitePrice.value}</p>
          <p>Import duties included</p>
        </div>
        <div className="product-sizes">
          {product.variantSizes.map((size, index) => (
            <li key={index}>{size.filterCode}</li>
          ))}
        </div>
        <div className="product-buttons">
          <button>Add to bag</button>
          <button>Wishlist</button>
        </div>
        <p className="delivery-date">
          ESTIMATED DELIVERY {formatDeliveryDate(deliveryDate)}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
