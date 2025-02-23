import React, { useState, useEffect, useMemo } from "react";
import { db } from "../../../../Database/Firebase"; // Import Firebase
import ProductCard from "../../Product/ProductCard";

const Mens = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "", image: "" });

  useEffect(() => {
    const fetchProducts = async () => {
      const productsSnapshot = await db.collection("mens").get(); // Ensure "mens" collection is correct
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    };
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.image) return;
    await db.collection("mens").add(newProduct);
    setNewProduct({ name: "", category: "", price: "", image: "" });
  };

  // Memoized filter and sort logic
  const filteredProducts = useMemo(() => {
    let result = products.filter(
      (product) => selectedCategory === "All" || product.category === selectedCategory
    );

    if (sortOrder === "lowToHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategory, sortOrder]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Best Men's Clothing Collection</h2>
      <p className="text-center text-gray-600 mb-6">
        Discover the best styles for men – from casual wear to stylish outerwear, find everything you need in one place.
      </p>

      {/* Product Input Form */}
      <form onSubmit={addProduct} className="mb-6 p-4 border rounded-md">
        <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} className="block mb-2 p-2 border rounded w-full" required />
        <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleInputChange} className="block mb-2 p-2 border rounded w-full" required />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} className="block mb-2 p-2 border rounded w-full" required />
        <input type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleInputChange} className="block mb-2 p-2 border rounded w-full" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Product</button>
      </form>

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

export default Mens;