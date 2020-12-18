import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({
  movies,
  filteredMoviesTitle,
  filterTitle,
  setMovies,
  filteredMoviesRate,
  filterRate,
}) => {
  return (
    <div className="movie-container col-9 d-flex flex-wrap justify-content-around">
      {filteredMoviesTitle.length === 0 &&
      filterTitle === "" &&
      filteredMoviesRate.length === 0
        ? movies.map((movie) => (
            <MovieCard
              key={movie.ImdbID}
              poster={movie.Poster}
              title={movie.Title}
              rating={movie.Rating}
              description={movie.Description}
              movies={movies}
              setMovies={setMovies}
            />
          ))
        : filteredMoviesRate && !filterTitle
        ? filteredMoviesRate.map((movie) => (
            <MovieCard
              key={movie.ImdbID}
              poster={movie.Poster}
              title={movie.Title}
              rating={movie.Rating}
              description={movie.Description}
              movies={movies}
              setMovies={setMovies}
              filterRate={filterRate}
            />
          ))
        : filteredMoviesTitle.map((movie) => (
            <MovieCard
              key={movie.ImdbID}
              poster={movie.Poster}
              title={movie.Title}
              rating={movie.Rating}
              description={movie.Description}
              movies={movies}
              setMovies={setMovies}
            />
          ))}
    </div>
  );
};

export default MovieList;
