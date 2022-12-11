import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import RecipeCard from "./RecipeCard";

const fetchRecipes = async (ingredient) => {
  /* const recipeResponse = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${process.env.NEXT_PUBLIC_RECIPE_APP_ID}&app_key=${process.env.NEXT_PUBLIC_RECIPE_APP_KEY}&field=label&field=image&field=url&field=ingredientLines&random=true`
  );
  const recipes = await recipeResponse.json();
  return recipes.hits; */
  const recipeResponse = await fetch("http://localhost:3000/res_test.json");
  const recipes = await recipeResponse.json();
  return recipes.hits;
};

const page = async ({ searchParams }) => {
  const recipes = await fetchRecipes(searchParams.ingredient);

  return (
    <div className="p-8">
      <Link className="p-2 border rounded-md hover:bg-slate-200" href="/">
        <span className="mr-1">
          <FontAwesomeIcon icon={faCircleArrowLeft} className="ml-2" />
        </span>{" "}
        Go back
      </Link>
      <h2 className="text-3xl text-center text-gray-600 m-8">
        Here are your recipes
      </h2>

      {recipes.length > 0 ? (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {recipes.map(
              (
                { recipe: { label, image, url, ingredientLines } },
                idx: number
              ) => (
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
        </>
      ) : (
        <p className="text-center text-gray-600">
          We are sorry, but no recipes were found with your ingredients! Please
          try again with other inputs
        </p>
      )}
    </div>
  );
};

export default page;
