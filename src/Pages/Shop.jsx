import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import men from '../assets/men.avif';
import women from '../assets/women.avif';
import kids from '../assets/kids.jpg';
import nutrition from '../assets/nutrition.jpg';
import electronics from '../assets/loptop.jpg';
import foods from '../assets/foods.avif';
import furniture from '../assets/men.avif';
import beauty from '../assets/men.avif';
import sports from '../assets/men.avif';
import books from '../assets/men.avif';
import toys from '../assets/men.avif';
import footwear from '../assets/men.avif';

const categories = [
  { name: "Men", image: men, path: "/men" },
  { name: "Women", image: women, path: "/women" },
  { name: "Kids", image: kids, path: "/kids" },
  { name: "Electronics", image: electronics, path: "/electronics" },
  { name: "Nutrition", image: nutrition, path: "/nutrition" },
  { name: "Foods", image: foods, path: "/foods" },
  { name: "Furniture", image: furniture, path: "/furniture" },
  { name: "Beauty", image: beauty, path: "/beauty" },
  { name: "Sports", image: sports, path: "/sports" },
  { name: "Books", image: books, path: "/books" },
  { name: "Toys", image: toys, path: "/toys" },
  { name: "Footwear", image: footwear, path: "/footwear" },
];

export default function Shop() {
  return (
    <section className="py-10 justify-center">
      {/* Shop Name */}
      <h2 className="text-4xl font-bold text-center mb-4">Our Store</h2>
      <p className="text-center text-gray-600 mb-8">Explore our 12 shop categories!</p>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 md:px-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-lg p-4 cursor-pointer"
          >
            <Link to={category.path} className="block w-full">
              <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
