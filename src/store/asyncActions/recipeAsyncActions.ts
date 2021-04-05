import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipe } from "../../models/Recipes";
import { API_URL } from "../../util/constants";
import { AppDispatch, RootState } from "../storeConfig";

export interface thunkAPIProps {
  dispatch: AppDispatch,
  state: RootState,
}

export const fetchRecipesAsyncAction = createAsyncThunk<any, {}, thunkAPIProps>(
  'fetchRecipesAsyncAction',
  async (args: {}, thunkAPI) => {
    try {
      let recipes = thunkAPI.getState().recipe.recipes;

      if (recipes.length === 0) {
        const response = await axios.get(API_URL + '/recipes');
        recipes = response.data;
      }

      return { recipes }
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue("Error Fetching Data");
    }
  }
);

export const fetchRecipeByIdAsyncAction = createAsyncThunk<any, { recipeId: string }, thunkAPIProps>(
  'fetchRecipeByIdAsyncAction',
  async ({ recipeId }, thunkAPI) => {
    try {
      const response = await axios.get(API_URL + '/recipes/' + recipeId);
      return { recipe: response.data as Recipe }
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue("Error Fetching Data");
    }
  }
);

