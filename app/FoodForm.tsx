import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FoodForm({ props }) {
  const {
    handleSubmit,
    handleChange,
    handleAddIngredient,
    handleRemoveIngredient,
    ingredients,
    inputValue,
    invalid,
  } = props;
  return (
    <>
      <form
        className="flex flex-col border rounded-md border-slate-300 w-1/2 m-auto bg-white drop-shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="p-8">
          <div className="flex flex-col">
            <label className="mb-3 text-lg text-gray-600">
              Ingredient list:
            </label>
            {ingredients.length > 0 && (
              <div className="flex flex-wrap mb-2">
                {ingredients.map((ingredient: string) => (
                  <button
                    className="border cursor-pointer border-slate-200 bg-teal-50 rounded-md p-2 mr-2 mb-2"
                    key={ingredient}
                    onClick={handleRemoveIngredient}
                    value={ingredient}
                  >
                    {ingredient}
                  </button>
                ))}
              </div>
            )}
            <input
              type="text"
              onChange={handleChange}
              onKeyDown={handleAddIngredient}
              className="text-gray-600 border rounded-md border-slate-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Write and press enter to add an ingredient to the list"
              value={inputValue}
            />
            {invalid && (
              <div className="text-red-600 text-sm">
                Please choose at least one ingredient
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="border border-emerald-500 mb-2 p-2 mt-8 rounded-md
              hover:bg-emerald-100 text-gray-500 "
            >
              {ingredients.length === 0 ? "Add Ingredient" : "Submit"}
              <span>
                <FontAwesomeIcon icon={faUtensils} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
