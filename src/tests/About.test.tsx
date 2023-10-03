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
});
