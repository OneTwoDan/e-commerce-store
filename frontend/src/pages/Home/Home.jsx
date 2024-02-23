import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar";
import Beauty from "../../assets/images/beauty.png";
import Kidswear from "../../assets/images/kidswear.png";
import Logo from "../../assets/images/logo.png";
import Shopmen from "../../assets/images/shop_men.png";
import Shopwomen from "../../assets/images/shop_women.png";
import "./home.css";

const Home = () => {
  return (
    <div>
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
        <img className="store-title" src={Logo} alt="logo" />
        <div className="icon-container">
          <div className="icons">
            <OutlinedFlagIcon className="icon" style={{ fontSize: 30 }} />
            <PersonOutlineIcon className="icon" style={{ fontSize: 30 }} />
            <FavoriteBorderIcon className="icon" style={{ fontSize: 30 }} />
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{ fontSize: 30 }}
            />
          </div>
          <div className="search-bar">
            <SearchBar />
          </div>
        </div>
      </div>
      <h2 className="department">Choose a department</h2>
      <div className="pictures">
        <img className="picture" src={Beauty} alt="beauty" />
        <img className="picture" src={Shopwomen} alt="Shopwomen" />
        <img className="picture" src={Shopmen} alt="shopmen" />
        <img className="picture" src={Kidswear} alt="kidswear" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
