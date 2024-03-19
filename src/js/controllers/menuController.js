import menuView from '../views/menuView.js';
import { state, deleteRecipe } from '../model.js';
import recipeDetailsView from '../views/recipeDetailsView.js';

export function controlMenu() {
  menuView.renderHTML(state.menu);
}

export function handleRecipeDetailsFromMenu(id) {
  const recipe = state.menu.find(el => +el.id === +id);

  recipeDetailsView.renderHTML(recipe, 'menu');
}

export function handleDeleteRecipe(id) {
  const [recipe] = state.menu.filter(el => el.id === id);

  deleteRecipe(id);
  menuView.removeRecipe(recipe.id);
}
