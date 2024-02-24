import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import "./navbar.css";

const Navbar = () => {
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
          <OutlinedFlagIcon className="icon" style={{ fontSize: 30 }} />
          <PersonOutlineIcon className="icon" style={{ fontSize: 30 }} />
          <FavoriteBorderIcon className="icon" style={{ fontSize: 30 }} />
          <ShoppingCartOutlinedIcon className="icon" style={{ fontSize: 30 }} />
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
