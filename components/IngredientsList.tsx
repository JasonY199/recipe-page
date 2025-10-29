const BulletItem = ({ value }: { value: string }) => (
  <li className="flex gap-7 items-center ml-2">
    <span className="text-brown-800 font-bold">•</span>
    <span>{value}</span>
  </li>
);

export default function IngredientsList({
  ingredients,
}: {
  ingredients: string[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-preset-2 text-brown-800">Ingredients</h2>
      <ul className="space-y-2 text-stone-600 text-preset-4">
        {ingredients.map((ingredient, index) => (
          <BulletItem value={ingredient} key={index} />
        ))}
      </ul>
    </div>
  );
}
