import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../static/types";

interface CharacterList {
  episode_id: number;
  characters: Character[];
}

interface CharacterState {
  character_lists: CharacterList[];
}

const initialState: CharacterState = {
  character_lists: [],
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    fetchCharactersSuccess: (state, action: PayloadAction<CharacterList>) => {
      if (
        state.character_lists.find(
          (character_list_item) =>
            action.payload.episode_id === character_list_item.episode_id
        )
      ) {
      } else {
        state.character_lists.push(action.payload);
      }
    },
  },
});
export const { fetchCharactersSuccess } = characterSlice.actions;

export default characterSlice.reducer;
