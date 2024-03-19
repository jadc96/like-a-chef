import recipesView from '../views/recipesView.js';
import {
  loadRecipesMyIng,
  loadRecipesQuery,
  loadRecipeDetails,
  state,
} from '../model.js';
import recipeDetailsView from '../views/recipeDetailsView.js';

export function controlRecipes() {
  recipesView.renderHTML();
}

export async function handleRecipeDetailsFromSearch(id) {
  const recipe = state.recipes.find(el => +el.id === +id);
  const recipeData = await loadRecipeDetails(recipe.id);

  recipeDetailsView.renderHTML(recipeData, 'recipes');
}

export async function handleSearchRecipes(
  useOnlyMyIng,
  query,
  diets,
  intolerances
) {
  try {
    if (useOnlyMyIng) {
      const data = await loadRecipesMyIng();
      recipesView.displayRecipes(data);
    }
    if (!useOnlyMyIng) {
      if (!query) throw new Error('Please enter a query');
      const data = await loadRecipesQuery(query, diets, intolerances);
      recipesView.displayRecipes(data);
    }
  } catch (error) {
    console.log(error);
  }
}
