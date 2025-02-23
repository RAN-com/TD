import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./bill/Heart/Heart";  // Adjust path if needed
import CartButton from "./bill/Cart/Cart";      // Adjust path if needed
import products from "./productData";
import ReviewSummary from "./Review/ReviewSummary"; // Import ReviewSummary component

const ProductCard = ({ product, favorites, toggleFavorite, addToCart }) => {
  return (
    <div className="w-80 relative shadow-lg mx-auto bg-gray-100 p-6 rounded-xl">
      <div className="absolute top-5 left-0 bg-red-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-r-lg">
        Hot
      </div>
      <div className="flex justify-center items-center h-40 bg-gray-200 p-2 rounded-lg">
        <img src={product.image} alt={product.name} className="max-w-full max-h-full" />
      </div>
      <div className="mt-6">
        <span className="block text-xs font-bold uppercase text-gray-400 mb-2">
          {product.category}
        </span>
        <h4 className="text-lg font-medium uppercase text-gray-800 hover:text-yellow-500 transition">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed my-3">
          {product.description}
        </p>
        
        {/* Display Review Summary */}
        <ReviewSummary reviews={product.reviews} />

        <div className="flex justify-between items-center border-t pt-4 mt-4">
          <div className="text-lg font-semibold text-yellow-500">
            <small className="text-sm font-normal text-gray-500 line-through mr-2">
              ${(product.price - 50).toFixed(2)}
            </small>
            ${product.price.toFixed(2)}
          </div>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <FavoriteButton product={product} favorites={favorites} toggleFavorite={toggleFavorite} />
            <CartButton product={product} addToCart={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
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
