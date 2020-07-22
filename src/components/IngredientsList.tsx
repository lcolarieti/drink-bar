import React, {Dispatch, SetStateAction, useState} from 'react';
import {CocktailInterface, IngredientInterface, IngredientsListInterface} from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import CocktailsList from './CocktailsList';

interface IngredientListProps {
  ingredients: IngredientsListInterface;
  fetching: boolean;
  setFetching: Dispatch<SetStateAction<boolean>>;
  setErrorFetching: Dispatch<SetStateAction<boolean>>;
  cart: CocktailInterface[];
  setCart: Dispatch<SetStateAction<CocktailInterface[]>>;
}

const IngredientsList: React.FC<IngredientListProps> = (props: IngredientListProps) => {
  const {ingredients, fetching, setFetching, setErrorFetching, cart, setCart} = props;
  const [ingredientCocktails, setIngredientCocktails] = useState<string | null>(null);

  const handleDescriptionClick = (e: React.MouseEvent<HTMLParagraphElement>): void => {
    e.currentTarget.classList.toggle('ellipsis')
  };

  const handleShowCocktailsClick = (ingredient: string): void => {
    setIngredientCocktails((ingredientCocktails === ingredient ? null : ingredient));
  };

  return (
    <ul className="ingredients-list">
      {
        ingredients instanceof Array && ingredients.map((ingredient: IngredientInterface) => {
          return (
            <li key={ingredient.idIngredient} className="ingredient">
              <h2>
                <FontAwesomeIcon icon={faCocktail} />
                <span>{ingredient.strIngredient}</span>
              </h2>
              <div className="row">
                <div className="image column">
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient.toLowerCase()}-Medium.png`}
                    alt={ingredient.strIngredient}
                  />
                </div>
                <div className="info column">
                  {
                    ingredient.strAlcohol &&
                    <p>
                      <strong>Contains alcohol: </strong>
                      <span>{ingredient.strAlcohol}</span>
                    </p>
                  }
                  {
                    ingredient.strABV &&
                    <p>
                      <strong>Alcohol by volume: </strong>
                      <span>{ingredient.strABV}°</span>
                    </p>
                  }
                  <p
                    className="ellipsis"
                    onClick={handleDescriptionClick}
                  >
                    {ingredient.strDescription}
                  </p>
                </div>
              </div>
              <div className="show-cocktails">
                <button onClick={() => {handleShowCocktailsClick(ingredient.strIngredient.toLowerCase())}}>
                  {ingredient.strIngredient.toLowerCase() === ingredientCocktails ? 'Hide Drinks' : 'Show Drinks'}
                </button>
              </div>
              {
                ingredient.strIngredient.toLowerCase() === ingredientCocktails &&
                <CocktailsList
                  ingredient={ingredientCocktails}
                  fetching={fetching}
                  setFetching={setFetching}
                  setErrorFetching={setErrorFetching}
                  cart={cart}
                  setCart={setCart}
                />
              }
            </li>
          )
        })
      }
    </ul>
  );
};

export default IngredientsList;