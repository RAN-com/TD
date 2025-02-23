import React, { useState, useEffect } from "react";
import ReviewSummary from "./ReviewSummary";
import UserReviews from "./UserReviews";
import UserReviewForm from "./UserReviewForm";

const CustomerReviews = ({ product }) => {
  const [activeTab, setActiveTab] = useState("summary");
  const [reviews, setReviews] = useState([]); // State to manage reviews
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check if screen is mobile

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to add a new review
  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="mt-2 px-2 sm:px-6 lg:px-32">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 border-b-2 mb-4">
        <button
          className={`px-3 sm:px-4 py-2 ${
            activeTab === "description"
              ? "border-b-4 border-yellow-500 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("description")}
        >
         Description
        </button>
        <button
          className={`px-3 sm:px-4 py-2 ${
            activeTab === "summary"
              ? "border-b-4 border-yellow-500 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("summary")}
        >
          Overview
        </button>
        <button
          className={`px-3 sm:px-4 py-2 ${
            activeTab === "reviews"
              ? "border-b-4 border-yellow-500 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          User Reviews
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "summary" ? (
        <div className="p-6 sm:p-10 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
            <ReviewSummary reviews={reviews} />
          </div>
        </div>
      ) : activeTab === "reviews" ? (
        <>
          {/* Mobile View: Stacked Layout */}
          {isMobile ? (
            <div className="flex flex-col space-y-6">
              <div className="w-full">
                <UserReviewForm addReview={addReview} />
              </div>
              <div className="w-full">
                <UserReviews reviews={reviews} />
              </div>
            </div>
          ) : (
            // Desktop View: Side-by-Side Layout
            <div className="sm:p-10 flex flex-col md:flex-row md:space-x-6 justify-center">
              <div className="w-auto md:w-1/2">
                <UserReviewForm addReview={addReview} />
              </div>
              <div className="w-auto md:w-1/2">
                <UserReviews reviews={reviews} />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="p-6 sm:p-10 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
            <h3 className="text-2xl font-bold mb-4">Product Description</h3>
            <p className="text-gray-800 mb-2">
              {product?.description || "No description available."}
            </p>
            <p className="text-gray-800">
              <strong>Category:</strong> {product?.category || "N/A"}
            </p>
            <p className="text-gray-800">
              <strong>Brand:</strong> {product?.brand || "N/A"}
            </p>
            <p className="text-gray-800">
              <strong>Stock:</strong>{" "}
              {product?.stock !== undefined ? product.stock : "N/A"} left
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;
