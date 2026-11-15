
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import TShirts from "./pages/TShirts";
import Gadgets from "./pages/Gadgets";
import Sneaker from "./pages/Sneaker";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Shop All */}
        <Route path="shop" element={<Shop />} />

        {/* Product Details */}
        <Route
          path="product-details"
          element={<ProductDetails />}
        />

        {/* Categories */}
        <Route
          path="categories/t-shirts"
          element={<TShirts />}
        />

        <Route
          path="categories/gadgets"
          element={<Gadgets />}
        />

        <Route
          path="categories/sneaker"
          element={<Sneaker />}
        />

        {/* About */}
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}