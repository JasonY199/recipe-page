import RecipeHeader from "@/components/RecipeHeader";
import PreparationTime from "@/components/PreparationTime";
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
        <div className="flex flex-col gap-6">
          <h2 className="text-preset-2 text-brown-800">Ingredients</h2>
          <ul className="space-y-2 text-stone-600 text-preset-4">
            <li className="flex gap-7 items-center ml-2">
              <span className="text-brown-800 font-bold">•</span>
              <span>2-3 large eggs</span>
            </li>
            <li className="flex gap-7 items-center ml-2">
              <span className="text-brown-800 font-bold">•</span>
              <span>Salt, to taste</span>
            </li>
            <li className="flex gap-7 items-center ml-2">
              <span className="text-brown-800 font-bold">•</span>
              <span>Pepper, to taste</span>
            </li>
            <li className="flex gap-7 items-center ml-2">
              <span className="text-brown-800 font-bold">•</span>
              <span>1 tablespoon of butter or oil</span>
            </li>
            <li className="flex gap-7 items-center ml-2">
              <span className="text-brown-800 font-bold">•</span>
              <span>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </span>
            </li>
          </ul>
        </div>
        <hr className="text-stone-150" />
        <div className="flex flex-col gap-6">
          <h2 className="text-brown-800 text-preset-2">Instructions</h2>
          <ol className="space-y-2 text-stone-600 text-preset-4">
            <li className="flex gap-4 ml-2">
              <span className="text-brown-800 font-bold w-4 shrink-0">1.</span>
              <span>
                <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </span>
            </li>
            <li className="flex gap-4 ml-2">
              <span className="text-brown-800 font-bold w-4 shrink-0">2.</span>
              <span>
                <strong>Heat the pan</strong>: Place a non-stick frying pan over
                medium heat and add butter or oil.
              </span>
            </li>
            <li className="flex gap-4 ml-2">
              <span className="text-brown-800 font-bold w-4 shrink-0">3.</span>
              <span>
                <strong>Cook the omelette</strong>: Once the butter is melted
                and bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </span>
            </li>
            <li className="flex gap-4 ml-2">
              <span className="text-brown-800 font-bold w-4 shrink-0">4.</span>
              <span>
                <strong>Add fillings (optional)</strong>: When the eggs begin to
                set at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </span>
            </li>
            <li className="flex gap-4 ml-2">
              <span className="text-brown-800 font-bold w-4 shrink-0">5.</span>
              <span>
                <strong>Fold and serve</strong>: As the omelette continues to
                cook, carefully lift one edge and fold it over the fillings. Let
                it cook for another minute, then slide it onto a plate.
              </span>
            </li>
            <li className="flex gap-4 ml-2">
              <span className="text-brown-800 font-bold w-4 shrink-0">6.</span>
              <span>
                <strong>Enjoy</strong>: Serve hot, with additional salt and
                pepper if needed.
              </span>
            </li>
          </ol>
        </div>
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
