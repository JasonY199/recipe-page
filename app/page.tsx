import RecipeHeader from "@/components/RecipeHeader";
import PreparationTime from "@/components/PreparationTime";
import IngredientsList from "@/components/IngredientsList";
import InstructionsList from "@/components/InstructionsList";
import { recipeData } from "@/data/recipe";

import Image from "next/image";

export default function Home() {
  return (
    <article className="bg-white">
      <Image
        src="/image-omelette.jpeg"
        alt="Omelette on a plate"
        width={1312}
        height={600}
      />
      <div className="px-8 py-10 flex flex-col gap-8">
        <RecipeHeader
          title={recipeData.title}
          description={recipeData.description}
        />
        <PreparationTime
          total={recipeData.preparationTime.total}
          preparation={recipeData.preparationTime.preparation}
          cooking={recipeData.preparationTime.cooking}
        />
        <IngredientsList ingredients={recipeData.ingredients} />
        <hr className="text-stone-150" />
        <InstructionsList instructions={recipeData.instructions} />
        <hr className="text-stone-150" />
        <div className="flex flex-col gap-6">
          <h2 className="text-brown-800 text-preset-2">Nutrition</h2>
          <p className="text-preset-4 text-stone-600">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div>
            <div className="flex gap-4 mx-8">
              <span className="flex-1 text-preset-4">Calories</span>{" "}
              <span className="flex-1 text-preset-4-bold text-brown-800">
                277kcal
              </span>
            </div>
            <hr className="text-stone-150 my-3" />
            <div className="flex gap-4 mx-8">
              <span className="flex-1 text-preset-4">Carbs</span>{" "}
              <span className="flex-1 text-preset-4-bold text-brown-800">
                0g
              </span>
            </div>
            <hr className="text-stone-150 my-3" />
            <div className="flex gap-4 mx-8">
              <span className="flex-1 text-preset-4">Protein</span>{" "}
              <span className="flex-1 text-preset-4-bold text-brown-800">
                20g
              </span>
            </div>
            <hr className="text-stone-150 my-3" />
            <div className="flex gap-4 mx-8">
              <span className="flex-1 text-preset-4">Fat</span>{" "}
              <span className="flex-1 text-preset-4-bold text-brown-800">
                22g
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
