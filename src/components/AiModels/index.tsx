import React from "react";
import ModelsRow from "./ModelsRow";
import { ScrollArea } from "../ui/scroll-area";
import DropDown from "../DropDown";
import ArrowDown from "@/assets/Icons/ArrowDown";
import { Bard, ChatGpt, TensorFlow } from "@/assets/png";

const Models = [
  {
    logo: ChatGpt,
    name: "Chat GPT",
    version: "v2.1",
    license: "MIT",
    rating: 4,
  },
  {
    logo: Bard,
    name: "Bard",
    version: "v1.1",
    license: "Private",
    rating: 3,
  },
  {
    logo: TensorFlow,
    name: "TensorFlow",
    version: "v1.1",
    license: "MIT",
    rating: 2,
  },
  {
    logo: Bard,
    name: "Gemini",
    version: "v0.5",
    license: "MIT",
    rating: 5,
  },
  {
    logo: Bard,
    name: "Grok",
    version: "v0.5",
    license: "MIT",
    rating: 3,
  },
];

const AiModels = () => {
  return (
    <aside className="w-full h-full bg-[#26252A] rounded-md p-1 flex flex-col">
      <section className="w-full h-40 bg-[#201F23] rounded-xl p-7">
        <h2 className="font-semibold text-2xl mb-4">AI Models</h2>

        <div className="flex gap-x-5">
          <DropDown>
            <div className="w-20 h-8 bg-black rounded-full flex gap-x-2 justify-center items-center">
              <span className="text-xs">Model</span>
              <ArrowDown />
            </div>
          </DropDown>
          <DropDown>
            <div className="w-20 h-8 bg-black rounded-full flex gap-x-2 justify-center items-center">
              <span className="text-xs">Model</span>
              <ArrowDown />
            </div>
          </DropDown>
          <DropDown>
            <div className="w-20 h-8 bg-black rounded-full flex gap-x-2 justify-center items-center">
              <span className="text-xs">Model</span>
              <ArrowDown />
            </div>
          </DropDown>
        </div>

        <div className="flex mt-6 text-xs w-full">
          <span className="w-[40%] text-start">Model</span>
          <span className="w-[10%] text-center">Versions</span>
          <span className="w-[10%] text-center">License</span>
          <span className="w-[20%] text-center">Contributors</span>
          <span className="w-[20%] text-center">Rating</span>
        </div>
      </section>

      <ScrollArea className="flex flex-col overflow-y-scroll h-full px-8">
        {Models.map((model, i) => (
          <ModelsRow
            key={i}
            name={model.name}
            license={model.license}
            version={model.version}
            rating={model.rating}
            logo={model.logo}
          />
        ))}
      </ScrollArea>
    </aside>
  );
};

export default AiModels;
