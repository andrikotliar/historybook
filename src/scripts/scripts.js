const menuButton = document.getElementById('menuButton');
const navigationWrapper = document.getElementById('navigationWrapper');
const upButton = document.getElementById('upButton');

const VISIBLE_CLASS_NAME = 'header-navigation-wrapper-visible';

if (menuButton && navigationWrapper) {
  menuButton.addEventListener('click', () => {
    navigationWrapper.classList.toggle(VISIBLE_CLASS_NAME);
  });
}

if (upButton) {
  upButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
