import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state =>
    state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: '20px' }}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
