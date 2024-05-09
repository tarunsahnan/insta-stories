import { VitestUtils, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";
import getAllStories from "@/libs/getAllStories";
import { stories } from "../api/stories/stories";

vi.mock("@/libs/getAllStories");
test("Page", () => {
  (getAllStories as any).mockReturnValueOnce(Promise.resolve({ stories }));
  const { container, rerender } = render(<Page />);
  expect(container).toMatchSnapshot();
});
