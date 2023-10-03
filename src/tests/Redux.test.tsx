import characterReducer, {
  fetchCharactersSuccess,
} from "../redux/characterSlice";
import filmsReducer, {
  fetchFilmsLoading,
  fetchFilmsSuccess,
  fetchFilmsFailure,
} from "../redux/filmsSlice";

import { Character, Film } from "../static/types";

describe("characterSlice", () => {
  test("fetchCharactersSuccess should add a new character list to the state", () => {
    const initialState = {
      character_lists: [],
    };
    const characterList = {
      episode_id: 1,
      characters: [
        {
          name: "Luke Skywalker",
          gender: "male",
          birth_year: "1995",
          mass: "42",
        },
        { name: "Darth Vader", gender: "male", birth_year: "1995", mass: "42" },
      ],
    };
    const action = fetchCharactersSuccess(characterList);
    const newState = characterReducer(initialState, action);
    expect(newState.character_lists).toHaveLength(1);
    expect(newState.character_lists[0]).toEqual(characterList);
  });

  test("fetchCharactersSuccess should not add a new character list if it already exists in the state", () => {
    const initialState = {
      character_lists: [
        {
          episode_id: 1,
          characters: [
            {
              name: "Luke Skywalker",
              gender: "male",
              birth_year: "1995",
              mass: "42",
            },
            {
              name: "Darth Vader",
              gender: "male",
              birth_year: "1995",
              mass: "42",
            },
          ],
        },
      ],
    };
    const characterList = {
      episode_id: 1,
      characters: [
        {
          name: "Han Solo",
          gender: "male",
          birth_year: "1995",
          mass: "42",
        },
        { name: "Leya Vader", gender: "male", birth_year: "1995", mass: "42" },
      ],
    };
    const action = fetchCharactersSuccess(characterList);
    const newState = characterReducer(initialState, action);
    expect(newState.character_lists).toHaveLength(1);
    expect(newState.character_lists[0]).toEqual(
      initialState.character_lists[0]
    );
  });
});

interface FilmsState {
  films: Film[];
  status_films: "loading" | "fulfilled" | "failed";
}

describe("filmsSlice", () => {
  test('fetchFilmsLoading should set the status to "loading"', () => {
    const initialState: FilmsState = {
      films: [],
      status_films: "failed",
    };
    const action = fetchFilmsLoading();
    const newState = filmsReducer(initialState, action);
    expect(newState.status_films).toEqual("loading");
  });

  test('fetchFilmsSuccess should set the status to "fulfilled" and update the films', () => {
    const initialState: FilmsState = {
      films: [],
      status_films: "loading",
    };
    const films: Film[] = [
      {
        title: "A New Hope",
        episode_id: 1,
        release_date: "1977-05-25",
        characters: [],
      },
      {
        title: "The Empire Strikes Back",
        episode_id: 2,
        release_date: "1977-05-25",
        characters: [],
      },
    ];
    const action = fetchFilmsSuccess(films);
    const newState = filmsReducer(initialState, action);
    expect(newState.status_films).toEqual("fulfilled");
    expect(newState.films).toEqual(films);
  });

  test('fetchFilmsFailure should set the status to "failed"', () => {
    const initialState: FilmsState = {
      films: [],
      status_films: "loading",
    };
    const action = fetchFilmsFailure();
    const newState = filmsReducer(initialState, action);
    expect(newState.status_films).toEqual("failed");
  });
});
