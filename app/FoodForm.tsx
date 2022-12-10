export default function FoodForm({
  suggestions,
  handleChange,
  handleSubmit,
  onClick,
  inputValue,
}) {
  return (
    <>
      <p className="text-lg text-gray-600 text-center mb-8">
        Choose things that are in your pantry and we'll give you some recipes
      </p>

      <form
        className="flex flex-col border rounded border-slate-300 w-1/2 m-auto"
        onSubmit={handleSubmit}
      >
        <div className="p-8">
          <div className="flex flex-col">
            <label className="mb-5 ">Ingredients</label>
            <input
              id="suggest"
              type="text"
              onChange={handleChange}
              className="w-1/2"
              placeholder="start typing to show ingredients"
              value={inputValue}
            />
            {suggestions.length > 0 && (
              <div className="border border-slate-200 w-1/2">
                {suggestions.map((suggestion, idx) => (
                  <p
                    className="hover:cursor-pointer hover:text-slate-500 border-b border-slate-200 p-2"
                    onClick={onClick}
                    key={idx}
                  >
                    {suggestion}
                  </p>
                ))}
              </div>
            )}
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
