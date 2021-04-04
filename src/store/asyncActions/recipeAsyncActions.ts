import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch, RootState } from "../storeConfig";

const RECIPE_API = "http://localhost:3001/recipes";

export const fetchRecipesAsyncAction = createAsyncThunk<any, {},
  {
    dispatch: AppDispatch,
    state: RootState,
  }>('fetchRecipesAsyncAction', async (args: {}, thunkAPI) => {
    try {
      const response = await axios.get(RECIPE_API);
      console.log(response.data)
      return { recipes: response.data }
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue("Error Fetching Data")
    }

  });