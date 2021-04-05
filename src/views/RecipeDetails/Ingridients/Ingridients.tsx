import React from 'react';
import { Link } from 'react-router-dom';
import { RecipeIngredient } from '../../../models/Recipes';
import { Special } from '../../../models/Specials';

interface IProps {
  recipeId: string;
  ingredients?: RecipeIngredient[];
  specials: Special[];
}

const Ingridients = ({ recipeId, ingredients, specials }: IProps) => {
  return (
    <div className="recipe-ingridients">
      <Link
        className="update-ingridients-button"
        to={`/${recipeId}/update-ingridents`}
      >
        Update Ingridients
      </Link>
      <h3>Ingridients</h3>
      <ul>
        {ingredients?.map(ingridient => {
          const special = specials.find(special => special.ingredientId === ingridient.uuid);

          return (
            <li>
              <span>{`${ingridient.amount} ${ingridient.measurement} ${ingridient.name}`}</span>
              {special && (
                <div className="ingridient-special">
                  <span> {`${special?.title} (${special.type})`}</span>
                  <span>{special?.text}</span>
                  {special?.code && <span>Code: <strong>{special?.code}</strong></span>}
                  {special?.geo &&
                    <a
                      href={`https://www.google.com/maps/place/${special?.geo}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Directions
                    </a>
                  }
                </div>
              )}
            </li>
          )
        }
        )}
      </ul>
    </div>
  )
}

export default Ingridients;