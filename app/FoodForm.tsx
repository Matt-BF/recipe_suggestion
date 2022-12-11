export default function FoodForm({ props }) {
  const {
    handleSubmit,
    handleChange,
    onClick,
    inputValue,
    invalid,
    suggestions,
  } = props;
  return (
    <>
      <form
        className="flex flex-col border rounded-md border-slate-300 w-1/2 m-auto bg-white drop-shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="p-8">
          <div className="flex flex-col">
            <label className="mb-3 text-lg text-gray-600">Ingredients</label>
            <input
              type="text"
              onChange={handleChange}
              className="text-gray-600 border rounded-md border-slate-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="start typing to show ingredients"
              value={inputValue}
            />
            {invalid && (
              <div className="text-red-600 text-sm">
                Please choose at least one ingredient
              </div>
            )}
            {suggestions.length > 0 && (
              <div className="border border-slate-200 w-1/2">
                {suggestions.map((suggestion, idx) => (
                  <p
                    className="text-slate-600 hover:cursor-pointer hover:text-emerald-300 border-b border-slate-200 p-2"
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
            <button
              className="bg-emerald-500 mb-2 p-2 mt-8 rounded-md
              hover:bg-emerald-400 text-slate-100 "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
