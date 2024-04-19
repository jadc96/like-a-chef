export default class View {
  _header = document.querySelector('.header');
  _footer = document.querySelector('footer');
  _homepage = document.querySelector('.homepage');
  _parentElement = document.querySelector('.page-content');

  _clearMarkup() {
    this._parentElement.innerHTML = '';
  }

  _clearHighlightedNavLink() {
    const navItems = document.querySelectorAll('.navbar__item');
    navItems.forEach(item => item.classList.remove('current-page'));
  }

  _highlightCurrentPageNavLink(NavLinkNumber) {
    document
      .querySelector(`.navbar p:nth-child(${NavLinkNumber})`)
      .classList.add('current-page');
  }
}
