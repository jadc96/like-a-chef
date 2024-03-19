import recipeDetailsView from '../views/recipeDetailsView.js';
import recipesView from '../views/recipesView.js';
import menuView from '../views/menuView.js';

import { state, addRecipeToMenu } from '../model.js';

// Display the details of a single recipe
export async function controlDisplayRecipe(recipeData, origin) {
  recipeDetailsView.renderHTML(recipeData, origin);
}

// Get back to previous page (either the search list or the menu list)
export function handleBackToList(origin) {
  if (origin === 'recipes') {
    recipesView.renderHTML();
    recipesView.displayRecipes(state.recipes);
  }
  if (origin === 'menu') {
    menuView.renderHTML(state.menu);
  }
}

// Add a recipe to the menu
export function handleAddToMenu(recipeId) {
  try {
    if (state.currentRecipe.id !== recipeId) throw new Error();

    if (state.menu.some(recipe => recipe.id === recipeId)) {
      console.log('Recipe already in menu');
      return;
    }

    addRecipeToMenu();
  } catch (error) {
    console.error(error);
  }
}
