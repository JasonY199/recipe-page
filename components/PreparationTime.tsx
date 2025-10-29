import { PreparationTime as PrepTimeData } from "@/data/recipe";

type PreparationTimeProps = {
  timeData: PrepTimeData;
};

const BulletItem = ({ label, value }: { label: string; value: string }) => (
  <li className="flex gap-7 items-center ml-2">
    <span className="text-rose-800 font-bold">•</span>
    <span>
      <strong>{label}</strong>: {value}
    </span>
  </li>
);

export default function PreparationTime({ timeData }: PreparationTimeProps) {
  return (
    <div className="flex flex-col gap-4 bg-rose-50 p-6 rounded-xl">
      <h3 className="text-rose-800 text-preset-3">Preparation time</h3>
      <ul className="space-y-2 text-stone-600 text-preset-4">
        <BulletItem label="Total" value={timeData.total} />
        <BulletItem label="Preparation" value={timeData.preparation} />
        <BulletItem label="Cooking" value={timeData.cooking} />
      </ul>
    </div>
  );
}
