import { Instruction } from "@/data/recipe";

type InstructionsListProps = {
  instructions: Instruction[];
};

type NumberedItemProps = {
  number: number;
  title: string;
  description: string;
};

const NumberedItem = ({ number, title, description }: NumberedItemProps) => (
  <li className="flex gap-4 ml-2">
    <span className="text-brown-800 font-bold w-4 shrink-0">{number}.</span>
    <span>
      <strong>{title}</strong>: {description}
    </span>
  </li>
);

export default function InstructionsList({
  instructions,
}: InstructionsListProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-brown-800 text-preset-2">Instructions</h2>
      <ol className="space-y-2 text-stone-600 text-preset-4">
        {instructions.map((instruction, index) => (
          <NumberedItem
            key={index}
            number={index + 1}
            title={instruction.title}
            description={instruction.description}
          />
        ))}
      </ol>
    </div>
  );
}
