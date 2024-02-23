import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/women"
            element={<ProductPage category="women" />}
          />
          <Route exact path="/men" element={<ProductPage category="men" />} />
          <Route exact path="/kids" element={<ProductPage category="kids" />} />
          <Route
            exact
            path="/beauty"
            element={<ProductPage category="beauty" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
