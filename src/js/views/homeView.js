import View from './view.js';

class HomeView extends View {
  loadingListener() {
    window.addEventListener('load', this.renderHTML.bind(this));
  }

  navigationListener(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (e.target.classList.contains('start')) {
        handler('fridge');
      }
    });
  }

  renderHTML() {
    const markup = `
      <div class="home-content">
        <h1>managing meals and groceries</h1>
        <h2>the easy way</h2>
        <button class="btn start">Get started!</button>
      </div>
    `;

    this._clearMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    this._clearHighlightedNavLink();
  }
}

export default new HomeView();
