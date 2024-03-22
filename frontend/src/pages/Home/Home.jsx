import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Beauty from "../../assets/images/beauty.png";
import Kidswear from "../../assets/images/kidswear.png";
import Shopmen from "../../assets/images/shop_men.png";
import Shopwomen from "../../assets/images/shop_women.png";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div id="top"></div>
      <Navbar />
      <h2 className="department">Choose a department</h2>
      <div className="pictures">
        <a href="/beauty">
          <img className="picture" src={Beauty} alt="beauty" />
        </a>
        <a href="/women">
          <img className="picture" src={Shopwomen} alt="Shopwomen" />
        </a>
        <a href="/men">
          <img className="picture" src={Shopmen} alt="shopmen" />
        </a>
        <a href="/kids">
          <img className="picture" src={Kidswear} alt="kidswear" />
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
