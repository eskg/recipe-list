import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../models/Recipes";
import { fetchRecipesAsyncAction } from "../asyncActions/recipeAsyncActions";

export interface RecipeState {
    recipes: Recipe[];
}

const initialState: RecipeState = {
    recipes: []
};

// set enabled config true or false
const setRecipes = (state: RecipeState, action: PayloadAction<{ recipes: Recipe[] }>) => {
    state.recipes = action.payload.recipes;
};

// configure whiteLabel related states 
const recipeSlice = createSlice({
    name: 'recipe',
    initialState: initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchRecipesAsyncAction.fulfilled, setRecipes)
    }
});


export default recipeSlice.reducer;