import React, { useState } from "react";

export default function StarRating({ rating, productId, onRatingChange }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  function handleHover(index) {
    setHoveredIndex(index);
  }

  function handleClick(index) {
    const newRating = index + 1;
    onRatingChange(productId, newRating);
  }

  return (
    <div className="star-rating" onMouseLeave={() => setHoveredIndex(0)}>
      {[...Array(5)].map((_, index) => {
        const isActive = index < (hoveredIndex || rating);
        return (
          <span
            key={index}
            className={`star ${isActive ? "active" : ""}`}
            onClick={() => handleClick(index)}
            onMouseOver={() => handleHover(index + 1)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
