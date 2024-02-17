import StarIcon from "@/assets/Icons/StarIcon";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ModelsRowi {
  name: string;
  version: string;
  license: string;
  rating: number;
  logo: StaticImageData;
}

const ModelsRow = ({ license, name, rating, version, logo }: ModelsRowi) => {
  return (
    <div className="h-16 w-full flex items-center text-sm">
      <span className="w-[40%] text-start flex items-center gap-x-5">
        <Image src={logo} width={30} height={30} alt={name} />
        {name}
      </span>
      <span className="w-[10%] text-center text-gray-200 font-light">
        {version}
      </span>
      <span className="w-[10%] text-center text-gray-200 font-light">
        {license}
      </span>
      <span className="w-[20%] text-center">ssm</span>
      <span className="w-[20%] flex justify-center items-center gap-x-1">
        {Array(rating)
          .fill("")
          .map((_, i) => (
            <StarIcon key={i} isFilled />
          ))}

        {Array(5 - rating)
          .fill("")
          .map((_, i) => (
            <StarIcon key={i} />
          ))}
      </span>
    </div>
  );
};

export default ModelsRow;
