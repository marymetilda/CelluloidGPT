import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[1];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
      <div className="lg:hidden">
        <div className="w-full px-4 lg:px-24 text-white bg-gradient-to-r from-black">
          <h1 className="text-xl lg:text-6xl font-bold">{original_title}</h1>
          <p className="py-4 lg:py-6 text-sm lg:text-lg w-3/4">{overview}</p>
          <div className="flex">
            <button className="bg-white text-black text-sm lg:text-xl py-2 lg:p-4 px-4 lg:px-12 flex items-center justify-center gap-4 rounded-lg hover:bg-opacity-70">
              <FaPlay /> Play
            </button>
            <button className="mx-2 bg-gray-500 text-white text-sm lg:text-xl py-2 lg:p-4 px-4 lg:px-12 flex items-center justify-center gap-4 bg-opacity-50 rounded-lg">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
