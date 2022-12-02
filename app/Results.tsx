import Image from "next/image";

export default function Results({ recipes, goBack }) {
  return (
    <div className="p-8">
      <h2>Here are your recipes</h2>
      <button className="mb-5" onClick={goBack}>
        Go back
      </button>
      <div className="grid grid-cols-3">
        {recipes.map(
          ({ recipe: { label, image, url, ingredientLines } }, idx: number) => (
            <div className="p-5 m-5 border rounded-sm" key={idx}>
              <Image
                src={image}
                width={200}
                height={200}
                className="rounded-md m-auto mb-5"
              />
              <p className="text-center text-xl mb-5">{label}</p>
              {ingredientLines.map((ingredient, idx) => (
                <p className="mb-5">{ingredient}</p>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
