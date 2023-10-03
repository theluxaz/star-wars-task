import React from "react";
import { render, screen } from "@testing-library/react";
import FilmBox from "../components/FilmBox";

interface Film {
  title: string;
  episode_id: number;
  release_date: string;
  characters: string[];
}

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
  });
});
