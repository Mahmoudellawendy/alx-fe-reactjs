import useRecipeStore from './recipeStore';

function FavoritesList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => recipes.find((r) => r.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <h4>{recipe.title}</h4>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoritesList;
