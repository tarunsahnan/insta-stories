import { expect, test } from "vitest";
import { GET } from "../route";
import { stories } from "../stories";
import Page from "@/app/favicon.ico";

test("/api/stories gives list of storis", async () => {
  const response = await GET();
  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data.stories).toBeDefined();
  expect(data.stories).toStrictEqual(stories);
});
