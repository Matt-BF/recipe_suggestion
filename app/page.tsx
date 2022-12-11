"use client";
import FoodForm from "./FoodForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

const fetchSuggestions = async (ingredient) => {
  const suggestionsResponse = await fetch(
    `https://api.edamam.com/auto-complete?app_id=${process.env.NEXT_PUBLIC_FOOD_APP_ID}&app_key=${process.env.NEXT_PUBLIC_FOOD_APP_KEY}&q=${ingredient}`
  );
  const suggestions = await suggestionsResponse.json();
  return suggestions;
};

const page = () => {
  const [ingredient, setIngredient] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [invalid, setInvalid] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ingredient) {
      setInvalid(true);
    } else {
      router.push("/results?ingredient=" + ingredient);
    }
  };

  const handleChange = async (e) => {
    setIngredient(e.target.value);
    setInputValue(e.target.value);

    if (e.target.value.length >= 3) {
      const suggestions = await fetchSuggestions(e.target.value);
      setSuggestions(suggestions);
    } else {
      setSuggestions([]);
    }
  };

  const putSuggestionOnInput = (e) => {
    setInputValue(e.target.innerText);
    setIngredient(e.target.innerText);
    setSuggestions([]);
  };

  const props = {
    suggestions: suggestions,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    onClick: putSuggestionOnInput,
    inputValue: inputValue,
    invalid: invalid,
  };
  return (
    <div>
      <h2 className="text-3xl text-center text-gray-600 p-8">
        Recipe Suggestions
      </h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        Choose things that are in your pantry and we'll give you some recipes
      </p>

      <FoodForm props={props} />
    </div>
  );
};
export default page;
