import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../util/constants";
import { thunkAPIProps } from "./recipeAsyncActions";

export const fetchSpecialsAsyncAction = createAsyncThunk<any, {}, thunkAPIProps>(
  'fetchSpecialsAsyncAction',
  async (args: {}, thunkAPI) => {
    try {
      const response = await axios.get(API_URL + '/specials');
      return { specials: response.data }
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue("Error Fetching Data");
    }
  }
);