import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react"; // Import icons

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      {/* Contact Info Section */}
    

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tulos</h3>
          <p className="text-sm">
            Discover curated furniture collections at Tulos, blending style and comfort to elevate your living spaces.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/about" className="hover:text-gray-400">About us</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact us</a></li>
            <li><a href="/terms" className="hover:text-gray-400">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-gray-400">FAQs</a></li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/mens-fashion" className="hover:text-gray-400">Men's Fashion</a></li>
            <li><a href="/womens-fashion" className="hover:text-gray-400">Women's Fashion</a></li>
            <li><a href="/kids-corner" className="hover:text-gray-400">Kids corner</a></li>
            <li><a href="/tshirt" className="hover:text-gray-400">T-shirt</a></li>
            <li><a href="/accessories" className="hover:text-gray-400">Accessories</a></li>
            <li><a href="/household" className="hover:text-gray-400">Household</a></li>
            <li><a href="/others" className="hover:text-gray-400">Others</a></li>
          </ul>
        </div>
        <div className="bg-gray-700 text-center py-8">
        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
        <p className="text-sm mb-4">Subscribe to our newsletter to receive updates and exclusive offers.</p>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-lg text-sm focus:outline-none"
          />
          <button className="bg-blue-500 text-white p-2 rounded-r-lg text-sm">
            Subscribe
          </button>
        </div>
      </div>
      </div>

      {/* Newsletter Section */}
     

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 text-gray-400 hover:text-gray-200 transition-all" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 text-gray-400 hover:text-gray-200 transition-all" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6 text-gray-400 hover:text-gray-200 transition-all" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <Youtube className="w-6 h-6 text-gray-400 hover:text-gray-200 transition-all" />
        </a>
      </div>
    </footer>
  );
}
