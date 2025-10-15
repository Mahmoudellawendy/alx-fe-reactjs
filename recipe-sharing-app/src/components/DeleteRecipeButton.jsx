import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/');
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
