import Link from "next/link";
import RecipeCard from "./RecipeCard";

const fetchRecipes = async (ingredient) => {
  const recipeResponse = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${process.env.NEXT_PUBLIC_RECIPE_APP_ID}&app_key=${process.env.NEXT_PUBLIC_RECIPE_APP_KEY}&field=label&field=image&field=url&field=ingredientLines&random=true`,
    { cache: "force-cache" }
  );
  const recipes = await recipeResponse.json();
  return recipes.hits;
};

const page = async ({ searchParams }) => {
  const recipes = await fetchRecipes(searchParams.ingredient);

  return (
    <div className="p-8">
      <Link className="mb-5 p-2 border rounded-md hover:bg-slate-200" href="/">
        &larr; Go back
      </Link>
      <h2 className="text-3xl text-center text-gray-600 p-8 ">
        Here are your recipes
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {recipes.map(
          ({ recipe: { label, image, url, ingredientLines } }, idx: number) => (
            <RecipeCard
              key={idx}
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
