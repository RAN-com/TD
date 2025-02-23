import React, { useState } from "react";

import ImageGallery from "../Product/Imagegally";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ProductOverview = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.image);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [trackingStage, setTrackingStage] = useState(null);

  const handlePlaceOrder = () => {
    setOrderSuccess(true);
    setTimeout(() => {
      setTrackingStage("Processing");
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <div className="flex flex-col md:flex-row">
        <ImageGallery 
          mainImage={mainImage} 
          images={product.images} 
          setMainImage={setMainImage} 
        />
        <div className="md:ml-6 md:w-1/2">
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-gray-800 mb-2"><strong>Category:</strong> {product.category}</p>
          <p className="text-gray-800 mb-2"><strong>Brand:</strong> {product.brand}</p>
          <p className="text-gray-800 mb-2"><strong>Stock:</strong> {product.stock} left</p>
          <p className="text-gray-800 mb-4"><strong>Specifications:</strong></p>
          <ul className="list-disc ml-6 text-gray-600">
            {product.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <p className="text-xl font-semibold text-yellow-500 mt-4">${product.price.toFixed(2)}</p>
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 flex items-center gap-2">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
         
           <Link to="/payment-methods" > <button 
            className="mt-4 w-full bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 font-semibold"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button></Link>
       
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
