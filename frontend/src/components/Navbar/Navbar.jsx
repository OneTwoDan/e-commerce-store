import PropTypes from "prop-types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "../../components/SearchBar";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import "./navbar.css";

const Navbar = ({ cartItemsCount }) => {
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
          <div>
            <PersonOutlineIcon className="icon" style={{ fontSize: 30 }} />
          </div>
          <div>
            <FavoriteBorderIcon className="icon" style={{ fontSize: 30 }} />
          </div>
          <Link to="/basket">
            <Badge badgeContent={cartItemsCount} color="secondary">
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

Navbar.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
};

export default Navbar;
