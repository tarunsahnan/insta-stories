import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Story from "../story";
import { StoryInterface } from "@/types/StoryInterface";

const mockStory: StoryInterface = {
  userName: "John Doe",
  userImage: "https://example.com/image.jpg",
  userStory: "https://example.com/story.jpg",
};

describe("Story component", () => {
  test("renders story with correct username and image", () => {
    const { container, rerender } = render(
      <Story item={mockStory} onClickHandler={() => {}} />
    );
    expect(container).toMatchSnapshot();
    const usernameElement = screen.getByText(mockStory.userName);
    const imageElement = screen.getByAltText(mockStory.userName);
    expect(usernameElement).toBeDefined();
    expect(imageElement).toBeDefined();
    expect(imageElement.attributes);
  });

  test("triggers onClickHandler when clicked", () => {
    const onClickHandlerMock = vi.fn();
    render(<Story item={mockStory} onClickHandler={onClickHandlerMock} />);

    const storyElement = screen.getAllByTestId("story");
    fireEvent.click(storyElement[1]);
    expect(onClickHandlerMock).toHaveBeenCalled();
  });
});
