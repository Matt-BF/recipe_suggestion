"use client";
import FoodForm from "./FoodForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [invalid, setInvalid] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredients.length === 0) {
      setInvalid(true);
    } else {
      //send ingredient to results page
      //console.log(`/results/?ingredient=${ingredients.join("&ingredient=")}`);
      router.push(`/results/?ingredient=${ingredients.join("&ingredient=")}`);
    }
  };

  const handleAddIngredient = (e) => {
    if (e.key === "Enter" && inputValue !== "") {
      setIngredients([...ingredients, inputValue]);
      setInputValue("");
      e.preventDefault();
    }
  };

  const handleRemoveIngredient = (e) => {
    const newIngredients = ingredients.filter(
      (ingredient) => ingredient !== e.target.value
    );
    setIngredients(newIngredients);
    console.log(e.target.value);
  };

  const handleChange = async (e) => {
    setInputValue(e.target.value);
  };

  const props = {
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    handleAddIngredient: handleAddIngredient,
    handleRemoveIngredient: handleRemoveIngredient,
    ingredients: ingredients,
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
