import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

function GptSearch() {
  return (
    <div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
