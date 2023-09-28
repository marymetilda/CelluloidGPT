import React from "react";
import { LOGIN_BG_URL } from "../utils/constants";
import lang from "../utils/languageContants";
import { useSelector } from "react-redux";

function GptSearchBar() {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] relative flex items-center justify-center">
      <div className="absolute w-screen h-screen -z-10">
        <img className="w-full h-full" alt="logo" src={LOGIN_BG_URL} />
      </div>
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
