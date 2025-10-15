import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // Search / Filtering state
  searchTerm: '',
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // يمكن تستدعي فلترة مباشرة بعد تغيير
    get().filterRecipes();
  },
  filteredRecipes: [],
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },
}));

export default useRecipeStore;
