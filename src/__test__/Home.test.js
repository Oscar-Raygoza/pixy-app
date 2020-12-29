import { render, screen } from "@testing-library/react";
import Home from "../views/Home";

test("renders home component", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
