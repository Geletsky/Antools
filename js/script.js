const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

const menuLink = document.querySelectorAll('.menu__link')[1];
if (menuLink) {
	const subList = document.querySelector('.sub-menu__list');
	menuLink.addEventListener("click", function (e) {
		subList.classList.toggle('_active');
	});
}

const menuArrow = document.querySelector('.menu__arrow');
if (menuArrow) {
	const subList = document.querySelector('.sub-menu__list');
	menuArrow.addEventListener("click", function (e) {
		subList.classList.toggle('_active');
	});
}

const loadMore = document.querySelector('.popular-tools__button ');
if (loadMore) {
	const cardsMore = document.querySelector('.cards-more');
	loadMore.addEventListener("click", function(e) {
		cardsMore.classList.toggle('_active');
		loadMore.classList.toggle('_active')
	})
}


const openPopupLogin = document.querySelector('.authn-login__link');
const openPopupSign = document.querySelector('.authn-sign__button');
const openPopupSignLink = document.querySelector('.popup__text-sign');
const openPopupPass = document.querySelector('.popup__text-forgot');
const closePopupLogin = document.querySelector('.popup__icon-login');
const closePopupSign = document.querySelector('.popup__icon-sign');
const closePopupPass = document.querySelector('.popup__icon-pass');
const popupLogin = document.querySelector('.popup-login');
const popupSign = document.querySelector('.popup-sign');
const popupPass = document.querySelector('.popup-pass');
openPopupLogin.addEventListener("click", function(e) {
	e.preventDefault();
	popupLogin.classList.toggle('_active');
	document.body.classList.toggle('_lock');
});

openPopupSign.addEventListener("click", function(e) {
	e.preventDefault();
	popupSign.classList.toggle('_active');
	document.body.classList.toggle('_lock');
});

openPopupPass.addEventListener("click", function(e) {
	e.preventDefault();
	popupPass.classList.toggle('_active');
	popupLogin.classList.remove('_active');
	document.body.classList.remove('_lock'); 
	document.body.classList.toggle('_lock');
});

openPopupSignLink.addEventListener("click", function(e) {
	e.preventDefault();
	popupSign.classList.toggle('_active');
	popupLogin.classList.remove('_active');
	document.body.classList.remove('_lock'); 
	document.body.classList.toggle('_lock'); 
});

closePopupLogin.addEventListener("click", function(e) {
	popupLogin.classList.remove('_active');
	document.body.classList.remove('_lock'); 
});

closePopupPass.addEventListener("click", function(e) {
	popupPass.classList.remove('_active');
	document.body.classList.remove('_lock'); 
});

closePopupSign.addEventListener("click", function(e) {
	popupSign.classList.remove('_active');
	document.body.classList.remove('_lock'); 
});



const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',	

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
 });