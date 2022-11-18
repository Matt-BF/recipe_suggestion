import FoodForm from "./FoodForm";

const page = () => {
  return (
    <>
      <h2 className="text-3xl text-center p-8">Recipe Suggestions</h2>
      <p className="text-lg p-8">Choose things that are in your pantry </p>
      <FoodForm />
    </>
  );
};

export default page;
