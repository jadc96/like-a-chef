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
    // WORKING LOCALLY
    // return [
    //   { name: 'apple' },
    //   { name: 'bread' },
    //   { name: 'zucchini' },
    //   { name: 'apple cider' },
    // ];

    // WORKING WITH THE API
    const res = await fetch(
      `http://localhost:3000/api/v1/autocomplete/${query}`
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
    // WORKING LOCALLY
    // if (name === 'apple') state.currentIngredient = apple;
    // if (name === 'bread') state.currentIngredient = bread;
    // if (name === 'zucchini') state.currentIngredient = zucchini;
    // state.currentIngredient.quantity = 1;
    // state.fridgeIngredients.push(state.currentIngredient);
    // updateLocalStorageIngredients();

    // WORKING WITH THE API
    // Get ingredient ID based on its name
    const res = await fetch(`http://localhost:3000/api/v1/search/${name}`);
    const data = await res.json();

    if (data.results.length === 0) throw new Error();

    const id = data.results[0].id;

    // // Get ingredient informations based on its ID
    const response = await fetch(`http://localhost:3000/api/v1/info/${id}`);
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
  state.fridgeIngredients.pop(ing => ing.id === id);
  updateLocalStorageIngredients();
};

export const loadRecipesMyIng = async function () {
  // WORKING LOCALLY
  // const data = JSON.parse(window.localStorage.getItem('recipes'));
  // state.recipes = data;
  // return data;

  let ingredientsList = '';
  state.fridgeIngredients.forEach(el => {
    ingredientsList += `${el.name},+`;
  });
  ingredientsList = ingredientsList.slice(0, -2);

  if (ingredientsList === '') return;

  const res = await fetch(
    `http://localhost:3000/api/v1/recipesByIng/${ingredientsList}`
  );
  const data = await res.json();
  state.recipes = data;

  // BEFORE WORKING LOCALLY
  window.localStorage.setItem('recipes', JSON.stringify(data));

  return data;
};

export const loadRecipesQuery = async function (query, diets, intolerances) {
  // WORKING LOCALLY
  // const data = JSON.parse(window.localStorage.getItem('searchedRecipes'));
  // results = data.results;

  // return results;

  if (query === '') query = undefined;
  if (diets === '') diets = undefined;
  if (intolerances === '') intolerances = undefined;

  const res = await fetch(
    `http://localhost:3000/api/v1/recipesByQuery/${query}/${diets}/${intolerances}`
  );
  const data = await res.json();
  state.recipes = data.results;

  // BEFORE WORKING LOCALLY
  window.localStorage.setItem('searchedRecipes', JSON.stringify(data));

  return data.results;
};

export const loadRecipeDetails = async function (id) {
  // WORKING LOCALLY
  // const data = JSON.parse(window.localStorage.getItem('recipeDetails'));
  // return data;

  // WORKING WITH THE API
  const res = await fetch(`http://localhost:3000/api/v1/recipeDetails/${id}`);
  const data = await res.json();
  state.currentRecipe = data;
  updateLocalStorageCurrentRecipe();

  // BEFORE WORKING LOCALLY
  window.localStorage.setItem('recipeDetails', JSON.stringify(data));
  return data;
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

  console.log('💥 STATE', state);
};

init();