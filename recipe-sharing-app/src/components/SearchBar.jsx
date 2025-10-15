import React from 'react';
import useRecipeStore from './recipeStore';

function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  return (
    <div style={{ padding: '10px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '80%',
          padding: '8px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
    </div>
  );
}

export default SearchBar;
