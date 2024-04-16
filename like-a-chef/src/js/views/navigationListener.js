// Handle click on nav link or logo
export default function navigationListener(handler) {
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('navbar__item')) {
      handler(e.target.dataset.link);
    }
  });
}
