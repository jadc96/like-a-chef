///////////////////// PRELOADED DATA //////////////////////

const apple = {
  aisle: 'Produce',
  categoryPath: ['fruit'],
  consistency: 'solid',
  id: 9003,
  image: 'apple.jpg',
  meta: [],
  name: 'apples',
  original: 'apples',
  originalName: 'apples',
  possibleUnits: (12)[
    ('small',
    'large',
    'piece',
    'slice',
    'g',
    'extra small',
    'medium',
    'oz',
    'cup slice',
    'NLEA serving',
    'cup',
    'serving')
  ],
  shoppingListUnits: ['pieces'],
};

const bread = {
  aisle: 'Bakery/Bread',
  categoryPath: ['bread'],
  consistency: 'solid',
  id: 18064,
  image: 'white-bread.jpg',
  meta: [],
  name: 'bread',
  original: 'bread',
  originalName: 'bread',
  possibleUnits: (12)[
    ('slice',
    'loaf',
    'piece',
    'g',
    'oz',
    'cup slice',
    'NLEA serving',
    'cup',
    'serving',
    'baguette',
    'baguette',
    'baguette')
  ],
  shoppingListUnits: ['pieces'],
};

const zucchini = {
  aisle: 'Produce',
  categoryPath: ['summer squash', 'squash', 'vegetable'],
  consistency: 'solid',
  id: 11477,
  image: 'zucchini.jpg',
  meta: [],
  name: 'courgette',
  original: 'courgette',
  originalName: 'courgette',
  possibleUnits: (9)[
    ('small', 'large', 'piece', 'slice', 'g', 'stick', 'medium', 'oz', 'cup')
  ],
  shoppingListUnits: ['pieces'],
};

export const state = {
  currentIngredient: {},
  fridgeIngredients: [],
  recipes: [],
  currentRecipe: {},
  menu: [],
};

///////////////////// SERVER CALLS //////////////////////

export const loadAutocompleteInfo = async function (query) {
  try {
    const res = await fetch(
      `${process.env.NODE_API_URL}/autocomplete/${query}`
    );
    const data = await res.json();

    if (data.length === 0) throw new Error('No results found');

    return data;
  } catch (error) {
    throw error;
  }
};

export const loadIngredientInfo = async function (name) {
  try {
    // Get ingredient ID based on its name
    const res = await fetch(`${process.env.NODE_API_URL}/search/${name}`);
    const data = await res.json();

    if (data.results.length === 0) throw new Error();

    const id = data.results[0].id;

    // Get ingredient informations based on its ID
    const response = await fetch(`${process.env.NODE_API_URL}/info/${id}`);
    const info = await response.json();

    if (!info.name)
      throw new Error('Something went wrong loading ingredient data');

    state.currentIngredient = info;
    state.currentIngredient.quantity = 1;
    state.fridgeIngredients.push(info);
    updateLocalStorageIngredients();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteIng = function (id) {
  const index = state.fridgeIngredients.findIndex(ing => ing.id === id);

  if (index !== -1) {
    state.fridgeIngredients.splice(index, 1);
  }
  updateLocalStorageIngredients();
};

export const loadRecipesMyIng = async function () {
  let ingredientsList = '';
  state.fridgeIngredients.forEach(el => {
    ingredientsList += `${el.name},+`;
  });
  ingredientsList = ingredientsList.slice(0, -2);

  if (ingredientsList === '') return;

  const res = await fetch(
    `${process.env.NODE_API_URL}/recipesByIng/${ingredientsList}`
  );
  const data = await res.json();
  state.recipes = data;

  return data;
};

export const loadRecipesQuery = async function (query, diets, intolerances) {
  if (query === '') query = undefined;
  if (diets === '') diets = undefined;
  if (intolerances === '') intolerances = undefined;

  const res = await fetch(
    `${process.env.NODE_API_URL}/recipesByQuery/${query}/${diets}/${intolerances}`
  );
  const data = await res.json();
  state.recipes = data.results;

  return data.results;
};

export const loadRecipeDetails = async function (id) {
  const res = await fetch(`${process.env.NODE_API_URL}/recipeDetails/${id}`);
  const data = await res.json();
  state.currentRecipe = data;
  updateLocalStorageCurrentRecipe();
};

export const addRecipeToMenu = function () {
  state.menu.push(state.currentRecipe);
  updateLocalStorageMenu();
};

export const deleteRecipe = function (id) {
  state.menu.pop(recipe => recipe.id === id);
  updateLocalStorageMenu();
};

///////////////////// LOCAL STORAGE UPDATES //////////////////////

const updateLocalStorageIngredients = function () {
  window.localStorage.setItem(
    'fridgeIngredients',
    JSON.stringify({ ...state.fridgeIngredients })
  );
};

const updateLocalStorageCurrentRecipe = function () {
  window.localStorage.setItem(
    'currentRecipe',
    JSON.stringify({ ...state.currentRecipe })
  );
};

const updateLocalStorageMenu = function () {
  window.localStorage.setItem('menu', JSON.stringify({ ...state.menu }));
};

///////////////////// STATE INIT //////////////////////

const init = function () {
  const fridgeIngredients = localStorage.getItem('fridgeIngredients');
  const menu = localStorage.getItem('menu');

  if (fridgeIngredients)
    state.fridgeIngredients = Object.values(JSON.parse(fridgeIngredients));
  if (menu) state.menu = Object.values(JSON.parse(menu));
};

init();
