export default function FoodForm({ suggestions, handleChange, handleSubmit }) {
  return (
    <>
      <p className="text-lg p-8">Choose things that are in your pantry </p>

      <form
        className="flex flex-col border rounded border-gray-100"
        onSubmit={handleSubmit}
      >
        <div className="p-8">
          <div className="flex flex-col">
            <label className="mb-5">Ingredients</label>
            <input
              type="text"
              onChange={handleChange}
              className="w-1/2"
              placeholder="start typing to show ingredients"
            />
            {suggestions.length > 0 &&
              suggestions.map((suggestion, idx) => (
                <p key={idx}>{suggestion}</p>
              ))}
          </div>

          <div className="flex justify-center">
            <input
              className="bg-orange-500 m-4 p-2 rounded-md hover:cursor-pointer hover:bg-orange-400"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </>
  );
}
