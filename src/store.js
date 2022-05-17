import { configureStore } from "@reduxjs/toolkit";
import country from "./feature/countryslicer.js";
import favitem from "./feature/favslicer.js";
import countryname from "./feature/nameslicer";
export const store = configureStore({
  reducer: { country, favitem, countryname },
});
