import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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

  console.log("basketItems", basketItems);
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
              {basketItems.map((item, index) => (
                <div key={index} className="item-summary">
                  <div className="product-basket-image">
                    <img
                      src={item.defaultArticle.images[0].url}
                      alt={item.defaultArticle.name}
                    />
                  </div>
                  <div className="item-details">
                    <p>{item.articles[0].name}</p>
                    <p> Size: {item.selectedSize}</p>
                    <p>{item.whitePrice.value}</p>
                    <p>{item.quantity}</p>
                    <p>ID: {item.pk}</p>
                    <IconButton>
                      <CloseIcon />
                    </IconButton>
                  </div>
                </div>
              ))}
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
