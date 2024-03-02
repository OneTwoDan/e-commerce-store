import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "../../components/SearchBar";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");

    if (storedBasket) {
      const parsedBasket = JSON.parse(storedBasket);
      const itemsQuantity = parsedBasket.map((item) => item.quantity);

      const totalQuantity = itemsQuantity.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      setCartItemCount(totalQuantity);
    }
  }, []);

  return (
    <div className="container">
      <div className="category-menu">
        <Link to="/women" className="category">
          Women
        </Link>
        <Link to="/men" className="category">
          Men
        </Link>
        <Link to="/kids" className="category">
          Kids
        </Link>
        <Link to="/beauty" className="category">
          Beauty
        </Link>
      </div>
      <Link to="/">
        <img className="store-title" src={Logo} alt="logo" />
      </Link>
      <div className="icon-container">
        <div className="icons">
          <PersonOutlineIcon className="icon" style={{ fontSize: 30 }} />
          <FavoriteBorderIcon className="icon" style={{ fontSize: 30 }} />
          <Link to="/basket">
            <Badge badgeContent={cartItemCount} color="secondary">
              <ShoppingCartOutlinedIcon
                className="icon"
                style={{ fontSize: 30 }}
              />
            </Badge>
          </Link>
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
