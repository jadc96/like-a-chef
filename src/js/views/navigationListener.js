export default function navigationListener(handler) {
  // "handler" is handleNavigation

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('navbar__item')) {
      // Handling click on navbar links
      handler(e.target.dataset.link);
    } else if (e.target.classList.contains('header__logo')) {
      // Handling click on navbar logo
      handler('welcome');
    }
  });
}
