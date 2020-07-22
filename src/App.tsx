import React, {useState} from 'react';
import './App.scss';
import SearchIngredient from './components/SearchIngredient';
import Loading from './components/Loading';
import {useFetchIngredient} from './hooks';
import EmptyList from './components/EmptyList';
import IngredientsList from './components/IngredientsList';
import Cart from './components/Cart';
import {CocktailInterface} from './interfaces';
import CartResume from './components/CartResume';

function App() {
  const [searchIngredient, setSearchIngredient] = useState<string>('');
  const [fetching, setFetching] = useState<boolean>(false);
  const [cart, setCart] = useState<CocktailInterface[]>([]);
  const [errorFetching, setErrorFetching] = useState<boolean>(false);
  const ingredients = useFetchIngredient(searchIngredient, fetching, setFetching, setErrorFetching);

  return (
    <>
      <header>
        <div className="main-content">
          <h1>Drink Bar</h1>
          <div className="right">
            <SearchIngredient
              ingredient={searchIngredient}
              setIngredient={setSearchIngredient}
            />
            <Cart cart={cart} />
          </div>
        </div>
      </header>

      <div className="main-content-wrap">
        <main>
        <div className="main-content">
          {searchIngredient === '' && <EmptyList text="To begin with, look for an ingredient" />}
          {
            searchIngredient !== '' && (
              ingredients ?
                <IngredientsList
                  ingredients={ingredients}
                  fetching={fetching}
                  setFetching={setFetching}
                  setErrorFetching={setErrorFetching}
                  cart={cart}
                  setCart={setCart}
                /> :
                <EmptyList text={!errorFetching ? 'No ingredients found' : 'Oops something went wrong, please retry later'} />
              )
          }
        </div>
      </main>
        {
          cart.length > 0 &&
          <CartResume cart={cart} setCart={setCart} />
        }
      </div>
      {fetching && <Loading />}
    </>
  );
}

export default App;
