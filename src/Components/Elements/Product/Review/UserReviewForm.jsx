import React, { useState } from "react";

const UserReviewForm = ({ addReview }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !title || !comment) return;

    const newReview = {
      user,
      title,
      comment,
      rating: parseInt(rating),
    };

    addReview(newReview); // Pass the new review to the parent
    setUser("");
    setTitle("");
    setComment("");
    setRating(5);

    setSuccessMessage("Review submitted successfully! ✅");

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="mb-6 border w-96 p-2 rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-2">Write a Review</h3>

      {successMessage && <p className="text-green-600 font-semibold">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-500"
        />
      
        <input
          type="text"
          placeholder="Review Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-500"
        />
        <textarea
          placeholder="Your Review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-500"
        ></textarea>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border  py-2 rounded-md focus:ring-2 focus:ring-yellow-500"
        >
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default UserReviewForm;
