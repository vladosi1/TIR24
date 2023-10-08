$(".owl-carousel").owlCarousel({
	autoplay: false,
	items: 6,
	dots: true, // Заменено bullets на dots
	nav: true,
	loop: true,
	margin: 10,
	responsive: {
		0: {
			items: 1,
		 },
		 320: {
			items: 2,
		 },
		 600: {
			items: 3,
		 },
		 768: {
			items: 3,
		 },
		 992: {
			items: 5,
		 },
		 1200: {
			items: 6,
		 },
	}
});

 



// let menuBtn = document.querySelector('.menu-btn');
// let menu = document.querySelector('.menu');

// menuBtn.addEventListener('click', function(){
//     // Переключение класса 'active' для элементов menuBtn и активного меню
//     menuBtn.classList.toggle('active');
//     menu.classList.toggle('active');
// });



let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let mobileCloseBtn = document.getElementById('mobile-close');

// Функция для переключения класса 'active' для menuBtn и menu
function toggleMenu() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
}

// Обработчик события для кнопки меню
menuBtn.addEventListener('click', toggleMenu);

// Обработчик события для кнопки закрытия мобильного меню
mobileCloseBtn.addEventListener('click', toggleMenu);

// Обработчик события для клика по документу
document.addEventListener('click', function (event) {
    // Проверка, что клик произошел вне меню и кнопки меню
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        // Закрыть меню
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});


//

// document.addEventListener("DOMContentLoaded", function() {
// 	var tabs = document.querySelectorAll("#pills-tab, #pills-tab2, #pills-tab3");

// 	tabs.forEach(function(tab) {
// 		 var hammer = new Hammer(tab);
// 		 hammer.on("swipe", function(event) {
// 			  var scrollStep = 500; // Или другое значение, чтобы прокручивать
// 			  var scrollAmount = event.direction === Hammer.DIRECTION_LEFT ? scrollStep : -scrollStep;

// 			  // Добавьте анимацию прокрутки
// 			  tab.scrollBy({
// 					left: scrollAmount,
// 					behavior: "smooth" // Плавная анимация
// 			  });
// 		 });
// 	});
// });

$(document).ready(function () {
	// Инициализируем FancyBox
	$('[data-fancybox]').fancybox({
		 touch: false, // Отключаем поддержку сенсорных устройств для предотвращения конфликтов с Owl Carousel
	});

	// Обработчик событий для кнопок "Купить"
	$('.btn__buy-mobile').click(function (e) {
		 e.preventDefault();

		 // Открываем всплывающее окно с идентификатором "popup"
		 $.fancybox.open({
			  src: '#popup',
			  type: 'inline',
			  autoFocus: false
		 });
	});
});