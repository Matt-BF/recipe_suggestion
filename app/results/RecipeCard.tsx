"use client";
import { useState } from "react";
import Image from "next/image";

const RecipeCard = ({ label, image, url, ingredientLines }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="m-5 p-3 border rounded-sm flex flex-col">
      <Image
        src={image}
        alt={`image for ${label}`}
        width={200}
        height={200}
        className="rounded-md m-auto mb-5 mt-5"
      />
      <p className="text-center text-xl mb-3">{label}</p>
      <p className="text-center mb-5 text-green-900 hover:text-green-600">
        <a target="_blank" href={url}>
          See recipe
        </a>
      </p>
      {expand &&
        ingredientLines.map((ingredient, idx) => (
          <div className="mb-5">
            <p key={idx}>{ingredient}</p>
          </div>
        ))}

      <button
        className="text-blue-900 hover:text-blue-600"
        onClick={(e) => setExpand(!expand)}
      >
        {expand ? "Hide ingredients" : "See ingredients"}
      </button>
    </div>
  );
};
export default RecipeCard;
