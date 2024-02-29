import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsProvider } from "../src/context/ProductContext";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductsProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/women"
              element={<ProductPage category="women" />}
            />
            <Route exact path="/men" element={<ProductPage category="men" />} />
            <Route
              exact
              path="/kids"
              element={<ProductPage category="kids" />}
            />
            <Route
              exact
              path="/beauty"
              element={<ProductPage category="beauty" />}
            />
            <Route exact path="/details/:id" element={<Details />} />
          </Routes>
        </ProductsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
