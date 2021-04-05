import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRecipeByIdAsyncAction, fetchRecipesAsyncAction } from "../asyncActions/recipeAsyncActions";
import { Recipe } from './../../models/Recipes';

export interface RecipeState {
    recipes: Recipe[];
    recipe: Recipe | null;
}

const initialState: RecipeState = {
    recipes: [],
    recipe: null,
};

const setRecipes = (state: RecipeState, action: PayloadAction<{ recipes: Recipe[] }>) => {
    state.recipes = action.payload.recipes;
};

const setRecipe = (state: RecipeState, action: PayloadAction<{ recipe: Recipe }>) => {
    state.recipe = action.payload.recipe;
};

const recipeSlice = createSlice({
    name: 'recipe',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchRecipesAsyncAction.fulfilled, setRecipes)
        builder.addCase(fetchRecipeByIdAsyncAction.fulfilled, setRecipe)
    }
});

export default recipeSlice.reducer;