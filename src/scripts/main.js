const printBtn = document.querySelector('.article__print');

(function showMenu() {
  const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
  const menu = document.querySelector('#menu');

  mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('mobile-menu-close');
    menu.classList.toggle('mobile-menu-show');
  });
})();

if(printBtn) {
	printBtn.addEventListener('click', function() {
		window.print();
	});
}
