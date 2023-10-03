import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "../pages/About";

describe("About component", () => {
  test('renders the title "About Star Wars"', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const titleElement = screen.getByText("About Star Wars");
    expect(titleElement).toBeInTheDocument();
  });
  test("renders the text in About page ", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const paragraphElement = screen.getByTestId("about-text").innerHTML;
    expect(paragraphElement).toContain("Star wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.");
  });
});
