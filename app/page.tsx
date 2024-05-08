import { StoryInterface } from "@/types/StoryInterface";
import Image from "next/image";
import { headers } from "next/headers";
import Story from "@/components/story/story";
import getAllStories from "@/libs/getAllStories";

export default async function Home() {
  const data = await getAllStories(headers().get("host")!);
  return (
    <main className="p-4">
      <h1 className="text-3xl font-semibold text-center">Stories</h1>
      <div className="">
        {data.stories.map((item) => (
          <Story item={item} key={item.userName} />
        ))}
      </div>
    </main>
  );
}
