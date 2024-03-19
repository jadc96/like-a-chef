// Importing views to load event listeners
import navigationListener from '../views/navigationListener';
import welcomeView from '../views/welcomeView';
import fridgeView from '../views/fridgeView';
import recipesView from '../views/recipesView';
import recipeDetailsView from '../views/recipeDetailsView';
import menuView from '../views/menuView';
import shoppingListView from '../views/shoppingListView';

// Importing controllers to pass handlers functions to event listeners
import { handleNavigation } from './navigationController';
import * as fridgeController from './fridgeController';
import * as recipesController from './recipesController';
import * as recipeDetailsController from './recipeDetailsController';
import * as menuController from './menuController';
import * as shoppingListController from './shoppingListController';
import { controlWelcome } from './welcomeController';

const init = function () {
  // Setting event listeners on nav links
  navigationListener(handleNavigation);

  // Loading all event listeners just once
  welcomeView.loadingListener();
  welcomeView.navigationListener(handleNavigation);

  fridgeView.autocompleteListener(fridgeController.handleAutocomplete);
  fridgeView.suggestionsListener();
  fridgeView.quitAutocompleteListener();
  fridgeView.submitListener(fridgeController.handleSubmit);
  fridgeView.sortListener(fridgeController.handleSort);
  fridgeView.deleteIngredientListener(fridgeController.handleDeleteIngredient);
  fridgeView.navigationListener(handleNavigation);

  recipesView.tabClickListener();
  recipesView.searchListener(recipesController.handleSearchRecipes);
  recipesView.advancedSearchListener();
  recipesView.displayRecipeListener(
    recipesController.handleRecipeDetailsFromSearch
  );
  recipesView.navigationListener(handleNavigation);

  recipeDetailsView.listenAddToMenu(recipeDetailsController.handleAddToMenu);
  recipeDetailsView.listenBackToList(recipeDetailsController.handleBackToList);

  menuView.displayRecipeListener(menuController.handleRecipeDetailsFromMenu);
  menuView.deleteListener(menuController.handleDeleteRecipe);
  menuView.navigationListener(handleNavigation);

  shoppingListView.generatePdfListener(shoppingListController.handlePdf);
  shoppingListView.navigationListener(handleNavigation);

  // Calling controller of welcome page
  controlWelcome();
};

init();
