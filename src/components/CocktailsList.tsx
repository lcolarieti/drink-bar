import React, {Dispatch, SetStateAction} from 'react';
import {CocktailInterface} from '../interfaces';
import {useFetchCocktails} from '../hooks';
import Cocktail from './Cocktail';

interface CocktailsListProps {
  ingredient: string;
  fetching: boolean;
  setFetching: Dispatch<SetStateAction<boolean>>;
  setErrorFetching: Dispatch<SetStateAction<boolean>>;
  cart: CocktailInterface[];
  setCart: Dispatch<SetStateAction<CocktailInterface[]>>
}

const CocktailsList: React.FC<CocktailsListProps> = (props: CocktailsListProps) => {
  const {ingredient, fetching, setFetching, setErrorFetching, cart, setCart} = props;
  const cocktails = useFetchCocktails(ingredient, fetching, setFetching, setErrorFetching);

  const handleOrderClick = (cocktail: CocktailInterface): void => {
    setCart([...cart, cocktail]);
  };

  return (
    <ul className="cocktails-list">
      {
        cocktails instanceof Array && cocktails.map(
          (cocktail: CocktailInterface, i: number) => (
            <Cocktail
              key={`list-${i}-${cocktail.idDrink}`}
              cocktail={cocktail}
              onHandleClick={handleOrderClick}
              btnLabel="Order Now"
            />)
        )
      }
    </ul>
  );
};

export default CocktailsList;