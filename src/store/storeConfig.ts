import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import RecipeReducer from './slices/recipeSlice';

const rootReducer = combineReducers({
  recipe: RecipeReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;