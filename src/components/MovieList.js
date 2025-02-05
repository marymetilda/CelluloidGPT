import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="px-4 lg:px-6 text-white">
      <h1 className="text-xl lg:text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide p-2 lg:p-6">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
