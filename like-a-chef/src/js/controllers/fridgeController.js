import fridgeView from '../views/fridgeView.js';
import {
  state,
  loadAutocompleteInfo,
  loadIngredientInfo,
  deleteIng,
} from '../model.js';

// Display fridge content
export async function controlFridge() {
  fridgeView.renderHTML();

  fridgeView.updateNumIngredients();
  if (state.fridgeIngredients.length === 0) return;

  state.fridgeIngredients.forEach(el => fridgeView.displayIngredient(el));
  fridgeView.updateNumIngredients();
}

// Autocomplete on the search bar for ingredients
export async function handleAutocomplete(query) {
  try {
    const results = await loadAutocompleteInfo(query);
    fridgeView.displaySuggestionsList(results);
  } catch (error) {
    fridgeView.displayErrorAutocomplete();
  }
}

// Submit query
export async function handleSubmit(data) {
  const fridgeIngredients = state.fridgeIngredients;
  const ok = fridgeView.checkIngredientFormat(data, fridgeIngredients);

  if (!ok) return;

  await loadIngredientInfo(data);

  const category = fridgeView.selectCategory(state.currentIngredient);
  fridgeView.highlightCategory(category);
  handleSort(category);
}

// Side menu grouping ingredients by type
export function handleSort(data) {
  // prettier-ignore
  const categories = [
    'vegetable', 'fruit', 'meat', 'fish', 'drink', 'grain', 'spice',
  ];

  fridgeView.renderHTML();
  fridgeView.highlightCategory(data);

  if (data === 'all') {
    state.fridgeIngredients.forEach(el => {
      fridgeView.displayIngredient(el);
    });
  }

  let other;
  if (data === 'other') {
    state.fridgeIngredients.forEach(ing => {
      other = true;
      categories.forEach(category => {
        if (ing.categoryPath.includes(category)) other = false;
      });
      if (other === true) {
        fridgeView.displayIngredient(ing);
      }
    });
  }

  state.fridgeIngredients.forEach(el => {
    if (el.categoryPath.includes(data)) fridgeView.displayIngredient(el);
  });

  fridgeView.updateNumIngredients();
}

// Delete ingredient from the state and removing it from the DOM
export function handleDeleteIngredient(id) {
  const [ing] = state.fridgeIngredients.filter(el => el.id === id);
  deleteIng(id);
  fridgeView.removeIngredient(ing.name);
  fridgeView.updateNumIngredients();
}
