import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchRecipeByIdAsyncAction } from '../../store/asyncActions/recipeAsyncActions';
import { fetchSpecialsAsyncAction } from '../../store/asyncActions/specialAsyncActions';
import { RootState } from '../../store/storeConfig';
import { FETCH_STATUS } from '../../util/constants';
import { API_URL } from './../../util/constants';
import Ingridients from './Ingridients/Ingridients';
import './Ingridients.css';

interface RecipeDetailsParams {
  recipeId: string;
}

const RecipeDetails = () => {
  const dispatch = useDispatch();
  const { recipeId } = useParams<RecipeDetailsParams>();
  const [status, setStatus] = useState("");
  const { recipe } = useSelector((state: RootState) => state.recipe);
  const { specials } = useSelector((state: RootState) => state.special);

  useEffect(() => {
    fetchRecipe();
    if (specials.length === 0) {
      fetchSpecials();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRecipe = async () => {
    try {
      setStatus(FETCH_STATUS.LOADING);
      const recipeResponse: any = await dispatch(fetchRecipeByIdAsyncAction({ recipeId }));
      setStatus(recipeResponse.error ? FETCH_STATUS.FAILED : FETCH_STATUS.SUCCESS);
    } catch (error) {
      console.log('useEffect', error);
    }
  }

  const fetchSpecials = async () => {
    try {
      console.log('fetchSpecials')
      await dispatch(fetchSpecialsAsyncAction({}));
    } catch (error) {
      console.log('useEffect', error);
    }
  }

  return (
    <div className="recipe-wrapper">
      {status === FETCH_STATUS.SUCCESS && (
        <div className="recipe-container">
          <div className="recipe-left-section">
            <img src={API_URL + recipe?.images.medium} alt={recipe?.title} />
            <h1>{recipe?.title}</h1>
            <p >{recipe?.description}</p>
            <div className="recipe-dates">
              <p><strong>Date Posted:</strong> {recipe?.postDate}</p>
              <p><strong>Last Updated:</strong> {recipe?.editDate}</p>
            </div>
            <p><strong>Preparation Time:</strong> {`${recipe?.prepTime}mins`}</p>
            <p><strong>Cook Time:</strong> {`${recipe?.cookTime}mins`}</p>
          </div>
          <div className="recipe-right-section">
            <Ingridients
              recipeId={recipeId}
              ingredients={recipe?.ingredients}
              specials={specials}
            />
            <h3>Directions</h3>
            <ol className="recipe-direction">
              {recipe?.directions.map(direction => (
                <li>{direction.instructions} {direction.optional && "(optional)"}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
      {status === FETCH_STATUS.LOADING && (
        <p>Loading...</p>
      )}
      {status === FETCH_STATUS.FAILED && (
        <p>FAILED</p>
      )}
    </div>
  )
}

export default RecipeDetails;