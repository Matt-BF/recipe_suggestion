"use client";
import { useState } from "react";
import Image from "next/image";

//https://stackoverflow.com/questions/64846858/how-to-use-tailwind-css-with-next-js-image

const RecipeCard = ({ label, image, url, ingredientLines }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="border border-slate-300 rounded-md flex flex-col">
      <div className="h-60 relative">
        <Image
          src={image}
          alt={`image for ${label}`}
          fill={true}
          className="rounded-md border-b border-slate-300"
        />
      </div>
      <p className="text-center text-lg mb-3 mt-5">{label}</p>
      <p className="text-center mb-5 text-green-900 hover:text-green-600">
        <a target="_blank" href={url}>
          See recipe
        </a>
      </p>
      {expand &&
        ingredientLines.map((ingredient, idx) => (
          <div className="ml-5 mb-3">
            <p key={idx}>{ingredient}</p>
          </div>
        ))}

      <button
        className="text-blue-900 hover:text-blue-600 mb-5"
        onClick={(e) => setExpand(!expand)}
      >
        {expand ? "Hide ingredients" : "See ingredients"}
      </button>
    </div>
  );
};
export default RecipeCard;
