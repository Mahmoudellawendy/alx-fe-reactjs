import useRecipeStore from './recipeStore';

function DeleteRecipeButton({ id, onDeleted }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    if (onDeleted) onDeleted();
  };

  return (
    <button
      onClick={handleDelete}
      style={{ backgroundColor: 'red', color: 'white', marginTop: '10px' }}
    >
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;
