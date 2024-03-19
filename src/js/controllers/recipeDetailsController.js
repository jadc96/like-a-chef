import recipeDetailsView from '../views/recipeDetailsView.js';
import recipesView from '../views/recipesView.js';
import menuView from '../views/menuView.js';

import { state, addRecipeToMenu, addIngredientsToMenu } from '../model.js';

export async function controlDisplayRecipe(recipeData, origin) {
  recipeDetailsView.renderHTML(recipeData, origin);
}

export function handleBackToList(origin) {
  console.log(origin);
  if (origin === 'recipes') {
    console.log('c est ici');
    recipesView.renderHTML();
    recipesView.displayRecipes(state.recipes);
  }
  if (origin === 'menu') {
    console.log('c est là');
    menuView.renderHTML(state.menu);
  }
}

export function handleAddToMenu(recipeId) {
  try {
    if (state.currentRecipe.id !== recipeId) throw new Error();

    if (state.menu.some(recipe => recipe.id === recipeId)) {
      console.log('Recipe already in menu');
      return;
    }

    addRecipeToMenu();
    addIngredientsToMenu();
  } catch (error) {
    console.log(error);
  }
}
