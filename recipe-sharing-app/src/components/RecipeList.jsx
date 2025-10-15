import React from 'react';
import useRecipeStore from '../recipeStore';

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ margin: '20px' }}>
      {recipes.length === 0 ? (
        <p>No recipes yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;
