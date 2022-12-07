"use client";
import FoodForm from "./FoodForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [ingredient, setIngredient] = useState(null);
  const [invalid, setInvalid] = useState(false);
  const [canCall, setcanCall] = useState(true);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ingredient) {
      setInvalid(true);
    } else {
      setIngredient(e.target.value);
      router.push("/results");
    }
  };

  //call the ingredient search api but only every 5 seconds

  setTimeout(() => {
    setcanCall(true);
  }, 5000);

  const handleChange = async (e) => {
    e.preventDefault();
    if (e.target.value.length >= 3 && canCall) {
      const suggestionsResponse = await fetch(
        "/api/getIngredientSuggestions?ingredient=" + e.target.value
      );
      const suggestions = await suggestionsResponse.json();
      console.log(suggestions);
      setcanCall(false);
    }
  };

  return (
    <>
      <h2 className="text-3xl text-center p-8">Recipe Suggestions</h2>

      <FoodForm
        ingredientOptions={ingredient}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {invalid && (
        <div className="text-red-900 text-center">
          Please choose at least one ingredient
        </div>
      )}
    </>
  );
};
export default page;
