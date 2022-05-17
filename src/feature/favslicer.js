import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fav: [],
};

const favitem = createSlice({
  name: "fav",
  initialState,
  reducers: {
    Addfav: (state, action) => {
      state.fav.push(action.payload);
    },
    Removefav: (state, action) => {
      state.fav = state.fav.filter((item) => item.name !== action.payload);
    },
  },
});

export const { Addfav, Removefav } = favitem.actions;
export default favitem.reducer;
