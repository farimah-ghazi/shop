import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
// import Cart from "./pages/cart/Cart";
import HomePage from "./pages/home/HomePage";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import CategoryShirt from "./pages/categoryShirt/CategoryShirt";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/product"
        element={<Product cart={cart} setCart={setCart} />}
      />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route path="/categoryShirt" element={<CategoryShirt />} />
    </Routes>
  );
}

export default App;
