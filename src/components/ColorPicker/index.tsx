"use client";

import { useColorStore } from "@/Store/ColorStore";
import { generateColorShades } from "@/utils/helperFunctions";
import React, { useEffect, useState } from "react";
import { HuePicker } from "react-color";

const ColorPicker = () => {
  const { color, updateColor } = useColorStore((state) => state);

  const [colorShades, setColorShades] = useState<string[]>(
    generateColorShades(color, 10)
  );

  useEffect(() => {
    setColorShades(generateColorShades(color, 10));
  }, [color]);

  return (
    <section className="w-[85vw] h-10 flex items-center mb-4 gap-x-3">
      <div className="w-[30%] h-9 rounded-full bg-[#26252A] flex items-center justify-center">
        <HuePicker
          color={color}
          onChange={(selectedColor) => {
            console.log(selectedColor.hex);
            updateColor(selectedColor.hex);
          }}
          className="rounded-full"
        />
      </div>

      <div className="w-[70%] h-9 bg-[#26252A] rounded-full flex gap-x-2 items-center px-2">
        {colorShades.map((shade) => (
          <div
            className="w-[10%]  rounded-full h-3"
            style={{
              backgroundColor: shade,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ColorPicker;
