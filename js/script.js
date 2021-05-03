//slider

$('.section_block-slider').slick({
	slidesToShow: 5,
	infinite: false,
	slidesToScroll: 1,
	nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',

	responsive: [
		{
			breakpoint: 1218,
			settings: {
				slidesToShow: 4,
			}
		},

		{
			breakpoint: 950,
			settings: {
				slidesToShow: 3,
			}
		},

		{
			breakpoint: 756,
			settings: {
				slidesToShow: 2,
			}
		},

		{
			breakpoint: 556,
			settings: {
				slidesToShow: 1,
			}
		},



	]


});


//popup 

const popup_link = document.querySelectorAll('.popup_link');
const popup_close = document.querySelectorAll('.popup_close');
const body = document.querySelector('body');
const lockPadding = document.querySelector('.lock-padding');



let unlock = true;

const timeout = 800;




for (let i = 0; i < popup_link.length; i++) {
	popup_link[i].addEventListener('click', (event) => {
		const popupName = popup_link[i].getAttribute('href').replace('#', '');
		const popupCurent = document.getElementById(popupName);
		popupOpen(popupCurent);
		event.preventDefault();
	});
};


for (let i = 0; i < popup_close.length; i++) {
	popup_close[i].addEventListener('click', (event) => {
		popupClose(popup_close[i].closest('.popup'));
		event.preventDefault();
	});
};



function popupOpen(popupCurent) {
	if (popupCurent && unlock) {
		const popupActive = document.querySelector('.popup.open');

		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodylock();
		}


		popupCurent.classList.add('open');
		popupCurent.addEventListener('click', (event) => {
			if (!event.target.closest('.popup_content')) {
				popupClose(event.target.closest('.popup'));
			};
		});
	};
}


function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');

		if (doUnlock) {
			bodyUnlock();
			console.log('Истина');
		};
	};
};


function bodylock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.popup').offsetWidth + 'px'; //Получили ширину scrolla

	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');


	console.log(lockPaddingValue)
};


function bodyUnlock() {
	setTimeout(function () {
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout)
};





//burger

const header_contentBurger = document.querySelector('.header_content-burger');
const header_contentBurgerItems = document.querySelector('.header_content-burgerItems');
const header_contentBurgerItems1 = document.querySelector('.header_content-burgerItems1');
const header_contentBurgerItems2 = document.querySelector('.header_content-burgerItems2');
const header_contentMenu = document.querySelector('.header_content-menu');


header_contentBurger.addEventListener('click', burger);

function burger() {
	header_contentBurgerItems.classList.toggle('open');
	header_contentBurgerItems1.classList.toggle('open');
	header_contentBurgerItems2.classList.toggle('open');
	header_contentMenu.classList.toggle('open');
};


//якорь

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function (event) {
		event.preventDefault();

		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	});
};


