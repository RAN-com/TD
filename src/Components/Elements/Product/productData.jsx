import phoneImg from "../../../assets/men.avif";
import shoesImg from "../../../assets/men.avif";
import headphonesImg from "../../../assets/men.avif";
import backpackImg from "../../../assets/men.avif";
import chairImg from "../../../assets/men.avif";

const products = [
  {
    id: 1,
    image: phoneImg,
    name: "Smartphone X",
    price: 699.99,
    description: "A powerful smartphone with an amazing camera.",
    rating: 5,
    category: "Electronics",
    brand: "TechBrand",
    stock: 15,
    specifications: ["128GB Storage", "6GB RAM", "48MP Camera"],
    reviews: [
      { user: "Alice", comment: "Fantastic phone!", rating: 5 },
      { user: "Bob", comment: "Worth the price!", rating: 4 },
    ],
    images: [phoneImg, phoneImg, phoneImg, phoneImg]
  },
  {
    id: 2,
    image: shoesImg,
    name: "Running Shoes",
    price: 59.99,
    description: "Comfortable and stylish running shoes.",
    rating: 4,
    category: "Clothing",
    brand: "Sportify",
    stock: 8,
    specifications: ["Lightweight", "Breathable material", "Non-slip sole"],
    reviews: [
      { user: "Charlie", comment: "Very comfortable!", rating: 5 },
      { user: "Dave", comment: "Good quality but a bit pricey.", rating: 3 },
    ],
    images: [shoesImg, shoesImg, shoesImg, shoesImg]
  },
  {
    id: 3,
    image: headphonesImg,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Noise-canceling headphones with high-fidelity sound.",
    rating: 5,
    category: "Electronics",
    brand: "AudioMaster",
    stock: 20,
    specifications: ["Bluetooth 5.0", "20-hour battery life", "Noise cancellation"],
    reviews: [
      { user: "Eve", comment: "Best headphones ever!", rating: 5 },
      { user: "Frank", comment: "Good but expensive.", rating: 4 },
    ],
    images: [headphonesImg, headphonesImg, headphonesImg, headphonesImg]
  },
  {
    id: 4,
    image: backpackImg,
    name: "Backpack",
    price: 39.99,
    description: "Spacious and durable backpack for everyday use.",
    rating: 4,
    category: "Accessories",
    brand: "PackPro",
    stock: 12,
    specifications: ["Water-resistant", "Multiple compartments", "Adjustable straps"],
    reviews: [
      { user: "Grace", comment: "Very useful!", rating: 4 },
      { user: "Henry", comment: "Comfortable and stylish.", rating: 5 },
    ],
    images: [backpackImg, backpackImg, backpackImg, backpackImg]
  },
  {
    id: 5,
    image: chairImg,
    name: "Office Chair",
    price: 149.99,
    description: "Ergonomic chair with lumbar support and adjustable height.",
    rating: 4,
    category: "Furniture",
    brand: "ComfortSit",
    stock: 10,
    specifications: ["Adjustable height", "Lumbar support", "360-degree swivel"],
    reviews: [
      { user: "Ivy", comment: "Great for long hours!", rating: 5 },
      { user: "Jack", comment: "Good but a bit firm.", rating: 4 },
    ],
    images: [chairImg, chairImg, chairImg, chairImg]
  },
  {
    id: 1,
    image: phoneImg,
    name: "Smartphone X",
    price: 699.99,
    description: "A powerful smartphone with an amazing camera.",
    rating: 5,
    category: "Electronics",
    brand: "TechBrand",
    stock: 15,
    specifications: ["128GB Storage", "6GB RAM", "48MP Camera"],
    reviews: [
      { user: "Alice", comment: "Fantastic phone!", rating: 5 },
      { user: "Bob", comment: "Worth the price!", rating: 4 },
    ],
    images: [phoneImg, phoneImg, phoneImg, phoneImg]
  },
  {
    id: 2,
    image: shoesImg,
    name: "Running Shoes",
    price: 59.99,
    description: "Comfortable and stylish running shoes.",
    rating: 4,
    category: "Clothing",
    brand: "Sportify",
    stock: 8,
    specifications: ["Lightweight", "Breathable material", "Non-slip sole"],
    reviews: [
      { user: "Charlie", comment: "Very comfortable!", rating: 5 },
      { user: "Dave", comment: "Good quality but a bit pricey.", rating: 3 },
    ],
    images: [shoesImg, shoesImg, shoesImg, shoesImg]
  },
  {
    id: 3,
    image: headphonesImg,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Noise-canceling headphones with high-fidelity sound.",
    rating: 5,
    category: "Electronics",
    brand: "AudioMaster",
    stock: 20,
    specifications: ["Bluetooth 5.0", "20-hour battery life", "Noise cancellation"],
    reviews: [
      { user: "Eve", comment: "Best headphones ever!", rating: 5 },
      { user: "Frank", comment: "Good but expensive.", rating: 4 },
    ],
    images: [headphonesImg, headphonesImg, headphonesImg, headphonesImg]
  },
  {
    id: 4,
    image: backpackImg,
    name: "Backpack",
    price: 39.99,
    description: "Spacious and durable backpack for everyday use.",
    rating: 4,
    category: "Accessories",
    brand: "PackPro",
    stock: 12,
    specifications: ["Water-resistant", "Multiple compartments", "Adjustable straps"],
    reviews: [
      { user: "Grace", comment: "Very useful!", rating: 4 },
      { user: "Henry", comment: "Comfortable and stylish.", rating: 5 },
    ],
    images: [backpackImg, backpackImg, backpackImg, backpackImg]
  },
  {
    id: 5,
    image: chairImg,
    name: "Office Chair",
    price: 149.99,
    description: "Ergonomic chair with lumbar support and adjustable height.",
    rating: 4,
    category: "Furniture",
    brand: "ComfortSit",
    stock: 10,
    specifications: ["Adjustable height", "Lumbar support", "360-degree swivel"],
    reviews: [
      { user: "Ivy", comment: "Great for long hours!", rating: 5 },
      { user: "Jack", comment: "Good but a bit firm.", rating: 4 },
    ],
    images: [chairImg, chairImg, chairImg, chairImg]
  },
];

export default products;
