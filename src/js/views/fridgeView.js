import {
  DONE_TYPING_INTERVAL,
  TRASH,
  ARROW_LEFT,
  ARROW_RIGHT,
} from '../config.js';
import View from './view.js';

class Fridge extends View {
  _progressbarBar = document.querySelector('.bar');

  ///////////// INGREDIENTS AUTOCOMPLETE AND SUGGESTIONS LIST /////////////

  autocompleteListener(handler) {
    let timer, previousQuery, query;

    this._parentElement.addEventListener(
      'keyup',
      async function (e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') return;
        // Clearing timeout to avoid too many API calls
        clearTimeout(timer);

        timer = setTimeout(async function () {
          if (e.target.classList.contains('searchbar__field')) {
            document.querySelector('.autocomplete-list');
            query = e.target.value;

            if (query === '') return;

            if (query === previousQuery) return;

            handler(query);
            previousQuery = query;
          }
        }, DONE_TYPING_INTERVAL);
      }.bind(this)
    );
  }

  displaySuggestionsList(data) {
    const autocompleteList = document.querySelector('.autocomplete-list');

    const list = data
      .map(el => {
        return `<li class="suggestion"><button class="suggestion">${el.name}</button></li>`;
      })
      .join('');

    this._clearAutocompleteList();
    autocompleteList.insertAdjacentHTML('afterbegin', list);
  }

  displayErrorAutocomplete() {
    const autocompleteList = document.querySelector('.autocomplete-list');

    const message = `<li><button class="suggestion">No ingredient found</li>`;
    this._clearAutocompleteList();
    autocompleteList.insertAdjacentHTML('afterbegin', message);
  }

