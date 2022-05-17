import { createSlice } from "@reduxjs/toolkit";
import { countryName } from "./action";
const initialState = {
  name: [],

  nameLoading: false,
  nameLoadedSuccess: false,
  nameLoadedFailed: false,
};
const countryname = createSlice({
  name: "Cname",
  initialState,

  reducers: {
    AddCname: (state, action) => {
      state.AddCname.push(action.payload);
    },
  },
  extraReducers: {
    [countryName.pending]: (state) => {
      state.countryLoading = true;
    },
    [countryName.fulfilled]: (state, action) => {
      state.nameLoading = false;
      state.nameLoadedSuccess = true;
      state.nameLoadedFailed = false;
      state.name = action.payload;
    },

    [countryName.rejected]: (state) => {
      state.nameLoadedFailed = true;
      state.nameLoadedSuccess = false;
      state.nameLoading = false;
    },
  },
});
export const { AddCname } = countryname.actions;
export default countryname.reducer;
