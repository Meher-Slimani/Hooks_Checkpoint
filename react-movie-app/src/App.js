import "./App.css";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovie from "./components/AddMovie";
import { Movies } from "./components/Movies";
import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";

function App() {
  //HERE ARE STATE STUFF
  const [movies, setMovies] = useState(Movies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState("");
  const [filteredMoviesTitle, setFilteredMoviesTitle] = useState([]);
  const [filteredMoviesRate, setFilteredMoviesRate] = useState([]);

  console.log(filterRate);

  //HERE ARE useEffect STUFF
  useEffect(() => {
    setFilteredMoviesRate(
      filterRate &&
        !filterTitle &&
        movies.filter((movie) => {
          return movie.Rating <= filterRate;
        })
    );
    // setFilterRate("");
    console.log(filteredMoviesRate);
  }, [filterRate, filterTitle, movies]);

  useEffect(() => {
    setFilteredMoviesTitle(
      filterTitle !== ""
        ? movies.filter((movie) =>
            movie.Title.toLowerCase().includes(filterTitle)
          )
        : []
    );
  }, [filterTitle, movies]);
  //HERE ARE FUNCTIONS...
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <Filter setFilterTitle={setFilterTitle} setFilterRate={setFilterRate} />
      <div className="col d-flex mt-3 justify-content-between">
        <MovieList
          movies={movies}
          setMovies={setMovies}
          filterTitle={filterTitle}
          filteredMoviesTitle={filteredMoviesTitle}
          filteredMoviesRate={filteredMoviesRate}
          filterRate={filterRate}
        />
        <AddMovie addMovie={addMovie} />
      </div>
    </div>
  );
}

export default App;
