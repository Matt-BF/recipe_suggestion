"use client";
import FoodForm from "./FoodForm";
import { useState } from "react";
import Results from "./Results";

const page = () => {
  const proteinOptions: string[] = ["Meat", "Lamb", "Chicken", "Fish", "Pork"];
  const [ingredient, setIngredient] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    /* const recipeResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${ingredient}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`
    );
    const recipes = await recipeResponse.json();
    console.log(recipes.hits);
    setRecipes(recipes.hits); */
    const recipeResponse = await fetch("./res_test.json");
    const recipes = await recipeResponse.json();
    setRecipes(recipes.hits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    fetchRecipes();
  };

  return (
    <>
      <h2 className="text-3xl text-center p-8">Recipe Suggestions</h2>
      {!submitted ? (
        <FoodForm
          proteinOptions={proteinOptions}
          handleChange={(e) => setIngredient(e.target.value)}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Results recipes={recipes} goBack={(e) => setSubmitted(false)} />
      )}
    </>
  );
};

export default page;
