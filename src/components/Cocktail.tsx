import React from 'react';
import {CocktailInterface} from '../interfaces';

interface CocktailPropsInterface {
  cocktail: CocktailInterface;
  onHandleClick: (cocktail: CocktailInterface) => void;
  btnLabel: string;
  index?: number;
  small?: boolean;
}

const Cocktail: React.FC<CocktailPropsInterface> = (props: CocktailPropsInterface) => {
  const {cocktail, onHandleClick, btnLabel, index, small} = props;

  return (
    <li key={`${cocktail.idDrink}${(index ? `-${index}` : '')}`} className={`cocktail ${(small ? 'small' : '')}`}>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <div>
        <h3 title={cocktail.strDrink}>{cocktail.strDrink}</h3>
        <button onClick={() => onHandleClick(cocktail)}>{btnLabel}</button>
      </div>
    </li>
  );
};

export default Cocktail;