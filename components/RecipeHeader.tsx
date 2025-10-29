import { Header } from "@/data/recipe";

type RecipeHeaderProps = {
  headerData: Header;
};

export default function RecipeHeader({ headerData }: RecipeHeaderProps) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-preset-1 text-stone-900">{headerData.title}</h1>
      <p className="text-preset-4">{headerData.description}</p>
    </div>
  );
}
