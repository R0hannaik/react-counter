import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("Render the app properly", () => {
  render(<Counter />);
  const linkElement = screen.getByText("Increment Counter");
  expect(linkElement).toBeInTheDocument();
});

test("Should display the incremented value", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment Counter"));
  fireEvent.click(screen.getByText("Increment Counter"));
  const linkElement = screen.getByTestId("counter-value");
  expect(linkElement.innerHTML).toEqual("2");
});
