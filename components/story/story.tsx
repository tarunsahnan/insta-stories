import { StoryInterface } from "@/types/StoryInterface";
import React from "react";
import Image from "next/image";

interface StoryProps {
  item: StoryInterface;
  onClickHandler: () => void;
}

const Story: React.FC<StoryProps> = ({ item, onClickHandler }) => {
  return (
    <div onClick={() => onClickHandler()} data-testid="story">
      <div className="bg-gradient-to-tr from-yellow-500 to-red-600 p-[1.5px]  rounded-full">
        <div className="bg-white rounded-full p-1">
          <Image
            src={item.userImage}
            alt={item.userName}
            className="w-14 h-14 rounded-full object-cover"
            width={50}
            height={50}
          />
        </div>
      </div>
      <p className="text-xs w-16 truncate text-center">{item.userName}</p>
    </div>
  );
};

export default Story;
