import { controlHome } from './homeController.js';
import { controlFridge } from './fridgeController.js';
import { controlRecipes } from './recipesController.js';
import { controlMenu } from './menuController.js';
import { controlShoppingList } from './shoppingListController.js';

// Handle listeners for the navbar links, display needed content
export function handleNavigation(value) {
  switch (value) {
    case 'home':
      controlHome();
      break;
    case 'fridge':
      controlFridge();
      break;
    case 'recipes':
      controlRecipes();
      break;
    case 'menu':
      controlMenu();
      break;
    case 'shopping':
      controlShoppingList();
      break;
  }
}
