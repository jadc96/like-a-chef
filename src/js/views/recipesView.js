import View from './view.js';
import {
  ARROW_LEFT,
  ARROW_RIGHT,
  CHEVRON_DOWN,
  CHEVRON_UP,
} from '../config.js';

class RecipesView extends View {
  _progressbarSearchRecipes = document.querySelector(
    '.progressbar__search-recipes'
  );
  _progressbarBar = document.querySelector('.bar');

  //////////////////// SEARCH RECIPES ////////////////////

  tabClickListener() {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('disabled')) {
          e.target
            .closest('div')
            .querySelectorAll('h3')
            .forEach(title => title.classList.toggle('disabled'));
          this._parentElement
            .querySelector('.search-by-name')
            .classList.toggle('hidden');
          this._parentElement
            .querySelector('.search-by-ing')
            .classList.toggle('hidden');
        }
      }.bind(this)
    );
  }

  searchListener(handler) {
    // Handle click on 'Use only my ingredients' button
    this._parentElement.addEventListener('click', function (e) {
      if (e.target.classList.contains('only-my-ing')) {
        handler(true);
      }
    });

    // Handle click on 'Search' button
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!e.target.closest('form').classList.contains('recipe-search')) return;

      // Retrieve checked diets
      const diets = this.querySelectorAll('.recipe-search__diet');
      const dietsList = Array.from(diets)
        .filter(el => el.checked)
        .map(el => '' + el.nextElementSibling.textContent.toLocaleLowerCase())
        .join(',');

      // Retrieve checked intolerances
      const intolerances = this.querySelectorAll('.recipe-search__intolerance');
      const intolerancesList = Array.from(intolerances)
        .filter(el => el.checked)
        .map(el => '' + el.nextElementSibling.textContent.toLocaleLowerCase())
        .join(',');

      // Send query and data to controller
      const input = e.target.querySelector('.recipe-search__field');
      handler(false, input.value, dietsList, intolerancesList);
    });
  }

  advancedSearchListener() {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        // Display or hide buttons for options
        if (e.target.classList.contains('display-options')) {
          this._parentElement
            .querySelectorAll('.options')
            .forEach(option => option.classList.toggle('hidden'));
        }

        // Display or hide dropdown for a specific option
        if (e.target.closest('div')?.classList.contains('dropdown-btn')) {
          const div = e.target.closest('div');

          if (div.querySelector('.bi-chevron-down')) {
            div.removeChild(div.lastChild);
            div.insertAdjacentHTML('beforeend', CHEVRON_UP);
          } else if (div.querySelector('.bi-chevron-up')) {
            div.removeChild(div.lastChild);
            div.insertAdjacentHTML('beforeend', CHEVRON_DOWN);
          }

          this._parentElement
            .querySelector(`.recipe-search__${div.dataset.type}`)
            .classList.toggle('hidden');
        }

        // Check or uncheck checkbox
        if (
          e.target.closest('li')?.classList.contains('option') &&
          e.target.tagName !== 'INPUT'
        ) {
          const div = e.target.closest('li');
          div.querySelector('input').checked =
            !div.querySelector('input').checked;
        }
      }.bind(this)
    );

    document.addEventListener(
      'keydown',
      function (e) {
        if (e.key === 'Escape') {
          console.log('ok');
          this._parentElement
            .querySelectorAll('.dropdown-list')
            .forEach(list => list.classList.add('hidden'));
          this._parentElement.querySelectorAll('.dropdown-btn').forEach(btn => {
            btn.removeChild(btn.lastChild);
            btn.insertAdjacentHTML('beforeend', CHEVRON_DOWN);
          });
        }
      }.bind(this)
    );
  }

  _clearInputFields() {
    const input = this._parentElement.querySelector('.recipe-search__field');
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    input.value = '';
    checkboxes.forEach(el => {
      el.checked = false;
    });
  }

  _clearResultsList() {
    const recipesList = this._parentElement.querySelector('.recipes-list');
    recipesList.innerHTML = '';
  }

  displayRecipes(data) {
    console.log('display recipes', data);
    const recipesList = this._parentElement.querySelector('.recipes-list');
    this._clearInputFields();
    this._clearResultsList();

    let list = data
      .map(el => {
        const usedIngredients = data[0].hasOwnProperty('usedIngredientCount')
          ? `<p>Ingredients used: ${el.usedIngredientCount}/
          ${el.usedIngredientCount + el.unusedIngredients.length}</p>
          <p>New ingredients needed: ${el.missedIngredientCount}</p>`
          : '';

        return `
        <li class="recipe searched__recipe" data-item="${el.id}">
          <img class="recipe__image" src="${el.image}" alt="${el.title}" />
          <p class="">${el.title}</p>
          ${usedIngredients}
        </li>
        `;
      })
      .join('');

    if (data.length === 0) {
      list = `<p class="recipe__title">No recipes found</p>`;
    }

    recipesList.insertAdjacentHTML('afterbegin', list);
  }

  displayRecipeListener(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (
        e.target.closest('li')?.classList.contains('searched__recipe') &&
        e.target.tagName !== 'BUTTON'
      ) {
        handler(e.target.closest('li').dataset.item);
      }
    });
  }

  /////////////////// LINKS ///////////////////

  navigationListener(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (e.target.closest('div')?.classList.contains('go-to-fridge')) {
        handler('fridge');
      } else if (e.target.closest('div')?.classList.contains('go-to-menu')) {
        handler('menu');
      }
    });
  }

  ///////////////////////// RENDERING BASIC HTML /////////////////////////

  renderHTML() {
    // prettier-ignore
    const intolerances = [
      'Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Sulfite', 'Tree Nut', 'Wheat',
    ];

    const intolerancesList = intolerances
      .map(
        el => `
        <li class="option">
          <input type="checkbox" class="recipe-search__intolerance" id="${el.toLocaleLowerCase()}" />
          <label for="recipe-search__intolerances" class="recipe-search__label">${el}</label>
        </li>
      `
      )
      .join(' ');

    const markup = `
      <section class="banner">
        <h3>Search recipes</h3>
        <p>&nbsp/ using your ingredients (or not)</p>
      </section>

      <div class="top">
        <div class="nav__btn go-to-fridge">
          ${ARROW_LEFT}
          <p>Back to fridge</p>
        </div>
        <div class="search-area">
          <div class="tabs">
            <h3 class="name-search">Search by name</h3>
            <h3 class="ing-search disabled">Search by ingredients</h3>
          </div>
          <div class="search-by-name">
            <form class="recipe-search">
              <input
                type="text"
                class="recipe-search__field"
                placeholder="Search for a recipe"
              />
              <button class="btn search__btn">
                <span>Search recipe</span>
              </button>

              <p class="display-options">Advanced search...</p>

              <div class="advanced-search">
                <div class="advanced-search__diets options hidden">
                  <div class="dropdown-btn" data-type="diets"><p>Specify diet</p>${CHEVRON_DOWN}</div>
                  <ul class="recipe-search__diets dropdown-list hidden">
                    <li class="option"><input type="checkbox" class="recipe-search__diet" />
                    <label for="recipe-search__vegetarian" class="recipe-search__label">Vegetarian</label></li>

                    <li class="option"><input type="checkbox" class="recipe-search__diet" />
                    <label for="recipe-search__gluten-free" class="recipe-search__label">Gluten-free</label></li>

                    <li class="option"><input type="checkbox" class="recipe-search__diet" />
                    <label for="recipe-search__vegan" class="recipe-search__label">Vegan</label></li>
                  </ul>
                </div>

                <div class="advanced-search__intolerances options hidden">
                  <div class="dropdown-btn" data-type="intolerances"><p>Specify intolerance</p>${CHEVRON_DOWN}</div>
                  <ul class="recipe-search__intolerances dropdown-list hidden">
                    ${intolerancesList}
                  </ul>
                </div>
              </div>
            </form>
          </div>

          <div class="search-by-ing hidden">
            <p>Search recipes <input type="button" class="btn only-my-ing" value="using my ingredients" /></p>
          </div>
        </div>
        <div class="nav__btn go-to-menu">
          <p>See menu</p>
          ${ARROW_RIGHT}
        </div>
      </div>

      <div class="recipes-content">
        <div class="recipes-list"></div>
      </div>
    `;

    this._clearMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    this._clearHighlightedNavLink();
    this._highlightCurrentPageNavLink(2);
  }
}

export default new RecipesView();
