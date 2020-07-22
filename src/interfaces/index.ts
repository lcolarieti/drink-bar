
// Ingredients interfaces

export interface IngredientInterface {
  idIngredient: number;
  strIngredient: string;
  strDescription: string;
  strType: string;
  strAlcohol: string;
  strABV: number;
}

export interface IngredientsListInterface {
  ingredients: IngredientInterface[]
}

// Cocktails interfaces

export interface CocktailInterface {
  idDrink: number;
  strDrinkThumb: string;
  strDrink: string;
}

export interface CocktailsListInterface {
  drinks: CocktailInterface[]
}