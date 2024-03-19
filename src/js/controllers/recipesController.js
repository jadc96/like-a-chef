import recipesView from '../views/recipesView.js';
import {
  loadRecipesMyIng,
  loadRecipesQuery,
  loadRecipeDetails,
  state,
} from '../model.js';
import recipeDetailsView from '../views/recipeDetailsView.js';

// Display recipes content
export function controlRecipes() {
  recipesView.renderHTML();
}

// Display the details of a clicked recipe in the list
export async function handleRecipeDetailsFromSearch(id) {
  const recipe = state.recipes.find(el => +el.id === +id);
  const recipeData = await loadRecipeDetails(recipe.id);

  // WORKING LOCALLY
  // const recipeData = await loadRecipeDetails();

  recipeDetailsView.renderHTML(recipeData, 'recipes');
}

// Display the list of results
export async function handleSearchRecipes(
  useOnlyMyIng,
  query,
  diets,
  intolerances
) {
  try {
    // Searching recipes that use my ingredients
    if (useOnlyMyIng) {
      const data = await loadRecipesMyIng();
      recipesView.displayRecipes(data);
    }

    // Searching recipes according to the query string
    if (!useOnlyMyIng) {
      if (!query) throw new Error('Please enter a query');
      const data = await loadRecipesQuery(query, diets, intolerances);
      recipesView.displayRecipes(data);
    }
  } catch (error) {
    console.error(error);
  }
}
