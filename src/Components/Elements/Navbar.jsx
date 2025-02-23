import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X, MapPin, Heart } from "lucide-react"; // Add Heart import
import { Link } from "react-router-dom"; // Import Link for navigation
import Logo from '../../assets/TD1.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLocation, setShowLocation] = useState(false); // Controls address input on mobile

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex w-full h-24 justify-between items-center bg-gray-300 shadow-md px-10">
        <div className="text-center text-2xl font-bold flex gap-16 justify-center items-center">
          <Link to="/">
            <img src={Logo} className="w-40 h-40" />
          </Link>

          {/* Address Input (Desktop) */}
          <div className="relative flex items-center space-x-2 border rounded-full px-4 py-2 shadow-sm">
            <MapPin className="w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Enter your location"
              className="w-48 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="flex font-bold items-center space-x-6">
          <Link to="/home" className="relative hover:text-red-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
            Home
          </Link>
          <Link to="/Categories" className="relative hover:text-red-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
            Categories
          </Link>
          <Link to="/contact" className="relative hover:text-red-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          {/* Search Input (Desktop) */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full px-6 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Link to="/user">
            <User className="w-6 h-6 cursor-pointer" />
          </Link>
          {/* Heart Icon for Wishlist */}
          <Link to="/favorites">
            <Heart className="w-6 h-6 cursor-pointer text-gray-500 hover:text-red-500" />
          </Link>
          <Link to="/cart">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden w-full h-24 bg-gray-300 shadow-md flex justify-between items-center px-4 py-3">
        {/* Mobile Search Toggle */}
        <button onClick={() => setShowSearch(!showSearch)}>
          <Search className="w-6 h-6 cursor-pointer" />
        </button>

        <Link to="/" className="text-xl font-bold">
          <img src={Logo} className="w-40 h-40" />
        </Link>

        <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(true)} />
      </div>

      {/* Mobile Search Bar (Slide Down) */}
      {showSearch && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={() => setShowSearch(false)}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      )}

      {/* Mobile Address Input (Slide Down) */}
      {showLocation && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 flex items-center space-x-2">
          <MapPin className="w-6 h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Enter your location"
            className="w-full border rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={() => setShowLocation(false)}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      )}

      {/* Side Navigation (Mobile) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="text-right">
            <button className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>
          <nav className="flex flex-col space-y-3 mt-4">
            <Link to="/" className="text-lg">Home</Link>
            <Link to="/products" className="text-lg">Products</Link>
            <Link to="/contact" className="text-lg">Contact</Link>
          </nav>
        </div>
      </aside>

      {/* Bottom Navigation (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around py-2">
        <User className="w-6 h-6 cursor-pointer" />
        <button onClick={() => setShowLocation(!showLocation)}>
          <MapPin className="w-6 h-6 cursor-pointer" />
        </button>
        <ShoppingCart className="w-6 h-6 cursor-pointer" />
        {/* Mobile Heart Icon */}
        <Link to="/favorites">
          <Heart className="w-6 h-6 cursor-pointer text-gray-500 hover:text-red-500" />
        </Link>
      </div>
    </>
  );
}
