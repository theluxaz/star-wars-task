import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./filmsSlice";
import characterReducer from "./characterSlice";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    characters: characterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
