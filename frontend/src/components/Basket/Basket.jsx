import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";

import "./basket.css";

const Basket = () => {
  return (
    <div className="basket-container">
      <Navbar />
      <div className="basket-content">
        <h1>SHOPPING BAG</h1>
        <div className="empty-basket">
          <p>
            Your shopping bag is currently empty. Explore our wide selection of
            products and <br /> add items to start filling it up with your
            favorite goodies!
          </p>
          <Button variant="contained" className="add-bag">
            Keep Browsing
          </Button>
        </div>
        <div className="full-basket">Esta full</div>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