  quitAutocompleteListener() {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        if (!e.target.classList.contains('suggestion')) {
          this._clearAutocompleteList();
        }
      }.bind(this)
    );
  }

  _clearAutocompleteList() {
    const autocompleteList = document.querySelector('.autocomplete-list');
    if (autocompleteList === null) return;
    autocompleteList.innerHTML = '';
  }

  //////////////// SELECTING A SUGGESTION AND SUBMITTING FORM ////////////////

  suggestionsListener() {
    let highlightedIndex = -1;

    this._parentElement.addEventListener(
      'keydown',
      async function (e) {
        const input = document.querySelector('.searchbar__field');
        const autocompleteList = document.querySelector('.autocomplete-list');

        // Clearing the list when new results are fetched by 'Escape' or 'Backspace' keys
        if (e.key === 'Escape' || e.key === 'Backspace')
          this._clearAutocompleteList();

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          highlightedIndex++;
        }

        if (e.key === 'ArrowUp') {
          e.preventDefault();
          highlightedIndex--;
        }

        // Avoiding to highlight the list when pressing other keys
        if (e.keyCode !== 38 && e.keyCode !== 40) return;

        // Handle exiting the list
        if (highlightedIndex >= autocompleteList.children.length)
          highlightedIndex = 0;

        if (highlightedIndex < 0)
          highlightedIndex = autocompleteList.children.length - 1;

        // Highlight the selected item and update the input value
        autocompleteList.querySelectorAll('li').forEach((item, index) => {
          if (index === highlightedIndex) {
            item.classList.add('highlighted');
            input.value = item.textContent.trim();
          } else {
            item.classList.remove('highlighted');
          }
        });
      }.bind(this)
    );
  }

  submitListener(handler) {
    // Handle click on a suggestion (not a real submit event)
    this._parentElement.addEventListener(
      'click',
      function (e) {
        const input = document.querySelector('.searchbar__field');
        if (e.target.classList.contains('suggestion')) {
          input.value = e.target.textContent.trim();
          handler(input.value);
          input.value = '';
          this._clearAutocompleteList();
        }
      }.bind(this)
    );

    // Handle submit by pressing 'Enter' key
    this._parentElement.addEventListener(
      'submit',
      function (e) {
        const input = this._parentElement.querySelector('.searchbar__field');

        if (!input) return;

        if (e.target.tagName.toLowerCase() === 'form') {
          e.preventDefault();
          if (input.value === '') return;
          handler(input.value);
          input.value = '';
          this._clearAutocompleteList();
        }
      }.bind(this)
    );
  }

  selectCategory(ing) {
    // prettier-ignore
    const categories = [
      'vegetable', 'fruit', 'meat', 'fish', 'drink', 'grain', 'spice',
    ];

    const ingCategory = categories.find(category =>
      ing.categoryPath.includes(category)
    );
    const currentCategory = [...document.querySelector('.active').classList];
    if (ingCategory === currentCategory[1]) return ingCategory;
    return 'all';
  }

  checkIngredientFormat(data, fridgeIngredients) {
    // Check if the ingredient is already in the list
    // NB : sometimes the API autocomplete returns the singular form of the ingredient, while the object name has the plural form, e.g. 'apple' instead of 'apples', hence the 's' or 'es' added to data
    if (
      fridgeIngredients.some(
        el =>
          el.name === data || el.name === data + 's' || el.name === data + 'es'
      )
    ) {
      console.log('Ingredient already in the list');
      return;
    }
    return true;
  }

  ///////////////// DISPLAYING NEW INGREDIENT /////////////////

  displayIngredient(data) {
    const list = document.querySelector('.cards-list');
    const markup = `
    <div class="card" data-item="${data.name}">
      <div class="card__image">
        <img src="https://spoonacular.com/cdn/ingredients_250x250/${
          data.image
        }" alt="${data.name}"/>
      </div>
      <div class="card__info">
        <p>${data.name[0].toUpperCase() + data.name.slice(1).toLowerCase()}</p>
        <button class="delete-ing" value="${data.id}">
          ${TRASH}
        </button>
      </div>
    </div>
    `;
    list.insertAdjacentHTML('afterbegin', markup);
  }

  updateNumIngredients() {
    const num = this._parentElement.querySelectorAll('.card').length;
    if (num === 0) return;
    const string = num > 1 ? `${num} products found` : `${num} product found`;
    this._parentElement.querySelector(
      '.num-ingredients'
    ).innerHTML = `${string}`;
  }

  sortListener(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (e.target.classList.contains('sort')) {
        let text = e.target.innerHTML;
        if (text.endsWith('s')) text = text.substring(0, text.length - 1);
        handler(text.toLowerCase());
      }
    });
  }

  highlightCategory(category) {
    document
      .querySelectorAll('.sort')
      .forEach(item => item.classList.remove('active'));
    document.querySelector(`.${category}`).classList.add('active');
  }

  deleteIngredientListener(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (e.target.closest('button')?.classList.contains('delete-ing')) {
        handler(+e.target.closest('button').value);
      }
    });
  }

  removeIngredient(name) {
    document.querySelector(`[data-item="${name}"]`).remove();
  }

  /////////////////// LINKS ///////////////////

  navigationListener(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (e.target.closest('div').classList.contains('go-to-home')) {
        handler('home');
      } else if (e.target.closest('div').classList.contains('go-to-recipes')) {
        handler('recipes');
      }
    });
  }

  /////////////////// RENDERING BASIC HTML ///////////////////

  renderHTML() {
    const markup = `
    <section class="banner">
      <h3>My fridge</h3>
      <p>&nbsp/ fill it with ingredients</p>
    </section>

    <div class="search">
      <div class="nav__btn go-to-home">
        ${ARROW_LEFT}
        <p>Home</p>
      </div>

      <form class="searchbar">
        <input
          type="text"
          class="searchbar__field"
          placeholder="Search for an ingredient"
        />
        <button class="btn search__btn"><span>Search</span></button>
        <ul class="autocomplete-list"></ul>
      </form>

      <div class="nav__btn go-to-recipes">
        <p>Look for recipes</p>
        ${ARROW_RIGHT}
      </div>
    </div>

    <div class="fridge-content">
      <div class="menu">
        <h4>Main categories</h4>
        <div class="categories">
          <p class="sort all active">All</p>
          <p class="sort vegetable">Vegetables</p>
          <p class="sort fruit">Fruits</p>
          <p class="sort meat">Meat</p>
          <p class="sort fish">Fish</p>
          <p class="sort drink">Drinks</p>
          <p class="sort grain">Grains</p>
          <p class="sort spice">Spices</p>
          <p class="sort other">Others</p>
        </div>
      </div>

      <div class="results">
        <div class="layout">
          <hr class="line">
          <p class="num-ingredients">0 product found</p>
          <hr class="line">
        </div>
        <div class="cards-list"></div>
      </div>

    </div>
    `;

    this._clearMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    this._clearHighlightedNavLink();
    this._highlightCurrentPageNavLink(1);
  }
}

export default new Fridge();
