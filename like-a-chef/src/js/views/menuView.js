import View from './view.js';
import { ARROW_LEFT, ARROW_RIGHT } from '../config.js';

class MenuView extends View {
  displayRecipeListener(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (
        e.target.closest('li')?.classList.contains('menu__recipe') &&
        e.target.tagName !== 'BUTTON'
      ) {
        handler(e.target.closest('li').dataset.item);
      }
    });
  }

  deleteListener(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (e.target.classList.contains('delete-recipe')) {
        handler(+e.target.value);
      }
    });
  }

  removeRecipe(id) {
    document.querySelector(`[data-item="${id}"]`).remove();
  }

  /////////////////// LINKS ///////////////////

  navigationListener(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (e.target.closest('div')?.classList.contains('go-to-recipes')) {
        handler('recipes');
      } else if (
        e.target.closest('div')?.classList.contains('go-to-shopping')
      ) {
        handler('shopping');
      }
    });
  }

  /////////////////// RENDER HTML ///////////////////

  renderHTML(recipes) {
    const list = recipes
      .map(recipe => {
        return `
        <li class="recipe menu__recipe" data-item="${recipe.id}">
          <img class="recipe__image" src="${recipe.image}" alt="${recipe.title}">
          <p>${recipe.title}</p>
          <button class="btn delete-recipe" value="${recipe.id}">Delete</button>
        </li>
      `;
      })
      .join('');

    const markup = `
    <section class="banner">
      <h3>Your menu</h3>
      <p>&nbsp/ print it</p>
    </section>

    <div class="search">
      <div class="nav__btn go-to-recipes">
        ${ARROW_LEFT}
        <p>Back to recipes</p>
      </div>
      <div class="nav__btn go-to-shopping">
        <p>See shopping list</p>
        ${ARROW_RIGHT}
      </div>
    </div>

    <div class="menu-content">
      ${
        list.length > 0
          ? `<ul class="recipes-list">${list}</ul>`
          : "<p>You don't have any recipes in your menu yet</p>"
      }
    </div>
    `;

    this._clearMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    this._clearHighlightedNavLink();
    this._highlightCurrentPageNavLink(3);
  }
}

export default new MenuView();
