import React from "react";
import { getByTestId, render, screen, fireEvent } from "@testing-library/react";
import FilmBox from "../components/FilmBox";
import { Film } from "../static/types";

describe("FilmBox component", () => {
  test("renders the film title", () => {
    const mockFilm = {
      title: "A New Hope",
      episode_id: 4,
      release_date: "1977-05-25",
      characters: [],
    };
    const showPeople = async (
      selected_film: Film,
      character_urls: string[]
    ) => {};
    render(<FilmBox film={mockFilm} showPeople={showPeople} />);
    const titleElement = screen.getByText(mockFilm.title);
    expect(titleElement).toBeInTheDocument();
  }),
    test("shows people on click", () => {
      const mockFilm = {
        title: "A New Hope",
        episode_id: 4,
        release_date: "1977-05-25",
        characters: [],
      };
      console.log = jest.fn();
      const showPeople = async (
        selected_film: Film,
        character_urls: string[]
      ) => {
        console.log("Show people fired.");
      };

      render(<FilmBox film={mockFilm} showPeople={showPeople} />);
      const cardActionArea = screen.getByTestId("show-people-button-4");
      fireEvent.click(cardActionArea);
      expect(console.log).toHaveBeenCalledWith("Show people fired.");
    });
});
