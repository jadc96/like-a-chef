import shoppingListView from '../views/shoppingListView.js';
import { state } from '../model.js';

export function controlShoppingList() {
  const cleanData = shoppingListView.cleanData(state.menu);
  shoppingListView.renderHTML(cleanData);
}

export function handlePdf() {
  shoppingListView.generatePDF(state.menuIngredients);
}
