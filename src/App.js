import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
// import Cart from "./pages/cart/Cart";
import HomePage from "./pages/home/HomePage";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import CategoryShirt from "./pages/categoryShirt/CategoryShirt";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/categoryShirt" element={<CategoryShirt />} />
    </Routes>
  );
}

export default App;
