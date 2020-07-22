import {CocktailsListInterface, IngredientsListInterface} from '../interfaces';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import axios from 'axios';

export const useFetchIngredient = (
  query: string,
  fetching: boolean,
  setFetching: Dispatch<SetStateAction<boolean>>,
  setErrorFetching: Dispatch<SetStateAction<boolean>>
): IngredientsListInterface | null => {
  const [ingredients, setIngredients] = useState(null);
  const url: string = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${query}`;

  useEffect(() => {
    (async () => {
      setFetching(true);

      try {
        const response = await axios.get(url);
        setIngredients((response.status === 200 ? response.data.ingredients : null));
        setErrorFetching(false);
      } catch (error) {
        console.error(error);
        setIngredients(null);
        setErrorFetching(true);
      }

      setTimeout(() => setFetching(false), 1000);
    })();
    // eslint-disable-next-line
  }, [url]);

  return ingredients;
}

export const useFetchCocktails = (
  ingredient: string,
  fetching: boolean,
  setFetching: Dispatch<SetStateAction<boolean>>,
  setErrorFetching: Dispatch<SetStateAction<boolean>>
): CocktailsListInterface | null => {
  const [cocktails, setCocktails] = useState(null);
  const url: string = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  useEffect(() => {
    (async () => {
      setFetching(true);

      try {
        const response = await axios.get(url);
        setCocktails((response.status === 200 ? response.data.drinks : null));
        setErrorFetching(false);
      } catch (error) {
        console.error(error);
        setCocktails(null);
        setErrorFetching(true);
      }
      setTimeout(() => setFetching(false), 1000);
    })();
    // eslint-disable-next-line
  }, [url]);

  return cocktails;
}