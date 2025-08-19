window.addEventListener('load', windowLoad);
const header = document.querySelector('.header');
const html = document.documentElement;

function windowLoad() {
  if (992 >= window.innerWidth) {
    document.addEventListener('click', documentActions);
  }
  html.classList.add('loaded');
  scrollActions();
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
if (600 >= window.innerWidth) {
  const sendBtnsToMenu = () => {
    const menu = document.querySelector('.header__menu');
    const menuList = document.querySelector('.header__menu ul');
    const tel = document.querySelector('.actions__tel');
    const btn = document.querySelector('.actions__btn');
    if (menuList && tel) {
      const newLi = document.createElement('li');
      newLi.appendChild(tel);
      menuList.appendChild(newLi);
    }
    if (menu && btn) {
      const newDiv = document.createElement('div');
      newDiv.style.textAlign = 'end';
      newDiv.appendChild(btn);
      menu.appendChild(newDiv);
    }
  };
  sendBtnsToMenu();
}
function scrollActions() {
  window.addEventListener('scroll', scrollAction);

  function scrollAction() {
    header?.classList.toggle('header--scroll', scrollY > header.offsetHeight / 2);
  }
  scrollAction();
}
