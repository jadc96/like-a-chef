import { ARROW_LEFT } from '../config.js';
import View from './view.js';
import { jsPDF } from 'jspdf';

class ShoppingViews extends View {
  generatePdfListener(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (e.target.closest('div')?.classList.contains('pdf')) {
        handler();
      }
    });
  }

  _regroupeByAisle(ingredients) {
    return ingredients.reduce((acc, item) => {
      const { aisle } = item;
      if (!acc[aisle]) {
        acc[aisle] = [];
      }
      acc[aisle].push(item);
      return acc;
    }, {});
  }

  generatePDF(ingredients) {
    const groups = this._regroupeByAisle(ingredients);

    // Create a string with the list of ingredients
    const ingList = Object.entries(groups)
      .map(([aisle, ingredients]) => {
        const list = ingredients
          .map(
            ing =>
              `· ${
                ing.name[0].toUpperCase() + ing.name.slice(1).toLowerCase()
              } (${ing.amount} ${ing.unit})`
          )
          .join('\n\n');
        return `${aisle.toUpperCase()}\n\n${list}`;
      })
      .join('\n\n');

    const content = `LIKE A CHEF - Shopping List\n===========================\n\n\n${ingList}`;

    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(`${content}`, 35, 25);
    doc.save('shopping-list.pdf');
  }

  /////////////////// LINKS ///////////////////

  navigationListener(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (e.target.closest('div').classList.contains('go-to-menu')) {
        handler('menu');
      }
    });
  }

  /////////////////// RENDER HTML ///////////////////

  renderHTML(data) {
    const groups = this._regroupeByAisle(data);

    const ingList = Object.entries(groups)
      .map(([aisle, ingredients]) => {
        const list = ingredients
          .map(
            ing =>
              `
            <div class="shopping-item" data-item="${ing.name}">
              <div class="shopping__image">
                <img src="https://spoonacular.com/cdn/ingredients_100x100/${
                  ing.image
                }" alt="${ing.name}"/>
                <p>${
                  ing.name[0].toUpperCase() + ing.name.slice(1).toLowerCase()
                }</p>
              </div>
              <div class="shopping__amount">
                <p>${ing.amount} ${ing.unit}</p>
              </div>
              <div class="shopping__aisle">
                <p>${ing.aisle}</p>
              </div>
            </div>
            <hr />
            `
          )
          .join('');
        return `<h3 class="aisle">${aisle.toUpperCase()}</h3><hr />${list}`;
      })
      .join('');

    const markup = `
      <section class="banner">
        <h3>My shopping list</h3>
        <p>&nbsp/ every thing you need</p>
      </section>

      <div class="search">
        <div class="nav__btn go-to-menu">
          ${ARROW_LEFT}
          <p>Back to menu</p>
        </div>
        <div class="nav__btn pdf">
          <p>Print shopping list!</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16"> <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/> <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/> </svg>
        </div>
      </div>

      <div class="shopping-list">
        ${ingList}
      </div>
    `;

    this._clearMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    this._clearHighlightedNavLink();
    this._highlightCurrentPageNavLink(4);
  }
}

export default new ShoppingViews();
