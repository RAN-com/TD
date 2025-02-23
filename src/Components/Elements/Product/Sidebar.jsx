import React, { useState } from 'react';

const Sidebar = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState('lowToHigh');

  const categories = ['Electronics', 'Clothing', 'Books', 'Furniture'];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange({ priceRange, category: e.target.value, sortOrder });
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
    onFilterChange({ priceRange, category: selectedCategory, sortOrder: e.target.value });
  };

  return (
    <div>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsMobileSidebarVisible(true)}
        className="lg:hidden font-semibold mt-4 p-2 bg-gray-300 rounded-lg hover:bg-gray-400"
      >
        Filters
      </button>

      {/* Mobile Sidebar (Overlay & Slide-in) */}
      {isMobileSidebarVisible && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          <div className="w-3/4 max-w-xs bg-white p-4 shadow-lg transform translate-x-0 transition-transform">
            <h3 className="font-semibold text-xl mb-4">Filters</h3>

            {/* Category Filter */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Category</h4>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full bg-white p-2 rounded-lg border border-gray-300"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Order */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Sort by Price</h4>
              <select
                value={sortOrder}
                onChange={handleSortOrderChange}
                className="w-full bg-white p-2 rounded-lg border border-gray-300"
              >
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsMobileSidebarVisible(false)}
              className="w-full p-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Close Filters
            </button>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:w-60 p-4 bg-gray-100 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-4">Filters</h3>

        {/* Category Filter */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Category</h4>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full bg-white p-2 rounded-lg border border-gray-300"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Order */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Sort by Price</h4>
          <select
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="w-full bg-white p-2 rounded-lg border border-gray-300"
          >
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
