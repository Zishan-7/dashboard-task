"use client";

import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";

const CheckboxRow = ({ label }: { label: string }) => {
  const [isChecked, setisChecked] = useState(false);
  return (
    <div className="flex items-center space-x-2 my-3 h-6">
      <Checkbox
        className="p-[1px] border-white bg-white data-[state=checked]:bg-[#652BFC] data-[state=checked]:border-none transition-all duration-500"
        checked={isChecked}
        onCheckedChange={(e) => setisChecked(!isChecked)}
      />
      <label className={`text-white text-sm`}>{label}</label>
    </div>
  );
};

export default CheckboxRow;
