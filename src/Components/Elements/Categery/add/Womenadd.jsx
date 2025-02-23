// In Addproduct.js
import React, { useState } from "react";
import { db } from "../../../../Database/Firebase"; // Import Firebase
import { collection, addDoc } from "firebase/firestore";

const ProductInputForm = ({ category }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categorySelection, setCategorySelection] = useState(category || "Tshirt");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !categorySelection || !description || !image) {
      alert("All fields are required!");
      return;
    }
    try {
      await addDoc(collection(db, "women"), {
        name,
        price: parseFloat(price),
        category: categorySelection,
        description,
        image,
      });
      alert("Product added successfully!");
      setName("");
      setPrice("");
      setDescription("");
      setImage("");
    } catch (error) {
      console.error("Error adding product: ", error);
      alert("Error adding product");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Add a New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter price"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Category</label>
          <select
            value={categorySelection}
            onChange={(e) => setCategorySelection(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            {["Tshirt", "Jacket", "Pants", "Hoodie", "Short"].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter product description"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter image URL"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductInputForm; // Ensure this is exported properly
