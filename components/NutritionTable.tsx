import { Nutrition } from "@/data/recipe";

type NutritionTableProps = {
  nutritionInfo: Nutrition;
};

const NutritionRow = ({
  label,
  value,
  unit,
}: {
  label: string;
  value: number;
  unit: string;
}) => (
  <div className="flex gap-4 mx-8">
    <span className="flex-1 text-preset-4">{label}</span>{" "}
    <span className="flex-1 text-preset-4-bold text-brown-800">
      {value}
      {unit}
    </span>
  </div>
);

export default function NutritionTable({ nutritionInfo }: NutritionTableProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-brown-800 text-preset-2">Nutrition</h2>
      <p className="text-preset-4 text-stone-600">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div>
        {Object.entries(nutritionInfo).map(
          ([key, [value, unit]], index, array) => (
            <div key={key}>
              <NutritionRow
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                value={value}
                unit={unit}
              />
              {index < array.length - 1 && (
                <hr className="border-stone-150 my-3" />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
