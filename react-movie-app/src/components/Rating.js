import React from "react";

const Rating = ({ rating, setFilterRate, filterRate }) => {
  // const filterRateHandler () => {

  // }
  let stars = [];
  for (let i = 0; i < 5; i++) {
    rating
      ? i + 1 <= rating
        ? stars.push(<span>★</span>)
        : stars.push(<span>☆</span>)
      : stars.push(
          <span
            onClick={() => {
              setFilterRate(i + 1);
            }}
            className="star-rate"
          >
            ☆
          </span>
        );
  }

  return stars;
};

export default Rating;
