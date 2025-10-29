type RecipeHeaderProps = {
  title: string;
  description: string;
};

export default function RecipeHeader({
  title,
  description,
}: RecipeHeaderProps) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-preset-1 text-stone-900">{title}</h1>
      <p className="text-preset-4">{description}</p>
    </div>
  );
}
