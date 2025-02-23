import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Layout & UI Components
import Navbar from "./Components/Elements/Navbar";
import Footer from "./Components/Elements/Footer";
import Layout from "./Layout/Layout";

// Pages
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Products from "./Pages/About";
import ContactInfo from "./Pages/Contact";

// Product Components
import ProductList from "./Components/Elements/Product/ProductList";
import ProductDetails from "./Components/Elements/Product/ProductAbout";
import AddProductForm from "./Components/Elements/Categery/add/Womenadd";

// Category Components
import Categories from "./Components/Elements/Categery/Categery";
import Men from "./Components/Elements/Categery/CategoryNav/Mens";
import Women from "./Components/Elements/Categery/CategoryNav/Women"; // Fixed duplicate path
import Kids from "./Components/Elements/Categery/CategoryNav/Kids";

// Cart & Favorites Screens
import CartScreen from "./Components/Elements/Product/bill/Cart/CartScreen";
import FavoritesScreen from "./Components/Elements/Product/bill/Heart/FavoritesScreen";

// Product Data
import products from "./Components/Elements/Product/productData";
import PaymentMethods from "./Components/Elements/Product/Payment";
import TrackingStatus from "./Components/Elements/Product/Tracking";

function App() {
  // State for Cart & Favorites
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  // Toggle Favorite Function
  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Add to Cart Function
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/contact" element={<ContactInfo />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<Products />} />

        {/* Categories */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />

        {/* Products */}
        <Route path="/products" element={<ProductList favorites={favorites} toggleFavorite={toggleFavorite} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/add" element={<AddProductForm />} />

        {/* Cart & Favorites */}
        <Route path="/cart" element={<CartScreen cart={cart} />} />
        <Route path="/favorites" element={<FavoritesScreen products={products} favorites={favorites} />} />

        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/tracking-status" element={<TrackingStatus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
