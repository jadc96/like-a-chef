import { controlWelcome } from './welcomeController.js';
import { controlFridge } from './fridgeController.js';
import { controlRecipes } from './recipesController.js';
import { controlMenu } from './menuController.js';
import { controlShoppingList } from './shoppingListController.js';

export function handleNavigation(value) {
  switch (value) {
    case 'welcome':
      controlWelcome();
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
