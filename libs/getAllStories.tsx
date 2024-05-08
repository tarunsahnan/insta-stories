import { StoryInterface } from "@/types/StoryInterface";

export default async function getAllStories(
  host: string
): Promise<{ stories: StoryInterface[] }> {
  const data = await fetch(`http://${host}/api/stories`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
