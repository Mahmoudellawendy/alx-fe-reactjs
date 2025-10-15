import React from 'react';
import useRecipeStore from './recipeStore';

function DeleteRecipeButton({ id, onDeleted }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleClick = () => {
    deleteRecipe(id);
    if (onDeleted) {
      onDeleted();
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        marginTop: '10px',
        cursor: 'pointer',
      }}
    >
      Delete
    </button>
  );
}

export default DeleteRecipeButton;
