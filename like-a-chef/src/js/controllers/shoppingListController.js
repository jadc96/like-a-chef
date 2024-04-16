import shoppingListView from '../views/shoppingListView.js';
import { state } from '../model.js';

// Display shopping list content
export function controlShoppingList() {
  const cleanData = shoppingListView.cleanData(state.menu);
  shoppingListView.renderHTML(cleanData);
}

// Generate PDF with list of ingredients regrouped by aisle (categories)
export function handlePdf() {
  const cleanData = shoppingListView.cleanData(state.menu);
  shoppingListView.generatePDF(cleanData);
}
