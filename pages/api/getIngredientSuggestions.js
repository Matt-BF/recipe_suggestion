export default async function getIngredientSuggestions(req, res) {
  if (req.method === "GET") {
    const {
      query: { ingredient },
    } = req;
    const suggestionsResponse = await fetch(
      `https://api.edamam.com/auto-complete?app_id=${process.env.NEXT_PUBLIC_FOOD_APP_ID}&app_key=${process.env.NEXT_PUBLIC_FOOD_APP_KEY}&q=${ingredient}`
    );
    const suggestions = await suggestionsResponse.json();
    return res.status(200).json(suggestions);
  } else {
    res.status(400).json({ message: "GET request failed" });
  }
}
