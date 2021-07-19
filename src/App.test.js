import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/A breweries list by Open Brewery DB/i);
  expect(linkElement).toBeInTheDocument();
});
