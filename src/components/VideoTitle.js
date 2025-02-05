import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-full aspect-video pt-[15%] px-4 lg:px-24 absolute text-white bg-gradient-to-r from-black">
      <div className="hidden lg:block">
        <h1 className="text-xl lg:text-6xl font-bold">{title}</h1>
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
  );
}

export default VideoTitle;
