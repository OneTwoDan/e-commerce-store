import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";

import "./basket.css";

const Basket = () => {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
      setBasketItems(JSON.parse(storedBasket));
    }
  }, []);

  const calculateSubtotal = () => {
    let subtotal = 0;
    for (let item of basketItems) {
      if (item.price.value && item.quantity) {
        subtotal += item.price.value * item.quantity;
      }
    }
    return subtotal;
  };

  const delivery = 25.0;

  return (
    <div className="basket-container">
      <Navbar />
      <div className="basket-content">
        <h1>SHOPPING BAG</h1>
        {basketItems.length === 0 ? (
          <div className="empty-basket">
            <p>
              Your shopping bag is currently empty. Explore our wide selection
              of products and <br /> add items to start filling it up with your
              favorite goodies!
            </p>
            <Button variant="contained" className="add-bag">
              Keep Browsing
            </Button>
          </div>
        ) : (
          <div className="full-basket">
            <div className="basket-items">
              <ul>
                {basketItems.map((item, index) => (
                  <li key={index}>
                    <strong>{item.articles[0].name}</strong> - Size:{" "}
                    {item.selectedSize}
                  </li>
                ))}
              </ul>
            </div>
            <div className="summary">
              <h2>Summary</h2>
              <div className="total">
                <p>
                  <span>Subtotal</span>
                  <span>{calculateSubtotal()}</span>
                </p>
                <p>
                  <span>Delivery</span>
                  <span>$ {delivery}.00</span>
                </p>
                <p>
                  <span>Total</span>
                  <span>$ {calculateSubtotal() + delivery}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
