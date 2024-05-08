import { StoryInterface } from "@/types/StoryInterface";
import React from "react";
import Image from "next/image";

interface StoryProps {
  item: StoryInterface;
}

const Story: React.FC<StoryProps> = ({ item }) => {
  return (
    <div>
      <Image
        src={item.userImage}
        alt={item.userName}
        className="w-14 h-14 rounded-full"
        width={14}
        height={14}
      />
      <p className="font-semibold">{item.userName}</p>
    </div>
  );
};

export default Story;
