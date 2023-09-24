import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

function MovieCard({ posterPath }) {
  return (
    <div className="w-[300px] pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
}

export default MovieCard;
