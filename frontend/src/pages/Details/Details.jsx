import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./details.css";

const Details = () => {
  /* const { products } = useContext(ProductsContext); */
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const storedProductsJSON = localStorage.getItem("products");
    if (storedProductsJSON) {
      const storedProducts = JSON.parse(storedProductsJSON);
      const foundProduct = storedProducts.find((prod) => prod.pk === id);
      setProduct(foundProduct);
    }
  }, [id]);

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

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="details-container">
        <div className="product-image">
          <img
            src={product.defaultArticle.images[0].url}
            alt={product.defaultArticle.name}
          />
        </div>

        <div className="product-details">
          <div className="product-title">
            <div className="product-season">New Season</div>
            <div>
              <h3>{product.articles[0].name}</h3>
            </div>
          </div>
          <div className="product-price">
            <p>$ {product.whitePrice.value}</p>
            <p>Import duties included</p>
          </div>
          <div className="product-buttons">
            {product.variantSizes.length === 0 && (
              <div>{"One Size available"}</div>
            )}
            {product.variantSizes.length > 0 && (
              <div className="custom-form-control">
                <FormControl sx={{ m: 1, minWidth: 362 }}>
                  <InputLabel id="product-sizes-label">Size</InputLabel>
                  <Select
                    labelId="product-sizes-label"
                    id="product-sizes-select"
                    value={selectedSize}
                    label="Size"
                    onChange={handleSizeChange}
                  >
                    {product.variantSizes.map((size, index) => (
                      <MenuItem key={index} value={size.filterCode}>
                        {size.filterCode}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}

            <div className="buttons-details">
              <Button variant="contained" className="add-bag">
                Add to bag
              </Button>
              <Button
                variant="outlined"
                endIcon={<FavoriteIcon />}
                className="wishlist"
              >
                Wishlist
              </Button>
            </div>
          </div>

          <div className="delivery-date">
            <span className="delivery-text">ESTIMATED DELIVERY</span>
            <br />
            <span className="delivery-variable">
              {formatDeliveryDate(deliveryDate)}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
