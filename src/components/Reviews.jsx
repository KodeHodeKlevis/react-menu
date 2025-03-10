import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"; // Star icons

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    rating: 5,
    comment:
      "Absolutely loved the food! The flavors were amazing, and the service was top-notch. Highly recommend!",
  },
  {
    id: 2,
    name: "Michael Smith",
    rating: 4.5,
    comment:
      "Great atmosphere and delicious dishes. Would have given 5 stars, but the wait time was a bit long.",
  },
  {
    id: 3,
    name: "Sophia Davis",
    rating: 4,
    comment:
      "The desserts were heavenly! Can't wait to come back and try more dishes.",
  },
  {
    id: 4,
    name: "Sophia Davis",
    rating: 4,
    comment:
      "The desserts were heavenly! Can't wait to come back and try more dishes.",
  },
  {
    id: 5,
    name: "Sophia Davis",
    rating: 4,
    comment:
      "The desserts were heavenly! Can't wait to come back and try more dishes.",
  },
  {
    id: 6,
    name: "Sophia Davis",
    rating: 4,
    comment:
      "The desserts were heavenly! Can't wait to come back and try more dishes.",
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <BsStarFill key={index} className="text-yellow-500" />
      ))}
      {halfStar && <BsStarHalf className="text-yellow-500" />}
      {[...Array(5 - Math.ceil(rating))].map((_, index) => (
        <BsStar key={index} className="text-gray-300" />
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Customer Reviews
      </h1>

      <div className="max-w-3xl w-full space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">
              {review.name}
            </h2>
            <div className="flex items-center mt-1">
              {renderStars(review.rating)}
            </div>
            <p className="text-gray-600 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
