import React from "react";

const ReviewSummary = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p className="text-gray-600">No reviews yet.</p>;
  }

  const totalReviews = reviews.length;
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;

  return (
    <div className="mb-2">
  
      <p className="text-yellow-500 text-xl">{"⭐".repeat(Math.round(averageRating))}</p>
     
    </div>
  );
};

export default ReviewSummary;
