import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function RecipeList() {
  const filtered = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const displayList = searchTerm.trim() === '' ? recipes : filtered;

  return (
    <div style={{ padding: '20px' }}>
      {displayList.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);
        return (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
            {isFavorite ? (
              <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RecipeList;
