import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {CocktailInterface} from '../interfaces';
import Cocktail from './Cocktail';

interface CartResumePropsInterface {
  cart: CocktailInterface[];
  setCart: Dispatch<SetStateAction<CocktailInterface[]>>;
}

const CartResume: React.FC<CartResumePropsInterface> = (props: CartResumePropsInterface) => {
  const {cart, setCart} = props;

  useEffect(() => {

    return () => {
      document
        .getElementsByClassName('main-content-wrap')[0]
        .classList.toggle('show-cart-resume');
    }
  }, []);

  const handleRemoveClick = (cocktail: CocktailInterface): void => {
    let _cart = [...cart];
    _cart.find((_cocktail: CocktailInterface, i: number) => {
      if (_cocktail.idDrink === cocktail.idDrink) {
        _cart.splice(i, 1);
        return true;
      }
      return false;
    });
    setCart(_cart);
  };

  return (
    <aside className="cart-resume">

      <h2>My orders</h2>

      <ul>
        {
          cart.map((cocktail: CocktailInterface, i: number) => (
            <Cocktail
              key={`cart-${i}-${cocktail.idDrink}`}
              cocktail={cocktail}
              onHandleClick={handleRemoveClick}
              btnLabel="Remove from cart"
              index={i}
              small={true}
            />
          ))
        }
      </ul>
    </aside>
  );
};

export default CartResume;