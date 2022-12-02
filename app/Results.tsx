export default function Results({ recipes, goBack }) {
  return (
    <div className="p-8">
      <h2>Here are your recipes</h2>
      <button className="mb-5" onClick={goBack}>
        Go back
      </button>
      <div className="grid">
        {recipes.map((recipe: Object, idx: number) => (
          <div className="mb-5" key={idx}>
            <p>{recipe.recipe.ingredientLines}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
