"use client";
import FoodForm from "./FoodForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const proteinOptions: string[] = ["Meat", "Lamb", "Chicken", "Fish", "Pork"];
  const [ingredient, setIngredient] = useState(null);
  const [invalid, setInvalid] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ingredient) {
      setInvalid(true);
    } else {
      router.push("/results");
    }
  };

  return (
    <>
      <h2 className="text-3xl text-center p-8">Recipe Suggestions</h2>

      <FoodForm
        proteinOptions={proteinOptions}
        handleChange={(e) => setIngredient(e.target.value)}
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
