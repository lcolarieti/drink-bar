import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';

interface SearchIngredientProps {
  ingredient: string;
  setIngredient: Dispatch<SetStateAction<string>>;
}

const SearchIngredient: React.FC<SearchIngredientProps> = (props: SearchIngredientProps) => {
  const {ingredient, setIngredient} = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIngredient(e.target.value);
  };

  return <input
    type="text"
    value={ingredient}
    placeholder="Look for an ingredient"
    onChange={handleOnChange}
  />;

};

export default SearchIngredient;