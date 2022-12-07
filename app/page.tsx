"use client";
import FoodForm from "./FoodForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [ingredient, setIngredient] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [invalid, setInvalid] = useState(false);
  const [canCall, setcanCall] = useState(true);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ingredient) {
      setInvalid(true);
    } else {
      router.push("/results?ingredient=" + ingredient);
    }
  };

  //call the ingredient search api but only every 5 seconds

  setTimeout(() => {
    setcanCall(true);
  }, 5000);

  const handleChange = async (e) => {
    setIngredient(e.target.value);

    if (e.target.value.length >= 3 && canCall) {
      setcanCall(false);
      const suggestionsResponse = await fetch(
        "/api/getIngredientSuggestions?ingredient=" + e.target.value
      );
      const suggestions = await suggestionsResponse.json();
      setSuggestions(suggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <>
      <h2 className="text-3xl text-center p-8">Recipe Suggestions</h2>

      <FoodForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        suggestions={suggestions}
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
