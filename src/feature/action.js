import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getdata = createAsyncThunk("country/select", async () => {
  try {
    const data = await axios.get("https://restcountries.com/v2/all");
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error, "error");
  }
});

export const countryName = createAsyncThunk("/coutryName", async (payload) => {
  try {
    const dataCountry = await axios.get(
      ` https://restcountries.com/v2/name/${payload}`
    );
    console.log(dataCountry, "payload");
    return dataCountry.data;
  } catch (error) {
    console.log(error, "error in county name api");
  }
});
