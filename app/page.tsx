"use client";
import FoodForm from "./FoodForm";
import { useState } from "react";

const page = () => {
  const proteinOptions: string[] = ["Meat", "Lamb", "Chicken", "Fish", "Pork"];
  const [ingredient, setIngredient] = useState(null);
  let submitted = false;
  const handleChange = (e) => {
    setIngredient(e.target.value);
  };

  const queryAPI = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`
    );
    const recipes = await response.json();
    console.log(recipes);
    return recipes;
  };
  return (
    <>
      <h2 className="text-3xl text-center p-8">Recipe Suggestions</h2>
      <p className="text-lg p-8">Choose things that are in your pantry </p>
      <FoodForm
        proteinOptions={proteinOptions}
        handleChange={handleChange}
        handleSubmit={queryAPI}
      />
    </>
  );
};

export default page;
