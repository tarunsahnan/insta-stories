"use client";
import { useEffect, useState } from "react";
import { StoryInterface } from "@/types/StoryInterface";
import Image from "next/image";
// import { headers } from "next/headers";
import Story from "@/components/story/story";
import getAllStories from "@/libs/getAllStories";
import StoryExpanded from "@/components/story/storyExpanded";

const Home = () => {
  const [stories, setStories] = useState<StoryInterface[]>([]);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number>(-1);

  useEffect(() => {
    getAllStories(window.location.origin).then((data) => {
      setStories(data.stories);
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <h1 className="text-3xl font-semibold text-center">Stories</h1>
      <div className="flex space-x-2 overflow-x-scroll max-w-xl bg-white border-gray-200 p-4 scroll-smooth scrollbar-hide">
        {stories.map((item, index) => (
          <Story
            item={item}
            key={index}
            onClickHandler={() => {
              setSelectedStoryIndex(index);
            }}
          />
        ))}
      </div>
      {selectedStoryIndex !== -1 && (
        <StoryExpanded
          data={stories}
          currStoryIndex={selectedStoryIndex}
          setSelectedStoryIndex={setSelectedStoryIndex}
        />
      )}
    </div>
  );
};

export default Home;
