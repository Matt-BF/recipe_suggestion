export default function FoodForm() {
  const proteinOptions: string[] = ["Meat", "Lamb", "Chicken", "Fish", "Pork"];

  return (
    <form className="flex flex-col border rounded border-gray-100">
      <div className="p-8">
        <label className="mr-4">Protein source</label>
        <select
          className="border rounded border-solid bg-gray-100"
          name="protein"
        >
          <option value="">Choose a protein source</option>
          {proteinOptions.map((proteinOption) => (
            <option value={proteinOption}>{proteinOption}</option>
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
  );
}
