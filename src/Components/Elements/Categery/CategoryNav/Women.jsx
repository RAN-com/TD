import React, { useState, useEffect } from "react";
import { db } from "../../../../Database/Firebase"; // Import Firebase
import ProductCard from "../../Product/ProductCard";

const Women = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(""); // Sorting: high-low or low-high

  useEffect(() => {
    const fetchProducts = async () => {
      const productsSnapshot = await db.collection("product").get();
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    };
    fetchProducts();
  }, []);

  // Filter products based on selected category
  let filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  // Sort products based on selected sorting order
  if (sortOrder === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Best Mens Clothing Collection</h2>
      <p className="text-center text-gray-600 mb-6">
        Find everything you need to look and feel your best, and shop the latest women's fashion and lifestyle products.
      </p>

      {/* Category Tabs + Sorting */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        {/* Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar space-x-4 px-2 sm:px-0">
          {["All", "Tshirt", "Jacket", "Pants", "Hoodie", "Short"].map((name) => (
            <button
              key={name}
              onClick={() => setSelectedCategory(name)}
              className={`px-4 py-2 rounded-md font-semibold flex-shrink-0 ${
                selectedCategory === name ? "bg-black text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Sorting Dropdown */}
        <div className="relative">
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-semibold"
          >
            <option value="">Sort by Price</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-6 px-5">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Women;
