import React from "react";

const UserReviews = ({ reviews }) => {
  return (
    <div className="mt-6 w-96">
      <h3 className="text-2xl font-bold mb-4">User Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4">
            <p className="text-gray-800 font-bold">{review.user} ({review.email})</p>
            <p className="text-gray-600 text-sm font-semibold">"{review.title}"</p>
            <p className="text-gray-600">"{review.comment}"</p>
            <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No reviews yet.</p>
      )}
    </div>
  );
};

export default UserReviews;
