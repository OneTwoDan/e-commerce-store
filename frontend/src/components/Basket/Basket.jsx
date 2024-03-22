import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "./basket.css";

const Basket = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
      setBasketItems(JSON.parse(storedBasket));
    }
    const totalItems = basketItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );
    setCartItemCount(totalItems);
  }, [basketItems]);

  const calculateSubtotal = () => {
    let subtotal = 0;
    for (let item of basketItems) {
      if (item.price.value && item.quantity) {
        subtotal += parseFloat(item.price.value) * item.quantity;
      }
    }
    return subtotal.toFixed(2);
  };

  const delivery = 25;

  const removeItem = (index) => {
    const updatedBasket = [...basketItems];
    updatedBasket.splice(index, 1);
    setBasketItems(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity >= 1) {
      const updatedBasket = [...basketItems];
      updatedBasket[index].quantity = newQuantity;
      setBasketItems(updatedBasket);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
    }
  };

  return (
    <div className="basket-container">
      <Navbar cartItemsCount={cartItemCount} />
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
                  <Link to={`/details/${item.pk}`}>
                    <div className="product-basket-image">
                      <img
                        src={item.defaultArticle.images[0].url}
                        alt={item.defaultArticle.name}
                      />
                    </div>
                  </Link>
                  <div className="item-details">
                    <div>
                      <p>{item.articles[0].name}</p>
                      <p>Store ID: {item.pk}</p>
                    </div>
                    <div>
                      <p>$ {item.whitePrice.value}</p>
                    </div>

                    <div className="quantity-selector">
                      <div>Quantity</div>
                      <Button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <IconButton onClick={() => removeItem(index)}>
                    <CloseIcon />
                  </IconButton>
                </div>
              ))}
            </div>
            <div className="summary">
              <h2>Summary</h2>
              <div className="total">
                <p>
                  <span>Subtotal</span>
                  <span>$ {calculateSubtotal()}</span>
                </p>
                <p>
                  <span>Delivery</span>
                  <span>$ {delivery}.00</span>
                </p>
                <p>
                  <span>Total</span>
                  <span>
                    ${" "}
                    {(
                      parseFloat(calculateSubtotal()) + parseFloat(delivery)
                    ).toFixed(2)}
                  </span>
                </p>

                <Button variant="contained" className="checkout">
                  Go To Checkout
                </Button>
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
