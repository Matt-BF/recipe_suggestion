export default function FoodForm() {
  return (
    <form className="p-8flex flex-col bg-slate-500">
      <div className="p-8">
        <label>
          Name:
          <input className="border-solid m-4" type="text" name="name" />
        </label>
        <label>
          Name:
          <input className="border-solid m-4" type="text" name="name" />
        </label>

        <div className="flex justify-center">
          <input
            className="bg-orange-500 m-4 p-2 rounded-md"
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    </form>
  );
}
