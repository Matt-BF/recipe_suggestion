"use client";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkSquare,
  faAppleWhole,
  faCaretSquareRight,
  faCaretSquareDown,
} from "@fortawesome/free-solid-svg-icons";

const RecipeCard = ({ label, image, url, ingredientLines }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="border border-slate-300 bg-white drop-shadow-md rounded-md flex flex-col mb-5">
      <div className="h-52 relative">
        <Image
          src={image}
          alt={`image for ${label}`}
          fill={true}
          className="rounded-md border-b border-slate-300"
        />
      </div>
      <p className="text-center text-lg m-5 text-gray-600">{label}</p>
      <p className="text-center mt-5 mb-2 text-gray-500">
        <a
          target="_blank"
          rel="noreferrer"
          className="border rounded-md p-2 border-emerald-500 text-gray-500 hover:bg-emerald-100 mt-5"
          href={url}
        >
          See recipe{" "}
          <span className="ml-1 text-gray-400">
            <FontAwesomeIcon icon={faExternalLinkSquare} />
          </span>
        </a>
      </p>

      <button
        className="text-gray-500 hover:underline m-auto mb-5 mt-5"
        onClick={(e) => setExpand(!expand)}
      >
        {expand ? (
          <span>
            Hide ingredients
            <FontAwesomeIcon icon={faCaretSquareDown} className="ml-1" />
          </span>
        ) : (
          <span>
            See ingredients
            <FontAwesomeIcon icon={faCaretSquareRight} className="ml-1 " />
          </span>
        )}
      </button>
      {expand && (
        <ul className="m-5 bg-slate-100 p-5 border rounded-md">
          {ingredientLines.map((ingredient, idx) => (
            <li className="text-gray-600 mb-5" key={idx}>
              <span className="mr-2">
                <FontAwesomeIcon icon={faAppleWhole} size="xs" />
              </span>
              {ingredient}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default RecipeCard;
