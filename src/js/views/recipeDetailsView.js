import View from './view.js';
import { CLOCK, FORK_KNIFE, LIKE, RED_CROSS, GREEN_CHECK } from '../config.js';

class RecipeDetailsView extends View {
  listenAddToMenu(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (e.target.classList.contains('add-menu')) {
        handler(+e.target.value);
      }
    });
  }

  // Back to recipes or menu
  listenBackToList(handler) {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.querySelector('.back')) {
        handler(document.querySelector('.back').value);
      }
    });

    this._parentElement.addEventListener('click', function (e) {
      if (e.target.closest('button')?.classList.contains('back')) {
        this.innerHTML = '';
        console.log(e.target.closest('button').value);
        handler(e.target.closest('button').value);
      }
    });
  }

  renderHTML(recipe, origin) {
    const ingredients = recipe.extendedIngredients
      .map(
        el =>
          `<li>
              <img src="https://spoonacular.com/cdn/ingredients_100x100/${el.image}" alt="${el.name}" />
              <p>${el.original}</p>
            </li>`
      )
      .join('');

    const instructions = recipe.analyzedInstructions[0]
      ? recipe.analyzedInstructions[0].steps
          .map(el => {
            return `
        <li>
          <p>Step ${el.number} - ${el.step}</p>
        </li>
        `;
          })
          .join('')
      : '<p>No instructions given for this recipe...</p>';

    // prettier-ignore
    const markup = `
      <div class="recipe-details">
        <button type="button" class="back" value="${origin}">${RED_CROSS}</button>


        <div class="recipe-details__img">
          <div>
            <h1>${recipe.title}</h1>
            <div class="image">
              <img src="${recipe.image}" alt="${recipe.title}" />
            </div>
            <div class="main">
              <p class="time">${CLOCK} ${recipe.readyInMinutes} minutes</p>
              <p class="servings">${FORK_KNIFE} ${recipe.servings}</p>
              <p class="likes">${LIKE} ${recipe.aggregateLikes}</p>
              <p class="source">Source:
              <a href="${recipe.sourceUrl}" target="_blank">${recipe.sourceName}</a>
              </p>
            </div>
          </div>

          <div class="recipe-details__description">
            <div class="health">
              <h3>Health</h3>
              <div><p>health score: ${recipe.healthScore} </p>${recipe.healthScore >= 50 ? GREEN_CHECK : RED_CROSS}</div>
              <div><p>vegan </p>${recipe.vegan ? GREEN_CHECK : RED_CROSS}</div>
              <div><p>vegetarian </p>${recipe.vegetarian ? GREEN_CHECK : RED_CROSS}</div>
              <div><p>gluten free </p>${recipe.glutenFree ? GREEN_CHECK : RED_CROSS}</div>
              <div><p>dairy free </p>${recipe.dairyFree ? GREEN_CHECK : RED_CROSS}</div>
            </div>
            <div class="summary">
              <h3>Summary</h3>
              <p>${recipe.summary}</p>
            </div>
          </div>
        </div>

        ${origin === 'menu' ? '' : `<button type="button" value="${recipe.id}" class="btn add-menu">Add to menu</button>`}

        <h4 class="recipe-details__ingredients">Ingredients</h4>
        <ul class="recipe-details__ingredients-list">${ingredients}</ul>

        <h4 class="recipe-details__instructions">Instructions</h4>
        <ul class="recipe-details__instructions-text">${instructions}</ul>
      </div>
      `;

    this._clearMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    window.scrollTo(0, 0);
  }
}

export default new RecipeDetailsView();
