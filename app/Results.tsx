export default function Results({ recipes }) {
  return (
    <div>
      <h2>Here are your recipes</h2>
      {recipes.map((recipe: Object, idx: number) => (
        <div className="mb-5" key={idx}>
          {recipe.recipe.ingredientLines}
        </div>
      ))}
    </div>
  );
}
