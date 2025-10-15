import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function RecipeList() {
  const filtered = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  // إذا ما في بحث شغال، اعرض القائمة الكاملة
  const displayList = (searchTerm.trim() === '') ? recipes : filtered;

  return (
    <div style={{ padding: '20px' }}>
      {displayList.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        displayList.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              marginBottom: '15px',
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '4px'
            }}
          >
            <Link
              to={`/recipes/${recipe.id}`}
              style={{ textDecoration: 'none', color: '#0070f3' }}
            >
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;
