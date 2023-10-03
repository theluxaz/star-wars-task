import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import store from "../redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../pages/About";
import Films from "../pages/Films";

describe("Index component", () => {
  test("renders the Films page", () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Films />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "films",
        element: <Films />,
      },
    ]);

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const filmsPage = screen.getByText("Star Wars Films");
    expect(filmsPage).toBeInTheDocument();
  });
});
