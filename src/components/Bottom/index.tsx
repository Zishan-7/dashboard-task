import { HumanPic } from "@/assets/png";
import Image from "next/image";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import ArrowDown from "@/assets/Icons/ArrowDown";
import { DropdownMenu } from "../ui/dropdown-menu";
import DropDown from "../DropDown";
import AIstarIcon from "@/assets/Icons/AIstarIcon";

const Bottom = () => {
  return (
    <div className="relative w-full h-full bg-[#26252A] rounded-md  px-8 flex items-center justify-between">
      <div className="relative w-[500px] h-[162px] rounded-2xl overflow-hidden">
        <Image src={HumanPic} width={500} height={200} alt="human" />
        <ResizablePanelGroup
          className="top-0 absolute overflow-hidden"
          direction="horizontal"
        >
          <ResizablePanel defaultSize={55}>
            <div className="bg-[#652BFC61] w-full h-full"></div>
          </ResizablePanel>
          <ResizableHandle className="h-10 w-[3px] rounded-md mt-auto mb-auto" />
          <ResizablePanel defaultSize={45}>
            <div className="bg-transparent w-full h-full"></div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div className="wrap">
        <div className="radar-wrap">
          <div className="radar">
            <div className="shadow" />
          </div>
        </div>
      </div>

      <DropDown>
        <div className="flex h-16 w-96 bg-[#201F23] rounded-2xl border-t-[0.5px] border-gray-600 mb-auto mt-8 items-center justify-between px-4">
          <span className="text-md text-gray-400 ">Select item</span>
          <ArrowDown />
        </div>
      </DropDown>

      <div className="absolute right-5 bottom-5 w-12 h-12 bg-[#652BFC] rounded-full flex justify-center items-center">
        <AIstarIcon />
      </div>
    </div>
  );
};

export default Bottom;
