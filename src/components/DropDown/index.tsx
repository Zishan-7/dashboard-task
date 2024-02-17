import React, { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CheckboxRow from "./CheckboxRow";

interface DropdownMenuI {
  children: ReactNode;
}

const DropDown = ({ children }: DropdownMenuI) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-black border-none px-4">
        <CheckboxRow label="UX/UI Design" />
        <CheckboxRow label="Frontend" />
        <CheckboxRow label="Backend" />
        <CheckboxRow label="Full Stack" />
        <CheckboxRow label="Graphic Designer" />
        <CheckboxRow label="Web Designer" />
        <CheckboxRow label="QA" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
