import shoppingListView from '../views/shoppingListView.js';
import { state } from '../model.js';

export function controlShoppingList() {
  shoppingListView.renderHTML(state.menuIngredients);
}

export function handlePdf() {
  shoppingListView.generatePDF(state.menuIngredients);
}
