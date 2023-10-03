import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Films from "../pages/Films";
import { Provider } from "react-redux";
import store from "../redux/store";
import { MemoryRouter } from "react-router-dom";

describe("Films component", () => {
  test('renders the title "Star Wars Films"', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Films />
        </MemoryRouter>
      </Provider>
    );
    const titleElement = screen.getByText("Star Wars Films");
    expect(titleElement).toBeInTheDocument();
  });
});
