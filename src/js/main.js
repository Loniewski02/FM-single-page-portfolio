const burgerBtn = document.querySelector('.nav__burger-btn');
const navItems = document.querySelector('.nav__items');

const handleBurgerBtn = () => {
	const burgerImgs = burgerBtn.querySelectorAll('img');
	burgerImgs.forEach(img => {
		img.classList.toggle('active');
	});
};

const handleNav = () => {
	handleBurgerBtn();
	navItems.classList.toggle('nav__items--active');
	const allNavItems = navItems.querySelectorAll('.nav__item');
	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			handleBurgerBtn();
			navItems.classList.remove('nav__items--active');
		})
	);
};

burgerBtn.addEventListener('click', handleNav);
