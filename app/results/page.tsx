"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RecipeCard from "./RecipeCard";

const page = () => {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    /* const recipeResponse = await fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${process.env.NEXT_PUBLIC_RECIPE_APP_ID}&app_key=${process.env.NEXT_PUBLIC_RECIPE_APP_KEY}`
        );
        const recipes = await recipeResponse.json();
        console.log(recipes.hits);
        setRecipes(recipes.hits); */
    const recipeResponse = await fetch("res_test.json");
    const recipes = await recipeResponse.json();
    setRecipes(recipes.hits);
  };
  fetchRecipes();

  return (
    <div className="p-8">
      <Link className="mb-5 p-3 border rounded" href="/">
        Go back
      </Link>
      <h2 className="text-center text-2xl">Here are your recipes</h2>
      <div className="grid grid-cols-4">
        {recipes.map(
          ({ recipe: { label, image, url, ingredientLines } }, idx: number) => (
            <RecipeCard
              label={label}
              image={image}
              url={url}
              ingredientLines={ingredientLines}
            />
          )
        )}
      </div>
    </div>
  );
};

export default page;
