import menuView from '../views/menuView.js';
import { state, deleteRecipe } from '../model.js';
import recipeDetailsView from '../views/recipeDetailsView.js';

// Display menu content
export function controlMenu() {
  menuView.renderHTML(state.menu);
}

// Display the detail of a recipe (data already loaded, no API fetch)
export function handleRecipeDetailsFromMenu(id) {
  const recipe = state.menu.find(el => +el.id === +id);

  recipeDetailsView.renderHTML(recipe, 'menu');
}

// Deleting recipe from the state and removing it from the DOM
export function handleDeleteRecipe(id) {
  const [recipe] = state.menu.filter(el => el.id === id);
  deleteRecipe(id);
  menuView.removeRecipe(recipe.id);
}
