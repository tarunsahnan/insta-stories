import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import StoryExpanded from "../storyExpanded";
import { stories } from "@/app/api/stories/stories";

describe("StoryExpanded component", () => {
  const data = [stories[0], stories[1]];

  test("renders without crashing", () => {
    render(
      <StoryExpanded
        data={data}
        currStoryIndex={0}
        setSelectedStoryIndex={() => {}}
      />
    );
  });

  test("calls setSelectedStoryIndex when close button is clicked", () => {
    const setSelectedStoryIndexMock = vi.fn();
    const { container } = render(
      <StoryExpanded
        data={data}
        currStoryIndex={0}
        setSelectedStoryIndex={setSelectedStoryIndexMock}
      />
    );
    const closeButton = screen.getAllByTestId("close-button")[1];
    fireEvent.click(closeButton);
    expect(setSelectedStoryIndexMock).toHaveBeenCalled();
  });

  test("navigates to the next slide when clicked on right side of the screen", async () => {
    const { container } = render(
      <StoryExpanded
        data={data}
        currStoryIndex={0}
        setSelectedStoryIndex={() => {}}
      />
    );
    const component = screen.getAllByTestId("story-expanded-main")[2];
    if (!component) return;

    console.log({ component });

    fireEvent.click(component, { clientX: 300 });

    await screen.findAllByText(stories[1].userName);
  });

  test("navigates to the previous slide when clicked on left side of the screen", async () => {
    const { container } = render(
      <StoryExpanded
        data={data}
        currStoryIndex={1}
        setSelectedStoryIndex={() => {}}
      />
    );
    const component = screen.getAllByTestId("story-expanded-main")[3];

    if (!component) return;

    fireEvent.click(component, { clientX: 50 });

    await screen.findAllByText(stories[0].userName);
  });
});
