import React from 'react';
import useRecipeStore from './recipeStore';

function DeleteRecipeButton({ id, onDeleted }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    if (onDeleted) onDeleted();
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
      Delete
    </button>
  );
}

export default DeleteRecipeButton;
