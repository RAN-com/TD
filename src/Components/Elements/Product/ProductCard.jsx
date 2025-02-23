import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./bill/Heart/Heart";
import CartButton from "./bill/Cart/Cart";
import products from "./productData";
import ReviewSummary from "./Review/ReviewSummary";

const ProductCard = ({ product, favorites, toggleFavorite, addToCart }) => {
  return (
    <div className="relative w-40 sm:w-80 md:w-60 lg:w-60 h-80 shadow-lg mx-auto rounded-xl overflow-hidden group transition-transform duration-300 hover:scale-105">
      {/* Background Image */}
  
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${product.image || "/images/placeholder.jpg"})` }}
        >
          <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition-opacity"></div>
        </div> 

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
          {/* Hot Badge */}
          <div className="absolute top-2 left-0 bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded-r-lg">
            Hot sale
          </div>
       
          {/* Category & Name */}
          <div className="mt-36">
          <Link to={`/product/${product.id}`}>
            <span className="block text-xs font-bold uppercase mb-1 transition-all duration-300 group-hover:text-yellow-300">
              {product.category}
            </span>
            <h4 className="text-lg font-medium uppercase transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-105">
              {product.name}
            </h4>
        

          {/* Review Summary */}
          <ReviewSummary reviews={product.reviews} />
          </Link>
          {/* Price & Buttons */}
          <div className="flex justify-between items-center border-t border-white/30 pt-2 mt-2">
            {/* Price */}
            <div className="text-lg font-semibold text-yellow-400 transition-all duration-300 group-hover:text-yellow-500 group-hover:scale-110">
              ${product.price.toFixed(2)}
            </div>

            {/* Favorite & Cart Buttons */}
            <div className="flex space-x-3 opacity-100 sm:opacity-90 sm:group-hover:opacity-100 transition-opacity duration-300">
              <FavoriteButton product={product} favorites={favorites} toggleFavorite={toggleFavorite} />
              <CartButton product={product} addToCart={addToCart} />
            </div>  </div>
          </div>
        </div>
   
    </div>
  );
};

const ProductList = () => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div
      className={
        isMobile
          ? "grid grid-cols-2 gap-4 p-4"
          : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6"
      }
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
