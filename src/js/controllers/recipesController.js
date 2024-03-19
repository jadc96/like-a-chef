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
  console.log(id);
  const recipe = state.recipes.find(el => +el.id === +id);
  console.log(recipe);
  const recipeData = await loadRecipeDetails(recipe.id);

  // WORKING LOCALLY
  // const recipeData = await loadRecipeDetails();

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
