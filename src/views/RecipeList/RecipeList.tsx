import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipesAsyncAction } from '../../store/asyncActions/recipeAsyncActions';

const RecipeList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecipes = async () => {
      await dispatch(fetchRecipesAsyncAction({}));
    }
    fetchRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      RecipeList
    </div>
  )
}

export default RecipeList;