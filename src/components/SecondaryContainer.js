import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="lg:-mt-72 lg:pl-12 relative z-20 bg-gradient-to-t from-black via-black to-transparent">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
    </div>
  );
}

export default SecondaryContainer;
