import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesAsyncAction } from '../../store/asyncActions/recipeAsyncActions';
import { RootState } from '../../store/storeConfig';
import { API_URL, FETCH_STATUS } from '../../util/constants';
import { Link } from 'react-router-dom';
import './RecipeList.css';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state: RootState) => state.recipe);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRecipes = async () => {
    try {
      setStatus(FETCH_STATUS.LOADING);
      const response: any = await dispatch(fetchRecipesAsyncAction({}));
      setStatus(response.error ? FETCH_STATUS.FAILED : FETCH_STATUS.SUCCESS);
    } catch (error) {
      console.log('useEffect', error);
    }
  }

  return (
    <div className="recipe-list-container">
      {status === FETCH_STATUS.SUCCESS && recipes.map(recipe => (
        <Link
          key={recipe.uuid}
          className="recipe-item"
          to={"/" + recipe.uuid}
        >
          <img src={API_URL + recipe.images.small} alt={recipe.title} />
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </Link>
      ))}
      {status === FETCH_STATUS.LOADING && (
        <p>Loading...</p>
      )}
      {status === FETCH_STATUS.FAILED && (
        <p>FAILED</p>
      )}

    </div>
  )
}

export default RecipeList;