import View from './view.js';

class HomeView extends View {
  loadingListener() {
    window.addEventListener('load', this.renderHTML.bind(this));
  }

  navigationListener(handler) {
    document.addEventListener('click', e => {
      if (e.target.classList.contains('start')) {
        this._header.classList.remove('hidden');
        this._footer.classList.remove('hidden');
        this._homepage.classList.add('hidden');
        handler('fridge');
      }
    });
  }

  renderHTML() {
    this._homepage.innerHTML = '';
    this._header.classList.add('hidden');
    this._footer.classList.add('hidden');
    this._parentElement.innerHTML = '';
    this._homepage.classList.remove('hidden');

    const markup = `
      <h1 class="homepage__title">like a chef</h1>
      <p>find recipes that use your ingredients</p>
      <p>create a menu</p>
      <p>retrieve an automatically ordered shopping list</p>
      <button class="btn start">Start</button>
    `;

    this._homepage.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new HomeView();
