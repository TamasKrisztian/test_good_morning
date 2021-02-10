import { render, screen } from "@testing-library/react";
import App from "./App";
import { sum } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("edit", () => {
  render(<App />);
  const linkElement = screen.getByText(/Edit/i);
  expect(linkElement).toBeInTheDocument();
});

test("should fail", () => {
  render(<App />);
  const linkElement = screen.getByText(/Should fail/i);
  expect(linkElement).toBeInTheDocument();
});

test("render btn", () => {
  render(<App />);
  expect(screen.getByText(/Click me!/i)).toHaveClass("btn");
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("2 + 2 is not 5", () => {
  expect(sum(2, 2)).toBe(5);
});
