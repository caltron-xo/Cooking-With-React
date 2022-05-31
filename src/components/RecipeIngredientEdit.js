import React from 'react';
import Ingredient from './Ingredient';

export default function recipeIngredientEdit(props) {
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props;

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        type='text'
        className='recipe-edit__input'
        value={ingredient.name}
        onChange={(e) => handleChange({ name: e.target.value })}
      />
      <input
        type='text'
        className='recipe-edit__input'
        value={ingredient.amount}
        onChange={(e) => handleChange({ amount: e.target.value })}
      />
      <button className='btn btn--danger' onClick={() => handleIngredientDelete(ingredient.id)}>
        &times;
      </button>
    </>
  );
}
