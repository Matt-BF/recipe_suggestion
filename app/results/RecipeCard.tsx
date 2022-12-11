"use client";
import { useState } from "react";
import Image from "next/image";

const RecipeCard = ({ label, image, url, ingredientLines }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="border border-slate-300 bg-white drop-shadow-md rounded-md flex flex-col mb-5">
      <div className="h-48 relative">
        <Image
          src={image}
          alt={`image for ${label}`}
          fill={true}
          className="rounded-md border-b border-slate-300"
        />
      </div>
      <p className="text-center text-lg m-5 text-gray-600">{label}</p>
      <p className="text-center mt-5 mb-2 text-green-900 hover:text-green-600">
        <a
          target="_blank"
          className="border rounded-md p-2 border-emerald-500 text-slate-100 bg-emerald-500 hover:bg-emerald-400 mt-5"
          href={url}
        >
          See recipe
        </a>
      </p>

      <button
        className="border rounded-md p-2 border-sky-500 text-slate-100 bg-sky-500 hover:bg-sky-400  m-auto mb-5 mt-5"
        onClick={(e) => setExpand(!expand)}
      >
        {expand ? "Hide ingredients" : "See ingredients"}
      </button>
      {expand && (
        <div className="m-5">
          {ingredientLines.map((ingredient, idx) => (
            <p key={idx}>{ingredient}</p>
          ))}
        </div>
      )}
    </div>
  );
};
export default RecipeCard;
