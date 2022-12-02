export default function FoodForm({
  proteinOptions,
  handleChange,
  handleSubmit,
}) {
  return (
    <>
      <p className="text-lg p-8">Choose things that are in your pantry </p>

      <form
        className="flex flex-col border rounded border-gray-100"
        onSubmit={handleSubmit}
      >
        <div className="p-8">
          <label className="mr-4">Protein source</label>
          <select
            className="border rounded border-solid bg-gray-100"
            name="protein"
            onChange={handleChange}
          >
            <option value="">Choose a protein source</option>
            {proteinOptions.map((proteinOption: string, idx: number) => (
              <option key={idx} value={proteinOption}>
                {proteinOption}
              </option>
            ))}
          </select>

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
