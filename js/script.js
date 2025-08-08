window.addEventListener('load', windowLoad);
const html = document.documentElement;

function windowLoad() {
  if (992 >= window.innerWidth) {
    document.addEventListener('click', documentActions);
  }
  html.classList.add('loaded');
}
function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest('.icon-menu')) {
    html.classList.toggle('menu-open');
  }
  targetElement.closest('.menu__link') && html.classList.contains('menu-open')
    ? html.classList.remove('menu-open')
    : null;
}
