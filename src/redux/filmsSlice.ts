import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Film } from "../static/types";

interface FilmsState {
  films: Film[];
  status_films: "loading" | "fulfilled" | "failed";
}

const initialState: FilmsState = {
  films: [],
  status_films: "loading",
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    fetchFilmsLoading: (state) => {
      state.status_films = "loading";
    },
    fetchFilmsSuccess: (state, action: PayloadAction<Film[]>) => {
      state.status_films = "fulfilled";
      state.films = action.payload;
    },
    fetchFilmsFailure: (state) => {
      state.status_films = "failed";
    },
  },
});
export const { fetchFilmsLoading, fetchFilmsSuccess, fetchFilmsFailure } =
  filmsSlice.actions;

export default filmsSlice.reducer;
