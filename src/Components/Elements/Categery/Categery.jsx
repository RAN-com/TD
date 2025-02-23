import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import men from '../../../assets/men.avif';
import women from '../../../assets/women.avif';
import kids from '../../../assets/kids.jpg';
import nutrition from '../../../assets/nutrition.jpg';
import electronics from '../../../assets/loptop.jpg';
import foods from '../../../assets/foods.avif'

const categories = [
  { name: "Men", image: men, path: "/men" },
  { name: "Women", image: women, path: "/women" },
  { name: "Kids", image: kids, path: "/kids" },
  { name: "Electronics", image: electronics, path: "/electronics" },
  { name: "Nutrition", image: nutrition, path: "/nutrition" },
  { name: "Foods", image: foods, path: "/foods" },

];

export default function Categories() {
  return (
    <section className="py-10 justify-center items-center">
      <h2 className="text-4xl underline font-bold text-center mb-8">Shop by Category</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 md:px-10">
        {categories.map((category, index) => (
        <div
        key={index}
        className="flex flex-col  items-center justify-center text-center bg-gray-300 shadow-lg rounded-lg p-4 cursor-pointer"
      >
        <Link to={category.path} className="block w-full flex flex-col items-center">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
          <h3 className="text-lg font-semibold mt-2">{category.name}</h3>
        </Link>
      </div>
      
        ))}
      </div>
    </section>
  );
}