"use client";

import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";

const TaskRow = ({ label }: { label: string }) => {
  const [isChecked, setisChecked] = useState(false);
  return (
    <div className="flex items-center space-x-2 my-2">
      <Checkbox
        className="p-[1px] border-white data-[state=checked]:bg-[#652BFC] data-[state=checked]:border-none transition-all duration-500"
        checked={isChecked}
        onCheckedChange={(e) => setisChecked(!isChecked)}
      />
      <label
        className={`${
          isChecked && "text-[#652BFC] line-through"
        }  transition-all duration-500`}
      >
        {label}
      </label>
    </div>
  );
};

export default TaskRow;
