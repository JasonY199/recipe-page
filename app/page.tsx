import RecipeHeader from "@/components/RecipeHeader";
import PreparationTime from "@/components/PreparationTime";
import IngredientsList from "@/components/IngredientsList";
import InstructionsList from "@/components/InstructionsList";
import NutritionTable from "@/components/NutritionTable";
import { recipeData } from "@/data/recipe";

import Image from "next/image";

export default function Home() {
  return (
    <article className="bg-white md:mx-19 md:my-32 md:rounded-3xl md:p-10">
      <Image
        src="/image-omelette.jpeg"
        alt="Omelette on a plate"
        width={1312}
        height={600}
        className="md:rounded-xl"
      />
      <div className="px-8 py-10 md:px-0 md:pt-10 md:pb-0 flex flex-col gap-8">
        <RecipeHeader headerData={recipeData.header} />
        <PreparationTime timeData={recipeData.preparationTime} />
        <IngredientsList ingredients={recipeData.ingredients} />
        <hr className="text-stone-150" />
        <InstructionsList instructions={recipeData.instructions} />
        <hr className="text-stone-150" />
        <NutritionTable nutritionInfo={recipeData.nutrition} />
      </div>
    </article>
  );
}
