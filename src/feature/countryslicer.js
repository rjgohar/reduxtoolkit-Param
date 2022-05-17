import { createSlice } from "@reduxjs/toolkit";
import { getdata } from "./action";
const initialState = {
  countryDetails: [],
  filteredData: [],
  countryLoading: false,
  countryLoadedSuccess: false,
  countryLoadedFailed: false,
};
const country = createSlice({
  name: "contry",
  initialState,
  reducers: {
    setInput: (state, action) => {
      if (action.payload != null) {
        state.filteredData = state.countryDetails.filter((item) => {
          if (item.name.toLowerCase().includes(action.payload)) {
            return item;
          }
        });
      }
    },
    searchByRegion: (state, action) => {
      if (action.payload !== "all") {
        state.filteredData = state.countryDetails.filter((item) => {
          if (item.region.includes(action.payload)) {
            return item;
          }
        });
      }
    },
  },

  extraReducers: {
    [getdata.pending]: (state) => {
      state.countryLoading = true;
    },
    [getdata.fulfilled]: (state, action) => {
      state.countryLoading = false;
      state.countryLoadedSuccess = true;
      state.countryLoadedFailed = false;
      state.countryDetails = action.payload;
      state.filteredData = action.payload;
    },
    [getdata.rejected]: (state) => {
      state.countryLoading = false;
      state.countryLoadedSuccess = false;
      state.countryLoadedFailed = true;
    },
  },
});
export const { setInput, searchByRegion } = country.actions;
export default country.reducer;
