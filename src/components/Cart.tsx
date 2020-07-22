import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {CocktailInterface} from '../interfaces';

interface CartPropsInterface {
  cart: CocktailInterface[];
}

const Cart: React.FC<CartPropsInterface> = (props: CartPropsInterface) => {
  const {cart} = props;

  const handleCartClick = (): void => {
    cart.length > 0 && document
      .getElementsByClassName('main-content-wrap')[0]
      .classList.toggle('show-cart-resume');

    cart.length > 0 && window.scrollTo(0, 0);
  };

  return <div
    className="cart"
    onClick={handleCartClick}
  >
    <FontAwesomeIcon icon={faShoppingCart} />
    <div className="counter">
      {cart.length}
    </div>
  </div>;
};

export default Cart;