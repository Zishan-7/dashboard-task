import StarIcon from "@/assets/Icons/StarIcon";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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
      <span className="relative w-[20%] flex justify-center items-center">
        <Avatar className=" absolute left-8 w-7 h-7">
          <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />
          <AvatarFallback className="bg-black text-white text-[8px]">
            CN
          </AvatarFallback>
        </Avatar>
        <Avatar className=" absolute left-12 w-7 h-7">
          <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" />

          <AvatarFallback className="bg-black text-white text-[8px]">
            CN
          </AvatarFallback>
        </Avatar>
        <Avatar className=" absolute left-16 w-7 h-7">
          <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />

          <AvatarFallback className="bg-black text-white text-[8px]">
            CN
          </AvatarFallback>
        </Avatar>
      </span>
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
