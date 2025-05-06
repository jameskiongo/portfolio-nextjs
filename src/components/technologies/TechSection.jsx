import { DjangoIcon } from "../icons/DjangoIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { ReduxIcon } from "../icons/ReduxIcon";
import { SqlIcon } from "../icons/SqlIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { TypescriptIcon } from "../icons/TypescriptIcon";

export default function TechSection() {
  return (
    <div id="techstack" className="mt-10 px-4 sm:px-0">
      <h1 className="capitalize text-xl font-bold pb-5">Tech Stack</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div className="border border-gray-300 rounded-md py-4 px-2 flex flex-col items-center gap-1 h-full">
          <ReactIcon />
          <h1 className="text-xs font-extralight">React</h1>
        </div>

        <div className="border border-gray-300 rounded-md py-4 px-2 flex flex-col items-center gap-1 h-full">
          <DjangoIcon />
          <h1 className="text-xs font-extralight">Django</h1>
        </div>

        <div className="border border-gray-300 rounded-md py-4 px-2 flex flex-col items-center gap-1 h-full">
          <SqlIcon />
          <h1 className="text-xs font-extralight">SQLite</h1>
        </div>

        <div className="border border-gray-300 rounded-md py-4 px-2 flex flex-col items-center gap-1 h-full">
          <TailwindIcon />
          <h1 className="text-xs font-extralight">Tailwind css</h1>
        </div>

        <div className="border border-gray-300 rounded-md py-4 px-2 flex flex-col items-center gap-1 h-full">
          <TypescriptIcon />
          <h1 className="text-xs font-extralight">Typescript</h1>
        </div>

        {/* Redux */}
        <div className="border border-gray-300 rounded-md py-4 px-2 flex flex-col items-center gap-1 h-full">
          <ReduxIcon />
          <h1 className="text-xs font-extralight">Redux</h1>
        </div>
      </div>
    </div>
  );
}
