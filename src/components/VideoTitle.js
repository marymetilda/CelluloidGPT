import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-full aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black text-xl p-4 px-12 flex items-center justify-center gap-4 rounded-lg hover:bg-opacity-70">
          <FaPlay /> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white text-xl p-4 px-12 flex items-center justify-center gap-4 bg-opacity-50 rounded-lg">
          <AiOutlineInfoCircle /> More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
