import React from "react";
import Rating from "./Rating";

export const MovieCard = ({
  poster,
  title,
  rating,
  description,
  movies,
  setMovies,
  filterRate,
}) => {
  return (
    <div className="movie mx-3 my-3">
      <img src={poster} alt="" />
      <div className="movie-info d-flex flex-column justify-content-center align-items-center pt-3 px-2">
        <p>{title}</p>
        <div>
          <Rating
            filterRate={filterRate}
            rating={rating}
            movies={movies}
            setMovies={setMovies}
            key={Math.floor(Math.random() * 100000)}
          />
        </div>
      </div>
      <div className="movie-description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
